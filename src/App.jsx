import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routing/route";
import "./App.css";
function App() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
