import React from 'react'
import collecIdea from "../images/collect idea.jpg"
import check from "../images/check.svg"

const Hero2 = () => {
    return (
        <div className=' bg-white pt-3 col-lg-10 mx-auto pb-lg-5 px-3 '>
            <div >
                <div className='text-center fw-medium '>
                    <span className=' fs-4'>Empower your business </span>
                    <p className=' fs-4'>with edge cutting <span style={{ color: "#28D08A" }}>solution</span></p>

                </div>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
                <div className='col-lg-4 col-10 d-flex  '>
                    <div className='col-2 d-flex align-items-center fs-2 fw-medium ' style={{ color: "#28D08A" }}>01</div>
                    <div className='col-10 pt-4'>
                        <h6>Collect idea</h6>
                        <p style={{ fontSize: "14px" }} className='col-11'>creating and improving products to meeet user needs</p>
                    </div>
                </div>
                <div className='col-lg-4 col-10 d-flex '>
                    <div className='col-2 d-flex align-items-center fs-2 fw-medium '>01</div>
                    <div className='col-10 pt-4'>
                        <h6>Collect idea</h6>
                        <p style={{ fontSize: "14px" }} className='col-11'>creating and improving products to meeet user needs</p>
                    </div>
                </div>
                <div className=' col-10 col-lg-4 d-flex '>
                    <div className='col-2 d-flex align-items-center fs-2 fw-medium  '>01</div>
                    <div className='col-11 pt-4'>
                        <h6>Collect idea</h6>
                        <p style={{ fontSize: "14px" }} className='col-11'>creating and improving products to meeet user needs</p>
                    </div>
                </div>
            </div>
            <hr className="my-3 border border-1 border-dark  mx-auto" />
            <div className=' d-lg-flex pt-3 col-lg-11 mx-auto'>
                <div className='col-lg-7  text-center'>
                    <img
                        className='img-fluid w-100'
                        style={{ maxWidth: "500px", height: "auto", borderRadius: "20px" }}
                        src={collecIdea}
                        alt="Collect idea"
                    />
                </div>
                <div className='col-lg-5  ps-lg-3  text-center mx-auto'>
                    <h3 className='fw-medium text-lg-start'>Collect idea</h3>
                    <p className='col-lg-9 fs-6'>
                        with our Techty, you can create landing pages that convert more visitors that any other website can eailt create a page uisng a variety of unique blocks
                    </p>
                    <div className='d-flex align-items-start text-start'>
                        <img className=' mt-1' src={check}></img>
                        <p className='col-lg-9 ms-1 mb-0'>We collect ideas from different design inspiration</p>
                    </div>
                    <div className='d-flex align-items-start'>
                        <img className=' mt-1' src={check}></img>
                        <p className='col-lg-9 ms-2 mb-0'>Analysis data for any kind of corrections</p>
                    </div>
                    <div className='d-flex align-items-start text-start'>
                        <img className=' mt-1' src={check}></img>
                        <p className='col-lg-9 ms-2 mb-0'>Finalaise products for the production to be done</p>
                    </div>
                    <button className=" border d-flex rounded-2 fw-medium fs-6 justify-content-start my-4" style={{ background: "#28D08A ", color: "white" }}>Request A Free Demo</button>



                </div>

            </div>
        </div>
    )
}
export default Hero2