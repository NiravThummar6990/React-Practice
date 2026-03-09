import axios from 'axios'
import { ApiEndpoint } from '../const/api-endpoint'
import { useGlobal } from '../provider/Loginemail'
import { useState } from 'react'

const usePost = () => {
    const { email, emOtp } = useGlobal()
    const { otp, verify,exchange ,profile} = ApiEndpoint()

    const otpSend = async () => {
        try {
            if (!email) return false
            const res = await axios.post(otp, { email })
            if (res.status < 400) {
                const sendEmail = res.data.data.email
                if (sendEmail) {
                    return true
                }
            }
            return false
        } catch (error) {
            console.error(error)
            
        }
    }

    const otpVerify = async () => {
        try {
            if (!email || !emOtp) return false
            const res = await axios.post(verify, { email, otp: emOtp })
            if (res.status < 400) {
                const code = res.data.data.code
                if (code) {
                    await exchangecode({ code })
                }
                return true
            }
            return false
        } catch (error) {
            console.error(error)
            return false
        }
    }

    const exchangecode = async({code}) => {
      
        try {
            if(!code) return false

            const res = await axios.post(exchange,{code}) 
            if(res.status<400)
            {
                const accessToken =  res.data.data.accessToken
               if(accessToken)
               {
                setTimeout(async ()=>{
                    await me({accessToken})
                },2000)
               }
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    const me = async({accessToken})=>{
        const [userid,setUserid]=useState('');
        try {
            const res = await axios.get(profile,{
                headers:{
                    Authorization : `Bearer ${accessToken}`
                }

               
            })
            if(res.status<400)
            {
                const user = res.data.data;
                setUserid(user)

                console.log(user)
            }


        } catch (error) {
            console.log(error);
            
        }
        
    }

    return {
        otpSend,
        otpVerify
    }
}

export default usePost