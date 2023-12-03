import { Link, Outlet } from "react-router-dom";

export default function Layout() {
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