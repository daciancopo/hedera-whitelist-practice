
import {
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import { useDarkMode } from './contexts/DarkModeContext'
import './App.css'
import NotFound from "./components/NotFound/NotFound";

function App() {
  const { theme } = useDarkMode();

  return (
    <div id={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
