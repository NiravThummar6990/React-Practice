import React from 'react'
import Formdata from './page/Formdata'
import { Route, Routes } from 'react-router-dom'
import Updatedataform from './page/Updatedataform'

const LiveApi = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Formdata/>}/>
    <Route path='/updatedataform/:id' element={<Updatedataform/>} />
   </Routes>
   
   </>
  )
}

export default LiveApi