import Header from './Header';
import { themeContext } from './ThemeContextProvider';
import { useContext } from 'react';

export default function Page() {
  const { theme } = useContext(themeContext);

  return (
    <div id="app" className={theme}>
      <Header />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
