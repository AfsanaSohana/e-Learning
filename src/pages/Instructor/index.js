import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Instructor() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);

  function getDatas() {
    axios.get(`${process.env.REACT_APP_API_URL}/instructor`)
      .then(function(response) {
        setData(response.data.data);
      });
  }

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
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
          <h1 className="mb-5">Expert Instructors</h1>
        </div>

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
          {data && data.map((d, k) => (
            <div className="team-item bg-light" key={k}>
              <div className="overflow-hidden">
                <img className="img-fluid" src="{d.photo}" alt={d.instructor_name} />
              </div>
              <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-23px" }}>
                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                  <a className="btn btn-sm-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-sm-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-sm-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="text-center p-4">
                
                <h5 className="mb-0">{d.instructor_name}</h5>
                <small>{d.designation}</small>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Instructor;
