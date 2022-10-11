import React from 'react'
import "./Spinner.css"
export default function Spinner() {
  return (
    <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className=" d-flex justify-content-center">
            <div className="grid-margin stretch-card">
                <div className="loader-demo-box">
                    <div className="jumping-dots-loader"> <span></span> <span></span> <span></span> </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
// #f37321;