import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function FormJoin() {
  return (
    <AdminLayout>
      <div className='container card col-4 p-3 ps-4 pe-3 mt-4' contentJustify='center' style={{ backgroundColor: '#cce6ff', borderRadius: '3px' }}>
        <strong><h5 className='text-align-center text-primary'>পেমেন্ট করুন</h5></strong>
        <form>
          <div className='row'>
            <div className='col-12'>
              <label htmlFor="trans_number" className="form-label text-primary">ট্রানজেকশন নাম্বার </label>
              <div className='row card border-primary'>
                <input type="text" className="form-control" id="trans_number" placeholder="02135678434" />
              </div>

              <label htmlFor="trans_id" className="form-label mt-2  text-primary">ট্রানজেকশন আইডি</label>
              <div className='row card border-primary'>
                <div className='col-12 p-0'>
                  <input type="text" className="form-control" id="trans_id" placeholder="032656" />
                </div>
              </div>

              <label htmlFor="email" className="form-label mt-2  text-primary">পেমেন্ট মেথড</label>
              <div className='row card border-primary'>
                <select id="payment_method" className="form-control">
                  <option value="">বিকাশ</option>
                  <option value="nagad">নগদ</option>
                  <option value="rocket">রকেট</option>
                  <option value="dbbl">ডাচ-বাংলা</option>
                </select>
              </div>
            </div>

            <div className='col-10 mt-3'>
              <button type="submit" className="btn btn-primary col-12">প্রবেশ করুন</button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default FormJoin;

