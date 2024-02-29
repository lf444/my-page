import { t } from "i18next";

import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="pl-10 pt-5">
      <h1 className="capitalize font-semibold text-xl	">fabien lartin</h1>
      <ul className="list-disc underline">
        <li>
          <a href="https://twitter.com/wolfmefive" target="_blank">
            {t("Twitter")}
          </a>

          <Link to={`/cv`}>CV</Link>
        </li>

        <li>
          <a href="https://github.com/lf444" target="_blank">
            github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/fabien-lartin" target="_blank">
            linkedin
          </a>
        </li>
        <li>
          <Link to={`/projects`}>project showcase</Link>
        </li>
        <li>lartin.fabien@gmail.com</li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
