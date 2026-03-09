import { createContext, useContext, useState } from "react";


export const Loginprocescontext =createContext(null);


export function LoginprocesProvider  ({children})  {

    const [email,setEmail]=useState('');
    const [emOtp,setEmOtp]=useState();

    const value = {
        email,
        setEmail,
        emOtp,
        setEmOtp
    }

    return(
        
        <Loginprocescontext.Provider value={value}>
            {children}
        </Loginprocescontext.Provider>
        
    )
}


export function useGlobal(){
    return useContext(Loginprocescontext);
}