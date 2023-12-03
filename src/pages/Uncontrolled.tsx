import { FormEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actions } from "../slice";
import store from "../store";
import { AppDispatch, CustomForm, InputType } from "../types";
import { validation } from "../utils";


export default function Uncontrolled() {
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
   
    const countries = useSelector<ReturnType<typeof store.getState>>((state) => state.countries);
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
        
          {(countries as {id: number, name: string}[]).map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <br />
  
        <button type="submit">Submit</button>
      </form>
    );
  }