import { useEffect, useState } from "react";
import Player from "./Player/Player";

const Players = ({ handleAddPlayers }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  });
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player) => (
        <Player
          handleAddPlayers={handleAddPlayers}
          key={player.id}
          player={player}
        ></Player>
      ))}
    </div>
  );
};

export default Players;
