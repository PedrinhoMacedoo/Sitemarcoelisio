import React from 'react'
import Hero from './Hero'
import About from './About'
import Acting from './Acting'
import Social from './Social'
import Lectures from './Lectures'
import MediaStats from './MediaStats'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <main className="bg-background-light text-gray-800 font-sans antialiased min-h-screen relative overflow-x-hidden transition-colors duration-300">
      <Hero />
      <About />
      <Acting />
      <Social />
      <Lectures />
      <MediaStats />
      <Footer />
    </main>
  )
}

export default App
