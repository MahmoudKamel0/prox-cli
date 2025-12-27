import HomePage from "@app/page";
import { render } from "@testing-library/react";
import { it } from "vitest";

it("Page", () => {
    render(<HomePage />);
});
