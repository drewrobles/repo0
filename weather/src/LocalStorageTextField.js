import { useState } from "react";
import library from "./library";

const LocalStorageTextField = props => {
  const [getLocalStorageValue, setLocalStorageValue] = library.useLocalStorage(
    props.label,
    localStorage.getItem(props.label)
  );
  const [state, setState] = useState(getLocalStorageValue());
  return (
    <>
      <label>
        {props.label}:
        <input
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setLocalStorageValue(e.target.value);
            console.log(`${props.label}: ` + getLocalStorageValue());
          }}
          type="number"
        />
      </label>
    </>
  );
};

export default LocalStorageTextField;
