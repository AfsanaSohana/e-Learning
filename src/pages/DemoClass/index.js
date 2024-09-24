import React from 'react'
import Footer from './include/footer';
import { Link } from 'react-router-dom';

function DemoClass1() {
  return (
    <>
    <div>
      <div className="list-box">
            <div className="text-left">HSC, SSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</div>
            <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Item 1"/>
            
            <Link to="/SscHsc" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
          </div>
           <Footer />
    </div>
    </>
  )
}

export default  DemoClass1
