import './assets/css/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom';
export default function App() {

  return (
    <Router>
      <Header />
      <div className="home">
        <h1>Hello</h1>
      </div>
      <Footer />
    </Router>
  )
}
