import { useSelector } from "react-redux";

import store from "../store";
import { User } from "../types";

export default function Home() {
    const items  = useSelector<ReturnType<typeof store.getState>>((state) => state.search.data);

    return <div>
      <h1>User</h1>
      <h2>Name: {(items as User).name}</h2>
      <h2>Age: {(items as User).age}</h2>
      <h2>Email: {(items as User).email}</h2>
      <h2>Password: {(items as User).password}</h2>
      <h2>Gender: {(items as User).gender}</h2>
      <h2>Country: {(items as User).country}</h2>
      <img src={(items as User).img } alt="Uploaded Image" />
    </div>
  }