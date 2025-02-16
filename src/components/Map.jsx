import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const defaultPosition = [30.033333, 31.233334]; //Egypt

function Map({ newPosition }) {
  return (
    <Wrapper>
      <MapContainer
        center={newPosition}
        zoom={15}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={newPosition} />

        {/* <SetViewOnClick coords={newPosition} /> */}
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

export default Map;

const Wrapper = styled.div`
  height: 35rem;
  position: relative;
  text-align: right;
  .map {
    height: 85%;
    border-radius: 40px;
    margin-bottom: 20px;
    /* width: 80%; */
  }
  .google-maps-link {
    /* background-color: red; */
    font-size: 1.3rem;
    font-weight: 450;
    color: #74ab70;
    margin-top: 0px;
  }
`;
