import React from 'react'
import styles from "./pages.module.css";
import BannerAndSearch from "../layout/BannerAndSearchBar";
import Navbar from "../layout/Navbar";
import Footer from '../layout/Footer';
const Gallery = () => {
  return (
    <>
      <BannerAndSearch />
      <Navbar />
      <Footer />
    </>
  )
}

export default Gallery