import { IPost } from "../../core/models/post.ts";
import { types } from "../../core/enums/types.ts";
import Post from "../Post/Post.tsx";

const Posts = () => {
  const posts: IPost[] = [
    {
      title: "My super article",
      author: "John DOE",
      content: [
        {
          id: 0,
          section: {
            type: types.image,
            content:
              "https://images.unsplash.com/photo-1682685795557-976f03aca7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            attributes: ["article-cover", "test"],
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
      <Post post={posts[0]}></Post>
    </div>
  );
};

export default Posts;
