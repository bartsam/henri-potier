import { render } from "utils/testing";
import { screen } from "@testing-library/react";
import Header from "components/organisms/Header";

describe("Logo", () => {
  it("Should render heading", () => {
    render(<Header />);
    const logo = screen.getByRole("heading");
    expect(logo.textContent).toBe("les éditons d'Henri Potier");
  });
});
