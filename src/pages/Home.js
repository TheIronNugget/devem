import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';
import Mid from '../components/mid/Mid';

import Quote from '../components/quote/Quote';
import Carousel from '../components/Carousel/Carousel';
import PreCon from '../components/preContact/PreCon';
import Believe from '../components/believe/Believe';






const Home = () => {
  return (
    <div className='hme' >
        <Navbar />
        <Hero />
        <Mid />
        <Carousel />
        <Believe />
        <Quote />
        <PreCon />
        <Footer />
        
    </div>
  )
}

export default Home