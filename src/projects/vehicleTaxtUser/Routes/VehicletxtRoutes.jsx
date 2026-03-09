import React from 'react'
import Home from '../page/Home'
import { Route, Routes } from 'react-router-dom'
import Userlist from '../page/Userlist'
import UserAdd from '../page/UserAdd'
import Status from '../page/Status'
import Login from '../page/Login'
import Dashboardlayout from '../layout/Dashboardlayout'
import Authguard from '../guard/auth.guard'
import Adminguard from '../guard/Admin.guard'

const VehicletxtRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={
          <Adminguard><Dashboardlayout/></Adminguard>
            
       
        }/>
        <Route path='/userlist' element={
          //  <Authguard>
            <Userlist/>
          //  </Authguard>
        } />
        <Route path='/newuser' element={<UserAdd/>} />
        <Route path="/userlist/user-status" element={<Status/>}/>

    </Routes>
        
    </>
  )
}

export default VehicletxtRoutes