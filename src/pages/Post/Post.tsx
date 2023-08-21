const Post = (props: any) => {
  const { post } = props;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.author}</p>
      <span>{`${post.createdAt} ${
        post.updatedAt ? " - " + post.updatedAt : ""
      }`}</span>
    </div>
  );
};

export default Post;
