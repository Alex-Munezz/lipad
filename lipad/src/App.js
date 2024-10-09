import './App.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar.js';
import Card from './Card.js';
import Feature from './Feature.js';
import Partner from './Partner.js';
import Footer from './Footer.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Card />
      <Feature />
      <Partner />
      <Footer />  
    </div>
    </Router>
  );
}

export default App;
