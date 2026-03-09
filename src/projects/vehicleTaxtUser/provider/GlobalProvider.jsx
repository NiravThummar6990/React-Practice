import {  createContext, useContext, useState } from "react";



export const  GlobalContext = createContext();


export default function GlobalProvider ({children}) {

    const [search,setSearch]=useState("");
    const [getData,setGetData]=useState([])
    const [userId,setUserId]=useState("");
    const [openSidebar, setOpenSidebar] = useState(false);
    const [pisNo,setPisNo]=useState("");
    const [password,setPassword]=useState("");


    // alag alag state banava ni jagya aek aek ma multiple banava form data 
    const [formData,setFormData] = useState({
        "firstname" : "",
        "lastname" : "",
        "address" : "",
        "mobile" : "",
        "email" : "",   
        "role" : "",
    })


    // aek sathe badhani value store thay jay aek aek ni karvi na pade
    const handleChange=(e)=>{

        const {name,value}=e.target;

        setFormData((prev)=>({
            ...prev,
           [name] : value
        }))
       
    }

    // Add user vala page ma enter thavi tyare je edit karu hoy ae data na rey aena mate
    const resetForm = () => {
        setFormData({
            ID : "",
          firstname: "",
          lastname: "",
          address: "",
          mobile: "",
          email: "",
          role: "",
        });
      };


    const value={
        formData,
        setFormData,
        handleChange,
        search,
        setSearch,
        getData,
        setGetData,
        resetForm,
        userId,
        setUserId,
        openSidebar, 
        setOpenSidebar,
        pisNo,
        setPisNo,
        password,
        setPassword,

    }

    return(
        
            <GlobalContext.Provider value={value}>
            {children}
            </GlobalContext.Provider>
        
    )

}

export function useGlobal(){
    return useContext(GlobalContext);
}