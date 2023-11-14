import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';
import Mid from '../components/mid/Mid';

import Quote from '../components/quote/Quote';
import Contacts from '../components/contacts/Contacts';

const Home = () => {
  return (
    <div className='hme' >
        <Navbar />
        <Hero />
        <Mid />
        <Quote />
        <Contacts />
        <Footer />
        
    </div>
  )
}

export default Home