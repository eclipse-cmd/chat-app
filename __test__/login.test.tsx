import Login from "@/pages/login";
import { render } from "@testing-library/react";

describe("Checking login page", () => {
  it("Renders login page", () => {
    render(<Login />);
  });
});
