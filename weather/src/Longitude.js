import { useState } from "react";

const Longitude = () => {
  const useLocalStorage = (key, item) => {
    const setItem = (item) => localStorage.setItem(key, item);
    const getItem = () => localStorage.getItem(key);
    setItem(item);
    return [getItem, setItem];
  };
  const [getLat, setLat] = useLocalStorage('lon', localStorage.getItem('lon'));
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
