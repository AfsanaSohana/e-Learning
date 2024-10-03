import React from 'react'
import OfferBanner from '../../layouts/include/OfferBanner'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
function DemoClass1() {


  return (
    <>
   
  {/* <div className="banner">
  <img src="/assets/img/learning_centre_top_banner.jpeg" alt="Banner Image"/> */}
   <OfferBanner/>
  {/* </div> */}
  {/* middlepart */}
  <div className="container-fluid custom-div  justify-content-align-items-center">
<div className='content-justify-left align-items-'  >
  <div className="dropdown ms-3 mb-2 d-flex ">
    <button className="btn dropdown text-white" type="button" id="dropdownButton" data-bs-toggle="dropdown" aria-expanded="false" >
    <h1>HSC</h1>
    </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownButton">
        <li><a className="dropdown-item" href="#"></a></li>
        <li><a className="dropdown-item" href="#">Action 2</a></li>
        <li><a className="dropdown-item" href="#">Action 3</a></li>
      </ul>
    <button className="btn dropdown text-white" type="button" id="dropdownButton" data-bs-toggle="dropdown" aria-expanded="false" >
    <h1>HSC</h1>
    </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownButton">group
        <li><a className="dropdown-item" href="#">Action 1</a></li>
        <li><a className="dropdown-item" href="#">Action 2</a></li>
        <li><a className="dropdown-item" href="#">Action 3</a></li>
      </ul>
  </div>  
</div>
 
  <p className='text-white'>লেখাপড়ায় এক ভিন্ন মাত্রা যোগ করতে থাকছে রেকর্ডেড/লাইভ প্রোগ্রামসহ আরো অনেক কিছু</p>


  
</div>

    </>
  )
}

export default DemoClass1
