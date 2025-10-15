import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  // hold all toy data
  const [toys, setToys] = useState([]);

  // load toy data from backend
  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  // add new toy
  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }
  // delete toy
  function handleDeleteToy(id) {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE",
    }).then(() => {
      setToys(toys.filter((toy) => toy.id !== id));
    });
  }
  // likes
  function handleLikeToy(updatedToy) {
    setToys((prev) =>
      prev.map((t) => (t.id === updatedToy.id ? updatedToy : t))
    );
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDelete={handleDeleteToy}
        onLike={handleLikeToy}
      />
    </>
  );
}

export default App;
