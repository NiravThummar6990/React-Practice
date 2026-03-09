import { createContext, useContext, useState } from "react";


export const loginContext = createContext(null);

export function Loginflw ({children}) {
    const [email,setEmail] = useState('');

    const value = {
        email,
        setEmail
    }

    return(
        <>
            <loginContext.Provider value={value}>
                {children}
            </loginContext.Provider>
        </>
    )
}

export function useProvider(){
    return useContext(loginContext);
}