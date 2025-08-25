import { useState } from "react";

export default function Player({ playerName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  let PlayerNameEdit = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    PlayerNameEdit = <input type="text" required value={playerName} />;
  }

  return (
    <li>
      <span className="player">
        {PlayerNameEdit}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
