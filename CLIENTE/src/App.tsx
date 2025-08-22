import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Customer from './pages/Customer';
import Home from './pages/Home';
import NewCustomer from './pages/NewCustomer';
import EditCustomer from './pages/EditCustomer';
import Books from './pages/Book';
import NewBook from './pages/NewBook';
import EditBook from './pages/EditBook';
import Store from './pages/Store';
import BookDetails from './pages/BookDetails';
import { CartProvider } from './Context/CartContext';
import Checkout from './pages/Checkout';
import Stock from './pages/Stock';
import NewStock from './pages/NewStock';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/customers/new" element={<NewCustomer />} />
        <Route path="/customers/:id/edit" element={<EditCustomer />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="/books/:id/edit" element={<EditBook />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/store" element={<Store/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/stocks" element={<Stock />} />
        <Route path="/stocks/new" element={<NewStock />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
