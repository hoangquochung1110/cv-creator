import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "../Main";
import Toolkit from "../parts/Toolkit";

describe("Main component", () => {
    it("renders correct heading", () => {
        render(<Main />);
        const headerText = screen.getByText("CV Creator");
        expect(headerText.textContent).toMatch("CV Creator");
    });
});

describe("Toolkit component", () => {
    it("ensure correct default font-size", () => {
        const { container } = render(<Toolkit />);
        expect(container).toBeDefined();
        const fontSizeSelector = document.querySelector("#font-size-selector");
        expect(fontSizeSelector.value).toBe("20px");
    });
});

describe("Resume component", () => {
    it("verify correct default font-size", () => {
        render(<Main />);
        const resumeComponent = document.querySelector("#resume-container");
        const resumeStyles = getComputedStyle(resumeComponent);
        expect(resumeStyles.fontSize).toBe("20px");
    });
});
