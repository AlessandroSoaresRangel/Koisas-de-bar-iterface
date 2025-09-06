import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./css/index.css";
import Cards from "./pages/Cards.tsx";
import CreateTable from "./pages/CreateTable.tsx";
import UpdateOrder from "./pages/UpdateOrder.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-table",
    element: <CreateTable />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/update-order",
    element: <UpdateOrder />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
