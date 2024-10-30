import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import {useParams} from "react-router-dom";

function ClassInfo() {
  let userdata=JSON.parse(localStorage.getItem("userdata"));
  const [data, setdata] = useState([])

  const[batchData, setBatchData]=useState([]);
    const[routineData, setRoutineData]=useState([]);
    const[coursePlanData, setCoursePlan]=useState([]);
  const {id} = useParams();
  function getDatas(){
    axios.get(`${process.env.REACT_APP_API_URL}/batch/${id}`).then(function(response) {
      setBatchData(response.data.data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/routine/${id}`).then(function(response) {
      setRoutineData(response.data.data);
    });
    axios.get(`${process.env.REACT_APP_API_URL}/coursePlan/${id}`).then(function(response) {
      setCoursePlan(response.data.data);
    });
  }

  useEffect(() => {
      if(id){
          getDatas();
      }
  }, []);

  return (
    <>
    <AdminLayout>
    <div className='gradiant-background p-3'>
      <p>{data.batch_details}</p>
      <div className='right image'>
      <img src="/assets/img/teacher1.png" alt="Image 2" height={200} width={400}/>
      </div>
    </div>
   <div className='row'>
      <div className='col-8 p-3 '>
        <div className='row'>
          <div className='col-12'>

        {/* Sections */}
        {/* class routine */}
        <div className="p-2" id="section1 content-align-center " style={{ backgroundColor: '#f8f9fa', borderRadius:'3' }}>
        <h3>ক্লাস রুটিন</h3>

        <table className="table table-bordered p-3">
              <thead>
                <tr>
                  <th>সময়</th>
                  <th>দিন</th>
                </tr>
              </thead>
              <tbody>
              {routineData && routineData.map((d, key) =>
                <tr>
                  <td className="table-primary">{data.start_time}:{data.note}</td>
                  <td className="table-secondary">{data.day_name}</td>
                </tr>
                )}
                {/* <tr>
                  <td className="time-column">সাপ্তাহিক ছুটি</td>
                  <td className="subject">রবিবার</td>
                </tr>
                  <tr>
                      <td className="time-column">সাপ্তাহিক ছুটি</td>
                      <td className="table-secondary">সোমবার</td>
                    
                      
                  </tr>
                  <tr>
                      <td className="time-column">সাপ্তাহিক ছুটি</td>
                      <td className="subject">মঙ্গলবার</td>
                  
                      
                  </tr>
                  <tr>
                      <td className="time-column">ICT</td>
                      <td className="table-success">বুধবার</td>
                    
                    
                  </tr>
                  <tr>
                      <td className="time-column">সাপ্তাহিক ছুটি</td>
                      <td className="table-primary">বৃহস্পতিবার</td>
                      
                    
                  </tr>
                  <tr>
                      <td className="time-column">সাপ্তাহিক ছুটি</td>
                      <td className="table-primary">শুক্রবার</td>
                    
                    
                  </tr> */}
                
              </tbody>
        </table>
        </div>
        {/* sylabus */}
        <div  className="p-2" id="section2  " style={{  backgroundColor: '#e9ecef', borderRadius:'3'}}>
          <h3 className='mt-2'>{data.Subject_id} সিলেবাস</h3>
          <div class="container mt-4 p-2">
      <table class="table table-bordered">
        <tbody>
          {coursePlanData && coursePlanData.map((d, key) =>
        
          <tr>
            <td>
              <p>{data.Subject_id} সিলেবাস</p>
              <a class="text-primary" data-bs-toggle="collapse" href="#collapseRow1" role="button" aria-expanded="false" aria-controls="collapseRow1">
                &darr;
              </a>
              <div class="collapse" id="collapseRow1">
                              <ul className="list-unstyled">
                                  <li className="mb-2 ">
                                      <i className="bi bi-document "></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                      <p className='text-muted'>5 টি ভিডিও</p>
                                  </li>
                                  <li className="mb-2">
                                      <i className="bi bi-box-seam"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                      <p className='text-muted'>5 টি ভিডিও</p>
                                  </li>
                                  <li className="mb-2">
                                      <i className="bi bi-shield-lock"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                      <p className='text-muted'>5 টি ভিডিও</p>
                                  </li>
                                  <li className="mb-2">
                                      <i className="bi bi-shield-lock"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                      <p className='text-muted'>5 টি ভিডিও</p>
                                  </li>
                                  <li className="mb-2">
                                      <i className="bi bi-shield-lock"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                      <p className='text-muted'>5 টি ভিডিও</p>
                                  </li>
                              </ul>
              </div>
            </td>
          </tr>
          )}
          {/* <!-- Row 2 --> */}
          <tr>
            <td>
              <p>মডেল টেস্ট</p>
              <a class="text-primary" data-bs-toggle="collapse" href="#collapseRow2" role="button" aria-expanded="false" aria-controls="collapseRow2">
                &darr;
              </a>
              <div class="collapse" id="collapseRow2">
              <ul className="list-unstyled">
                                  <li className="mb-2 ">
                                      <i className="bi bi-document "></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                      <p className='text-muted'>5 টি ভিডিও</p>
                                  </li>
                                  <li className="mb-2">
                                      <i className="bi bi-box-seam"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                      <p className='text-muted'>5 টি ভিডিও</p>
                                  </li>
                                  <li className="mb-2">
                                      <i className="bi bi-shield-lock"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                      <p className='text-muted'>5 টি ভিডিও</p>
                                  </li>
                                  <li className="mb-2">
                                      <i className="bi bi-shield-lock"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                      <p className='text-muted'>5 টি ভিডিও</p>
                                  </li>
                                  <li className="mb-2">
                                      <i className="bi bi-shield-lock"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                      <p className='text-muted'>5 টি ভিডিও</p>
                                  </li>
                              </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
        </div>
        <div  className ='mt-3 p-3'id="section3 " style={{backgroundColor: '#dee2e6', borderRadius:'3' }}>
          <h3 >কোর্স ইন্সট্রাক্টর</h3> 
          
          <div className="table table-bordered p-3">
            {/* List Box 1 */}
            <tr>
              <td>
                <div className="list-box">
                  <div className="text-left"> <h5>Tanmay Dhar</h5>
                    <p className='text-muted me-2'style={{fontSize:'10' }}> DU, CU (8+ years exp)</p>
                </div>
                  <img src="/assets/img/teama-1.jpg" alt="Item 1"/>
            
                </div>
              </td>
              <td>
              <div className="list-box">
                  <div className="text-left"> <h5>Tanmay Dhar</h5>
                    <p className='text-muted me-2'style={{fontSize:'10' }}> DU, CU (8+ years exp)</p>
                </div>
                  <img src="/assets/img/teamb-2.jpg" alt="Item 1"/>
            
                </div>
              </td>
              </tr>
              {/*  */}
            <tr>
              <td>
              <div className="list-box">
                  <div className="text-left"> <h5>Tanmay Dhar</h5>
                    <p className='text-muted me-2'style={{fontSize:'10' }}> DU, CU (8+ years exp)</p>
                </div>
                  <img src="/assets/img/teamc-3.jpg" alt="Item 1"/>
            
                </div>
              </td>
              <td>
              <div className="list-box">
                  <div className="text-left"> <h5>Tanmay Dhar</h5>
                    <p className='text-muted me-2'style={{fontSize:'10' }}> DU, CU (8+ years exp)</p>
                </div>
                  <img src="/assets/img/teamd-4.jpg" alt="Item 1"/>
            
                </div>
              </td>
              </tr>
          </div> 
        </div> 
        <div className =' mt-3 p-3' id="section3" style={{backgroundColor: '#dee2e6',borderRadius:'3' }}>
          <h3>কোর্স সম্পর্কে বিস্তারিত</h3>
            {/* sylabus */}
      <table class="table table-bordered ">
          {/* <!-- Row 1 --> */}
          <tr>
            <td>
              <p> কোর্সটিতে যা যা আছে</p>
              <a class="text-primary" data-bs-toggle="collapse" href="#collapseRow1" role="button" aria-expanded="false" aria-controls="collapseRow1">
                &darr;
              </a>
              <div class="collapse" id="collapseRow1">
                              <ul className="list-unstyled text-muted">
                                  <li className="mb-2 ">
                        
                                      - যারা এইচএসসি ২০২৬ পরীক্ষায় বিজ্ঞান বিভাগ থেকে যোগ দেবে।
                                    
                                  </li>
                                  <li className="mb-2 ">

                                      - যারা এইচএসসি পরীক্ষার পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান ও উচ্চতর গণিত বিষয়ে সিলেবাস শেষ করতে চায়।<br/>

                                  </li>
                                  <li className="mb-2 ">- যারা রুটিনের মধ্যে থেকে পড়াশোনা আগাতে চায়।</li>
                                  <li className="mb-2 ">- যারা নিজের প্রস্তুতি কতটা সম্পন্ন হয়েছে তা নিয়মিত ট্র্যাক করতে চায়।<br/>

                                  </li>
                                  <li className="mb-2 ">- যারা প্রয়োজনীয় এক্সাম হ্যাকস এবং প্রশ্ন এনালাইসিস টেকনিক শিখে নিজেদের আত্মবিশ্বাস বাড়াতে চায়।
                                  </li>
                                  <li className="mb-2 ">- যারা নিজের প্রস্তুতি কতটা সম্পন্ন হয়েছে তা নিয়মিত ট্র্যাক করতে চায়।<br/>

                                  </li>
                                  <li className="mb-2 ">- যারা প্রয়োজনীয় এক্সাম হ্যাকস এবং প্রশ্ন এনালাইসিস টেকনিক শিখে নিজেদের আত্মবিশ্বাস বাড়াতে চায়।<br/>

                                  </li>
                                  <li className="mb-2 ">- যারা এইচএসসির পাশাপাশি বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্যও কলেজ থেকেই প্রস্তুত থাকতে চায়।<br/>
                                    
                                  </li>
                                
                              </ul>
              </div>
            </td>
          </tr>
          </table>
        </div>
      </div>
      </div>
      </div>
      
        <div className="col-md-4 ">
          <div  style={{position:"sticky",top:"100px"}} className="card  p-3 "> 
              {/* Video */}
              <div className="embed-responsive embed-responsive-16by9 mb-1">
                  <iframe 
                      className="embed-responsive-item" 
                      src="https://www.youtube.com/embed/exampleVideo"
                      allowFullScreen
                      title="course Video"
                  ></iframe>
              </div>

              {/* card */}
              <div className="card-body overflow x-hidden">
                  <p className="card-title">HSC 25 ICT 2.0 (সম্পূর্ণ সিলেবাস)</p>
                  <p className="card-text">
                  কোর্স ফি: <strong>৳1500</strong><span><p><s>৳3500</s></p></span>
                  </p>
                  {userdata
                     ? <Link to={`/FormJoin/${id}`} className="btn btn-primary">কোর্সটি কিনুন</Link>
                    : <Link to={"/student_login"}  href=""className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"><i className="fa fa-arrow-right ms-3"></i>Join Now</Link>}
                  

                  <ul className="list-unstyled">
                      <li className="mb-2 ">
                          <i className="bi bi-book "></i> ১টি বিষয়
                      </li>
                      <li className="mb-2">
                          <i className="bi bi-box-seam"></i> প্রতি সপ্তাহে ১টি লাইভ ক্লাস
                      </li>
                      <li className="mb-2">
                          <i className="bi bi-shield-lock"></i> ডেইলি ও উইকলি এক্সাম
                      </li>
                      <li className="mb-2">
                          <i className="bi bi-shield-lock"></i> অধ্যায়ভিত্তিক লেকচার শিট
                      </li>
                      <li className="mb-2">
                          <i className="bi bi-shield-lock"></i> মডেল টেস্ট
                      </li>
                  </ul>
              </div>
              
          </div>
                    
                
      </div>

  
  </div>
  </AdminLayout>
  </>
  )
}

export default ClassInfo
