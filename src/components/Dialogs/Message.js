import React from "react";

export const Message = (props) => {
  return (
    <div style={{ border: "1px solid red" }}>
      <p>{props.message}</p>
      <span>Likes:{props.likesCount}</span>
    </div>
  );
};
