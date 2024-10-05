import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import PopularCourse from '../PopularCourse';

function ClassInfo() {
  return (
    <>
    <div className='col-8 p-3 '>
      {/* HashLink Nav */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/#section1" className="nav-link">ক্লাস রুটিন</a>
              </li>
              <li className="nav-item">
                <a href="/#section2" className="nav-link">কোর্স সিলেবাস</a>
              </li>
              <li className="nav-item">
                <a href="/#section3" className="nav-link">ক্লাস রুটিন</a>
              </li>
              <li className="nav-item">
                <a href="/#section1" className="nav-link">ক্লাস রুটিন</a>
              </li>
              <li className="nav-item">
                <a href="/#section2" className="nav-link">কোর্স সিলেবাস</a>
              </li>
              <li className="nav-item">
                <a href="/#section3" className="nav-link">ক্লাস রুটিন</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> 

      {/* Sections */}
      {/* class routine */}
      <div id="section1 content-align-center " style={{ backgroundColor: '#f8f9fa' }}>
      <h2>ক্লাস রুটিন</h2>

<table className="table table-bordered p-3">
      <thead>
          <tr>
              <th>বিকাল ৪ টা</th>
              <th>দিন</th>
            
            
          </tr>
      </thead>
      <tbody>
          <tr>
              <td className="table-primary">সাপ্তাহিক ছুটি</td>
              <td className="table-secondary">শনিবার</td>
              
              
              
          </tr>
          <tr>
              <td className="time-column">সাপ্তাহিক ছুটি</td>
              <td className="subject">রবিবার</td>
              
              
          </tr>
          <tr>
              <td className="time-column">সাপ্তাহিক ছুটি</td>
              <td className="table-secondary">সোমবার</td>
            
              
          </tr>
          <tr>
              <td className="time-column">সাপ্তাহিক ছুটি</td>
              <td className="subject">মঙ্গলবার</td>
          
              
          </tr>
          <tr>
              <td className="time-column">ICT</td>
              <td className="table-success">বুধবার</td>
            
            
          </tr>
          <tr>
              <td className="time-column">সাপ্তাহিক ছুটি</td>
              <td className="table-primary">বৃহস্পতিবার</td>
              
            
          </tr>
          <tr>
              <td className="time-column">সাপ্তাহিক ছুটি</td>
              <td className="table-primary">শুক্রবার</td>
            
            
          </tr>
        
      </tbody>
</table>
      </div>
      {/* sylabus */}
      <div id="section2 p-2 " style={{  backgroundColor: '#e9ecef'}}>
        <h1 className='mt-2'>কোর্স সিলেবাস</h1>
        <div class="container mt-4 p-2">
    <table class="table table-bordered">
      <tbody>
        {/* <!-- Row 1 --> */}
        <tr>
          <td>
            <p> ICT সিলেবাস</p>
            <a class="text-primary" data-bs-toggle="collapse" href="#collapseRow1" role="button" aria-expanded="false" aria-controls="collapseRow1">
              Read more &darr;
            </a>
            <div class="collapse" id="collapseRow1">
                            <ul className="list-unstyled">
                                <li className="mb-2 ">
                                    <i className="bi bi-document "></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                    <p className='text-muted'>5 টি ভিডিও</p>
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-box-seam"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                    <p className='text-muted'>5 টি ভিডিও</p>
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-shield-lock"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                    <p className='text-muted'>5 টি ভিডিও</p>
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-shield-lock"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                    <p className='text-muted'>5 টি ভিডিও</p>
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-shield-lock"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                    <p className='text-muted'>5 টি ভিডিও</p>
                                </li>
                            </ul>
            </div>
          </td>
        </tr>
        {/* <!-- Row 2 --> */}
        <tr>
          <td>
            <p>মডেল টেস্ট</p>
            <a class="text-primary" data-bs-toggle="collapse" href="#collapseRow2" role="button" aria-expanded="false" aria-controls="collapseRow2">
              Read more &darr;
            </a>
            <div class="collapse" id="collapseRow2">
             <ul className="list-unstyled">
                                <li className="mb-2 ">
                                    <i className="bi bi-document "></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                    <p className='text-muted'>5 টি ভিডিও</p>
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-box-seam"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                    <p className='text-muted'>5 টি ভিডিও</p>
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-shield-lock"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                    <p className='text-muted'>5 টি ভিডিও</p>
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-shield-lock"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                    <p className='text-muted'>5 টি ভিডিও</p>
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-shield-lock"></i> অধ্যায়-১: তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত
                                    <p className='text-muted'>5 টি ভিডিও</p>
                                </li>
                            </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
      </div>
      <div id="section3" style={{backgroundColor: '#dee2e6' }}>
        <h1>Section 3</h1>
        <h5>এসএসসি 2025 ব্যাচের শিক্ষার্থীদের আইসিটি বিষয়ে এ প্লাস নিশ্চিত করতে 
                    আমরা নিয়ে এসেছি এইচএসসির 25 অনলাইন ব্যাচ আইসিটি কোর্স, লাইভ ক্লাস, 
                    লেকচার শিট, ডেইলি, উইকলি এক্সাম, পূর্ণাঙ্গ মডেল টেস্ট ও বিজ্ঞান টিচারদের 
                    গাইড লাইনে তোমাদের সেরা প্রস্তুতি নিশ্চিত করবো আমরা। কোর্সটি মাসে ৭ দিন
                    হলেও এক্সাম থাকবে এইচএসসি পরীক্ষা পর্যন্ত।</h5>
      </div>
    </div>
   
  </>
  )
}

export default ClassInfo