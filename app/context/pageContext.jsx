// context/pageContext.jsx

"use client";
import { createContext, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

export const PageContext = createContext({
  currentPage: 0,
  goToNextPage: () => {},
  goToPreviousPage: () => {},
  isMobileDevice: false,
});

export default function PageContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % 5);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 + 5) % 5);
  };

  const ctxValue = {
    currentPage,
    goToNextPage,
    goToPreviousPage,
    isMobileDevice,
  };

  return (
    <PageContext.Provider value={ctxValue}>{children}</PageContext.Provider>
  );
}
