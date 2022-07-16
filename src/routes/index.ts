import Details from "../views/Details";
import Home from "../views/Home";

const routes = [
  {
    id: "home",
    url: "",
    Component: Home,
  },
  {
    id: "details",
    url: "/details/:id",
    Component: Details,
  },
];

export default routes;
