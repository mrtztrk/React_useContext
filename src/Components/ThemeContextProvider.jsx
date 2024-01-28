import { createContext, useState } from 'react';

export const themeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContextProvider;
