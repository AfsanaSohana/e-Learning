import React from 'react'
import { Link,useLocation } from 'react-router-dom'

function Header() {
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
            <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>eLEARNING</h2>
            </a>
                                                
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                 
                    
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">ক্লাস ৬-১২</a>
                        <div className="dropdown-menu fade-down m-0">
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">Class one</Link>
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
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">অনলাইন ব্যাচ</a>
                        <div className="dropdown-menu fade-down m-0">
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item"> online batch(6-10)</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">SSC</Link>
                            <Link to={"/SscHsc"}  href="team.html" className="dropdown-item">Hsc</Link>
                            
                           
                        </div>
                    </div>
                    
                    
                    <Link to={"/Skill"} href="contact.html" className="nav-item nav-link">ভর্তি পরীক্ষা</Link>
                </div>
                <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></a>
            </div>
        </nav>
    )
}

export default Header