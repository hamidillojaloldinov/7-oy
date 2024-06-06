import React from "react";
import { loader as HomeLoader } from "./pages/Home";
import { loader as TrashLoader } from "./pages/trash";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Headphones,
  Speakers,
  Earphones,
  Checkout,
  Home,
  Trash,
} from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <h1>error</h1>,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/headphones",
          element: <Headphones />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },
        {
          path: "/earphones",
          element: <Earphones />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/trash",
          element: <Trash />,
          loader: TrashLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
