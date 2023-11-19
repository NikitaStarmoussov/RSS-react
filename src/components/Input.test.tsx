import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Input from "./Input";
import {store as rootReducer} from "../store/index";

describe("Input component", () => {
  test("renders input element", () => {
    render(
      <Provider store={rootReducer}>
      <Input />
    </Provider>
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("dispatches setInputValue action on input change", () => {

    render(
      <Provider store={rootReducer}>
        <Input />
      </Provider>
    );

    const inputElement = screen.getByRole("textbox");
    const inputValue = "example";
    fireEvent.change(inputElement, { target: { value: inputValue } });

    expect(rootReducer.getState().search.searchQuery).toBe(inputValue);
  });

  test("saves input value to local storage on input change", () => {
    render(
      <Provider store={rootReducer}>
        <Input />
      </Provider>
    );

    const inputElement = screen.getByRole("textbox");
    const inputValue = "example";
    fireEvent.change(inputElement, { target: { value: inputValue } });

    expect(localStorage.getItem("query")).toBe(inputValue);
  });
});