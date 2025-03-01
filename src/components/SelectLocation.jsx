import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { useServiceContext } from "../context/ServiceContext";

function Map({ defaultPosition, setChange, setNewPosition }) {
  const [position, setPosition] = useState([
    defaultPosition[0] || 30.033333,
    defaultPosition[1] || 31.233334,
  ]);

  return (
    <Wrapper>
      <h1>Location</h1>
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
    </Wrapper>
  );
}

function MyComponent({ setPosition, setNewPosition, setChange }) {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      setNewPosition([lat, lng]);
      setChange(true);
    },
  });
  return null;
}

export default Map;

const Wrapper = styled.div`
  width: 60vw;
  height: 60vh;
  background-color: #fef9f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--color-black-mid);
    margin-bottom: 5px;
    font-size: 1.5rem;
  }
  box-shadow: -1px 1px 5px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 1px 5px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 1px 5px -1px rgba(0, 0, 0, 0.75);

  .map {
    height: 100%;
    width: 100%;
    @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
      height: 10rem;
    }
  }
  .google-maps-link {
    font-size: 1.3rem;
    font-weight: 450;
    color: #74ab70;
    margin: 15px 0;
  }
`;
