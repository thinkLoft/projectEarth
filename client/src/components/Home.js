import React from "react";
import './Home.css';
import availability from './images/availability.png'
import planning from "./images/planning.jpg"

const HomePage = () => (
  <div id="home">
    <h1>Home Page</h1>
    <div id="content-wrapper">
      <div id="background-carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="h-100 d-block w-100" src={availability} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="h-100 d-block w-100" src={planning} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="h-100 d-block w-100" src="images/patterns.jpg" alt="Third slide" />
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default HomePage;
