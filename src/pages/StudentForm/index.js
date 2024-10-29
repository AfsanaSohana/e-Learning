import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

const StudentForm = () => {
  const [inputs, setInputs] = useState({id:'',student_name:'',email:'',address:'',contact_number:'',photo:'',password:''});
  const [selectedfile, setSelectedFile] = useState([]);
  
  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
  }

  const handelFile = (e) => {
    setSelectedFile(e.target.files)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    for (let i = 0; i < selectedfile.length; i++) {
      formdata.append('files[]', selectedfile[i])
    }
    for (const property in inputs) {
      formdata.append(property, inputs[property])
    }
    try{
      let apiurl=`/student/create`;
      let response = await axios.post(apiurl, formdata)
      
      console.log(response)
      //navigate('/student')
    }catch(e){
      console.log(e);
    }
  }
  return (
    <AdminLayout>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <h2 className="text-center text-primary mb-4">Student Registration Form</h2>
          <form onSubmit={handleSubmit} className="border p-4 bg-light rounded">

            <div className="mb-3">
              <label htmlFor="student_name" className="form-label text-primary">Name</label>
              <input type="text" className="form-control" id="student_name" name="student_name"  defaultValue={inputs.student_name} onChange={handleChange}
                placeholder="Enter student's name"/>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-primary">Contact Number</label>
              <input type="text" className="form-control" id="contact_number" name="contact_number"
                defaultValue={inputs.contact_number} onChange={handleChange} placeholder="Enter student's contact number"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-primary">Email</label>
              <input type="email" className="form-control" id="email" name="email"
                defaultValue={inputs.email} onChange={handleChange} placeholder="Enter student's email"/>
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label text-primary">Address</label>
              <input type="text" className="form-control" id="address"
                name="address"defaultValue={inputs.address}onChange={handleChange}  placeholder="Enter student's address"/>
            </div>

            <div className="mb-3">
              <label htmlFor="photo" className="form-label text-primary"> Photo</label>
              <input type="file" className="form-control" id="photo" name="photo"  multiple defaultValue={inputs.photo} onChange={handelFile}/>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label text-primary">Password </label>
              <input type="password" className="form-control" id="password" name="password"
               defaultValue={inputs.password} onChange={handleChange} placeholder="Enter a password"/>
            </div>
            <button type="submit" className="btn btn-primary w-100"> Submit
</button>
          </form>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
};

export default StudentForm;
 
