import React from 'react'
import OfferBanner from '../../layouts/include/OfferBanner'
import { Link, useLocation} from 'react-router-dom';
import Footer from '../../layouts/include/footer'
import IctOnlineBatch from '../OnlineBatch';
function DemoClass1() {


  return (
    <>
   
  {/* <div className="banner">
  <img src="/assets/img/learning_centre_top_banner.jpeg" alt="Banner Image"/> */}
   <OfferBanner/>
  {/* </div> */}
  {/* middlepart */}
  <div className="container-fluid custom-div  justify-content-align-items-center">
<div className='content-justify-center align-items-'><span> <h1 className='text-white mt-3'>অনলাইন ব্যাচ</h1> </span>
  <div className="dropdown ms-3 mb-2 d-flex ">
    <button className="btn dropdown text-white" type="button" id="dropdownButton" data-bs-toggle="dropdown" aria-expanded="false" >
    <h2>SSC</h2>
    </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownButton">
        <li><a className="dropdown-item" href="#">Science</a></li>
        <li><a className="dropdown-item" href="#">Arts</a></li>
        <li><a className="dropdown-item" href="#">Commers</a></li>
      </ul>
    <button className="btn dropdown text-white" type="button" id="dropdownButton" data-bs-toggle="dropdown" aria-expanded="false" >
    <h2>HSC</h2>
    </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownButton">
      <li><a className="dropdown-item" href="#">Science</a></li>
        <li><a className="dropdown-item" href="#">Arts</a></li>
        <li><a className="dropdown-item" href="#">Commers</a></li>
      </ul>
  </div>  
</div> 
 
  <p className='text-white'>লেখাপড়ায় এক ভিন্ন মাত্রা যোগ করতে থাকছে রেকর্ডেড/লাইভ প্রোগ্রামসহ আরো অনেক কিছু</p>


  
</div>
{/* list part */}

<div className="container mt-5">
    <h3><strong>অনলাইন ব্যাচ</strong></h3>
    <p className='text-muted'>দেশের যেকোনো প্রান্ত থেকে ঘরে বসেই দেশ সেরা শিক্ষকদের সাথে নাও সম্পূর্ণ সিলেবাসের 💯 তে 💯 প্রস্তুতি!</p>
        {/* First Row */}
        <div className="row"> 
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box borderRedius-3">
                    <div className="box-content">
                        <h5 >HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ২টি লাইভ ক্লাস</p>
                        <Link to="/ClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                        
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 1"/>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ২টি লাইভ ক্লাস</p>
                        <Link to="/ClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
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
                        <p>প্রতি সপ্তাহে ২টি লাইভ ক্লাস</p>
                        <Link to="/ClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 1"/>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ২টি লাইভ ক্লাস</p>
                        <Link to="/ClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
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
                        <p>প্রতি সপ্তাহে ২টি লাইভ ক্লাস</p>
                        <Link to="/ClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 1"/>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ২টি লাইভ ক্লাস</p>
                        <Link to="/ClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
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
                        <p>প্রতি সপ্তাহে ২টি লাইভ ক্লাস</p>
                        <Link to="/ClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 1"/>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5>HSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</h5>
                        <p><i className="bi bi-star-fill icon"></i>৮টি বিষয়</p>
                        <p>প্রতি সপ্তাহে ২টি লাইভ ক্লাস</p>
                        <Link to="/ClassInfo" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
                    </div>
                    <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Image 2"/>
                </div>
            </div>
        </div>
    </div>   
{/*  */}

   
    <Footer/>
    </>
  )
}

export default DemoClass1
