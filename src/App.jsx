import React from "react"
import Navbar from "./components/Navbar"
import HeroBanner from "./components/HeroBanner"
import CategoryShowcase from "./components/Category"
import FeatureProducts from "./components/FeatureProducts"
import Collections from "./components/Collections"
import LatestProducts from "./components/LatestProducts"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {


  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Navbar />
      <HeroBanner />
      <CategoryShowcase />
      <FeatureProducts />
      <Collections />
      <LatestProducts />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
