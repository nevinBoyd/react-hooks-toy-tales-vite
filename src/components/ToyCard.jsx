import React from "react";

function ToyCard({ toy, onDelete }) {
  const { id, name, image, likes } = toy;

  function handleDeleteToy() {
    onDelete(id);
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes</p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteToy}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
