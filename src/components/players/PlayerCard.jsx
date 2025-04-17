import React from "react";

const PlayerCard = ({ player }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={player.photo}
          className="card-img-top img-fluid"
          alt={player.lastName}
          style={{ objectFit: "cover", height: "300px" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title mb-1">{player.lastName}</h5>
          <p className="card-text text-muted mb-1">{player.name}</p>
          <span className="badge bg-primary mb-2">{player.position}</span>
          <p className="card-text">
            <small className="text-muted">
              Дата народження: {player.birthDate}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
