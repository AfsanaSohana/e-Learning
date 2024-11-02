import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function FormJoin() {

  const [inputs, setInputs] = useState({batch_id:'',course_id:'',student_id:'',enroll_date:'',fees:'',trans_number:'',trans_id:'',payment_method:''});
  
  const [batchData, setbatchData] = useState([])
  const navigate=useNavigate();
  const {batch_id} = useParams();
  let studentdata=JSON.parse(localStorage.getItem("frontuserdata"));
   
  function getDatas(){
    axios.get(`${process.env.REACT_APP_API_URL}/batch/${batch_id}`).then(function(response) {
      setbatchData(response.data.data);
      setInputs(values => ({...values, ['course_id']: response.data.data.course_id}));
      setInputs(values => ({...values, ['fees']: response.data.data.fees}));
      setInputs(values => ({...values, ['student_id']: studentdata.id}));
    });
  }

  useEffect(() => {
    if(batch_id){
      getDatas();
      setInputs(values => ({...values, ['batch_id']: batch_id}));
    }
  }, []);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}

const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(inputs)
    
    try{
        let apiurl=`/batch_en_req/create`;
        let response= await axios({
            method: 'post',
            responsiveTYpe: 'json',
            url: `${process.env.REACT_APP_API_URL}${apiurl}`,
            data: inputs
        });
        console.log(response)
        navigate('/')
    } 
    catch(e){
        console.log(e);
    }
}
  return (
    <AdminLayout>
      <div className='container card col-4 p-3 ps-4 pe-3 mt-4' contentJustify='center' style={{ backgroundColor: '#cce6ff', borderRadius: '3px' }}>
        <strong><h5 className='text-align-center text-primary'>পেমেন্ট করুন</h5></strong>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-12'>
                {/* {batch_id && <input type="text" className="form-control" name="batch_id" defaultValue={batch_id} />
                }
                {batchData && <input type="text" className="form-control" name="batch_id" defaultValue={batchData.course_id} />
                }
                {studentdata && <input type="text" className="form-control" name="batch_id" defaultValue={studentdata.id} />
                }
                {batchData && <input type="text" className="form-control" name="batch_id" defaultValue={batchData.fees} />
                }
               */}
              

              <label htmlFor="trans_number" className="form-label text-primary">ট্রানজেকশন নাম্বার </label>
              <div className='row card border-primary'>
                <input type="text" className="form-control" id="trans_number" name="trans_number" onChange={handleChange} placeholder="02135678434" />
              </div>

              <label htmlFor="trans_id" className="form-label mt-2  text-primary">ট্রানজেকশন আইডি</label>
              <div className='row card border-primary'>
                <div className='col-12 p-0'>
                  <input type="text" className="form-control" id="trans_id" name="trans_id" onChange={handleChange} placeholder="032656" />
                </div>
              </div>

              <label htmlFor="email" className="form-label mt-2  text-primary">পেমেন্ট মেথড</label>
              <div className='row card border-primary'>
                <select id="payment_method" className="form-control" name="payment_method" onChange={handleChange}>
                  <option value="">পেমেন্ট মেথড পছন্দ করুন </option>
                  <option value="বিকাশ">বিকাশ</option>
                  <option value="নগদ">নগদ</option>
                  <option value="রকেট">রকেট</option>
                  <option value="ডাচ-বাংলা">ডাচ-বাংলা</option>
                </select>
              </div>
            </div>

            <div className='col-10 mt-3'>
              <button type="submit" className="btn btn-primary col-12">প্রবেশ করুন</button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default FormJoin;

