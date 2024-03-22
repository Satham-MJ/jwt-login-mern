import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
