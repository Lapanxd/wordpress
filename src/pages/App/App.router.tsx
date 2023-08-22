import { createBrowserRouter } from "react-router-dom";
import Posts from "../Posts/Posts.tsx";
import Post from "../Post/Post.tsx";
import Error from "../Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
    errorElement: <Error></Error>,
  },
  {
    path: "/posts",
    element: <Posts />,
    errorElement: <Error></Error>,
  },
  {
    path: "/post/:id",
    element: <Post />,
    errorElement: <Error></Error>,
  },
]);

export default router;
