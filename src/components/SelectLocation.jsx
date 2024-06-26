import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import NavBar from "./NavBar";
import { useServiceContext } from "../context/ServiceContext";

// const defaultPosition = [30.033333, 31.233334]; // Egypt

function Map({ defaultPosition }) {
  const [position, setPosition] = useState([
    defaultPosition[0] || 30.033333,
    defaultPosition[1] || 31.233334,
  ]);
  const { setChange, setNewPosition } = useServiceContext();
  console.log("position", position);

  return (
    <Wrapper>
      {/* <NavBar /> */}
      <div className="map-container">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={true}
          className="map"
        >
          <MyComponent
            setPosition={setPosition}
            setNewPosition={setNewPosition}
            setChange={setChange}
          />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} />
        </MapContainer>
        <a
          href="https://www.google.com/maps/search/?api=1&query=30.59569736038205,32.270704449476916"
          target="_blank"
          rel="noopener noreferrer"
          className="google-maps-link"
        >
          Open in Google Maps
        </a>
      </div>
    </Wrapper>
  );
}

function MyComponent({ setPosition, setNewPosition, setChange }) {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      // console.log("Clicked Location:", [lat, lng]);
      setPosition([lat, lng]);
      setNewPosition([lat, lng]);
      setChange(true);
    },
  });
  return null;
}

export default Map;

const Wrapper = styled.div`
  /* background: #fef9f0;
  height: 100vh; */

  .map-container {
    /* height: 88%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    width: 60%;
    height: 80%;
    background-color: #fef9f0;
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 2rem 0;
    border-radius: 15px;
    position: absolute;
    top: 145%;
    right: 50%;
    /* left: 0; */
    /* bottom: 0; */
    transform: translate(50%, -50%);
    box-shadow: -1px 2px 14px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -1px 2px 14px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 2px 14px -1px rgba(0, 0, 0, 0.75);
    z-index: 10;
  }
  .map {
    height: 100%;
    width: 100%;
  }
  .google-maps-link {
    font-size: 1.3rem;
    font-weight: 450;
    color: #74ab70;
    margin: 15px 0;
  }
`;
