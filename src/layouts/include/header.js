import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import {logout} from '../../Api/AllApi'
function Header() {
    let userdata=JSON.parse(localStorage.getItem("frontuserdata"));
    const activeMenu=(e)=>{
        document.querySelectorAll('.submenu').forEach(
            function(e){
                e.classList.remove('active');
            }
        )
        const childElement = e.target.parentElement.querySelector('.submenu');
        if(childElement && childElement.classList.contains('submenu')){
            childElement.classList.add('active');
        }
    }

	const location = useLocation();
	const isLinkActive = (path)=>{
        return location.pathname == path ? 'active' : "";
    }
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>eLEARNING</h2>
            </a>
                                                
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                 
                    
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle position-relative has-icon-left" data-bs-toggle="dropdown" ><i className="fa-duotone fa-solid fa-backpack"></i>ক্লাস ৬-১২</a>
                        <div className="dropdown-menu fade-down m-0">
                            <Link to={"/DemoClass1"}  href="team.html" className="dropdown-item position-relative has-icon-left">Class one</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">Class two</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">Class three</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">Class foure</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">Class five</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">Class six</Link>
                           
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">স্কিলস</a>
                        <div className="dropdown-menu fade-down m-0">
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item"> All course</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">Language Learning</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">Freelancing</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">skills & IT</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">Kids(Age 7-14)</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">Professional</Link>
                           
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">অনলাইন ব্যাচ</a>
                        <div className="dropdown-menu fade-down m-0">
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item"> online batch(6-10)</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">SSC</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">Hsc</Link>
                            
                           
                        </div>
                    </div>
                    
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">সার্টিফিকেট</a>
                        <div className="dropdown-menu fade-down m-0">
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item"> আবেদন করুন </Link>
                           
                            
                           
                        </div>
                    </div>
                    
                    
                    <Link to={"/Skill"} href="contact.html" className="nav-item nav-link">ভর্তি পরীক্ষা</Link>
                </div>

                {userdata ? 
                <>
                {userdata?.student_name}
                <button className='btn-primary' onClick={logout}>  Logout</button> <span><Link to={'/student/batch'} className="btn btn-outline-primary ms-2 me-2" type="button">    GO TO CLASS</Link></span>
                </> : 
                <Link to={"/student_login"}  href=""className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"><i className="fa fa-arrow-right ms-3"></i>Join Now</Link>}
                
                
            </div>
        </nav>
    )
}

export default Header