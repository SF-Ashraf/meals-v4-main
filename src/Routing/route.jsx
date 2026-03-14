import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import HomePage from "../Pages/HomePage";
import ViewMeals from "../Pages/ViewMeals";
import EditMeals from "../Pages/EditMeals";
import AddMeals from "../Pages/AddMeals";
import NotFound from "../Pages/NotFound";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "viewMeals/:id", element: <ViewMeals /> },
      { path: "editMeals/:id", element: <EditMeals /> },
      { path: "addMeals", element: <AddMeals /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
