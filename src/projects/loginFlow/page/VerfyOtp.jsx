import { LogIn, Square } from 'lucide-react'
import React, { useState } from 'react'
import { useProvider } from '../provider/Loginflw'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerfyOtp = () => {

  const navigate = useNavigate();

  const [otp,setOtp] = useState(0)

  const {email} = useProvider();

  const verifyOtp = async() => {
    if(!otp){
      return null
    }
    try {
     
      const res = await axios.post("https://auth-service.fluoce.com/email/verify",{email, otp})

      if(res)
      {
        navigate('/')
      }
    } catch (error) {
      console.error(error);
      
    }
  }

  return (
    <>
     <div className="flex justify-center items-center ">
     <div className="mt-10 flex flex-col gap-8 w-full max-w-80">
     <div>
            <h1 className="text-xl font-semibold flex gap-2 items-center"><Square size={30}/>welcomo to Our Backyard</h1>
            <p>Verify your OTP <br /> {email}</p>
          </div>
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="OTP"
              className="border p-3 w-[80%] rounded px-4 border-neutral-500/20"
              onChange={(e)=>{setOtp(e.target.value)}}
            />
            <button className="border p-3 w-[20%] rounded border-neutral-500/20 " onClick={()=>verifyOtp()}>
            <LogIn />
            </button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <div className="h-px bg-neutral-500/10 flex-1"></div>
            <div className="text-neutral-500">or continue with</div>
            <div className="h-px bg-neutral-500/10 flex-1"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerfyOtp