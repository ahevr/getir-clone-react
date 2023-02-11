import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Categories from 'components/Categories'
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Campain from 'components/Campain';
import Footer from 'components/Footer';
import Cards from 'components/Cards';

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Categories />
      <Campain />
      <Cards />
      <Footer />
    </div>
  )
}

export default App