import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RouteConfig, { Pages } from "./configs/route";
import useScreenOrientation from "./utils/hooks/useScreenOrientation";
import NotSupportLandscape from "./components/NotSupportLandscape";
import { Suspense } from "react";
import Spinner from "./components/Spinner";
import { preloadImages } from "./utils/preload";
import { ImageConfig } from "./configs/images";

const router = createBrowserRouter([
  {
    path: RouteConfig.Home.path,
    element: (
      <Suspense fallback={<Spinner />}>
        <Pages.Home />
      </Suspense>
    ),
  },
  {
    path: RouteConfig.Guide.path,
    element: (
      <Suspense fallback={<Spinner />}>
        <Pages.Guide />
      </Suspense>
    ),
  },
  {
    path: RouteConfig.AR.path,
    element: (
      <Suspense fallback={<Spinner />}>
        <Pages.AR />
      </Suspense>
    ),
  },
  {
    path: RouteConfig.Congratulations.path,
    element: (
      <Suspense fallback={<Spinner />}>
        <Pages.Congratulations />
      </Suspense>
    ),
  },
]);
function App() {
  // preloadImages(ImageConfig.Button1);
  // eslint-disable-next-line no-undef
  console.log(process.env.NODE_ENV);
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
