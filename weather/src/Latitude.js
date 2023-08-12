import { useState } from "react";

const Latitude = () => {
  const [latitude, setLatitude] = useState("20");
  const useLocalStorage = (key, item) => {
    const setItem = (item) => localStorage.setItem(key, item);
    const getItem = () => localStorage.getItem(key);
    setItem(item);
    return [getItem, setItem];
  };
  const [getLat, setLat] = useLocalStorage("lat", latitude);
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
