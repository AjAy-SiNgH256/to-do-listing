import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header/header';
import Footer from './components/Layout/Footer/footer';
import Home from './views/Home/home';
import Summary from './views/Summary/summary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
    <Router>
      <div className='header_block'>
      <Header/>
      </div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/summary" element={<Summary/>}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}
