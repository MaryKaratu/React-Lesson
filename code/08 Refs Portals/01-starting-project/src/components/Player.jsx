import { useState, useRef } from "react";

export default function Player() {
  const inputValue = useRef();
  const [newName, setNewName] = useState(null);

  function handleOnClick() {
    setNewName(inputValue.current.value);
    inputValue.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {newName ?? "unknown entity"}</h2>
      <p>
        <input ref={inputValue} type="text" />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
