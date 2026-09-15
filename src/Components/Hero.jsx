import React from "react"
import heroImage from "../images/hero image.jpg"
import heroImage2 from "../images/hero image2.jpg"
import star from "../images/star.svg"
import star1 from "../images/star1.svg"
const Hero = () => {
    return (
        <div style={{ background: "#F2F5F8", paddingBottom: "40px" }} className="px-3 pt-5">
            <div className="d-lg-flex d-md-flex col-lg-10 pt-4 pt-lg-5 col-12 mx-auto  pb-2"  >
                <div className="w-100   mb-4">
                    <div className="mx-auto ">
                        <div >
                            <h3 className=" col-11  col-lg-4 mb-lg-4 fw-bold text-center text-lg-start ">Secure <span style={{ color: "#28D08A " }}>business</span> with Techty security</h3>
                            <p className="mb-lg-4 col-lg-10" style={{ fontSize: "15px", width: "px" }}>
                                we have consider our solution to support every stage of your growth. We are the fatsest and easiest way to launch an attractive and feature-compleet SaaS showcase
                            </p>
                        </div>
                        <div className="d-flex justify-content-between flex-wrap col-lg-8   ">
                            <button className=" border rounded-2 fw-medium fs-6" style={{ background: "#28D08A ", color: "white" }}>Request A Free Demo</button>
                            <button className=" border rounded-2 fw-medium text-black fs-6" >Hire An Expert</button>

                        </div>
                    </div>
                </div>
                <div className="last session d-flex flex-column align-items-center">
                    <img style={{ width: "350px", height: "200px" }} src={heroImage2}></img>
                    <div className="d-flex flex-wrap ">
                        <img src={star1}></img>
                        <p className="mt-3 me-2 fs-6">Trust pilot</p>
                        <img className="me-1 " src={star}></img>
                        <img className="me-1" src={star}></img>
                        <img className="me-1" src={star}></img>
                        <img className="me-1" src={star}></img>
                        <img className="me-1" src={star}></img>
                    </div>



                </div>

            </div>
            <hr className="my-3 border border-1 border-dark col-10 mx-auto" />
            <div className="d-lg-flex flex-wrap col-lg-9 mx-auto">
                <div className="col-lg-5 d-flex flex-column justify-content-center text-center text-lg-start">
                    <span className="fs-5  fw-medium">Thousands of     </span>
                    <p className="fs-5 fw-medium">businesses use Techty</p>
                </div>
                <div className="d-flex flex-wrap">
                    <div className="d-flex  mx-auto">
                        <div className="d-flex me-lg-4  mt-lg-4 ">
                            <img className=" h-50 mt-1" src={star1}></img>
                            <p className="  fs-4">logoipsum</p>
                        </div>
                        <div className="d-flex me-lg-4 mt-lg-4 ">
                            <img className=" h-50 mt-1" src={star1}></img>
                            <p className="  fs-4">logoipsum</p>
                        </div>
                        <div className="d-flex  mt-lg-4 ">
                            <img className=" h-50 mt-1" src={star1}></img>
                            <p className=" me-2 fs-4">logoipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero