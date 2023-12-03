
import {
  Routes ,Route,
  Link,
  BrowserRouter,
  Outlet
} from "react-router-dom";
import { Provider, useSelector } from 'react-redux';
import store from "./store";


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

      interface User {
        name: string;
        age: number;
        email: string;
        password: string;
        gender: string;
        country: string;
      } 

function Home() {
  const items  = useSelector<ReturnType<typeof store.getState>>((state) => state.search);
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

function Uncontrolled() {
  return <h2>About</h2>;
}

function Similar() {
  return <h2>Users</h2>;
}

function NoPage() {
  return <h2>404 not found</h2>;
}