import React from "react";

const StaffCard = ({ person }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={person.photo}
          className="card-img-top img-fluid"
          alt={person.lastName}
          style={{ objectFit: "cover", height: "300px" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title mb-1">{person.lastName}</h5>
          <p className="card-text text-muted mb-1">{person.name}</p>
          <span className="badge bg-secondary mb-2">{person.position}</span>
          <p className="card-text">
            <small className="text-muted">
              Дата народження: {person.birthDate}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
