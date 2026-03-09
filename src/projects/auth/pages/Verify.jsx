import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Verify = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState();
  const [email, setEmail] = useState("");

  const { veryfyOpt } = useAuth();

  const onsubmit = async (e) => {
    e.preventDefault();

    const success = await veryfyOpt({ otp, email });
    if (success) {
      navigate("/");
    }
  };

  return (
    <>
      <form action="" onSubmit={onsubmit}>
        <input
          type="number"
          required
          onChange={(e) => setOtp(e.target.value)}
        />
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Verify;
