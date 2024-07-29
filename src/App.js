import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './compoent/Navebar'; // Adjust the path and component name as needed
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
