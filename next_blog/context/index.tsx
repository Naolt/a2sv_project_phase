// AppStateContext.tsx
import { blogData } from "@/data";
import { Blog } from "@/model";
import React, { createContext, useContext, useReducer } from "react";
import { appReducer } from "./reducers";

// Define your initial state
const initialState: Blog[] = blogData;

// Create the context
const AppStateContext = createContext<{
  state: Blog[];
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Create a custom hook to access the context
export const useAppState = () => useContext(AppStateContext);

// Create the AppContextProvider component
interface Props {
  children: React.ReactElement;
}
export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
