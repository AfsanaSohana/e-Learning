import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link, useLocation} from 'react-router-dom';
function PopularCourse
() {
  return (
    <>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
       <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-flex justify-content-around">
            <div class="box p-3 bg-primary text-white">
                <div className="col-md-4">
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
                              </div>
                </div>
            <div class="box p-3 bg-secondary text-white">Item 2</div>
            <div class="box p-3 bg-success text-white">Item 3</div>
            </div>
        </div>
    <div class="carousel-item">
      <div class="d-flex justify-content-around">
        <div class="box p-3 bg-danger text-white">Item 4</div>
        <div class="box p-3 bg-warning text-white">Item 5</div>
        <div class="box p-3 bg-info text-white">Item 6</div>
      </div>
    </div>
    {/* <!-- Add more carousel items as needed --> */}
  </div>
  {/* <!-- Slider Controls --> */}
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
       </div>
    </div>

    </>
  )
}

export default PopularCourse
