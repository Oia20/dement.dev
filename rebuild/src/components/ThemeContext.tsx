import { createContext } from 'react';
import React from 'react';
import { useEffect } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: (theme: string) => {},
});

    

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};