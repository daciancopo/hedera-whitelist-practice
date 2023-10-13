import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DarkModeContextType {
  darkMode: boolean;
  theme: string;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>("dark");

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    darkMode ? setTheme("dark") : setTheme("light");
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, theme, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
