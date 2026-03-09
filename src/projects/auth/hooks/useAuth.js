import axios from "axios"
import { ApiEndpoint } from "../const/api-endpoint"

export default function useAuth() {

    const { otp, verify, exchange, profile } = ApiEndpoint()

    const sendOtp = async ({ email }) => {
        try {
            if (!email) return
            const res = await axios.post(otp, {email})
            if (res.status < 400) {
                const email = res.data.data.email;
                console.log(email);

                if (email) {
                    return true
                }

            }
        } catch (error) {
            return false
        }
    }

    const veryfyOpt = async ({ otp, email }) => {
        try {
            if (!otp || !email) return
            const res = await axios.post(verify, {
                email, otp
            })
            if (res.status < 400) {
                setTimeout(async () => {
                    const code = res.data.data.code;
                
                 await  exchangeCode({code})
                }, 2000)
                return true
            }

        } catch (error) {
            console.log(error);

        }
    }

    const exchangeCode = async ({ code }) => {
        try {
            const res = await axios.post(exchange, { code })
            if(res.status < 400) {
                const accessToken =  res.data.data.accessToken
                if(accessToken){
                   setTimeout(async () => {
                    await me({accessToken})
                   }, 2000)
                }
            }
        } catch (error) {

        }
    }

    const me = async ({accessToken}) => {
        try {
            const res = await axios.get(profile, {
                headers:{
                    Authorization: `Bearer ${accessToken}`
                }
            })
            if(res.status < 400){
                const user = res.data.data
                console.log(user);
            }
        } catch (error) {
            
        }
    }

    return {
        sendOtp,
        veryfyOpt
    }
}