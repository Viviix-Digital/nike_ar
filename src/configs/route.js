import { lazy } from "react";

const Home = lazy(() => import("../pages/Scene1"));
const Guide = lazy(() => import("../pages/Scene2"));
const AR = lazy(() => import("../pages/AR"));
const Congratulations = lazy(() => import("../pages/Congratulations"));

const Completed = lazy(() => import("../pages/Completed"));
const Information = lazy(() => import("../components/Information"));
const ViewMap = lazy(() => import("../components/ViewMap"));
const Collection = lazy(() => import("../components/Collection"));
const ScoreBox = lazy(() => import("../components/ScoreBox"));

export const Pages = {
  Home,
  Guide,
  AR,
  Congratulations,
};

export const Components = {
  Completed,
  Information,
  ViewMap,
  Collection,
  ScoreBox,
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
