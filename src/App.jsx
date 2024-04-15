import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import About from './Componant/About'
import Home from './Componant/Home'
import Navbar from './Componant/Navbar'
import Contact from './Componant/Contact'
import Footer from './Componant/Footer'
import ErrorPage from './Componant/ErrorPage'
import Shop from './Componant/Shop'
import Cart from './Componant/Cart'
import Login from './Componant/Login'
import { useState } from 'react'
import Signup from './Componant/Signup'
import SingleProduct from './Componant/SingleProduct'

function App() {

  let [isLogedin, setIsLogedin] = useState(false)
  let [userName, setUserName] = useState('')
  console.log('app.js', userName)

  return (
    <>
      <BrowserRouter>
        <Navbar isLogedin={isLogedin} checkData={setIsLogedin} userName={userName} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          {
            isLogedin ? <>
              <Route path='/shop/singleproduct/:id' element={<SingleProduct />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/cart' element={<Cart />} />
            </>
              : <>
                <Route path="*" element={<Navigate to="/login" />} />
              </>
          }


          <Route path='/login' element={<Login checkData={setIsLogedin} setUserName={setUserName} />} />
          <Route path='/signup' element={<Signup checkData={setIsLogedin} />} />


          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
