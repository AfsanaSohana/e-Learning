import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation} from 'react-router-dom';
import Footer from '../../../layouts/include/footer'


import AdminLayout from '../../../layouts/AdminLayout';
import { useParams } from 'react-router-dom';

function BatchList() {
    let userdata = JSON.parse(localStorage.getItem("frontuserdata"));
    
    const [data, setData] = useState([]);
    

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/batchEnroll?student_id=${userdata.id}`)
          .then(response => {
            setData(response.data.data);
          });
      }
    
      useEffect(() => {
          getDatas();
      }, []);
    

    

     return (
    <AdminLayout>
        <div className="container-fluid custom-div justify-content-align-items-center">
            <div className='content-justify-center align-items-'>
                <span> <h1 className='text-white mt-3'>অনলাইন ব্যাচ</h1> </span>
            </div>
            <p className='text-white'>লেখাপড়ায় এক ভিন্ন মাত্রা যোগ করতে থাকছে রেকর্ডেড/লাইভ প্রোগ্রামসহ আরো অনেক কিছু</p> 
        </div>
{/* list part */}

<div className="container mt-5">
    <h3><strong>অনলাইন ব্যাচ</strong></h3>
    <p className='text-muted'>দেশের যেকোনো প্রান্ত থেকে ঘরে বসেই দেশ সেরা শিক্ষকদের সাথে নাও সম্পূর্ণ সিলেবাসের 💯 তে 💯 প্রস্তুতি!</p>
        {/* First Row */}
        <div className="row"> 
            {data && data.map((d, key) =>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="box borderRedius-3">
                        <div className="box-content">
                            <h5 >{d.batch?.batch_name}</h5>
                            <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                            <p>প্রতি সপ্তাহে ২টি লাইভ ক্লাস</p>
                            <Link to={`/CourseInterface/${d.batch?.id}`} className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                            
                        </div>
                        <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 1"/>
                    </div>
                </div>
                 )} 
            
            
        </div>
        
    </div>   
{/*  */}

   
    </AdminLayout>
  )
}

export default BatchList;
