import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Analytics from "./pannelComponents/userManagement";
import UserList from "./pannelComponents/dashboard";
import Usermanagement from "./pannelComponents/userManagement";
import Dashboard from "./pannelComponents/dashboard";

const Pannel = () => {
  const navigate = useNavigate();
  return (
    <div className="pannel">
      <Routes>
        <Route path="/" element={<Dashboard navigate={navigate} />} />
        <Route
          path="/userlist"
          element={<Usermanagement navigate={navigate} />}
        />
      </Routes>
    </div>
  );
};

export default Pannel;
