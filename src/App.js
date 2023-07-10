import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "./Router/AdminRouter";
import LibraryRouter from "./Router/LibraryRouter";
import UserRouter from "./Router/UserRouter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/admin/*"} element={<AdminRouter />} />
        <Route path={"/library/*"} element={<LibraryRouter />} />
        <Route path={"/user/*"} element={<UserRouter />} />
      </Routes>
    </Router>
    // <LCATPage/>
  );
}

export default App;
