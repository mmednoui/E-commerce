import React from "react";
import "./Comment.css";
function Comment({ profilePic, author, date, privilege, content }) {
  return (
    <div className="Comment">
      <div className="comment_top">
        <img src={profilePic} alt="" />
        <div className="comment_top_right">
          <div className="comment_top_admin">
            {" "}
            <p>{author}</p>
            <div className="green">{privilege}</div>
          </div>

          <span>{date}</span>
        </div>
      </div>
      <div className="comment_bottom">{content}</div>
    </div>
  );
}

export default Comment;
