import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SinglePost from './Pages/SinglePost'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App