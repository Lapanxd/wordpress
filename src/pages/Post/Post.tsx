import { types } from "../../core/enums/types.ts";
import "./Post.css";
import { IPostSection } from "../../core/models/post.ts";

const Post = (props: any) => {
  const { post } = props;
  return (
    <div>
      <h1>{post.title}</h1>
      {post.content.map((postSection: IPostSection) => {
        if (postSection?.section?.type === types.text) {
          return (
            <p
              key={postSection.id}
              className={postSection.section.attributes.join(" ")}
            >
              {postSection.section.content}
            </p>
          );
        } else if (postSection?.section?.type === types.image) {
          return (
            <img
              key={postSection.id}
              src={postSection?.section?.content}
              className={postSection?.section?.attributes.join(" ")}
              alt={postSection.section.alt}
            />
          );
        }
      })}

      <p>{post.author}</p>
      <span>{`${post.createdAt} ${
        post.updatedAt ? " - " + post.updatedAt : ""
      }`}</span>
    </div>
  );
};

export default Post;
