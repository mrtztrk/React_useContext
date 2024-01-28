import './App.css';
import Page from './Components/Page';
import ThemeContextProvider from './Components/ThemeContextProvider';

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;
