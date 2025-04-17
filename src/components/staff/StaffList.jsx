import React from "react";
import staff from "../../data/staff";
import StaffCard from "./StaffCard";

const StaffList = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center display-5">Персонал команди</h2>
      <div className="row">
        {staff.map((person) => (
          <StaffCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default StaffList;
