import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRouter from "./Router/AdminRouter";
import LibraryRouter from "./Router/LibraryRouter";
import UserRouter from "./Router/UserRouter";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/User/LoginPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Footer />}> */}
          <Route path={"/admin/*"} element={<AdminRouter />} />
          <Route path={"/library/*"} element={<LibraryRouter />} />
          <Route path={"/user/login"} element={<Login />} />
          <Route path={"/user/:id*"} element={<UserRouter />} />
          <Route path={"/"} element={<LandingPage />} />
          {/* <Route path={"/*"} element={<PageNotFoundAdmin />} /> */}

        {/* </Route> */}
      </Routes>
    </Router>
    // <LCATPage/>
  );
}

export default App;
