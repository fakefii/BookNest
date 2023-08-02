import React from 'react'
import { FaDollarSign } from 'react-icons/fa';

const donation = () => {
  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h2>Support Us</h2>
            <p className="lead">If you find our content helpful, please consider making a donation to support our cause.</p>
            <button className="btn btn-primary btn-lg">
              <FaDollarSign className="mr-5" />
              Donate
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default donation