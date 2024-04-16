import './assets/css/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router } from 'react-router-dom';
export default function App() {

  return (
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  )
}
