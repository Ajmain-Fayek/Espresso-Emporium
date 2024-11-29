import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import { HelmetProvider } from "react-helmet-async";
import ProductDetails from "./Components/ProductDetails.jsx";
import Error404 from "./Components/Error404.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        loader: () => fetch("http://localhost:5000/coffees"),
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/add-coffee",
        element: <AddCoffee />,
    },
    {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
            fetch(`http://localhost:5000/coffees/${params.id}`),
    },
    {
        path: "/coffee-details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
            fetch(`http://localhost:5000/coffees/${params.id}`),
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            <RouterProvider router={routes} />
        </HelmetProvider>
    </StrictMode>
);
