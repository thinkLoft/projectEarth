import React from "react";
import "./Home.css";

const HomePage = ({ authUser }) => (
  <div id="home">
    <h1>Home Page</h1>
    <p> Welcome {authUser.email}</p>
  </div>
);

export default HomePage;
