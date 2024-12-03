import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Context/AuthProvider.jsx";
import { RouterProvider } from "react-router";
import routes from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <HelmetProvider>
                <RouterProvider router={routes} />
            </HelmetProvider>
        </AuthProvider>
    </StrictMode>
);
