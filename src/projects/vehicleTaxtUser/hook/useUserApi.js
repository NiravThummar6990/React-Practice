import axios from "axios";
import { api } from "../lib/Axios";
import { useGlobal } from "../provider/GlobalProvider";
import { useNavigate } from "react-router-dom";

const Tokan = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJzdWIiOiJBZG1pbiIsImp0aSI6IjkxYmJkZjU5LTVjYWItNDhmYi04NzZlLTM0Y2Y5OGMwZjM2MSIsImV4cCI6MTc3Mjg5Mzc3OCwiaXNzIjoiQXBwIiwiYXVkIjoiR2VuZXJhbCJ9.DDa_ummrtNhL4usQxsZRER3fiepNVV700e783MXsOiceyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJzdWIiOiJBZG1pbiIsImp0aSI6IjkxYmJkZjU5LTVjYWItNDhmYi04NzZlLTM0Y2Y5OGMwZjM2MSIsImV4cCI6MTc3Mjg5Mzc3OCwiaXNzIjoiQXBwIiwiYXVkIjoiR2VuZXJhbCJ9.DDa_ummrtNhL4usQxsZRER3fiepNVV700e783MXsOiceyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJzdWIiOiJBZG1pbiIsImp0aSI6IjkxYmJkZjU5LTVjYWItNDhmYi04NzZlLTM0Y2Y5OGMwZjM2MSIsImV4cCI6MTc3Mjg5Mzc3OCwiaXNzIjoiQXBwIiwiYXVkIjoiR2VuZXJhbCJ9.DDa_ummrtNhL4usQxsZRER3fiepNVV700e783MXsOiceyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJzdWIiOiJBZG1pbiIsImp0aSI6IjkxYmJkZjU5LTVjYWItNDhmYi04NzZlLTM0Y2Y5OGMwZjM2MSIsImV4cCI6MTc3Mjg5Mzc3OCwiaXNzIjoiQXBwIiwiYXVkIjoiR2VuZXJhbCJ9.DDa_ummrtNhL4usQxsZRER3fiepNVV700e783MXsOic"

const refreshTokan = "pCw3M8MnuelhlRHbn6tDBnZ8mNZV2Od+scX4VXHmjZ8="

export default function useUserApi() {

    const navigate = useNavigate()
    
const {setGetData,formData,resetForm,userId,pisNo,password} = useGlobal()

const useGetUsers = async () => {

    try {
        const res = await api.get("/Get", {
            headers: {
                Authorization: `Bearer ${Tokan}`
            }
        })
        if (res.data.status < 400) {
            // console.log(res.data.data)
            setGetData(res.data.data)
        }
    } catch (error) {
        console.log(error);

    }
}

    const useCreateUser = async() => {  
        const data = new FormData()
        data.append("FirstName",formData.firstname)
        data.append("LastName",formData.lastname)
        data.append("Address",formData.address)
        data.append("Role",formData.role)
        data.append("ContactNo",formData.mobile)
        data.append("EmailId",formData.email)
        try {
            const res = await api.post("/Create",data,{
                headers:{
                    Authorization: `Bearer ${Tokan}`,
                    "Content-Type" : "multipart/form-data"   
                }
            })

           
            if (res.data.status < 400) {
                setGetData((prev) => [...prev, res.data.data]);
                resetForm();
              }
        } catch (error) {
            console.log(error);
            
        }
    }

    const useGetSingleUser = async ({id}) => {
        try {
            const res = await api.get(`/GetById?Id=${id}`,{
                headers:{
                    Authorization : `Bearer ${Tokan}`
                }
            })
            return res.data.data
        } catch (error) {
            console.log(error);
            
        }
    }

    const useUpdateUser = async() => {
        const data = new FormData()
        data.append("Id",userId)
        data.append("FirstName",formData.firstname)
        data.append("LastName",formData.lastname)
        data.append("Address",formData.address)
        data.append("Role",formData.role)
        data.append("ContactNo",formData.mobile)
        data.append("EmailId",formData.email)
        try {
            const res = await api.post("/Update",data,{
                headers:{
                    Authorization : `Bearer ${Tokan}`,
                    'Content-Type' : "multipart/form-data"
                }
            })

            if (res.data.status<400) {
                setGetData(res.data.data)
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    const useLoginUser = async () => {
        try {
            const res = await axios.post("https://wmv3k266-7006.inc1.devtunnels.ms/api/Login",{pisNo,password})
            if(res.data.status<400)
            {
                localStorage.setItem("LoginData",JSON.stringify(res.data.data))
                navigate("/userlist")
            }
        } catch (error) {
            console.error(error);
            
        }
    }

return {
    useGetUsers,
    useCreateUser,
    useGetSingleUser,
    useUpdateUser,
    useLoginUser
}
}