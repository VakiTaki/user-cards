import React from "react";
import { useLocation, Link } from "react-router-dom";
import { routes } from "../routes";

function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);
  return (
    <nav className=" flex gap-2 text-sm my-4">
      <Link to="/" className=" hover:opacity-60 transition duration-300">
        Главная
      </Link>
      {paths.map((path, index) => {
        const currentPath = `/${paths.slice(0, index + 1).join("/")}`;
        let matchingRoute = routes.find((route) => route.path === currentPath);
        if (!matchingRoute) {
          matchingRoute = routes[index].children
            ? routes[index].children[0]
            : undefined;
        }
        const breadcrumbTitle = matchingRoute ? matchingRoute.title : path;

        return (
          <div key={path} className=" flex gap-2">
            <span>/</span>
            <Link
              to={currentPath}
              className=" hover:opacity-60 transition duration-300"
            >
              {breadcrumbTitle}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;