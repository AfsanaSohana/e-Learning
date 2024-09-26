import React from 'react'

function OfferBanner() {
  return (
      <div className="alert alert-warning alert-dismissible offer-banner p-0" role="alert">
        <div className="container-fluid p-0">
          <div className="d-flex justify-content-between align-items-center  p-0">
            <div>
              <img src="/assets/img/offer-banner.jpg" alt="Special Offer"/>
            </div>
            <button type="button" className="btn-close btn-success" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>
      </div>
  )
}

export default OfferBanner