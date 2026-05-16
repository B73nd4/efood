import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'

import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurant />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}

export default App
