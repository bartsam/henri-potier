export function normalizeText(content, type) {
  return content
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/gi, type === "link" ? "-" : "")
    .toLowerCase();
}
