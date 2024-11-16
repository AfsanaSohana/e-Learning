import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLayout from "../../../layouts/AdminLayout";
import { useParams } from 'react-router-dom';

function CourseInterface() {
    let userData = JSON.parse(localStorage.getItem("frontuserdata"));
    const [batchData, setbatchData] = useState([]);
    const { interface_id } = useParams();
    const [data, setData] = useState([]);
    const [batchLectureSheetData, SetbatchLectureSheetData] = useState([]);
    const [liveClassLink, setLiveClassLink] = useState(
        "https://zoom.us/j/your-zoom-link" // Replace with actual live class link
    );

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/course_details/${interface_id}`)
          .then(response => {
            console.log(response.data)
            SetbatchLectureSheetData(response.data.data);
            console.log(response.data.data);
          });
      }
    
    
      useEffect(() => {
        if (interface_id) {
          getDatas();
        }
      }, [interface_id]);
    

    // function getDatas() {
    //     axios.get(`${process.env.REACT_APP_API_URL}/`)
    //       .then(function(response) {
    //         setData(response.data.data);
    //       });
    // }

    const handleJoinLiveClass = () => {
        window.open(liveClassLink, "_blank");
    };

    return (
        <AdminLayout>
            <div className="course-dashboard">
                <div className="overlay"></div>
                <div className="container">
                    {/* Header */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <h1 className="display-4 text-white">{batchLectureSheetData?.course?.course_name }</h1>
                            <h4 className="lead text-white">
                                আমাদের ক্লাসে স্বাগতম
                                <span>
                                    <p className="mt-2">
                                        <small>এখানে শীক্ষার্থী তার কোর্স সম্পর্কিত সকল কার্যক্রম দেখতে পারবে</small>
                                    </p>
                                </span>
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
                                
                                <p><strong>New Lecture Added:</strong> {batchLectureSheetData?.batchLectureSheet?.l_sheet_name}</p>
                                <p><strong>Exam Date:</strong> The midterm exam will be held on November 10.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Course Modules */}
                        <div className="col-lg-6 mb-2">
                            {/* Course Modules Card */}
                            <div className="row p-2">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Course Modules</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className="list-group-item">Module 1: {batchLectureSheetData?.module?.module_1}</li>
                                            <li className="list-group-item">Module 2:{batchLectureSheetData?.module?.module_2}</li>
                                            <li className="list-group-item">Module 3:{batchLectureSheetData?.module?.module_4}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Upcoming Tasks & Deadlines */}
                            <div className="row mt-2 p-2">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Upcoming Tasks & Deadlines</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                                Assignment 1 - Due: {batchLectureSheetData.date}
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
                                                <a href="/QuizTest" className="btn btn-success btn-sm">
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
                        <div className="col-lg-6 d-flex">
                            <div className="row">
                                <div className="card mt-2" style={{ height: '500px', width: '660px' }}>
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
                            </div>
                        </div>
                    </div>

                    {/* Discussion Forum */}
                    <div className="row">
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

                    {/* Buttons at the end of the row */}
                    <div className="row p-2 bg-white mb-3" style={{ height: '20px' }}>
                        <div className="col-lg-12 d-flex justify-content-center">
                            <button className="btn btn-info me-2">Contact Instructor</button>
                            <button className="btn btn-warning me-2">Save Progress</button>
                            <button className="btn btn-danger">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default CourseInterface;
