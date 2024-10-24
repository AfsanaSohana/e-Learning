import React,{useState,useNavigate,useParams} from 'react'
import axios from 'axios';

import AdminLayout from '../../layouts/AdminLayout'
import { Button, Modal } from 'react-bootstrap';
import { Link, useLocation} from 'react-router-dom';
import DemoClass1 from '../DemoClass1';
function Form() {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputs, setInputs] = useState({id:'',batch_id:'',course_id:'',student_id:'',enroll_date:'',fees:''});
  const [batch, setBatch] = useState([]);
  const [course, setCourse] = useState([]);
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();
  const {id} = useParams();
  
  function getDatas(){
      axios.get(`${process.env.REACT_APP_API_URL}/batchEnrollRequest/${id}`).then(function(response) {
          setInputs(response.data.data);
      });
  }
  
  const getRelational = async () => {
      axios.get(`${process.env.REACT_APP_API_URL}/batch`).then(function(response) {
          setBatch(response.data.data);
      });
      axios.get(`${process.env.REACT_APP_API_URL}/course`).then(function(response) {
          setCourse(response.data.data);
      });
      axios.get(`${process.env.REACT_APP_API_URL}/student`).then(function(response) {
          setStudent(response.data.data);
      });
  }
  
  useEffect(() => {
      if(id){
          getDatas();
      }
      getRelational();
  }, [id]);

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(inputs);
      
      try {
          let apiurl = '';
          if(inputs.id !== ''){
              apiurl = `/batchEnrollRequest/edit/${inputs.id}`;
          } else {
              apiurl = `/batchEnrollRequest/create`;
          }
          
          let response = await axios({
              method: 'post',
              responseType: 'json',
              url: `${process.env.REACT_APP_API_URL}${apiurl}`,
              data: inputs
          });
          console.log(response);
          navigate('/batchEnrollRequest');
      } 
      catch(e) {
          console.log(e);
      }
  }
  return (
        <AdminLayout>
     
 


              
           {/* form */}
           
            <div className='container card col-4 p-3 ps-4 pe-3 d mt-4'contentJustify='center'style={{backgroundColor: '#cce6ff',borderRadius:'3' }}>
                <strong><h5 className='text-align-center text-primary'>অনলাইন ফ্রি লাইভ ক্লাসে প্রবেশ করুন</h5></strong>
                 <form  >
                    <div className='row '>
                        <div className='col-12'>
                            <label htmlFor="name" className="form-label">নাম </label>
                            <div className='row card border-primary'onClick={handleShow}>

                                    <input type="text" className="form-control" id="batch_id"defaultValue={inputs.batch_id} name="batch_id" onChange={handleChange} placeholder="সোহানা আফসানা" />
                            </div>
                            
                            <label class="col-12-form-label mb-2 mt-2">আপনি একজন </label>
                            <div className='row card border-primary mb-3'>  
                                <div className='col-12 'onClick={handleShow}>
                                    <input class="form-check-input " type="radio" name="identity" id="student" value="student"/>শীক্ষার্থী
                                </div>
                            </div>

                            <div className='row card border-primary'>
                                <div className='col-12 'onClick={handleShow}>
                                    <input class="form-check-input b" type="radio" name="identity" id="guirdian" value="guirdian"/>অবিভাবক
                                </div>
                            </div>

                            <label htmlFor="email" className="form-label mt-2">শ্রেণি</label>
                            <div className='row card border-primary'>
                                <div className='col-12 p-0'onClick={handleShow}>
                                <input type="email" className="form-control" id="email"  placeholder="৬ষ্ঠ"/>
                                </div>
                            </div>

                            <label htmlFor="password" className="form-label">আইডি নম্বর </label>
                            <div className='row card border-primary'>
                                <div className='col-12 p-0'>
                                    
                                <input type="password" className="form-control col-12" id="password" placeholder="আইডি নম্বর" />
                                </div>
                            </div>
                                <div className='col-10 mt-3'onClick={handleShow}>
                                <button type="submit" className="btn btn-primary col-12">প্রবেশ করুন</button>
                                </div>        
                        </div>        
                    </div> 
                 </form>          
             </div>
             {/* form end */}
       
            </AdminLayout>
  )     
}

export default Form
