import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Email from './pages/Email'
import Verify from './pages/Verify'
import Home from './pages/Home'

const Auth = () => {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Email/>} />
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/' element={<Home/>}/>

    </Routes>
    </>
  )
}

export default Auth