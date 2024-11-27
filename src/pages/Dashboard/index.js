import React,{useState,useEffect} from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Slider from '../Slider';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import { Link, useLocation} from 'react-router-dom';
import Form from '../Form';
import Instructor from '../Instructor';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Dashboard() {
    const[data, setData]=useState([]);
    const[batchData, setBatchData]=useState([]);

    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/course`).then(function(response) {
            setData(response.data.data);
        });
    }
    const getBatch = async (d) => {
        await axios.get(`${process.env.REACT_APP_API_URL}/batch?course_id=${d.id}`).then(function(response) {
            setBatchData(response.data.data);
        });
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = async (d) => {
        await getBatch(d);
        setShow(true);
    };
// Define breakpoints and items to show per screen size
  const responsive   = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

    return (
        <AdminLayout>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>এইচএসসি এবং এসএসসি ২৫</Modal.Title>
        </Modal.Header>
            <Modal.Body> 
                {/*popuplist */}
                
                {batchData && batchData.map((d, key) =>
                    <div className="list-box h-50px">
                        <div className="text-left">{d.batch_name}</div>
                        <img src="/assets/img/hsc_25_ob_sqr.jpeg" alt="Item 1"/>
                        <Link to={`/ClassInfo/${d.id}`} className="btn btn-outline-success ms-2" >বিস্তারিত দেখুন</Link>
                    </div>
                 )} 
            </Modal.Body>
            <Modal.Footer>
                <Link to={`/DemoClass1`} className="btn btn-outline-success ms-2" >সবগুলো দেখুন </Link>
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
                  {/* Carousel Component */}
        <Carousel 
          responsive={responsive}
          infinite={true} // Infinite loop
          autoPlay={true} // AutoPlay
          autoPlaySpeed={3000} // Speed of autoplay
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]} // Hide arrows on small devices
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
                    {data && data.map((d, key) =>
                        <div className=" wow fadeInUp" data-wow-delay="0.1s"  onClick={()=>handleShow(d)}>
                            <div className="service-item text-center pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                                    <h5 className="mb-3">{d.course_name}</h5>
                                    <p>{d.details}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    </Carousel>
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
                        <div className="col-lg-6 wow fadeInUp " data-wow-delay="0.1s" style={{minHeight: "400px"}}>
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