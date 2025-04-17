import React from "react";
import players from "../../data/players";
import PlayerCard from "./PlayerCard";

const PlayersList = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center display-5">Склад команди</h2>
      <div className="row">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
