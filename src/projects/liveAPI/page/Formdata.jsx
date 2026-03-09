import React, { useEffect, useState } from "react";
import useApidata from "../lib/useApidata";
import { useRcdata } from "../provider/Rcuser";
import { useNavigate } from "react-router-dom";

const Formdata = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [emailId, setEmailId] = useState("");
  const [Address, setAddress] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { userdata } = useRcdata();
  
  const { fetchUserinfo, UserDelete, CreateUser} = useApidata();

  const [] = useState(false);

  useEffect(() => {
    fetchUserinfo();
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter desination"
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Enter Contact no"
          onChange={(e) => {
            setContactNo(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter EMail id "
          onChange={(e) => {
            setEmailId(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter UserName"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="ENter password  "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          onClick={() => {
            CreateUser({
              name,
              designation,
              contactNo,
              emailId,
              Address,
              userName,
              password,
            });
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>ContactNo</th>
              <th>EmailId</th>
              <th>Address</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {userdata?.map((e) => (
              <tr key={e?.id}>
                <td>{e?.id}</td>
                <td>{e?.name}</td>
                <td>{e?.designation}</td>
                <td>{e?.contactNo}</td>
                <td>{e?.emailId}</td>
                <td>{e?.address}</td>
                <td>{e?.userName}</td>
                <td>{e?.password}</td>

                <td>
                  <button
                    onClick={() => {
                      UserDelete({ id: e.id });
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => navigate(`/updatedataform/${e.id}`)}>
                    update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Formdata;
