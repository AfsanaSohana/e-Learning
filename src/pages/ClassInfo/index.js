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
          <a className="navbar-brand" href="#">HashLink Nav</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/#section1" className="nav-link">Section 1</Link>
              </li>
              <li className="nav-item">
                <Link  to="/#section2" className="nav-link">Section 2</Link>
              </li>
              <li className="nav-item">
                <Link  to="/#section3" className="nav-link">Section 3</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 

      {/* Sections */}
      {/* class routine */}
      <div id="section1" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <h2>Weekly Class Schedule</h2>

<table className="table table-bordered">
  <thead>
      <tr>
          <th>Time</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td className="table-primary">9:00 - 10:00 AM</td>
          <td className="table-secondary">Math</td>
          <td className="table-warning">Science</td>
          <td className="table-danger">History</td>
          <td className="table-success">Math</td>
          <td className="table-info">English</td>
      </tr>
      <tr>
          <td className="time-column">10:00 - 11:00 AM</td>
          <td className="subject">English</td>
          <td className="table-warning">Math</td>
          <td className="table-success">Science</td>
          <td className="table-secondary">History</td>
          <td className="table-primary">Math</td>
      </tr>
      <tr>
          <td className="time-column">11:00 - 12:00 PM</td>
          <td className="table-secondary">History</td>
          <td className="subjetable-primaryct">English</td>
          <td className="table-warning">Math</td>
          <td className="subject">Science</td>
          <td className="table-info">English</td>
      </tr>
      <tr>
          <td className="time-column">12:00 - 1:00 PM</td>
          <td className="subject">History</td>
          <td className="table-secondary">English</td>
          <td className="table-primary">Math</td>
          <td className="subject">Science</td>
          <td className="table-primary">English</td>
      </tr>
      <tr>
          <td className="time-column">1:00 - 2:00 PM</td>
          <td className="table-success">Science</td>
          <td className="subject">History</td>
          <td className="table-warning">English</td>
          <td className="subjectable-secondaryt">Math</td>
          <td className="table-primary">Science</td>
      </tr>
      <tr>
          <td className="time-column">2:00 - 3:00 PM</td>
          <td className="table-primary">Math</td>
          <td className="subject">English</td>
          <td className="table-success">Science</td>
          <td className="table-warning">History</td>
          <td className="table-secondary">Math</td>
      </tr>
  </tbody>
</table>
      </div>
      {/* class routine */}
      <div id="section2" style={{ height: '100vh', backgroundColor: '#e9ecef' }}>
        <h1>Section 2</h1>
        <h5>এসএসসি 2025 ব্যাচের শিক্ষার্থীদের আইসিটি বিষয়ে এ প্লাস নিশ্চিত করতে 
                    আমরা নিয়ে এসেছি এইচএসসির 25 অনলাইন ব্যাচ আইসিটি কোর্স, লাইভ ক্লাস, 
                    লেকচার শিট, ডেইলি, উইকলি এক্সাম, পূর্ণাঙ্গ মডেল টেস্ট ও বিজ্ঞান টিচারদের 
                    গাইড লাইনে তোমাদের সেরা প্রস্তুতি নিশ্চিত করবো আমরা। কোর্সটি মাসে ৭ দিন
                    হলেও এক্সাম থাকবে এইচএসসি পরীক্ষা পর্যন্ত।</h5>
      </div>
      <div id="section3" style={{ height: '100vh', backgroundColor: '#dee2e6' }}>
        <h1>Section 3</h1>
        <h5>এসএসসি 2025 ব্যাচের শিক্ষার্থীদের আইসিটি বিষয়ে এ প্লাস নিশ্চিত করতে 
                    আমরা নিয়ে এসেছি এইচএসসির 25 অনলাইন ব্যাচ আইসিটি কোর্স, লাইভ ক্লাস, 
                    লেকচার শিট, ডেইলি, উইকলি এক্সাম, পূর্ণাঙ্গ মডেল টেস্ট ও বিজ্ঞান টিচারদের 
                    গাইড লাইনে তোমাদের সেরা প্রস্তুতি নিশ্চিত করবো আমরা। কোর্সটি মাসে ৭ দিন
                    হলেও এক্সাম থাকবে এইচএসসি পরীক্ষা পর্যন্ত।</h5>
      </div>
    </div>
    <PopularCourse/>
  </>
  )
}

export default ClassInfo