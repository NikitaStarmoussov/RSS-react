
import {
  Routes ,Route,
  Link,
  BrowserRouter,
  Outlet,
  useNavigate
} from "react-router-dom";
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from "./store";
import { FormEvent, useRef } from "react";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { actions } from "./slice";



export interface User {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  country: string;
} 
export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="uncontrolled" element={<Uncontrolled />} />
          <Route path="similar" element={<Similar />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/uncontrolled">Uncontrolled</Link>
          </li>
          <li>
            <Link to="/similar">Similar</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
      </div>)}

     

function Home() {
  const items  = useSelector<ReturnType<typeof store.getState>>((state) => state.search.data);
  console.log(items);
  return <div>
    <h1>User</h1>
    <h2>Name: {(items as User).name}</h2>
    <h2>Age: {(items as User).age}</h2>
    <h2>Email: {(items as User).email}</h2>
    <h2>Password: {(items as User).password}</h2>
    <h2>Gender: {(items as User).gender}</h2>
    <h2>Country: {(items as User).country}</h2>
  </div>
}
interface CustomElements extends HTMLFormControlsCollection   {
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
 
interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}
export type AppDispatch = ThunkDispatch<User, unknown, AnyAction>;
function Uncontrolled() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate()




  const handleSubmit = (event : FormEvent<CustomForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;
    const data = {
      name: target.name.value,
      age: target.age.value,
      email: target.email.value,
      password: target.password.value,
      confirmPassword: target.confirmPassword.value,
      gender: target.gender.value,
      termsAccepted: target.termsAccepted.checked,
      picture: target.picture.value,
      country: target.country.value
    };

    if(target.password.value !== target.confirmPassword.value){
      target.confirmPassword.setCustomValidity("Passwords do not match");
    } else{
      dispatch(actions.changeData(data));
      navigate( "/")
    }

  };
 
  interface InputType {
    event: React.ChangeEvent<HTMLInputElement>;
    validationName: string
  }
  const password = useRef<HTMLInputElement>(null)
  function handleInput({event, validationName}: InputType) {
    const target = event.target
    const res = validation(validationName, target.value);
    
    console.log(res)
    if(res.message){

      target.setCustomValidity(res.message);
    } else {
      target.setCustomValidity("");
    }
    
    return res
  }
 

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required onChange={(event)=>handleInput({event, validationName: "name"})}/>
      <br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" min="0" required onChange={(event)=>handleInput({event, validationName: "age"})}/>
      <br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required onChange={(event)=>handleInput({event, validationName: "email"})}/>
      <br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" ref={password} required onChange={(event)=>handleInput({event, validationName: "password"})}/>
      <br />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" required onChange={(event)=>handleInput({event, validationName: "password2"})}/>
      <br />

      <label>Gender:</label>
      <label htmlFor="male">Male</label>
      <input type="radio" id="male" name="gender" value="male" required />
      <label htmlFor="female">Female</label>
      <input type="radio" id="female" name="gender" value="female" required />
      <br />

      <label>
        <input type="checkbox" name="termsAccepted" required />
        Accept Terms & Conditions
      </label>
      <br />

      <label htmlFor="picture">Upload Picture:</label>
      <input type="file" id="picture" name="picture" accept="image/png, image/jpeg" />
      <br />

      <label htmlFor="country">Country:</label>
      <select id="country" name="country" required>
        <option value="">Select Country</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="Australia">Australia</option>
        <option value="UK">UK</option>
        {/* {countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))} */}
      </select>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

function Similar() {
  return <h2>Users</h2>;
}

function NoPage() {
  return <h2>404 not found</h2>;
}



import * as yup from "../node_modules/yup/index";

export type ValidationSchema = yup.StringSchema<string> | yup.DateSchema;

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}


import {  string, ValidationError } from "yup";


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


function validation(inputName:string, inputValue: string){
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