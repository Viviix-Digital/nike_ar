import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AR from "./pages/AR";
import Scene1 from "./pages/Scene1";
import Scene2 from "./pages/Scene2";
import RouteConfig from "./configs/route";
import Completed from "./pages/Completed";
import Congratulations from "./pages/Congratulations";
import { preloadImages } from "./utils/preload";
import { ImageConfig } from "./configs/images";

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
  // preloadImages(ImageConfig.Home);
  // preloadImages(ImageConfig.Guide);
  // preloadImages(ImageConfig.Infomation1);
  // preloadImages(ImageConfig.Infomation2);
  // preloadImages(ImageConfig.Infomation3);
  // preloadImages(ImageConfig.Infomation4);
  // preloadImages(ImageConfig.Infomation5);
  // preloadImages(ImageConfig.Infomation6);
  // preloadImages(ImageConfig.Infomation7);
  // preloadImages(ImageConfig.Nike1);
  // preloadImages(ImageConfig.Nike2);
  // preloadImages(ImageConfig.Nike3);
  // preloadImages(ImageConfig.Nike4);
  // preloadImages(ImageConfig.Nike5);
  // preloadImages(ImageConfig.Nike6);
  // preloadImages(ImageConfig.Nike7);
  // preloadImages(ImageConfig.Completed);
  // preloadImages(ImageConfig.Congratulations);
  return <RouterProvider router={router} />;
}

export default App;
