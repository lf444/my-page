import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createHashRouter } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import Cv from "./pages/Cv";
import "./index.css";
import "./i18n.ts";
import ProjectShowCase from "./pages/ProjectShowCase.tsx";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cv",
    element: <Cv />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <ProjectShowCase />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
