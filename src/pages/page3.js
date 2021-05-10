import React from "react"
import headGraphic from "../assets/smit.jpg"

const Page2 = () => (
  <div className="container pt-5">
    <div className="row align-items-end">
      <div className="col-lg-6 mb30">
        <div className="box-square bg-white shadow-sm rounded-sm">
          <img
            src={headGraphic}
            alt="Creator"
            className="creator-img img-fluid rounded-sm"
          />
        </div>
      </div>

      <div className="col-lg-3 mb30">
        <div className="box-square bg-theme shadow-sm rounded-sm">
          <div className="text-white text-center">
            <h1 className="no-wrap">Smit Modi</h1>
            <i>
              Web Developer,
              <br /> <strong>India</strong>
            </i>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-6 mb30 order-lg-2">
        <div className="box-square bg-theme shadow-sm rounded-sm">
          <h2 className="text-center">Some title</h2>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="row justify-content-end">
          <div className="col-lg-6 mb30">
            <div className="box-square bg-white shadow-sm rounded-sm">
              <p className="text-center">Test 2</p>
            </div>
          </div>
          <div className="col-6 mb30">
            <div className="box-square bg-white shadow-sm rounded-sm">
              <p className="text-center">Test 3</p>
            </div>
          </div>
          <div className="col-6 mb30">
            <div className="box-square bg-white shadow-sm rounded-sm">
              <p className="text-center">Test 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row justify-content-end">
      <div className="col-lg-6 mb30">
        <div className="box-ar-1-2 bg-white shadow-sm rounded-sm">
          <h2 className="text-center">Contact</h2>
        </div>
      </div>
    </div>

    <div className="row justify-content-end">
      <div className="col-lg-3 mb30">
        <div className="box-square bg-theme shadow-sm rounded-sm">
          <h2 className="text-center">Other</h2>
        </div>
      </div>
      <div className="col-6 col-lg-3 mb30">
        <div className="box-square bg-white shadow-sm rounded-sm">
          <p className="text-center">Test 6</p>
        </div>
      </div>
      <div className="col-6 col-lg-3 mb30">
        <div className="box-square bg-white shadow-sm rounded-sm">
          <p className="text-center">Test 7</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-6 mb30">
        <div className="box-ar-1-2 bg-white shadow-sm rounded-sm">
          <h2 className="text-center">Quote</h2>
        </div>
      </div>
    </div>
  </div>
)

export default Page2
