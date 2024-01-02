import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RouteConfig, { Pages } from "./configs/route";
import useScreenOrientation from "./utils/hooks/useScreenOrientation";
import NotSupportLandscape from "./components/NotSupportLandscape";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

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
  const isPortrait = useScreenOrientation();

  return (
    <>
      {isPortrait && <RouterProvider router={router} />}
      {!isPortrait && <NotSupportLandscape />}
    </>
  );
}

export default App;
