import React,{useState} from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { Button, Modal } from 'react-bootstrap';
import { Link, useLocation} from 'react-router-dom';

function Certificate() {
    return (
        
    <AdminLayout>
 
     <div className="certificate-container">
    {/* <!-- Certificate Header --> */}
    <div className="certificate-header">
        <h1>Certificate of Completion</h1>
        <p>This certifies that</p>
    </div>

    {/* <!-- Certificate Body --> */}
    <div className="certificate-body">
        <div className="recipient-name">Jannatul Hurmat</div>
        <p>has successfully completed the</p>
        <h2>Web-development</h2>
        <p>on 02/06/2024</p>
    </div>

    {/* <!-- Certificate Footer --> */}
    <div className="certificate-footer">
        <div className="signature">
            <div>
                <p>[sohana afsana]</p>
                <p>Instructor</p>
            </div>
            <div>
                <p>[sohana afsana]</p>
                <p>Director</p>
            </div>
        </div>
        <p className="mt-4">Issued by elearning</p>
    </div>
</div>

              
       
            </AdminLayout>
  )     
}

export default Certificate
