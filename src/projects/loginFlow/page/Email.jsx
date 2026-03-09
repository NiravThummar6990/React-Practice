import { LogIn, Square } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useProvider } from "../provider/Loginflw";
import axios from "axios";

const Email = () => {
  const navigate=useNavigate()
  const {email,setEmail} = useProvider()

  const sendEmail = async () => {
    if(!email)return
    try {
      const res = await axios.post("https://auth-service.fluoce.com/email",{email})
      console.log(res.data);
      if(res.data.success)
      {
        navigate("/verify")
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
            <p>Sign up with email or constinue with a social.</p>
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border p-3 w-[80%] rounded px-4 border-neutral-500/20"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <button className="border p-3 w-[20%] rounded border-neutral-500/20 " onClick={()=>sendEmail()}>
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
  );
};

export default Email;
