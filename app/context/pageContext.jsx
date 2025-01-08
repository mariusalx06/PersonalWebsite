"use client";
import { createContext, useReducer, useEffect } from "react";
import { isMobile } from "react-device-detect";

const SET_MOBILE_DEVICE = "SET_MOBILE_DEVICE";
const GO_TO_NEXT_PAGE = "GO_TO_NEXT_PAGE";
const GO_TO_PREVIOUS_PAGE = "GO_TO_PREVIOUS_PAGE";
const GO_TO_PAGE = "GO_TO_PAGE";

const initialState = {
  currentPage: 0,
  isMobileDevice: false,
};

function pageReducer(state, action) {
  switch (action.type) {
    case SET_MOBILE_DEVICE:
      return { ...state, isMobileDevice: action.payload };
    case GO_TO_NEXT_PAGE:
      return { ...state, currentPage: (state.currentPage + 1) % 5 };
    case GO_TO_PREVIOUS_PAGE:
      return { ...state, currentPage: (state.currentPage - 1 + 5) % 5 };
    case GO_TO_PAGE:
      if (action.payload >= 0 && action.payload < 5) {
        return { ...state, currentPage: action.payload };
      }
      return state;
    default:
      return state;
  }
}

export const PageContext = createContext();

export default function PageContextProvider({ children }) {
  const [state, dispatch] = useReducer(pageReducer, initialState);

  useEffect(() => {
    dispatch({ type: SET_MOBILE_DEVICE, payload: isMobile });
  }, []);

  const goToNextPage = () => {
    dispatch({ type: GO_TO_NEXT_PAGE });
  };

  const goToPreviousPage = () => {
    dispatch({ type: GO_TO_PREVIOUS_PAGE });
  };

  const goToPage = (pageIndex) => {
    dispatch({ type: GO_TO_PAGE, payload: pageIndex });
  };

  const ctxValue = {
    currentPage: state.currentPage,
    isMobileDevice: state.isMobileDevice,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  };

  return (
    <PageContext.Provider value={ctxValue}>{children}</PageContext.Provider>
  );
}
