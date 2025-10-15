import React from "react";

function ToyCard({ toy, onDelete, onLike }) {
  const { id, name, image, likes } = toy;

  function handleDeleteToy() {
    onDelete(id);
  }

  function handleLikeToy() {
    const updatedLikes = likes + 1;

    fetch(`http://localhost:3000/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
      .then((res) => res.json())
      .then((updatedToy) => onLike(updatedToy));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeToy}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDeleteToy}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
