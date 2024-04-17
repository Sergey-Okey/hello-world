import './assets/css/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Popular from './pages/Popular'
import Jobs from './pages/Jobs'
import Channels from './pages/Channels'
import Topics from './pages/Topics'
import Saved from './pages/Saved'
import Fresh from './pages/Fresh'
import Siderbar from './components/Sidebar'

export default function App() {

  return (
    <Router>
      <Header />
      <Siderbar />
      <Routes>
        <Route path="/pages/Popular.jsx" element={<Popular />} />
        <Route path="/pages/Jobs.jsx" element={<Jobs />} />
        <Route path="/pages/Channels.jsx" element={<Channels />} />
        <Route path="/pages/Saved.jsx" element={<Saved />} />
        <Route path="/pages/Topics.jsx" element={<Topics />} />
        <Route path="/pages/Fresh.jsx" element={<Fresh />} />
      </Routes>
      <Footer />
    </Router>
  )
}
