import Post from "../Post/Post.tsx";
import { IPost } from "../../core/models/post.ts";

function App() {
  const posts: IPost[] = [
    {
      title: "My super article",
      author: "Morgan DUMAS",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      createdAt: "01/02/2000",
      updatedAt: "02/02/2001",
    },
  ];
  return (
    <div>
      <p>Hello world</p>
      <Post post={posts[0]}></Post>
    </div>
  );
}

export default App;
