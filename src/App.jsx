import { useState } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer, ProductDetail, SearchFeed } from './components'
import {
  Home,
  About,
  Products,
  Location,
  Contact,
  DeliveryPolicy,
  Refund,
  Terms,
  AnimeHousePoints
} from './pages'
import { CartProvider } from './CartContext'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/products' element={<Products />} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/location' element={<Location />} />
              <Route path='/contact-us' element={<Contact />} />
              <Route path='/search/:searchTerm' element={<SearchFeed />} />
              <Route path='/shipping-policy' element={<DeliveryPolicy />} />
              <Route path='/refund-policy' element={<Refund />} />
              <Route path='/terms & condition' element={<Terms />} />
              <Route
                path='/anime-house-points'
                element={<AnimeHousePoints />}
              />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </ErrorBoundary>
  )
}

export default App
