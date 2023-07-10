import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import DestinyDashboard from "../../features/destinies/dashboard/DestinyDashboard";

export const routes: RouteObject[] =[
    {
        path: '/',
        element: <App />,
        children: [
            {path:'', element: <HomePage />},
            {path:'destinies', element: <DestinyDashboard destinies={[]} />},
        ]
    }
]

export const router = createBrowserRouter(routes)