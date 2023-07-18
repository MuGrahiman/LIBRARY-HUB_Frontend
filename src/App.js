import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "./Router/AdminRouter";
import LibraryRouter from "./Router/LibraryRouter";
import UserRouter from "./Router/UserRouter";
import LandingPage from "./pages/NewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/admin/*"} element={<AdminRouter />} />
        <Route path={"/library/*"} element={<LibraryRouter />} />
        <Route path={"/user/*"} element={<UserRouter />} />
        <Route path={"/"} element={<LandingPage />} />
      </Routes>
    </Router>
    // <LCATPage/>
  );
}

export default App;
