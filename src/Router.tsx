import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";
import Coins from "./screens/coins/Coins";
import CoinDetail from "./screens/coins/CoinDetail";
import Followers from "./screens/users/Followers";
const router = createBrowserRouter([
    {
        path: "",
        element: <Root/>,
        errorElement: <NotFound/>
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path:"/coins",
        element: <Coins/>,
    },
    {
        path:'coins/:coinId',
        element: <CoinDetail/>
    },
    {
        path: "/home",
        element: <Home/>,
    },
    {
        path: "/users/:userId",
        element: <User/>,
        children:[
            {
                path:"followers",
                element:<Followers/>
            }
        ]
    }
])
export default router;