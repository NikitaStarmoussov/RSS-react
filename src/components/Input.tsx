import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue } from "../context/AppContext";
import { RootState } from "../store";

const Input = () => {
  const inputValue = useSelector((state: RootState) => state.search.searchQuery);
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
    localStorage.setItem('query', event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Введенное значение: {inputValue}</p>
    </div>
  );
};

export default Input;