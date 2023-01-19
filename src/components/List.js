import React from "react";

export function List({ items, children }) {
  return <>{children(items)}</>;
}

export function Item({ children }) {
  return <li>{children}</li>;
}