
import {
  Routes,
  Route
} from "react-router-dom";
import { useDarkMode } from './contexts/DarkModeContext'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import CheckWhitelist from "./components/Whitelist/CheckWhitelist";
import WhitelistAccount from "./components/Whitelist/WhitelistAccount";
import NotFound from "./components/NotFound/NotFound";
import './App.css'

function App() {
  const { theme } = useDarkMode();

  return (
    <div id={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="check-whitelist" element={<CheckWhitelist />} />
          <Route path="whitelist-account" element={<WhitelistAccount />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
