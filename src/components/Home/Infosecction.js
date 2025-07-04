import React from "react";
import "./Home.css";

function Infosecction() {
  return (
    <div className="search-container">
      <div className="search-tabs">
        <button className="active-tab">Airport Parking</button>
      </div>

      <form className="parking-search-form">
        <div className="form-group">
          <label htmlFor="airport-select">Select Airport</label>
          <select id="airport-select">
            <option value="">Choose airport...</option>
            <option value="LHR">Heathrow (LHR)</option>
            <option value="LGW">Gatwick (LGW)</option>
            <option value="MAN">Manchester (MAN)</option>
          </select>
        </div>

        <div className="form-group date-group">
          <div className="date-field">
            <label htmlFor="departure-date">Park in</label>
            <input type="date" id="departure-date" />
          </div>
          <div className="date-field">
            <label htmlFor="return-date">park out</label>
            <input type="date" id="return-date" />
          </div>
        </div>

        <button type="submit" className="search-button">
          Find Parking Deals
        </button>
      </form>
    </div>
  );
}

export default Infosecction;
