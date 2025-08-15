import './App.css';
import Navbar from './components/Navbar';
import Customer from './pages/Customer';
import Home from './pages/Home';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Customer/>} />
      </Routes>
    </>
  );
}

export default App;
