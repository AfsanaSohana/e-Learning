import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import OfferBanner from '../../layouts/include/OfferBanner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, useLocation} from 'react-router-dom';
import SclClassInfo from '../ClassInfo/SclClassInfo';


function SscHsc(){
    return(
        
        <AdminLayout>
            <OfferBanner/>
        <div className='HeaderBox container mb-5  bg-red'>
            <h1>৬ষ্ঠ-এইচ এস সি শ্রেণীর </h1>        
            <h1>অনলাইন ব্যাচে ভর্তি চলছে </h1> 
            <p>বছরজুড়ে অভিজ্ঞ শিক্ষকদের সাথে সম্পুর্ন সিলেবাসের <span>১০০</span> তে <span>১০০</span> প্রস্তুতি!</p> 
        </div>
    <div className="container mt-5">
        {/* First Row */}
        <div className="row"> 
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
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
                        <h5>HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
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
        {/* 3rd Row */}
        <div className="row"> 
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
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
                        <h5>HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
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
      
    </AdminLayout>
  
    )
}
export default SscHsc