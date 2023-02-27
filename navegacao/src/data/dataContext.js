import { createContext } from "react";

export const data = {
  number: 123,
  text: "Context API + Hooks"
}

export const DataContext = createContext(data);