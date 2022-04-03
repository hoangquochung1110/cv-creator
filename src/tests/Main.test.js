import React from "react";
import { render } from "@testing-library/react";
import Main from "../Main";

describe("Main component", () => {
    it("renders correct heading", () => {
        const { getByText } = render(<Main />);
        getByText("CV Creator");
    });
});
