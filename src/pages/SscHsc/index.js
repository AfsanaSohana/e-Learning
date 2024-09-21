import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'

import 'bootstrap/dist/css/bootstrap.min.css';

function SscHsc(){
    return(
        
        <AdminLayout>
            <h1>৬ষ্ঠ-এইচ এস সি শ্রেণীর </h1>        
            <h1>অনলাইন ব্যাচে ভর্তি চলছে </h1> 
            <p>বছরজুড়ে অভিজ্ঞ শিক্ষকদের সাথে সম্পুর্ন সিলেবাসের <span>১০০</span> তে <span>১০০</span> প্রস্তুতি!</p> 
         
            <div className="container mt-5">
        <div className="row">
            {/* First Row */}
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5><i className="bi bi-star-fill icon"></i>Title 1</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Curabitur venenatis est vel risus placerat, in pharetra sem vehicula.</p>
                        <button className="btn btn-primary btn-box">Click Me</button>
                    </div>
                    <img src="https://via.placeholder.com/150" alt="Image 1"/>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5><i className="bi bi-star-fill icon"></i>Title 2</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Curabitur venenatis est vel risus placerat, in pharetra sem vehicula.</p>
                        <button className="btn btn-primary btn-box">Click Me</button>
                    </div>
                    <img src="https://via.placeholder.com/150" alt="Image 2"/>
                </div>
            </div>
        </div>
        {/* Second Row */}
        <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5><i className="bi bi-star-fill icon"></i>Title 3</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Curabitur venenatis est vel risus placerat, in pharetra sem vehicula.</p>
                        <button className="btn btn-primary btn-box">Click Me</button>
                    </div>
                    <img src="https://via.placeholder.com/150" alt="Image 3"/>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <div className="box">
                    <div className="box-content">
                        <h5><i className="bi bi-star-fill icon"></i>Title 4</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Curabitur venenatis est vel risus placerat, in pharetra sem vehicula.</p>
                        <button className="btn btn-primary btn-box">Click Me</button>
                    </div>
                    <img src="https://via.placeholder.com/150" alt="Image 4"/>
                </div>
            </div>
        </div>
    </div>
    </AdminLayout>
  
    )
}
export default SscHsc