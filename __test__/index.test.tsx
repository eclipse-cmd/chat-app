import Home from "@/pages/index";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Chat", () => {
  it("Test chat", () => {
    render(<Home />);
  });
});
