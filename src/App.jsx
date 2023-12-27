import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AR from "./pages/AR";
import Scene1 from "./pages/Scene1";
import Scene2 from "./pages/Scene2";
import RouteConfig from "./configs/route";
import Completed from "./pages/Completed";
import Congratulations from "./pages/Congratulations";
import useScreenOrientation from "./utils/hooks/useScreenOrientation";
import NotSupportLandscape from "./components/NotSupportLandscape";

const router = createBrowserRouter([
  {
    path: RouteConfig.Home.path,
    element: <Scene1 />,
  },
  {
    path: RouteConfig.Guide.path,
    element: <Scene2 />,
  },
  {
    path: RouteConfig.AR.path,
    element: <AR />,
  },
  {
    path: RouteConfig.Completed.path,
    element: <Completed />,
  },
  {
    path: RouteConfig.Congratulations.path,
    element: <Congratulations />,
  },
]);
function App() {
  const orientation = useScreenOrientation();

  return (
    <>
      {(orientation === "portrait-primary" ||
        orientation === "portrait-secondary") && (
        <RouterProvider router={router} />
      )}
      {(orientation === "landscape-primary" ||
        orientation === "portrait-secondary") && <NotSupportLandscape />}
    </>
  );
}

export default App;
