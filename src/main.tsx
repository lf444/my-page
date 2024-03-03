import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  /*   HashRouter,
  Route, */
  RouterProvider,
  /*   Routes, */
  createHashRouter,
} from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import Cv from "./pages/Cv";
import "./index.css";
import "./i18n.ts";
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/projects",
        element: <div>TEST PROJECTS MAGIQUE</div>,
      },
    ],
  },
  {
    path: "/cv",
    element: <Cv />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
