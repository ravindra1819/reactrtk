import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Team from './components/Team'
// import Header from './components/Header'
// import Counter from './components/Counter'
// import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      {/* <Header />
      <Counter />
      <Footer /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </div>
  )
}
