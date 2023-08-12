import { useState } from "react";

const Form = () => {
  const [latitude, setLatitude] = useState("20");
  const latitudeAsNumber = Number(latitude);
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

export default Form;
