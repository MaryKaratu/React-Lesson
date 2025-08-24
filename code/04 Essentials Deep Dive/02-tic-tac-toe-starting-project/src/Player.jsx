import { useState } from "react";

export default function Player({ playerName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  let PlayerNameEdit = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    PlayerNameEdit = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {PlayerNameEdit}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
}
