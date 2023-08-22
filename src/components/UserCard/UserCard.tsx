import "./UserCard.css";
import { Avatar } from "@mui/material";

const UserCard = () => {
  return (
    <div className="side-content user-card">
      <div className="card-cover"></div>
      <Avatar
        sx={{ width: 50, height: 50 }}
        alt="test"
        src="https://placehold.co/50"
      ></Avatar>
      <p>UserName</p>
    </div>
  );
};

export default UserCard;
