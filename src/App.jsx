import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AR from "./pages/AR";
import Scene1 from "./pages/Scene1";
import Scene2 from "./pages/Scene2";
import RouteConfig from "./configs/route";

const router = createBrowserRouter([
  {
    path: RouteConfig.Begin.path,
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
