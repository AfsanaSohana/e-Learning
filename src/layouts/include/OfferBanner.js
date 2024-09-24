import React from 'react'

function OfferBanner() {
  return (
    <OfferBanner>
          {/* Offer Banner  */}
  <div className="alert alert-warning alert-dismissible offer-banner" role="alert">
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img src="/assets/img/offer-banner.jpg" alt="Special Offer"/>
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  </div>
    </OfferBanner>
  )
}

export default OfferBanner