import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";
import Coins from "./screens/coins/Coins";
import CoinDetail from "./screens/coins/CoinDetail";
import Followers from "./screens/users/Followers";
import Movies from "./screens/Movies";
import Price from "./screens/coins/Price";
import Chart from "./screens/coins/Chart";
const router = createBrowserRouter([
  {
    path: ``,
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: `/about`,
    element: <About />,
  },
  {
    path: `/movies`,
    element: <Movies />,
  },
  {
    path: `/coins`,
    element: <Coins />,
  },
  {
    path: `/coins/:coinId/*`,
    element: <CoinDetail />,
    children: [
        {
            path:`price`,
            element: <Price/>
        },
        {
            path:`chart`,
            element: <Chart/>
        }
    ]
  },
  {
    path: `/home`,
    element: <Home />,
  },
  {
    path: `/users/:userId`,
    element: <User />,
    children: [
      {
        path: `followers`,
        element: <Followers />,
      },
    ],
  },
]);
// const router = createBrowserRouter([
//     {
//       path: `${process.env.PUBLIC_URL}`,
//       element: <Root />,
//       errorElement: <NotFound />,
//     },
//     {
//       path: `${process.env.PUBLIC_URL}/about`,
//       element: <About />,
//     },
//     {
//       path: `${process.env.PUBLIC_URL}/movies`,
//       element: <Movies />,
//     },
//     {
//       path: `${process.env.PUBLIC_URL}/coins`,
//       element: <Coins />,
//     },
//     {
//       path: `${process.env.PUBLIC_URL}/coins/:coinId/*`,
//       element: <CoinDetail />,
//       children: [
//           {
//               path:`price`,
//               element: <Price/>
//           },
//           {
//               path:`chart`,
//               element: <Chart/>
//           }
//       ]
//     },
//     {
//       path: `${process.env.PUBLIC_URL}/home`,
//       element: <Home />,
//     },
//     {
//       path: `${process.env.PUBLIC_URL}/users/:userId`,
//       element: <User />,
//       children: [
//         {
//           path: `followers`,
//           element: <Followers />,
//         },
//       ],
//     },
//   ]);
export default router;
