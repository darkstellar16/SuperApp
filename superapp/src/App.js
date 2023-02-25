import React from 'react';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='register_route' element={<Register />}></Route>
          <Route path='selectCategory_route' element={<SelectCategory />} ></Route>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;
