import { createContext, useState } from "react";

export const ConterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [name, setName] = useState("Overview");
  return (
    <ConterContext.Provider value={{name,setName}}>
      {children}
    </ConterContext.Provider>
  );
};
