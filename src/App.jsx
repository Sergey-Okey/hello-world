import './assets/css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Jobs from './pages/Jobs';
import Channels from './pages/Channels';
import Topics from './pages/Topics';
import Saved from './pages/Saved';
import Fresh from './pages/Fresh';
import Profile from './pages/Profile';
import Popular from './pages/Popular';

export default function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Fresh />} />
          <Route path="/pages/popular.jsx" element={<Popular />} />
          <Route path="/pages/jobs.jsx" element={<Jobs />} />
          <Route path="/pages/channels.jsx" element={<Channels />} />
          <Route path="/pages/topics.jsx" element={<Topics />} />
          <Route path="/pages/saved.jsx" element={<Saved />} />
          <Route path="/pages/fresh.jsx" element={<Fresh />} />
          <Route path="/pages/profile.jsx" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
