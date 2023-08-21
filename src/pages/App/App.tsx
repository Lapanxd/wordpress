import Post from "../Post/Post.tsx";
import { IPost } from "../../core/models/post.ts";
import { types } from "../../core/enums/types.ts";

function App() {
  const posts: IPost[] = [
    {
      title: "My super article",
      author: "Morgan DUMAS",
      content: [
        {
          id: 0,
          section: {
            type: types.image,
            content: "https://placehold.co/700x150/EEE/31343C",
            attributes: ["cover", "test"],
            alt: "Première image incr wew",
          },
        },
        {
          id: 1,
          section: {
            type: types.text,
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            attributes: ["test"],
          },
        },
        {
          id: 2,
          section: {
            type: types.image,
            content: "https://placehold.co/300x300/EEE/31343C",
            attributes: [],
            alt: "Une superbe image placeholder",
          },
        },
      ],
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
