import './styles/global.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './components/Header';

import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Main } from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
