import React,{useState} from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Slider from '../Slider';
import { Button, Modal } from 'react-bootstrap';
import { Link, useLocation} from 'react-router-dom';
import Form from '../Form';
import Instructor from '../Instructor';


function Dashboard() {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <AdminLayout>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>এইচএসসি এবং এসএসসি ২৫</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            {/*popuplist */}
  
          <div className="list-box">
            <div className="text-left">HSC, SSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</div>
            <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Item 1"/>
            
            <Link to="/DemoClass1" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
          </div>

          {/* List Box 2 */}
          <div className="list-box">
            <div className="text-left">HSC, SSC 25 অনলাইন ব্যাচ (বাংলা, ইংরেজি, তথ্য ও যোগাযোগ প্রযুক্তি)</div>
            <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Item 2"/>
            <Link to="/SscHsc" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
          </div>

          {/* List Box 3 */}
          <div className="list-box">
            <div className="text-left">HSC, SSC 25 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)</div>
            <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Item 3"/>
            <Link to="/SscHsc" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
          </div>
          {/* List Box 4 */}
          <div className="list-box">
            <div className="text-left">HSC 26 অনলাইন ব্যাচ (বাংলা, ইংরেজি, তথ্য ও যোগাযোগ প্রযুক্তি)</div>
            <img src="public/assets/img/hsc_25_ob_sqr.jpeg" alt="Item 3"/>
            <Link to="/SscHsc" className="btn btn-outline-success" >বিস্তারিত দেখুন</Link>
          </div>
</Modal.Body>
        <Modal.Footer>
          
        {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
      <Slider />
            <div className="container-xxl py-5 bg-dark">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s"  onClick={handleShow}>
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                                    <h5 className="mb-3">এস এস সি, ২০২৫ এইস এইস এস সি২০২৫</h5>
                                    <p>সপ্তাহে ৬ দিন ক্লাস</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s" onClick={handleShow}>
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                    <h5 className="mb-3">স্কুল, বিশ্ববিদ্যালয় ভর্তি‍ পরীক্ষা</h5>
                                    <p>সপ্তাহে ৬ দিন ক্লাস</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s" onClick={handleShow}>
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-home text-primary mb-4"></i>
                                    <h5 className="mb-3">বিসিএস সকল পার্টের প্রস্তুতি</h5>
                                    <p>সপ্তাহে ৬ দিন ক্লাস</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s" onClick={handleShow}>
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                                    <h5 className="mb-3">চাকরি ও শিক্ষক নিয়োগ প্রস্তুতি</h5>
                                    <p>সপ্তাহে ৬ দিন ক্লাস</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* ক্লাস বুকিং */}
<div className="container-xxl py-5 bg-dark">
                <div className="container">
                    <div className="row g-4">
                        
                        <div className="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-home text-primary mb-4"></i>
                                    <h5 className="mb-3">এস এস সি, ২০২৫ এইস এইস এস সি২০২৫</h5>
                                    
                                    <Link to="/Form" className="btn btn-outline-primar" >অনলাইন ফ্রি লাইভ ক্লাস</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                                    <h5 className="mb-3">৬ষ্ঠ-৯ম শ্রেণির সকাল বিষয়</h5>
                                    <Link to="/Form" className="btn btn-outline-primar" >অনলাইন ফ্রি লাইভ ক্লাস</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* ক্লাস বুকিং */}

{/* ক্লাস বুকিং শেষ */}


            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src="/assets/img/about.jpg" alt="" style={{ objectFit: "cover" }}/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                            <h1 className="mb-4">আমাদের উদ্দেশ্য</h1>
                            <p className="mb-4">এসএসসি 2025 ব্যাচের শিক্ষার্থীদের আইসিটি বিষয়ে এ প্লাস নিশ্চিত করতে 
                    আমরা নিয়ে এসেছি এইচএসসির 25 অনলাইন ব্যাচ আইসিটি কোর্স, লাইভ ক্লাস, 
                    লেকচার শিট, ডেইলি, উইকলি এক্সাম, পূর্ণাঙ্গ মডেল টেস্ট ও বিজ্ঞান টিচারদের 
                    গাইড লাইনে তোমাদের সেরা প্রস্তুতি নিশ্চিত করবো আমরা। কোর্সটি মাসে ৭ দিন
                    হলেও এক্সাম থাকবে এইচএসসি পরীক্ষা পর্যন্ত।</p>
                           
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container-xxl py-5 category">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
                        <h1 className="mb-5">Courses Categories</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-7 col-md-6">
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <img className="img-fluid" src="/assets/img/cat-1.jpg" alt="" />
                                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
                                            <h5 className="m-0">Web Design</h5>
                                            <small className="text-primary">49 Courses</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <img className="img-fluid" src="img/cat-2.jpg" alt="" />
                                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
                                            <h5 className="m-0">Graphic Design</h5>
                                            <small className="text-primary">49 Courses</small>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                                    <a className="position-relative d-block overflow-hidden" href="">
                                        <img className="img-fluid" src="/assets/img/cat-3.jpg" alt="" />
                                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
                                            <h5 className="m-0">Video Editing</h5>
                                            <small className="text-primary">49 Courses</small>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight: "350px"}}>
                            <a className="position-relative d-block h-100 overflow-hidden" href="">
                                <img className="img-fluid position-absolute w-100 h-100" src="/assets/img/cat-4.jpg" alt="" style={{objectFit: "cover"}} />
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
                                    <h5 className="m-0">Online Marketing</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">Popular Courses</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="course-item bg-light">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src="/assets/img/course-1.jpg" alt="" />
                                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                    </div>
                                </div>
                                <div className="text-center p-4 pb-0">
                                    <h3 className="mb-0">৳ 1490</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small>(123)</small>
                                    </div>
                                    <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>Sohana Afsana</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="course-item bg-light">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src="/assets/img/course-2.jpg" alt="" />
                                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                    </div>
                                </div>
                                <div className="text-center p-4 pb-0">
                                    <h3 className="mb-0">৳ 1490</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small>(123)</small>
                                    </div>
                                    <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>Sohana Afsana</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="course-item bg-light">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src="/assets/img/course-3.jpg" alt="" />
                                    <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                                        <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Join Now</a>
                                    </div>
                                </div>
                                <div className="text-center p-4 pb-0">
                                    <h3 className="mb-0">৳ 1490</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small className="fa fa-star text-primary"></small>
                                        <small>(123)</small>
                                    </div>
                                    <h5 className="mb-4">Web Design & Development Course for Beginners</h5>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>Sohana Afsana</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




           <Instructor/>




            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        {/* <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6> */}
                        <h1 className="mb-5">আমাদের শীক্ষার্থী কি বলে</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel position-relative">
                        <div className="testimonial-item text-center">
                            <img className="border rounded-circle p-2 mx-auto mb-3" src="/assets/img/testimonial-1.jpg" style={{ width: "80px", height: "80px" }} />
                            <h5 className="mb-0">সোহানা আফসানা</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0"> এইচএসসির 25 অনলাইন ব্যাচ আইসিটি কোর্স, লাইভ ক্লাস, 
                    লেকচার শিট, ডেইলি, উইকলি এক্সাম, পূর্ণাঙ্গ মডেল টেস্ট ও বিজ্ঞান টিচারদের 
                    গাইড লাইনে তোমাদের সেরা প্রস্তুতি নিশ্চিত করবো আমরা। কোর্সটি মাসে ৭ দিন
                    হলেও এক্সাম থাকবে এইচএসসি পরীক্ষা পর্যন্ত।</p>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{ width: "80px", height: "80px" }} />
                            <h5 className="mb-0">সোহানা আফসানা</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">এইচএসসির 25 অনলাইন ব্যাচ আইসিটি কোর্স, লাইভ ক্লাস, 
                    লেকচার শিট, ডেইলি, উইকলি এক্সাম, পূর্ণাঙ্গ মডেল টেস্ট ও বিজ্ঞান টিচারদের 
                    গাইড লাইনে তোমাদের সেরা প্রস্তুতি নিশ্চিত করবো আমরা। কোর্সটি মাসে ৭ দিন
                    হলেও এক্সাম থাকবে এইচএসসি পরীক্ষা পর্যন্ত।</p>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="border rounded-circle p-2 mx-auto mb-3" src="/assets/img/testimonial-3.jpg" style={{ width: "80px", height: "80px" }} />
                            <h5 className="mb-0">সোহানা আফসানা</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">এইচএসসির 25 অনলাইন ব্যাচ আইসিটি কোর্স, লাইভ ক্লাস, 
                    লেকচার শিট, ডেইলি, উইকলি এক্সাম, পূর্ণাঙ্গ মডেল টেস্ট ও বিজ্ঞান টিচারদের 
                    গাইড লাইনে তোমাদের সেরা প্রস্তুতি নিশ্চিত করবো আমরা। কোর্সটি মাসে ৭ দিন
                    হলেও এক্সাম থাকবে এইচএসসি পরীক্ষা পর্যন্ত।</p>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg" style={{ width: "80px", height: "80px" }} />
                            <h5 className="mb-0">সোহানা আফসানা</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">এইচএসসির 25 অনলাইন ব্যাচ আইসিটি কোর্স, লাইভ ক্লাস, 
                    লেকচার শিট, ডেইলি, উইকলি এক্সাম, পূর্ণাঙ্গ মডেল টেস্ট ও বিজ্ঞান টিচারদের 
                    গাইড লাইনে তোমাদের সেরা প্রস্তুতি নিশ্চিত করবো আমরা। কোর্সটি মাসে ৭ দিন
                    হলেও এক্সাম থাকবে এইচএসসি পরীক্ষা পর্যন্ত।</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>

        </AdminLayout>
    )
}

export default Dashboard