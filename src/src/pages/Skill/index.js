import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../layouts/assets/css/Skill.css';

function Skill(){
    return(
        <>
            <h1>৬ষ্ঠ-এইচ এস সি শ্রেণীর </h1>        
            <h1>অনলাইন ব্যাচে ভর্তি চলছে </h1> 
            <p>বছরজুড়ে অভিজ্ঞ শিক্ষকদের সাথে সম্পুর্ন সিলেবাসের <span>১০০</span> তে <span>১০০</span> প্রস্তুতি!</p> 
            <div class="container">
        <div class="row justify-content-center mt-5">
           {/* 6 squares in a row */}
            <div class="col-2">
                <div class="square">
                    <div class="square-content">ওয়েব ডেভেলবেমেন্ট</div>
                </div>
            </div>
            <div class="col-2">
                <div class="square">
                    <div class="square-content">ইংরেজি শেখার কোর্স</div>
                </div>
            </div>
            <div class="col-2">
                <div class="square">
                    <img src="src/layouts/assets/img/graphic-designer.png"/>
                    <div class="square-content">গ্রাফিক্স ডিজাইন</div>
                </div>
            </div>
            <div class="col-2">
                <div class="square">
                    <div class="square-content">ইংরেজি শেখার কোর্স</div>
                </div>
            </div>
            <div class="col-2">
                <div class="square">
                    <div class="square-content">ইংরেজি শেখার কোর্স</div>
                </div>
            </div>
            <div class="col-2">
                <div class="square">
                    <div class="square-content">ইংরেজি শেখার কোর্স</div>
                </div>
            </div>
        </div>
    </div>
     
        </>
    )
}
export default Skill