import { render as rtlRender } from "@testing-library/react";
import { CartProvider } from "utils/context";

export function render(ui) {
  function Wrapper({ children }) {
    return <CartProvider>{children}</CartProvider>;
  }
  rtlRender(ui, { wrapper: Wrapper });
}

export function matchMedia(ui) {
  return Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}
