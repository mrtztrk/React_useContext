import { useContext } from 'react';
import { themeContext } from './ThemeContextProvider';

export default function Header() {
  const { toggleTheme } = useContext(themeContext);

  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}
