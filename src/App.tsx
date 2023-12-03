import {
  Routes ,Route,
  BrowserRouter,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Uncontrolled from "./pages/Uncontrolled";
import Similar from "./pages/Similar";





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



     



 
























