import React from 'react'
import OfferBanner from '../../layouts/include/OfferBanner'
import AdminLayout from '../../layouts/AdminLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassInfo from '../ClassInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, useLocation} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';



function OnlineBatch() {
    const location = useLocation();
const isLinkActive = (path) => {
    return location.pathname == path ? 'active':"";
  }
  
  return (
    <>
    <AdminLayout>
        <OfferBanner/> 

            <div className='gradiant-background row p-3 '>
                <div className='  col-md-6 d-flex align-items-center p-3'>
                    <h5>এসএসসি 2025 ব্যাচের শিক্ষার্থীদের আইসিটি বিষয়ে এ প্লাস নিশ্চিত করতে 
                    আমরা নিয়ে এসেছি এইচএসসির 25 অনলাইন ব্যাচ আইসিটি কোর্স, লাইভ ক্লাস, 
                    লেকচার শিট, ডেইলি, উইকলি এক্সাম, পূর্ণাঙ্গ মডেল টেস্ট ও বিজ্ঞান টিচারদের 
                    গাইড লাইনে তোমাদের সেরা প্রস্তুতি নিশ্চিত করবো আমরা। কোর্সটি মাসে ৭ দিন
                    হলেও এক্সাম থাকবে এইচএসসি পরীক্ষা পর্যন্ত।</h5>
                </div>
                
                
                
            </div> 
           
            

           <ClassInfo/>
       
    </AdminLayout>
  </>
  )
}

export default OnlineBatch