const library = {
  useLocalStorage: (key, value) => {
    const setValue = (value) => localStorage.setItem(key, value);
    const getValue = () => localStorage.getItem(key);
    setValue(value);
    return [getValue, setValue];
  },
};

export default library;
