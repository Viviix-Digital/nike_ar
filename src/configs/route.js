import { lazy } from "react";

const Home = lazy(() => import("../pages/Scene1"));
const Guide = lazy(() => import("../pages/Scene2"));
const AR = lazy(() => import("../pages/AR"));
const Congratulations = lazy(() => import("../pages/Congratulations"));

export const Pages = {
  Home,
  Guide,
  AR,
  Congratulations,
};

const RouteConfig = {
  Home: {
    path: "/",
  },
  Guide: {
    path: "/guide",
  },
  AR: {
    path: "/ar",
  },
  Congratulations: {
    path: "/congratulations",
  },
};

export default RouteConfig;
