import axios from "../config/axios";


export const getUserProfile = async ()=>{
    const res =  await axios.get("/users/profile");
    return res.data.data
}