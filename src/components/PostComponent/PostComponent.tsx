import { IPostSection } from "../../core/models/post.ts";
import { types } from "../../core/enums/types.ts";
import "./PostComponent.css";
import { Avatar } from "@mui/material";

const PostComponent = (props: any) => {
  const { post, user } = props;
  return (
    <div className="full-size-content">
      <h1>{post.title}</h1>
      <div className="article-author">
        <Avatar alt={user.name} src={user.avatar}></Avatar>
        <span>{post.author}</span>
        <span>
          - {post.updatedAt ? "modifié le " + post.updatedAt : post.createdAt}
        </span>
      </div>

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
    </div>
  );
};

export default PostComponent;
