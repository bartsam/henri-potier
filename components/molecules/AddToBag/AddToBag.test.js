import { render, matchMedia } from "utils/testing";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import Header from "components/organisms/Header";
import AddToBag from "components/molecules/AddToBag";

matchMedia();

const mockedData = {
  isbn: "bbcee412-be64-4a0c-bf1e-315977acd924",
  price: 35,
  synopsis: [
    "Cette année, Henri a 17 ans et ne retourne pas à l…erminants dans la lutte contre les forces du Mal.",
  ],
  title: "Henri Potier et les Reliques de la Mort",
};

describe("Add To Bag", () => {
  it("Should add 1 in quantity", async () => {
    render(<AddToBag product={mockedData} />);
    const button = screen.queryByTestId("buy-add");
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.queryByTestId("buy-quantity").textContent).toBe("1");
    });
  });

  it("Should remove button minus", async () => {
    render(<AddToBag product={mockedData} />);
    fireEvent.click(screen.queryByTestId("buy-add"));
    await waitFor(() => {
      expect(screen.getByTestId("buy-remove")).toBeInTheDocument();
    });
    fireEvent.click(screen.queryByTestId("buy-remove"));
    await waitFor(() => {
      expect(screen.queryByTestId("buy-remove")).not.toBeInTheDocument();
    });
  });

  it("Should add 1 in cart", async () => {
    render(
      <>
        <Header />
        <AddToBag product={mockedData} />
      </>
    );
    const button = screen.queryByTestId("buy-add");
    const cart = screen.getByLabelText("Cart");
    fireEvent.click(button);
    expect(cart.textContent).toBe("1");
  });
});
