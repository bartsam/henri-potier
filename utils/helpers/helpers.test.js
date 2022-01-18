import { normalizeText, calculOffers } from "./helpers";

describe("normalizeText function", () => {
  it("should lowercase, remove accents and add dash ", () => {
    const expectedState = "henri-potier-a-l-ecole-des-sorciers";
    expect(
      normalizeText("Henri Potier à l'école des sorciers", "link")
    ).toEqual(expectedState);
  });
  it("should lowercase, remove accents and remove space", () => {
    const expectedState = "henripotieralecoledessorciers";
    expect(
      normalizeText("Henri Potier à l'école des sorciers", "search")
    ).toEqual(expectedState);
  });
});

describe("calculOffers function", () => {
  it("should have 5% off", () => {
    const mockTotal = 30;
    const mockOffers = [{ type: "percentage", value: 5 }];
    expect(calculOffers(mockOffers, mockTotal)).toEqual(1.5);
  });
  it("should have 15€ off", () => {
    const mockTotal = 60;
    const mockOffers = [
      { type: "percentage", value: 5 },
      { type: "minus", value: 15 },
      { type: "slice", sliceValue: 100, value: 12 },
    ];
    expect(calculOffers(mockOffers, mockTotal)).toEqual(15);
  });
  it("should have 12€ off each 100€", () => {
    const mockTotal = 200;
    const mockOffers = [
      { type: "percentage", value: 5 },
      { type: "minus", value: 15 },
      { type: "slice", sliceValue: 100, value: 12 },
    ];
    expect(calculOffers(mockOffers, mockTotal)).toEqual(24);
  });
});
