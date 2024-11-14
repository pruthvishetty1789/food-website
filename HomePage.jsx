// src/components/HomePage.js
import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProductPage from './ProductPage';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <center><h1>Welcome to Cake & Bake</h1></center>
      <Slider {...settings}>
        <div>
          <motion.img
            src={'https://tse3.mm.bing.net/th?id=OIP.Xp2RQVjyCr3kN1G8VhcK_wHaE_&pid=Api&P=0&h=180'}
            alt="Delicious Samosa"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div>
          <motion.img
            src={'https://tse4.mm.bing.net/th?id=OIP.U-byr6AmPCFWq9q6Ay10VwHaE7&pid=Api&P=0&h=180'}
            alt="Vada sambar"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div>
          <motion.img
            src={'https://tse1.mm.bing.net/th?id=OIP.h1zAgk9VIfTk9S2UxpDMkAHaEo&pid=Api&P=0&h=180'}
            alt="chocolate Cake"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </Slider>

      <ProductPage/>
    </motion.div>
  );
};

export default HomePage;
