import { Routes, Route } from 'react-router-dom';
import Home from './Componants/Home';
import Products from './Componants/Products';
import Productdetails from './Componants/Prodctsdetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Productdetails />} />
      </Routes>
    </>
  );
}

export default App;
