import { createContext, useContext, useState } from "react";


export const RcuserContext = createContext(null);


export function Rcuser({children}){
    const [userdata,setUserdata]=useState([]);

    const value={
        userdata,
        setUserdata
    }

    return(
        <>
        <RcuserContext.Provider value={value}>
            {children}
        </RcuserContext.Provider>
        </>
    )
}


export function useRcdata(){
    return useContext(RcuserContext);
}