import React from 'react'
import './Scrolling-text.css'

const ScrollingText = () => {
  return (
    <div className="py-3 bg-info text-dark">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="scrolling-text-container">
                <div className="scrolling-text">
                  <p>
                    ANNOUNCEMENT: Grand Opening!! We are ready for business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ScrollingText