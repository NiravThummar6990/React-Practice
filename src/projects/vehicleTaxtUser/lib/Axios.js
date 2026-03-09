import axios from "axios";

export const api = axios.create({
    baseURL:"https://vehicletax-api.printftech.com/api/User"
})