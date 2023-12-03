import { string, ValidationError } from "yup";
import { ValidationResult, ValidationSchema } from "./types";

const  emailSchema = string()
.matches(/@/, "Email address must contain a period (@)")
.matches(/\./, "Email address must contain a period (.)")
.matches(/^[^\s]+$/, "Password must not contain leading or trailing whitespace")
.email("Invalid email address(example@gmail.com)")
.min(3)
.required("Email is required");

const passwordSchema = string()
.min(8, "Password must be at least 8 characters long")
.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
.matches(/[a-z]/, "Password must contain at least one lowercase letter")
.matches(/[0-9]/, "Password must contain at least one digit")
.matches(/^[^\s]+$/, "Password must not contain leading or trailing whitespace")
.matches(/[^A-Za-z0-9]/, "Password must contain at least one special character")
.required("Password is required");


const nameSchema = string()
.transform((value) => value.trim().toUpperCase())
.min(1, "At least one character is required in the name")
.matches(/^[a-zA-Z\s]+$/, "Only Latin letters and spaces are allowed in the name.")
.required("This field is required");

function validatePassword(password: string): ValidationResult {
    try {
      passwordSchema.validateSync(password);
  
      return {
        isValid: true,
      };
    } catch (error: unknown) {
      const err = error as ValidationError;
  
      return {
        isValid: false,
        message: err.message,
      };
    }
  }
  
  function validateEmail(email: string): ValidationResult {
    try {
      emailSchema.validateSync(email);
  
      return {
        isValid: true,
      };
    } catch (error: unknown) {
      const err = error as ValidationError;
  
      return {
        isValid: false,
        message: err.message,
      };
    }
  }

  function validateField(schema: ValidationSchema, value: string | Date): ValidationResult {
    try {
      schema.validateSync(value);
  
      return {
        isValid: true,
      };
    } catch (error: unknown) {
      const err = error as ValidationError;
  
      return {
        isValid: false,
        message: err.message,
      };
    }
  }
  
  function validateName(name: string): ValidationResult {
    return validateField(nameSchema, name);
  }


export function validation(inputName:string, inputValue: string){
    switch(inputName){
      case 'name':
        return validateName(inputValue);
      case 'email':
        return validateEmail(inputValue);
      case 'password':
      return validatePassword(inputValue);
      case 'password2':
      return validatePassword(inputValue);
      default:
      return {
        isValid: true,
  
    }
  }
  }