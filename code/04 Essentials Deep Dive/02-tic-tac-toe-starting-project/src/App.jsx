import { useState } from "react";
import Player from "./Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName="Player 1" symbol="X" />
          <Player playerName="Player 2" symbol="O" />
        </ol>
        Gameboard
      </div>
      Log
    </main>
  );
}

export default App;
