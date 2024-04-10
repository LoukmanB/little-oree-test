import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";

// Other imports
import { store } from "./redux/store/store";

// Mock
jest.mock(
  "@web/shared/dist/components/Old/LoadingComponent/LoadingComponent",
  () => ({
    LoadingComponent: () => "mocked child1",
  })
);

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />{" "}
    </Provider>
  );
});
