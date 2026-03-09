import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Email from './pages/Email'
import Verify from './pages/Verify'

const Post = () => {
  return (
   <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Email/>}/>
        <Route path='/verify' element={<Verify/>}/>
   </Routes>
   </>
  )
}

export default Post