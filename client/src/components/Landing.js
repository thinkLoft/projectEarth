import React from 'react';
import './Landing.css';
import availability from './images/availability.png';

const LandingPage = () => (
  <div id="landing">
    <div className="row explanation">
      <div className="col">
        <div className="card">
          <img className="card-img-top" src={availability} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img className="card-img-top" src={availability} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img className="card-img-top" src={availability} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
