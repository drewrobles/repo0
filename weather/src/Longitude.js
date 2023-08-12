import { useState } from "react";
import library from "./library";

const Longitude = () => {
  const [getLat, setLat] = library.useLocalStorage(
    "lon",
    localStorage.getItem("lon")
  );
  const [longitude, setLongitude] = useState(getLat());
  return (
    <>
      <label>
        Longitude:
        <input
          value={longitude}
          onChange={(e) => {
            setLongitude(e.target.value);
            setLat(e.target.value);
            console.log("longitude: " + getLat());
          }}
          type="number"
        />
      </label>
    </>
  );
};

export default Longitude;
