import React from "react";
import './Landing.css';
import availability from './images/availability.png'

const LandingPage = () => (
  <div id="landing">
    <div class="row explanation">
      <div class="col">
        <div class="card">
          <div class="text">I'm free during the following times...</div>
          <div class="overlay">
            <img class="card-img-top" src={availability} alt="Card cap" />
            <div class="card-body">
              <h5 class="card-title">Schedule your Free Time</h5>
              <p class="card-text">Prep for future meetings or your social calendar by logging in and inputting when you're available.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="text">Let me make sure...</div>
          <div class="overlay">
            <img class="card-img-top" src={availability} alt="Card cap" />
            <div class="card-body">
              <h5 class="card-title">View your availability</h5>
              <p class="card-text">See the layout of your day in detail as you input your free time.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="text">So...when are you free?</div>
          <div class="overlay">
            <img class="card-img-top" src={availability} alt="Card cap" />
            <div class="card-body">
              <h5 class="card-title">Mutual Availability</h5>
              <p class="card-text">Take the pain out of scheduling meetings. Free time will show you mutual availability based on everyone's inputs. Just choose an option and you're good to go!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
