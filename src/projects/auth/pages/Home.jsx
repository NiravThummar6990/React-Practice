import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();
    // const [login,setLogin]=useState(false);

    // if()

  return (
    <>
        <div>Home</div>

        <button onClick={()=>{navigate("/login")}}>Login</button>
        
    </>
  )
}

export default Home