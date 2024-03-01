import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  HashRouter,
  Route,
  RouterProvider,
  Routes,
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
        path: "/cv",
        element: <Cv />,
      },
      {
        path: "/projects",
        element: <div>TEST PROJECTS MAGIQUE</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/">
          <App />
        </Route>
      </Routes>
    </HashRouter>
    {/*     <RouterProvider router={router} /> */}
  </React.StrictMode>
);
