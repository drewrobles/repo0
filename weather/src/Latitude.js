import { useState } from "react";
import library from "./library";

const Latitude = () => {
  const [getLat, setLat] = library.useLocalStorage(
    "lat",
    localStorage.getItem("lat")
  );
  const [latitude, setLatitude] = useState(getLat());
  return (
    <>
      <label>
        Latitude:
        <input
          value={latitude}
          onChange={(e) => {
            setLatitude(e.target.value);
            setLat(e.target.value);
            console.log("latitude: " + getLat());
          }}
          type="number"
        />
      </label>
    </>
  );
};

export default Latitude;
