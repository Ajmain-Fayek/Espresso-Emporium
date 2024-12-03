import { createBrowserRouter } from "react-router";
import App from "../App";
import AddCoffee from "../Components/AddCoffee";
import Error404 from "../Components/Error404";
import Login from "../Components/Login";
import ProductDetails from "../Components/ProductDetails";
import Register from "../Components/Register";
import UpdateCoffee from "../Components/UpdateCoffee";

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

export default routes;
