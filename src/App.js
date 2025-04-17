import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import PlayersList from "./components/players/PlayerList";
import HomePage from "./components/home/HomePage";
import StaffList from "./components/staff/StaffList"; // додай імпорт
import ReportsPage from "./components/reports/ReportsPage";

if (
  window.location.pathname === "/uksa" &&
  (window.location.hash === "" || window.location.hash === "#")
) {
  window.location.replace("/uksa/#/");
}

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">
          ФК ЮКСА
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Головна
          </Link>
          <Link className="nav-link" to="/players">
            Гравці
          </Link>
          <Link className="nav-link" to="/staff">
            Персонал
          </Link>
          <Link className="nav-link" to="/reports">
            Звітність
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/players" element={<PlayersList />} />
        <Route path="/staff" element={<StaffList />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
