import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
function Form() {
  return (
        <AdminLayout>
      
            <h5 className='text-align-center'>ক্লাসে প্রবেশ করুন</h5>
            <form  >
                <div className='container'contentJustify='center'>
                    <div className='row-10'>
                        <div className='col-md-6 sm-4'>
                            <label htmlFor="name" className="form-label">নাম ঃ</label><span>
                            <input type="text" className="form-control" id="name" placeholder="সোহানা আফসানা" /></span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 sm-4'>
                             <label class="col-sm-4 col-form-label">আপনি একজন ঃ</label>
                            <input class="form-check-input" type="radio" name="identity" id="student" value="student"/>শীক্ষার্থী
                            <input class="form-check-input" type="radio" name="identity" id="guirdian" value="guirdian"/>অবিভাবক
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 sm-4'>
                            <label htmlFor="email" className="form-label">শ্রেণি</label>
                        <input type="email" className="form-control" id="email"  placeholder="৬ষ্ঠ"/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 sm-4'>
                            <label htmlFor="password" className="form-label">আইডি নম্বার ঃ</label>
                        <input type="password" className="form-control" id="password" />
                        </div>
                    </div>
                        
                        <button type="submit" className="btn btn-primary">প্রবেশ করুন</button>
                </div>
            </form>
            </AdminLayout>
  )
}

export default Form
