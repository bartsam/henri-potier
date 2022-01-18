export function normalizeText(content, type) {
  return content
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/gi, type === "link" ? "-" : "")
    .toLowerCase();
}

export function calculOffers(offers, total) {
  let promo = 0;
  offers.forEach((offer) => {
    if (offer.type === "percentage") {
      const percentage = 1 - offer.value / 100;
      const value = total - percentage * total;
      if (promo < value) {
        promo = value;
      }
    }
    if (offer.type === "minus") {
      const value = offer.value;
      if (promo < value) {
        promo = value;
      }
    }
    if (offer.type === "slice") {
      const slice = Math.trunc(total / offer.sliceValue);
      const value = total >= 100 && slice >= 1 ? slice * offer.value : 0;
      if (promo < value) {
        promo = value;
      }
    }
  });
  return promo;
}
