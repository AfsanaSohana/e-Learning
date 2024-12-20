import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout';
import { useParams } from 'react-router-dom';

function ClassInfo() {
  let userdata = JSON.parse(localStorage.getItem("frontuserdata"));
  console.log(userdata);
  const [data, setData] = useState([]);
  const [batchData, setBatchData] = useState([]);
  // const [routineData, setRoutineData] = useState([]);
  // const [coursePlanData, setCoursePlan] = useState([]);
  // const [instructorData, setInstructor] = useState([]);
  const { batch_id } = useParams();

  function getDatas() {
    axios.get(`${process.env.REACT_APP_API_URL}/batch/${batch_id}`)
      .then(response => {
        setBatchData(response.data.data);
        console.log(response.data.data);
      });
  }

  useEffect(() => {
    if (batch_id) {
      getDatas();
    }
  }, [batch_id]);

  return (
    <>
      <AdminLayout>
        <div className='gradiant-background p-3'>
          <h5>{batchData.batch_details}</h5>
          <div className='right image'>
            <img src="/assets/img/teacher1.png" alt="Image 2" height={200} width={400} />
          </div>
        </div>
        <div className='row'>
          <div className='col-8 p-3'>
            <div className='row'>
              <div className='col-12'>

                {/* Class Routine */}
                <div className="p-2" id="section1 content-align-center" style={{ backgroundColor: '#f8f9fa', borderRadius: '3' }}>
                  <h3>ক্লাস রুটিন</h3>
                  <table className="table table-bordered p-3">
                    <thead>
                      <tr>
                        <th>সময়</th>
                        <th>দিন</th>
                      </tr>
                    </thead>
                    <tbody>
                      {batchData.routine && batchData.routine.map((d, key) => (
                        <tr key={key}>
                          <td className="table-primary">{d.start_time}</td>
                          <td className="table-secondary">{d.day_name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Course Syllabus */}
                <div className="p-2" id="section2" style={{ backgroundColor: '#e9ecef', borderRadius: '3' }}>
                  <h3 className='mt-2'> কোর্স সিলেবাস</h3>
                  <div className="container mt-4 p-2">
                    <table className="table table-bordered">
                      <tbody>
                        {batchData?.course?.courseplan && batchData.course.courseplan.map((d, key) =>
                          <tr key={key}>
                            <td>
                              <a className="text-primary" data-bs-toggle="collapse" href="#collapseRow1" role="button" aria-expanded="false" aria-controls="collapseRow1">
                                &darr;
                              </a>
                              <div className="collapse" id="collapseRow1">
                                <ul className="list-unstyled">
                                  <li className="mb-2">
                                    <i className="bi bi-document"></i> {d.title}
                                    <p className='file'>{d.document}</p>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Course Instructor */}
                <div className='mt-3 p-3' id="section3" style={{ backgroundColor: '#dee2e6', borderRadius: '3' }}>
                  <h3>কোর্স ইন্সট্রাক্টর</h3>
                  <div className="table table-bordered p-3">
                    {batchData.instructor &&
                      <tr>
                        <td>
                          <div className="list-box">
                            <div className="text-left">
                              <h5>{batchData.instructor.instructor_name}</h5>
                              <p className='text-muted me-2' style={{ fontSize: '10' }}>{batchData.instructor.designation}</p>
                            </div>
                             <img src={`${process.env.REACT_APP_IMG_URL}/instructoradd/${batchData.instructor.photo}`} alt="Instructor" />
                          </div>
                        </td>
                      </tr>
                    }
                  </div>
                </div>

                {/* Course Details */}
                <div className='mt-3 p-3' id="section3" style={{ backgroundColor: '#dee2e6', borderRadius: '3' }}>
                  <h3>কোর্স সম্পর্কে বিস্তারিত</h3>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>
                          <p>কোর্সটিতে যা যা আছে</p>
                            <a className="text-primary" data-bs-toggle="collapse" href="#collapseRow1" role="button" aria-expanded="false" aria-controls="collapseRow1">
                              &darr;
                            </a>
                          <div className="collapse" id="collapseRow1">
                            <ul className="list-unstyled text-muted">
                              <li className="mb-2">- যারা এইচএসসি ২০২৬ পরীক্ষায় বিজ্ঞান বিভাগ থেকে যোগ দেবে।</li>
                              <li className="mb-2">- যারা এইচএসসি পরীক্ষার পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান ও উচ্চতর গণিত বিষয়ে সিলেবাস শেষ করতে চায়।</li>
                              <li className="mb-2">- যারা রুটিনের মধ্যে থেকে পড়াশোনা আগাতে চায়।</li>
                              <li className="mb-2">- যারা নিজের প্রস্তুতি কতটা সম্পন্ন হয়েছে তা নিয়মিত ট্র্যাক করতে চায়।</li>
                              <li className="mb-2">- যারা প্রয়োজনীয় এক্সাম হ্যাকস এবং প্রশ্ন এনালাইসিস টেকনিক শিখে নিজেদের আত্মবিশ্বাস বাড়াতে চায়।</li>
                              <li className="mb-2">- যারা এইচএসসির পাশাপাশি বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্যও কলেজ থেকেই প্রস্তুত থাকতে চায়।</li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-md-4">
            <div style={{ position: "sticky", top: "100px" }} className="card p-3">
              <div className="embed-responsive embed-responsive-16by9 mb-1">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/exampleVideo"
                  allowFullScreen
                  title="course Video"
                ></iframe>
              </div>

              <div className="card-body overflow x-hidden">
                <p className="card-title">{batchData.batch_name} (সম্পূর্ণ সিলেবাস)</p>
                <p className="card-text">
                  কোর্স ফি: <strong>৳{batchData.discount_price}</strong> <span><s>৳{batchData.price}</s></span>
                </p>
                {userdata ? (
                  <Link to={`/FormJoin/${batch_id}`} className="btn btn-primary">কোর্সটি কিনুন</Link>
                ) : (
                  <Link to={"/student_login"} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                    <i className="fa fa-arrow-right ms-3"></i> Join Now </Link>
                )}
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="bi bi-book"></i> {batchData.number_of_subject} বিষয় </li>
                  <li className="mb-2"><i className="bi bi-box-seam"></i> প্রতি সপ্তাহে {batchData.weekly_exam} লাইভ ক্লাস </li>
                  <li className="mb-2"><i className="bi bi-shield-lock"></i> ডেইলি ও উইকলি এক্সাম</li>
                  <li className="mb-2"><i className="bi bi-shield-lock"></i> অধ্যায়ভিত্তিক লেকচার শিট</li>
                  <li className="mb-2"><i className="bi bi-shield-lock"></i> মডেল টেস্ট</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export default ClassInfo;
