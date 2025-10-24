import { createRoot } from "react-dom/client";
import "./index.css";

import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

// routes
import Home from "./pages/home/Page.jsx";
import Services from "./pages/services/Page.jsx";
import Contact from "./pages/contact/Page.jsx";
import Bus from "./pages/bus/Page.jsx";
import Search from "./pages/search/Page.jsx";
// Auth
import Login from "./auth/login/Page.jsx";
import AuthLayout from "./auth/Layout.jsx";
// statics
import Loader from "./pages/static/loading/Page.jsx";
import Error from "./pages/static/error/Page.jsx";
import Layout from "./pages/Layout.jsx";

// styles
import "bootstrap/dist/css/bootstrap.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />}>
      {/* errorElement={<Error />} */}
      {/* Pages */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/bus" element={<Bus />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Route>
      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
