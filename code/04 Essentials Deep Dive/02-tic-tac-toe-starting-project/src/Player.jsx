import { useState } from "react";

export default function Player({ playerName, symbol, isActive }) {
  const [prePlayerName, setPrevPlayerName] = useState(playerName);
  const [isEditing, setIsEditing] = useState(false);

  function handlePlayerNameChange(e) {
    setPrevPlayerName(e.target.value);
  }

  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  let PlayerNameEdit = <span className="player-name">{prePlayerName}</span>;

  if (isEditing) {
    PlayerNameEdit = (
      <input
        type="text"
        required
        value={prePlayerName}
        onChange={handlePlayerNameChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {PlayerNameEdit}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
