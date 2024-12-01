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
import AuthProvider from "./Context/AuthProvider.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        loader: () =>
            fetch("https://espresso-emporium-coffees.vercel.app/coffees"),
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
            fetch(
                `https://espresso-emporium-coffees.vercel.app/coffees/${params.id}`
            ),
    },
    {
        path: "/coffee-details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
            fetch(
                `https://espresso-emporium-coffees.vercel.app/coffees/${params.id}`
            ),
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <HelmetProvider>
                <RouterProvider router={routes} />
            </HelmetProvider>
        </AuthProvider>
    </StrictMode>
);
