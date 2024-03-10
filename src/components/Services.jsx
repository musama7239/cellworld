import React from 'react'

export default function Services() {
  return (
    <>
      <div className='container bg-card'>
        <div className="row mb-2 check">
        <div className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-250 mt-2 mx-4">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">Get The Cell Inspection</strong>
                <div className='box-1'>
                <i className='fa fa-check'> Dedicated Sales Expert to Sell your Car</i><br />
                <i className='fa fa-check'> We Bargain for you and share the Best Offer</i><br />
                <i className='fa fa-check'> We ensure Safe & Secure Transaction</i><br />
                <button type="button" className="btn btn-danger mt-3">Register Your Mobile</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card flex-md-row mb-4  h-md-250 mt-2 mx-4">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">Get The Cell Inspection</strong>
                <div className='box-2'>
                <i className='fa fa-check'> Dedicated Sales Expert to Sell your Car</i><br />
                <i className='fa fa-check'> We Bargain for you and share the Best Offer</i><br />
                <i className='fa fa-check'> We ensure Safe & Secure Transaction</i><br />
                <button type="button" className="btn btn-warning mt-3">Register Your Mobile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
