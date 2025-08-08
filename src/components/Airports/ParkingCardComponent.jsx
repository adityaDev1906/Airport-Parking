import React from 'react';
import './ParkingCardComponent.css';
import { useNavigate } from 'react-router-dom';



const ParkingCardComponent = () => {
  const navigate = useNavigate();

  return (
    <>

      <div className="airport-parking">
        Bristol Airport Cheap Parking
      </div>

      <button className="booking-buttonn">Change</button>


      <br>
      </br>
      <div class="card-grid">

        <div class="card">
          <div class="card-content">Bristol Valet Parking Meet and Greet</div><hr></hr>
          <h3 class="card-title">Information</h3>
          <ul class="card-list">
            <li>Meet & greet service</li>
            <li>Drop off and pick up at the terminal</li>
            <li>Reliable, punctual & professional staff</li>
            <li>Extra charges for van</li>
            <li>Security-lights</li>
          </ul>
          <button class="card-button"
            onClick={() => navigate(`/airportcheapparking`)} >
            Book Now
          </button>
        </div>

        <div class="card">
          <div class="card-content">Bristol Park and Ride</div><hr></hr>
          <h3 class="card-title">Information</h3>
          <ul class="card-list">
            <li>Park and Ride</li>
            <li>Last Minute Bookings</li>
            <li>10 Minutes Transfer</li>
            <li>Best Price granted</li>
            <li>Airport Charges Not Included</li>
          </ul>
          <button class="card-button"
            onClick={() => navigate(`/airportcheapparking`)} >
            Book Now
          </button>
        </div>

        <div class="card">
          <div class="card-content">Meet & Greet Airport Parking Bristol</div><hr></hr>
          <h3 class="card-title">Information</h3>
          <ul class="card-list">
            <li>Meet & greet service</li>
            <li>Uniformed Insured chauffeurs</li>
            <li>Reliable, Punctual & professional staff.</li>
            <li>Airport Levy charges not included</li>
          </ul>
          <button class="card-button"
            onClick={() => navigate(`/airportcheapparking`)} >
            Book Now
          </button>
        </div>

        <div class="card">
          <div class="card-content">Forge Meet & Greet Bristol
          </div><hr></hr>
          <h3 class="card-title">Information</h3>
          <ul class="card-list">
            <li>Meet & greet service</li>
            <li>Fully Insured Drivers.</li>
            <li>Pick Up & Drop Off at The Terminal.</li>
            <li>Extra charges for van</li>
          </ul>
         <button class="card-button"
            onClick={() => navigate(`/airportcheapparking`)} >
            Book Now
          </button>
        </div>

        <div class="card">
          <div class="card-content">CENTRAL AIRPORT PARKING PARK & RIDE BRISTOL</div><hr></hr>
          <h3 class="card-title">Information</h3>
          <ul class="card-list">
            <li>Park & ride services..</li>
            <li>400 Meters from airport.</li>
            <li>Free shuttle bus</li>
            <li>Opening timing 24/7 open </li>
            <li>Extra charges for van</li>
          </ul>
          <button class="card-button"
            onClick={() => navigate(`/airportcheapparking`)} >
            Book Now
          </button>
        </div>

        <div class="card">
          <div class="card-content">VIP Parking Meet & Greet Bristol</div><hr></hr>
          <h3 class="card-title">Information</h3>
          <ul class="card-list">
            <li>Excellent customer service</li>
            <li>Meet & Greet service</li>
            <li>No buses, No Waiting. Meet and Greet</li>
            <li>Extra charges for van</li>
            <li>Extra charges for van</li>
          </ul>
          <button class="card-button"
            onClick={() => navigate(`/airportcheapparking`)} >
            Book Now
          </button>
        </div>

      </div>

    </>
  );
};

export default ParkingCardComponent;
