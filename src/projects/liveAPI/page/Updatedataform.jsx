import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApidata from "../lib/useApidata";

const Updatedataform = () => {
  const { id } = useParams();
  const {updateApi} = useApidata();
  

  const Tokan ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJVc2VySWQiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJzdWIiOiIxIiwianRpIjoiZTNlNzcwNzUtZDBhNy00ZTVhLThjYTgtNGYzNWQ0ZjE3MDg2IiwiZXhwIjoxNzcyMTI1MzI5LCJpc3MiOiJBcHAiLCJhdWQiOiJHZW5lcmFsIn0.-irly5lOy4tiiOP1do8GuAfcHBTrszmoBWBXGgkBr70";

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [address, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://protax-api.printftech.com/api/RcUser/Get/${id}`,
        {
          headers: {
            Authorization: `Bearer ${Tokan}`,
          },
        },
      );

      const data = res.data.data;

      setName(data.name);
      setDesignation(data.designation);
      setContactNo(data.contactNo);
      setEmailId(data.emailId);
      setAddress(data.address);
      setUserName(data.userName);
      setPassword(data.password);
    } catch (error) {
      console.error(error.res.data.message);
    }
  };


  const updateUserData = async (e) =>{
        e.preventDefault();
    try {
        // const res = await axios.post({})
        const formData = new FormData();
        formData.append("Id", id)
        formData.append("Name", name)
        formData.append("Designation",designation)
        formData.append("ContactNo",contactNo)
        formData.append("EmailId",emailId)
        formData.append("Address",address)
        formData.append("UserName",userName)
        formData.append("Password",password)

        const res = await axios.post(`https://protax-api.printftech.com/api/RcUser/Update`, formData,{headers:{
                Authorization : `Bearer ${Tokan}`,
                "Content-Type" : "multipart/form-data"
            }})

        if(res.data.status){
            alert(res.data.message  )
        }
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={updateUserData}>
        <label htmlFor="">Name : </label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="">Designation: </label>
        <input
          type="text"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <br />
        <label htmlFor="">ContactNo: </label>
        <input
          type="text"
          placeholder="ContactNo"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
        <br />
        <label htmlFor="">EmailId: </label>
        <input
          type="text"
          placeholder="EmailId"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <br />
        <label htmlFor="">Address: </label>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <label htmlFor="">UserName: </label>
        <input
          type="text"
          placeholder="UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <label htmlFor="">Password: </label>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" >Submit</button>
      </form>
    </>
  );
};

export default Updatedataform;
