
import Navbar from './components/Navbar/Navbar'
import { useDarkMode } from './contexts/DarkModeContext'
import Home from './components/Home/Home';
import './App.css'
import Layout from './components/Layout/Layout';

function App() {
  const { theme } = useDarkMode();

  return (
    <div id={theme}>
      <Layout>
        <Home/>
      </Layout>
    </div>
  )
}

export default App
