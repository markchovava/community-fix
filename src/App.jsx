import React from 'react'
import { Routes, Route } from 'react-router-dom'



import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import CityPage from './pages/City/CityPage'
import DistrictPage from './pages/District/DistrictPage'
import RoadPage from './pages/Road/RoadPage'
import ContactPage from './pages/Contact/ContactPage'
import RoadSingle from './pages/Road/RoadSingle'
import DistrictSingle from './pages/District/DistrictSingle'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cities' element={<CityPage />} />
        <Route path='/roads' element={<RoadPage />} />
        <Route path='/road/:id' element={<RoadSingle />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/districts' element={<DistrictPage />} />
        <Route path='/district/:id' element={<DistrictSingle />} />
      </Routes>
    </>
  )
}

export default App
