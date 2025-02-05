import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddReview from "../pages/AddReview";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import MyReviews from "../pages/MyReviews";
import Reviews from "../pages/Reviews";
import Review from "../pages/Review";

import UpdateReview from "../pages/UpdateReview";
import WatchList from "../pages/WatchList";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://chill-game-server-nu.vercel.app/reviews/home"),
      },
      {
        path: "/reviews",
        element: <Reviews />,
        loader: () => fetch("https://chill-game-server-nu.vercel.app/reviews"),
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
        path: "/add-review",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/review/:id",
        element: <Review />,
        loader: ({ params }) =>
          fetch(`https://chill-game-server-nu.vercel.app/review/${params.id}`),
      },
      {
        path: "/updateReview/:id",
        element: (
          <PrivateRoute>
            <UpdateReview />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://chill-game-server-nu.vercel.app/review/${params.id}`),
      },
      {
        path: "/myWatchList",
        element: (
          <PrivateRoute>
            <WatchList />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://chill-game-server-nu.vercel.app/api/watchlist"),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default router;
