import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import TestComponent from "./components/TestComponent";
import Header from "./components/Header";
import Error from "./components/Error";

const AppLayout = () => {
    return <>
        <Header />
        <Outlet />
    </>
};

// routes list config
const routes = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/test",
                element: <TestComponent />,
                errorElement: <Error />
            }
        ],
        errorElement: <Error />,
    },
];

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);