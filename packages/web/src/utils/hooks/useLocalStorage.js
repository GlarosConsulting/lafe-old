const useLocalStorage = (key, initialState) => {
  const setStorageValue = value => {
    localStorage.setItem(key, JSON.stringify(value));

    return value;
  };

  const storedValue = localStorage.getItem(key);

  if (storedValue) {
    return [JSON.parse(storedValue), setStorageValue];
  }

  setStorageValue(initialState);

  return [initialState, setStorageValue];
};

export default useLocalStorage;
