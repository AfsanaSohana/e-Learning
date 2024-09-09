import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
   <!DOCTYPE html>
<html lang="en">



<body>
    {/* Spinner Start */}
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    {/* Spinner End */}


    {/* Navbar Start */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>eLEARNING</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="courses.html" className="nav-item nav-link">Courses</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu fade-down m-0">
                        <a href="team.html" className="dropdown-item">Our Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
    {/* Navbar End */}


    {/* Carousel Start */}
    <div className="container-fluid p-0 mb-5">
        <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-1.jpg" alt=""/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(24, 29, 56, .7);">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                                <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(24, 29, 56, .7);">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                <h1 className="display-3 text-white animated slideInDown">Get Educated Online From Your Home</h1>
                                <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Carousel End */}


    {/* Service Start */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                            <h5 className="mb-3">Skilled Instructors</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5 className="mb-3">Online classNamees</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-home text-primary mb-4"></i>
                            <h5 className="mb-3">Home Projects</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                            <h5 className="mb-3">Book Library</h5>
                            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Service End */}


    {/* About Start */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{min-height:'400px'}}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{object-fit: 'cover'}}/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                                    <h5 className="m-0">Web Design</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src="img/cat-2.jpg" alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                                    <h5 className="m-0">Graphic Design</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                <img className="img-fluid" src="img/cat-3.jpg" alt=""/>
                                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: '1px'}}>
                                    <h5 className="m-0">Video Editing</h5>
                                    <small className="text-primary">49 Courses</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style="min-height: 350px;">
                    <a className="position-relative d-block h-100 overflow-hidden" href="">
                        <img className="img-fluid position-absolute w-100 h-100" src="img/cat-4.jpg" alt="" style={{object-fit: 'cover'}}/>
                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin:  '1px'}}>
                            <h5 className="m-0">Online Marketing</h5>
                            <small className="text-primary">49 Courses</small>'
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    {/* Categories Start */}


    {/* Courses Start */}
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
                            <img className="img-fluid" src="img/course-1.jpg" alt=""/>
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style="border-radius: 30px 0 0 30px;">Read More</a>
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;">Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            <h3 className="mb-0">$149.00</h3>
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
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/course-2.jpg" alt=""/>
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{border-radius: '30px 0 0 30px'}}>Read More</a>
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{border-radius: '0 30px 30px 0'}}>Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            <h3 className="mb-0">$149.00</h3>
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
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/course-3.jpg" alt=""/>
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{border-radius: '30px 0 0 30px'}}>Read More</a>
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{border-radius:' 0 30px 30px 0'}}>Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            <h3 className="mb-0">$149.00</h3>
                            <div className="mb-3">'
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
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Courses End */}


    {/* Team Start */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
                <h1 className="mb-5">Expert Instructors</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-1.jpg" alt="">
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{margin-top: '-23px'}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{margin-top: '-23px'}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item bg-light">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{margin-top: '-23px'}}>
                            <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Team End */}


    {/* Testimonial Start */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                <h1 className="mb-5">Our Students Say!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style={{width: '80px', height: '80px'}}/>
                    <h5 className="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{width: '80px'{{ height: '80px'}}/>
                    <h5 className="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style={{width:' 80px'{{ height: '80px'}}/>
                    <h5 className="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg" style={{width: '80px'{{ height: '80px'}}/>
                    <h5 className="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Testimonial End */}
        

    {/* Footer Start */}
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Quick Link</h4>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Privacy Policy</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">FAQs & Help</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Contact</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Gallery</h4>
                    <div className="row g-2 pt-2">
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/course-1.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/course-2.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/course-3.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/course-2.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/course-3.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid bg-light p-1" src="img/course-1.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-3">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style="max-width: 400px;">
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                        {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
                        Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br><br>
                        Distributed By <a className="border-bottom" href="https://themewagon.com">ThemeWagon</a>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <a href="">Home</a>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Footer End */}


    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>


    {/* JavaScript Libraries */}
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    {/* Template Javascript */}
    <script src="js/main.js"></script>
</body>

</html>
   </>
  );
}

export default App;
