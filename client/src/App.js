import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Components/Footer";
import Posts from "./Pages/Posts";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./Pages/NotFound";
import Logout from "./Pages/Logout";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route Component={ProtectedRoute}>
          <Route path="/posts" Component={Posts} />
          <Route path="/logout" Component={Logout} />
        </Route>
        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
