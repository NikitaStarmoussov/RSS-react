import { string, ValidationError } from "yup";
import { ValidationResult, ValidationSchema } from "./types";

export const  emailSchema = string()
.matches(/@/, "Email address must contain a period (@)")
.matches(/\./, "Email address must contain a period (.)")
.matches(/^[^\s]+$/, "Password must not contain leading or trailing whitespace")
.email("Invalid email address(example@gmail.com)")
.min(3)
.required("Email is required");

export const passwordSchema = string()
.min(8, "Password must be at least 8 characters long")
.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
.matches(/[a-z]/, "Password must contain at least one lowercase letter")
.matches(/[0-9]/, "Password must contain at least one digit")
.matches(/^[^\s]+$/, "Password must not contain leading or trailing whitespace")
.matches(/[^A-Za-z0-9]/, "Password must contain at least one special character")
.required("Password is required");


export const nameSchema = string()
  .transform((value) => value.trim())
  .min(1, "At least one character is required in the name")
  .matches(/^[a-zA-Z\s]+$/, "Only Latin letters and spaces are allowed in the name.")
  .test(
    "is-uppercase",
    "The first letter of the name must be uppercase",
    (value) => value !== undefined && /^[A-Z]/.test(value)
  )
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
  import * as yup from "yup";

  export const ageSchema = yup
  .number()
  .positive("Age must be a positive number")
  .integer("Age must be an integer")
  .min(18, "Age must be at least 18")
  .required("Age is required");

  export const genderSchema = yup
  .string()
  .required("Gender is required");

  export const countrySchema = yup
  .string()
  .required("Country is required");

  export const termsAcceptedSchema = yup
  .boolean()
  .oneOf([true], "You must accept the terms and conditions");
  export const sschema = yup.object().shape({
    name: nameSchema,
    age: ageSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
    gender: genderSchema,
    accept: termsAcceptedSchema,
    country: countrySchema
  })

  export const schema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    country: yup.string().required("City is a required field"),
  });