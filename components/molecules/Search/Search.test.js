import { render } from "utils/testing";
import { screen, fireEvent } from "@testing-library/react";
import SearchBar from "./Search";

const mockBooks = [
  {
    synopsis: [
      ("Pour faire face au retour de Voldemort, les membre… est un menteur ou que Dumbledore perd la raison.",
      "Henri, Ron et Hermione font leur entrée en 5e anné…e les forces du mal sous l'enseignement de Henri."),
    ],
    title: "Henri Potier et l'Ordre du phénix",
    cover:
      "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp4.jpg?alt=media",
  },
  {
    synopsis: [
      "Henri rentre en sixième année à l'école de sorcell…ui était encore connu sous le nom de Tom Jedusor.",
    ],
    title: "Henri Potier et le Prince de sang-mêlé",
    cover:
      "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp5.jpg?alt=media",
  },
  {
    synopsis: [
      "Cette année, Henri a 17 ans et ne retourne pas à l…erminants dans la lutte contre les forces du Mal.",
    ],
    title: "Henri Potier et les Reliques de la Mort",
    cover:
      "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp6.jpg?alt=media",
  },
];

describe("Search", () => {
  it("Should open search bar", () => {
    render(<SearchBar books={mockBooks} />);
    fireEvent.click(screen.queryByTestId("search-button"));
    expect(screen.getByTestId("search-modal")).toBeInTheDocument;
  });

  it("Should display 2 results", () => {
    render(<SearchBar books={mockBooks} />);
    fireEvent.change(screen.queryByTestId("search-input"), {
      target: { value: "henri potier et le" },
    });
    expect(screen.getAllByTestId("search-result")).toHaveLength(2);
  });

  it("Should display a result with accent and dash", () => {
    render(<SearchBar books={mockBooks} />);
    fireEvent.change(screen.queryByTestId("search-input"), {
      target: { value: "mele" },
    });
    expect(screen.queryByTestId("search-result").textContent).toBe(
      "Henri Potier et le Prince de sang-mêlé"
    );
  });
});
