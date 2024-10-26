import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";

const StudentForm = () => {
    const [formData, setFormData] = useState({id:'',student_name:'',email:'',address:'',contact_number:'',photo:'',password:''});
    const [selectedfile, setSelectedFile] = useState([]);
  const navigate=useNavigate();

  const {id} = useParams();
  
  function getDatas(){
      axios.get(`${process.env.REACT_APP_API_URL}/student/${id}`).then(function(response) {
          setFormData(response.data.data);
      });
  }

  useEffect(() => {
      if(id){
          getDatas();
      }
  }, []);

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData(values => ({...values, [name]: value}));
  }

  // const handleSubmit = async(e) => {
  //     e.preventDefault();
  //     console.log(formData)
  

      const handelFile = (e) => {
          setSelectedFile(e.target.files)
      }
      const handleSubmit = async (e) => {
          e.preventDefault();
  
          const formData = new FormData();
  
          for (let i = 0; i < selectedfile.length; i++) {
              formData.append('files[]', selectedfile[i])
          }
  
          for (const property in formData) {
              formData.append(property, formData[property])
          }
      
      try{
          let apiurl='';
          if(formData.id!=''){
              apiurl=`/student/edit/${formData.id}`;
          }else{
              apiurl=`/Student/create`;
          }
          
          let response= await axios({
              method: 'post',
              responsiveTYpe: 'json',
              url: `${process.env.REACT_APP_API_URL}${apiurl,formData}`,
              data: formData
          });
          console.log(response)
          navigate('/student')
      } 
      catch(e){
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
              <input type="text" className="form-control" id="student_name" name="student_name" value={formData.student_name} onChange={handleChange}
                placeholder="Enter student's name"/>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-primary">Email</label>
              <input type="email" className="form-control" id="email" name="email"
                value={formData.email} onChange={handleChange} placeholder="Enter student's email"/>
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label text-primary">Address</label>
              <input type="text" className="form-control" id="address"
                name="address" value={formData.address}onChange={handleChange}  placeholder="Enter student's address"/>
            </div>

            <div className="mb-3">
              <label htmlFor="photo" className="form-label text-primary"> Photo</label>
              <input type="file" className="form-control" id="photo" name="photo" onChange={handleChange}/>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label text-primary">Password </label>
              <input type="password" className="form-control" id="password" name="password"
                value={formData.password} onChange={handleChange} placeholder="Enter a password"/>
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
