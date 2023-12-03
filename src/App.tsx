
import {
  Routes ,Route,
  Link,
  BrowserRouter,
  Outlet
} from "react-router-dom";
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from "./store";
import { FormEvent } from "react";
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
    // Get form values

    dispatch(actions.changeData(data));
    // Do something with the form values
    console.log(data)

   
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" name="age" min="0" required />
      <br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />
      <br />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" required />
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