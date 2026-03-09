import React, { useState } from 'react'
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Email = () => {

    const[ email,setEmail]=useState("");

    const navigate = useNavigate();

    const {sendOtp} = useAuth();

    const onsubmit =async(e)=>{

        e.preventDefault();

        const success = await sendOtp({email})

        if(success)
        {
            navigate("/verify")
        }
    }

  return (
   <>
    <form onSubmit={onsubmit}>

        <input type="email" required onChange={(e)=>{setEmail(e.target.value)}} />
        <button>Submit</button>

    </form>
   </>
  )
}

export default Email