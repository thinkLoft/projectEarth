import React from "react";
import './Landing.css';
import availability from './images/availability.png'
import availabilityInput from "./images/availabilityInput.png"
import mutual from "./images/mutual.jpg"

const LandingPage = () => (
  <div id="landing">
    <div className="row explanation">
      <div className="col">
        <div className="card">
          <div className="text">I'm free during the following times...</div>
          <div className="overlay">
            <img className="card-img-top" width="200px" height="300px" src={availabilityInput} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Schedule your Free Time</h5>
              <p className="card-text">Prep for future meetings or your social calendar by logging in and inputting when you're available.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <div className="text">Let me make sure...</div>
          <div className="overlay">
            <img className="card-img-top" src={availability} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">View your availability</h5>
              <p className="card-text">See the layout of your day in detail as you input your free time.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <div className="text">So...when are you free?</div>
          <div className="overlay">
            <img className="card-img-top" width="200px" height="250px" src={mutual} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Mutual Availability</h5>
              <p className="card-text">Take the pain out of scheduling meetings. Free time will show you mutual availability based on everyone's inputs. Just choose an option and you're good to go!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
