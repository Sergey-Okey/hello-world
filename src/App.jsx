import './assets/css/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Popular from './pages/Popular'
import Jobs from './pages/Jobs'
import Channels from './pages/Channels'
import Topics from './pages/Topics'
import Saved from './pages/Saved'
import Fresh from './pages/Fresh'
import Siderbar from './components/Sidebar'
import Modal from './components/Modal'

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }
  { showModal && <Modal closeModal={toggleModal} /> }
  return (

    <Router>
      <Modal />
      <Header toggleModal={toggleModal} />
      <Siderbar />
      <main>
        <div className="container">
          <h1>Главная</h1>
        </div>
      </main>
      <Routes>
        <Route export path="/pages/Popular.jsx" element={<Popular />} />
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
