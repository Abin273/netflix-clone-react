import React from "react";
import Body from "./Components/body/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Components/browse/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
