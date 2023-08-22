import PostComponent from "../../components/PostComponent/PostComponent.tsx";
import "./Post.css";
import { IUser } from "../../core/models/user.ts";

const Post = (props: any) => {
  const { post } = props;
  const userPlaceholder: IUser = {
    id: 0,
    name: "John DOE",
    avatar: "https://placehold.co/50",
  };
  return (
    <div>
      <div className="article-container">
        <PostComponent post={post} user={userPlaceholder}></PostComponent>
      </div>
    </div>
  );
};

export default Post;
