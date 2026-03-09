import { Send, SquareUser, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Input from "../comopnents/Input";
import { useGlobal } from "../provider/GlobalProvider";
import Textarea from "../comopnents/Textarea";
import Dropdown from "../comopnents/Dropdown";
import Button from "../comopnents/Button";
import { Link } from "react-router-dom";
import useUserApi from "../hook/useUserApi";

const UserAdd = () => {
  const { handleChange, formData,userId ,setFormData,setUserId} = useGlobal();
  const {useCreateUser,useGetSingleUser,useUpdateUser} = useUserApi();

  const [error, setError] = useState("")

  const onsubmit =async (e) => {
    e.preventDefault();

    if(formData.firstname.length > 20) {
      setError("First name most be 20 characters")
      return
    }

    if(formData.mobile.length !== 10){
      setError("Number must be 10 degit")
      return
    }
   
    {userId? await useUpdateUser() : await useCreateUser()}
    
    
  };

  useEffect(() => {
    console.log(userId);
    
    if (userId) {
      const fetchUser = async () => {
        const user = await useGetSingleUser({ id: userId });
  
        if (user) {
          setFormData({
            firstname: user.firstName || "",
            lastname: user.lastName || "",
            address: user.address || "",
            mobile: user.contactNo || "",
            email: user.emailId || "",
            role: user.role || "",
          });
        }
       
      };
  // console.log(fetchUser());
  
      fetchUser();
    }
    else{
      // 🔹 NEW USER → form reset
      setFormData({
        firstname: "",
        lastname: "",
        address: "",
        mobile: "",
        email: "",
        role: "",
      });
    
  }
  }, [userId]);

  return (
    <>
    
      <div className="md:m-4 md:p-6 m-4 p-2 bg-white shadow-xl w-100%">
        <Link to="/userlist">
          <div className="hover:peer-out-of-range: mb-4 font-semibold text-2xl">
            <u>&lt; &nbsp;Back</u>
          </div>
        </Link>
        <div className="flex  items-center gap-4">
          <div className="bg-[#c9c4d3] w-15 h-15 flex rounded-4xl justify-center items-center text-blue-700">
            <SquareUser size={"30px"} />
          </div>
          <div className="font-bold text-3xl">User Details</div>
        </div>
        <form onSubmit={onsubmit}>
          <div className="md:grid md:grid-cols-6 grid-cols-1 md:gap-x-4 gap-x-2 md:gap-y-3 mt-4">
            <Input
              className={"col-span-3"}
              inputtype="text"
              Label="First Name"
              name="firstname"
              onChange={handleChange}
              value={formData.firstname}
              inputplaceholder="Enter First Name"
              id="firstName"
              required
            />
            <Input
              className={"col-span-3"}
              inputtype={"text"}
              Label={"Last Name"}
              name={"lastname"}
              onChange={handleChange}
              value={formData.lastname}
              inputplaceholder={"Enter Last Name"}
              required
              id={"lastName"}
            />
            <Textarea
              className={"col-span-6"}
              Label={"Address"}
              name={"address"}
              onChange={handleChange}
              value={formData.address}
              txtplaceholder={"Enter Address"}
              required
              id={"Address"}
            />
            <Input
              className={"col-span-2"}
              inputtype={"text"}
              Label={"Mobile Number"}
              name={"mobile"}
              onChange={handleChange}
              value={formData.mobile}
              inputplaceholder={"Enter Mobile Number"}
              required
              id={"mobile"}
            />
            <Input
              className={"col-span-2"}
              inputtype={"email"}
              Label={"Email Id"}
              name={"email"}
              onChange={handleChange}
              value={formData.email}
              inputplaceholder={"Enter Email Id"}
              required
              id={"EMAILID"}
            />
            <Dropdown
              classname={"col-span-2"}
              label1={"Role"}
              id={"role"}
              name={"role"}
              role={["Admin", "User"]}
              onchange={handleChange}
            />
          </div>

          <div className="pt-8">
            <hr />
          </div>
          {error &&  (
            <span className="text-sm font-medium text-red-500">{error}</span>
          )}
          <div className="flex md:justify-end  md:gap-4 gap-2 justify-center mt-4">
          <Link to="/userlist">
            <div>
              <Button
                btnname={"Cancle"}
                icon={<X />}
                className={"bg-red-700 text-white w-32 h-12 rounded-xl"}
              />
            </div></Link>
            <div>
              <Button
                btnname={"Submit"}
                icon={<Send />}
                className={"bg-green-500 text-white w-32 h-12 rounded-xl"}
                
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserAdd;
