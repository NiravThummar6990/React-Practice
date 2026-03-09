import { useRcdata } from "../provider/Rcuser";
import ApiEndPoint from "./ApiEndPoint";
import axios from "axios";

const useApidata = () => {
  const { setUserdata } = useRcdata();
  const { getApi, deleteApi, postApi } = ApiEndPoint();

  const Tokan =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJVc2VySWQiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJzdWIiOiIxIiwianRpIjoiZTNlNzcwNzUtZDBhNy00ZTVhLThjYTgtNGYzNWQ0ZjE3MDg2IiwiZXhwIjoxNzcyMTI1MzI5LCJpc3MiOiJBcHAiLCJhdWQiOiJHZW5lcmFsIn0.-irly5lOy4tiiOP1do8GuAfcHBTrszmoBWBXGgkBr70";
  const fetchUserinfo = async () => {
    try {
      const res = await axios.get(getApi, {
        headers: {
          Authorization: `Bearer ${Tokan}`,
        },
      });
      if (res.status < 400 && res.data && Array.isArray(res.data.data)) {
        setUserdata(res.data.data);
      } else {
        setUserdata([]);
        console.error("Unexpected response structure in fetchUserinfo:", res);
      }
    } catch (error) {
      setUserdata([]);
      console.error("Error fetching user info:", error);
    }
  };

  const UserDelete = async ({ id }) => {
    try {
      const res = await axios.delete(`${deleteApi}?Id=${id}`, {
        headers: {
          Authorization: `Bearer ${Tokan}`,
        },
      });
      if (res.status < 400) {
        setUserdata((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const CreateUser = async ({
    name,
    designation,
    contactNo,
    emailId,
    Address,
    userName,
    password,
  }) => {
    try {
      const formData = new FormData();
      formData.append("Name", name);
      formData.append("Designation", designation);
      formData.append("ContactNo", contactNo);
      formData.append("EmailId", emailId);
      formData.append("Address", Address);
      formData.append("UserName", userName);
      formData.append("Password", password);

      const res = await axios.post(postApi, formData, {
        headers: {
          Authorization: `Bearer ${Tokan}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setUserdata((prev) => [...prev, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchUserinfo,
    UserDelete,
    CreateUser
  };
};

export default useApidata;
