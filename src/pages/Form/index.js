import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
function Form() {
  return (
        <AdminLayout>
      
            <h5 className='text-align-center'>ক্লাসে প্রবেশ করুন</h5>
            <form  >
                <div className='container'contentJustify='center'>
                    <div className='row'>
                        <div className='col-4'>
                            <label htmlFor="name" className="form-label">নাম </label>
                            <div className='row card border-primary'>

                                    <input type="text" className="form-control" id="name" placeholder="সোহানা আফসানা" />
                            </div>
                            
                            <label class="col-12-form-label mb-2 mt-2">আপনি একজন </label>
                            <div className='row card border-primary mb-3'>  
                                <div className='col-12 '>
                                    <input class="form-check-input " type="radio" name="identity" id="student" value="student"/>শীক্ষার্থী
                                </div>
                            </div>

                            <div className='row card border-primary'>
                                <div className='col-12 '>
                                    <input class="form-check-input b" type="radio" name="identity" id="guirdian" value="guirdian"/>অবিভাবক
                                </div>
                            </div>

                            <label htmlFor="email" className="form-label mt-2">শ্রেণি</label>
                            <div className='row card border-primary'>
                                <div className='col-12'>
                                <input type="email" className="form-control" id="email"  placeholder="৬ষ্ঠ"/>
                                </div>
                            </div>

                            <label htmlFor="password" className="form-label">আইডি নম্বর </label>
                            <div className='row card border-primary'>
                                <div className='col-12'>
                                    
                                <input type="password" className="form-control" id="password" placeholder="আইডি নম্বর" />
                                </div>
                            </div>
                                <div className='col-12'>
                                <button type="submit" className="btn btn-primary">প্রবেশ করুন</button>
                                </div>        
                        </div>        
                    </div>            
                </div>
            </form>
            </AdminLayout>
  )
}

export default Form
