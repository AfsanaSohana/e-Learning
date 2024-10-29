import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Slider() {
    return (
        <div className="container-fluid p-0 mb-5 ">
            <div className="owl-carousel header-carousel position-relative ">
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="./assets/img/carousel-1.jpg" alt="" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(24, 29, 56, .7)" }}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-sm-10 col-lg-8">
                                    
                                    <h1 className="display-3 text-white animated slideInDown">৬ষ্ঠ-এইচএসসি শ্রেণির অনলাইন ব্যাচের ভর্তি চলছে!</h1>
                                    <h5 className="text-white mb-3 animated slideInDown"></h5>
                                    <p className="fs-5 text-white mb-4 pb-2"style={{ font: "" }}>পুরো মাস জুড়ে আমাদের নির্দিষ্ট কোর্সসমূহ পেয়ে যান বিশেষ মূল্যে। এবার শেখার শুরু হোক আমাদের সাথে!</p>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                    <Link to="/Form" className="btn btn-light py-md-3 px-md-5 animated slideInRight" >জয়েন করুন</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="./assets/img/carousel-2.jpg" alt="" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(24, 29, 56, .7)" }}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-sm-10 col-lg-8">
                                    <h2 className="display-3 text-white animated slideInDown">বছর জুড়ে অভিজ্ঞ শিক্ষকদের সাথে সম্পূর্ণ সিলেবাসের 💯 তে 💯 প্রস্তুতি!</h2>
                                    <h5 className="text-white mb-3 animated slideInDown">পুরো মাস জুড়ে আমাদের নির্দিষ্ট কোর্সসমূহ পেয়ে যান বিশেষ মূল্যে। এবার শেখার শুরু হোক আমাদের সাথে!</h5>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">আরও জানুন</a>
                                    <Link to="/Form" className="btn btn-light py-md-3 px-md-5 animated slideInRight" >জয়েন করুন</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="./assets/img/carousel-3.jpg" alt="" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: "rgba(24, 29, 56, .7)" }}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-sm-10 col-lg-8">
                                    <h1 className="display-3 text-white animated slideInDown">স্কিল ডেভেলপমেন্টের নির্দিষ্ট কোর্স দারুণ ছাড়ে ভর্তি চলছে!</h1>
                                    <h5 className="text-white mb-3 animated slideInDown">Best Online Courses</h5>
                                    <p className="fs-5 text-white mb-4 pb-2">পুরো মাস জুড়ে আমাদের নির্দিষ্ট কোর্সসমূহ পেয়ে যান বিশেষ মূল্যে। এবার শেখার শুরু হোক আমাদের সাথে!</p>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">আরও জানুন</a>
                                    <Link to="/Form" className="btn btn-light py-md-3 px-md-5 animated slideInRight" >জয়েন করুন</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider