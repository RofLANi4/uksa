import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PlayerCard = ({ player }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={player.photo}
          alt={`${player.lastName} ${player.name}`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            {player.lastName} {player.name}
          </h5>
          <p className="card-text">
            <strong>Позиція:</strong> {player.position}
            <br />
            <strong>Дата нар.:</strong> {player.birthDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
