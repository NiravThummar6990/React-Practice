import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Authguard = ({children}) => {

    const navigate = useNavigate();

    const user = JSON.parse( localStorage.getItem("LoginData"))

      const {jwtToken:ji,refreshToken} = user
      

    useEffect(()=>{
           if(!ji || !refreshToken){
               return navigate("/login")
           }
    },[user])

     return  children
}
export default Authguard