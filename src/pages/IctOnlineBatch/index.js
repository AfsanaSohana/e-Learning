import React from 'react'
import OfferBanner from '../../layouts/include/OfferBanner'
import AdminLayout from '../../layouts/AdminLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassInfo from '../ClassInfo';

import { Link, useLocation} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';



function IctOnlineBatch() {
    const location = useLocation();
const isLinkActive = (path) => {
    return location.pathname == path ? 'active':"";
  }
  
  return (
    <>
    <AdminLayout>
        <OfferBanner/> 

            <div className='gradiant-background row p-3'>
                <div className='  col-md-6 d-flex align-items-center p-3'>
                    <h5>এসএসসি 2025 ব্যাচের শিক্ষার্থীদের আইসিটি বিষয়ে এ প্লাস নিশ্চিত করতে 
                    আমরা নিয়ে এসেছি এইচএসসির 25 অনলাইন ব্যাচ আইসিটি কোর্স, লাইভ ক্লাস, 
                    লেকচার শিট, ডেইলি, উইকলি এক্সাম, পূর্ণাঙ্গ মডেল টেস্ট ও বিজ্ঞান টিচারদের 
                    গাইড লাইনে তোমাদের সেরা প্রস্তুতি নিশ্চিত করবো আমরা। কোর্সটি মাসে ৭ দিন
                    হলেও এক্সাম থাকবে এইচএসসি পরীক্ষা পর্যন্ত।</h5>
                </div>
                <div className="col-md-4 ">
                    <div className="card  p-3 "> <button type="button" className="btn-close btn-outline-white" data-bs-dismiss="alert" aria-label="Close"></button>
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
                        <div className="card-body">
                            <p className="card-title">HSC 25 ICT 2.0 (সম্পূর্ণ সিলেবাস)</p>
                            <p className="card-text">
                            কোর্স ফি: <strong>৳1500</strong><span><p><s>৳3500</s></p></span>
                            </p>
                            <button className="btn btn-primary">কোর্সটি কিনুন</button>

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
            

           <ClassInfo/>
       
    </AdminLayout>
  </>
  )
}

export default IctOnlineBatch