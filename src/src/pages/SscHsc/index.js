import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import OfferBanner from '../../layouts/include/OfferBanner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, useLocation} from 'react-router-dom';
import OfferCourseInfo from '../ClassInfo/OfferCourseInfo';


function SscHsc(){
    return(
        
        <AdminLayout>
            <OfferBanner/>
        <div className='HeaderBox container mb-5  bg-red'>
            <h2>SSC HSC</h2>        
            <h3>অনলাইন ব্যাচে ভর্তি চলছে </h3> 
            <p>বছরজুড়ে অভিজ্ঞ শিক্ষকদের সাথে সম্পুর্ন সিলেবাসের <span>১০০</span> তে <span>১০০</span> প্রস্তুতি!</p> 
        </div>
    <div className="container mt-5 ">
        {/* First Row */}
        <div className="row"> 
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>SSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ১২টি লাইভ ক্লাস</p>
                        <Link to="/SclClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 1"/>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ১২টি লাইভ ক্লাস</p>
                        <Link to="/SclClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 2"/>
                </div>
            </div>
        </div>
        {/* 2nd Row */}
        <div className="row"> 
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>SSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ১২টি লাইভ ক্লাস</p>
                        <Link to="/SclClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 1"/>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>SSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ১২টি লাইভ ক্লাস</p>
                        <Link to="/SclClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 2"/>
                </div>
            </div>
        </div>
        {/* 3rd Row */}
        <div className="row"> 
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>SSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ১২টি লাইভ ক্লাস</p>
                        <Link to="/SclClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 1"/>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ১২টি লাইভ ক্লাস</p>
                        <Link to="/SclClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 2"/>
                </div>
            </div>
        </div>
        {/* 4th Row */}
        <div className="row"> 
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>SSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ১২টি লাইভ ক্লাস</p>
                        <Link to="/SclClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 1"/>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ১২টি লাইভ ক্লাস</p>
                        <Link to="/SclClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 2"/>
                </div>
            </div>
        </div>
    </div>


    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="/assets/img/ssc-2025-arts-group-final-preparation-course-thumbnail.jpeg" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">HSC Bangla Crash Course</h5>
            
              <Link to="/OfferCourseInfo"  href="#" className="text-success text-decoration-none"><h4>৳750</h4></Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="/assets/img/ssc-2025-business-studies-final-preparation-course-sqr-thumbnail.jpeg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">HSC Bangla Crash Course</h5>
             
              <Link to="/OfferCourseInfo"  href="#" className="text-success text-decoration-none"><h4>৳750</h4></Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img src="/assets/img/ssc-2025-final-preparation-course-science-group-thumbnail-new.jpeg" className="card-img-top" alt="Card 3" />
            <div className="card-body">
            <h5 className="card-title">HSC Bangla Crash Course</h5>
             
             <Link to="/OfferCourseInfo"  href="#" className="text-success text-decoration-none"><h4>৳750</h4></Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    
      
    </AdminLayout>
  
    )
}
export default SscHsc