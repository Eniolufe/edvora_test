import React, { useState, useEffect } from "react";
import axios from "axios";

function Ride({ type = "all" }) {
  const url = "https://assessment.api.vweb.app/rides";

  const [rides, setRides] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setRides(
        response.data.filter((data) => {
          switch (type) {
            case "all":
              return true;
              break;
            case "nearest":
              const stationPath = data.station_path,
                stationCode = 40;
              stationPath.reduce((prev, curr) => {
                return Math.abs(curr - stationCode) <
                  Math.abs(prev - stationCode)
                  ? curr
                  : prev;
              });
              return true;
              break;
            case "upcoming":
              if (Date.now() < data.date) return true;
              break;
            case "past":
              if (Date.now() > data.date) return true;
              break;
            default:
              return true;
          }
        })
      );
    });
  }, []);
  return (
    <>
      <section className="rider-details">
        {console.log(rides)}
        {rides.map((ride) => {
          return (
            <div key={ride.date}>
              <img src={ride.map_url} alt={ride.state} />
              <div className="ride-info">
                <h4>Ride Id:{ride.id}</h4>
                <h4>Origin Station:{ride.origin_station_code}</h4>
                <h4>
                  Station_path:
                  {ride.station_path}
                </h4>
                <h4>Date:{ride.date}</h4>
                <h4>
                  Distance:
                  {ride.destination_station_code - 40}
                </h4>
              </div>
              <ul className="title-name ">
                <li>City Name</li>
                <li>State Name</li>
              </ul>
              <ul className="title-name ">
                <li>{ride.city}</li>
                <li>{ride.state}</li>
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Ride;
