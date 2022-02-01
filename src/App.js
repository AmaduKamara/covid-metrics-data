import './App.css';
import { Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Home from './pages/Home';
import Details from './pages/Details';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
