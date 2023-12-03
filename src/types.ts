import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import * as yup from "../node_modules/yup/index";

export interface CustomForm extends HTMLFormElement {
    readonly elements: CustomElements;
  }
  export type AppDispatch = ThunkDispatch<User, unknown, AnyAction>;

  export interface CustomElements extends HTMLFormControlsCollection   {
    name: HTMLInputElement;
    age: HTMLInputElement;
    email: HTMLInputElement;
    password: HTMLInputElement;
    confirmPassword: HTMLInputElement;
    gender: HTMLInputElement;
    termsAccepted: HTMLInputElement;
    picture: HTMLInputElement;
    country: HTMLInputElement;
  }

  export interface User {
    name: string;
    age: number;
    email: string;
    password: string;
    gender: string;
    country: string;
    img: ImageBitmap;
  } 
  export   interface InputType {
    event: React.ChangeEvent<HTMLInputElement>;
    validationName: string
  }
  export interface ValidationResult {
    isValid: boolean;
    message?: string;
  }

  export type ValidationSchema = yup.StringSchema<string> | yup.DateSchema;