'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type TThemeProvider = {
  children: any;
};

const ThemeContext = createContext({ toggleTheme: (__: string) => {} });

export const ThemeProvider = ({ children }: TThemeProvider) => {
  const [theme, setTheme] = useState(localStorage.getItem('color-mode') || 'light');

  useEffect(() => {
    toggleTheme(theme);
  }, [theme]);

  const toggleTheme = (newTheme: string) => {
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('color-mode', newTheme);
      setTheme(newTheme);
      return;
    }

    newTheme = newTheme === 'light' ? 'dark' : 'light';
  };

  return <ThemeContext.Provider value={{ toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
