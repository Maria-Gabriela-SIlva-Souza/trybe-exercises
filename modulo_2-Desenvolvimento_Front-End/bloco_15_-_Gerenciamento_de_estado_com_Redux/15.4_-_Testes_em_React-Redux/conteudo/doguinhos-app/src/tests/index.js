import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

const renderWithRedux = (component) => (
  {...render(<Provider store={store}><App /></Provider>), store}
)