import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminguard = ({children}) => {

    const navigate = useNavigate()

    const admin = JSON.parse(localStorage.getItem("LoginData"))

//     useEffect(()=>{
//         // The issue is because of operator precedence: !admin?.role=="Admin" is parsed as (!admin?.role)=="Admin" 
//         // which is not what we want.
//         // So we need to check: if admin is falsy, or admin.role is not "Admin"
//         if (!admin || admin?.role !== "Admin") {
//             navigate('/login')
//         }
//    },[admin])


    return children
}

export default Adminguard