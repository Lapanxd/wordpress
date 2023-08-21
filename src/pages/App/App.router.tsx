import { createBrowserRouter } from "react-router-dom";
import Posts from "../Posts/Posts.tsx";
import Post from "../Post/Post.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/post/:id",
    element: <Post />,
  },
]);

export default router;
