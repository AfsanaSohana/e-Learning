import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link, useNavigate } from 'react-router-dom';
import {login} from '../../Api/AllApi'

const StudentLogin = () => {
  const [inputs, setInputs] = useState({contact_number:'',password:''});
  
  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let check = await login(inputs);
    console.log(check)
    if(check){
        window.location=process.env.REACT_APP_BASE_URL
    }else{
        alert("Sorry password or email address is wrong!");
    }
  }
  return (
    <AdminLayout>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <h2 className="text-center text-primary mb-4">Student Login Form</h2>
          <form onSubmit={handleSubmit} className="border p-4 bg-light rounded">


            <div className="mb-3">
              <label htmlFor="email" className="form-label text-primary">Contact Number</label>
              <input type="text" className="form-control" id="contact_number" name="contact_number"
                defaultValue={inputs.contact_number} onChange={handleChange} placeholder="Enter student's contact number"/>
            </div>
            
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-primary">Password </label>
              <input type="password" className="form-control" id="password" name="password"
               defaultValue={inputs.password} onChange={handleChange} placeholder="Enter a password"/>
            </div>
            <button type="submit"href="/StudentLogin" className="btn btn-primary w-100"> Submit
</button>
          </form>
          
          <Link to={"/student_register"}  href=""className="btn btn-link">Register Now</Link>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
};

export default StudentLogin;
 
