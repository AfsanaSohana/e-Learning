import axios from 'axios';
import {useNavigate } from "react-router-dom";

const login = async (data) => {
    const LOGIN_ENDPOINT = `${process.env.REACT_APP_API_URL}/student/login`;
    try{
        let response= await axios({
            method: 'post',
            url: LOGIN_ENDPOINT,
            data: data
        });
        
        if(response.data.data.token){
            localStorage.setItem("access_token", response.data.data.token);
            localStorage.setItem("userdata", JSON.stringify(response.data.data.data));
            return true;
        }else{
            return false;
        }
    }catch(e){
       // return false;
        console.log(e);
    }
}

const logout = ()=>{
    localStorage.removeItem("access_token");
    localStorage.removeItem("userdata");
    window.location.reload()
}

export  { login, logout }