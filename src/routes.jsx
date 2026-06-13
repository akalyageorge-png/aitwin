import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

//Create routes as an array of objects.
const router=createBrowserRouter(
    [
        {
            path: '/*',
            element: <Home/>,
            // errorElement:<ErrorPage/>
        },
        
    ]
)

export default router;