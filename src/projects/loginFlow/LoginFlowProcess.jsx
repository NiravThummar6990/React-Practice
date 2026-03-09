import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './page/Welcome'
import Email from './page/Email'
import VerfyOtp from './page/VerfyOtp'

const LoginFlowProcess = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/email' element={<Email/>}/>
        <Route path='/verify' element={<VerfyOtp/>}/>
    </Routes>
    </>
  )
}

export default LoginFlowProcess