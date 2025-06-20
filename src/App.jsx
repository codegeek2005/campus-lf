import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddListingPage from './pages/AddListingPage';
import Navbar from './components/MyNavbar';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ListingsPage from './pages/ListingsPage';
import SingleListing from './pages/SingleListing';
import About from './pages/About';


const App = () => {

  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<AddListingPage/>} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/listings" element={<ListingsPage/>} />
        <Route path="/listing/:id" element={<SingleListing />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
