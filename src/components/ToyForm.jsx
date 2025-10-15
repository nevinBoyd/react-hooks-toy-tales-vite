import React, { useState } from "react";

// creates new toy for backend
function ToyForm({ onAddToy }) {
  // track input values  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // submissions 
  function handleSubmit(e) {
    e.preventDefault();

    const newToy = {
      name: name,
      image: image,
      likes: 0,
    };

    // send post request    
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        onAddToy(data);
        setName("");
        setImage("");
      });
  }

  // inputs for toy name, image, and submit button  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
