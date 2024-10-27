import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AdminLayout from '../../layouts/AdminLayout';
import { Link } from "react-router-dom";


function CourseInterface() {
    const [liveClassLink, setLiveClassLink] = useState(
        "https://zoom.us/j/your-zoom-link" // Replace with actual live class link
      );

    const handleJoinLiveClass = () => {
        window.open(liveClassLink, "_blank");
      };
    
  return (
    

  

  <AdminLayout>
    <div className="course-dashboard">
      <div className="overlay"></div>

      <div className="container mt-5">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="display-4 text-white">Web-development</h1>
            <h4 className="lead text-white">
              আমাদের ক্লাসে স্বাগতম<span><p className='mt-2'><small>এখানে শীক্ষার্থী তার কোর্স সম্পর্কিত সকল কার্যক্রম দেখতে পারবে</small></p></span>
            </h4>
          </div>
        </div>

        {/* Main content area */}
        <div className="row">
          {/* Announcements */}
         
            <div className="card mb-3">
                <div className="card-header">
                    <h5>Announcements</h5>
                </div>
                <div className="card-body">
                    <p>
                    <strong>New Lecture Added:</strong> A new lecture on Bootstrap has been added. Check it out in Module
                    2.
                    </p>
                    <p>
                    <strong>Exam Date:</strong> The midterm exam will be held on November 10.
                    </p>
                </div>
            </div>
           
        </div>
        <div className="row">
          {/* Course Modules */}
           <div className="col-lg-6 mb-4">
                {/* row1 */}
                <div className='row'>
                <div className="card">
                <div className="card-header">
                    <h5>Course Modules</h5>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                    <li className="list-group-item">Module 1: Introduction</li>
                    <li className="list-group-item">Module 2: Advanced Topics</li>
                    <li className="list-group-item">Module 3: Final Project</li>
                    </ul>
                </div>
                </div>
                </div>
                {/* row2 */}
                <div className='row mt-3'>
                    <div className="card">
                    <div className="card-header">
                        <h5>Upcoming Tasks & Deadlines</h5>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Assignment 1 - Due: Oct 30
                            <form className="d-inline">
                            <input
                                type="file"
                                className="form-control d-inline w-50"
                                id="assignment1"
                                name="assignment1"
                            />
                            <button type="submit" className="btn btn-primary btn-sm me-1">
                                Submit
                            </button>
                            </form>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Quiz 1 - Due: Nov 2
                            <a href="#" className="btn btn-success btn-sm">
                            Take Quiz
                            </a>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Final Project Submission - Due: Dec 15
                            <form className="d-inline">
                            <input
                                type="file"
                                className="form-control d-inline w-50"
                                id="finalproject"
                                name="finalproject"
                            />
                            <button type="submit" className="btn btn-primary btn-sm">
                                Submit
                            </button>
                            </form>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                
          </div>
           {/* Live Class Section */}
           <div className='col-6 me-1'>
            {/* row */}
            <div className="row">
                    <div className="card">
                        <div className="card-header">
                        <h5>Live Class</h5>
                        </div>
                        <div className="card-body">
                        <p>Join our next live class session below:</p>
                        <button className="btn btn-primary" onClick={handleJoinLiveClass}>
                            Join Live Class
                        </button>
                        </div>
                    </div>
                 {/* row */}  
                 <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <button className="btn btn-info me-2">Contact Instructor</button>
                        <button className="btn btn-warning me-2">Save Progress</button>
                        <button className="btn btn-danger">Logout</button>
                    </div>
                 </div>
           </div>
        </div>



          {/* Discussion Forum */}
          <div className="col-lg-6 mb-4">
            <div className="card">
              <div className="card-header">
                <h5>Discussion Forum</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="discussion" className="form-label">
                      Post a Question
                    </label>
                    <textarea className="form-control" id="discussion" rows="3"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Class Resources */}
        <div className="row">
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-header">
                <h5>Class Resources</h5>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="#">Lecture Notes - Module 1</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">Assignment Instructions</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#">External Resources for Further Reading</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons at the end of the row */}
        
    </div>
    </AdminLayout>





)};
export default CourseInterface