import React from "react";
import reports from "../../data/reports";
import { FaFilePdf } from "react-icons/fa";

const ReportsPage = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 display-5  text-primary text-dark">
        Фінансові звіти
      </h2>
      <div className="row gy-4">
        {reports.map((report) => (
          <div key={report.id} className="col-md-6 col-lg-4">
            <a
              href={process.env.PUBLIC_URL + "/pdfs/" + report.file}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-4 bg-light border border-primary rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between hover-shadow transition">
                <div className="d-flex align-items-center mb-3">
                  <FaFilePdf size={32} color="#dc3545" className="me-3" />
                  <h5 className="mb-0 text-dark ">{report.name}</h5>
                </div>
                <button className="btn btn-primary mt-3">Скачати PDF</button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsPage;
