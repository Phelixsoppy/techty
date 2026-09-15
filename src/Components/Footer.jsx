import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='bg-black py-3 px-2'>
            <div className='col-lg-10 mx-auto '>
                <div className='d-flex justify-content-between'>
                    <p className='text-white fs-5 fw-medium col  col-lg-4 '>Ready to take your business to the next level?</p>
                    <button className=" border  rounded-2 fw-medium fs-6 " style={{ background: "#28D08A ", color: "white",height:'40px' }}>Request A Free Demo</button>
                </div>
                <hr className='border border-1 border-tertiary' />
                <div className='row col d-flex border justify-content-between pt-3'>
                    <div className='col-lg-3 col-4 text-white pb-3'>
                        <p className=' fw-medium'>Techty</p>
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                        <p className='col-lg-6 fs-6'>
                            copyright &copy; 2023 Techty, All rights reserved
                        </p>
                    </div>
                    <div className='col-lg-3 col-4 d-flex flex-column pb-3'>
                        <p className='text-white fw-medium'>Quick Links</p>
                        <Link className='text-white text-decoration-none' to="#">About</Link>
                        <Link className='text-white text-decoration-none' to="#">Service</Link>
                        <Link className='text-white text-decoration-none' to="#">Blog</Link>
                        <Link className='text-white text-decoration-none' to="#">Contacts</Link>
                    </div>
                    <div className='col-lg-3 col-4 d-block d-flex flex-column text-white pb-3'>
                        <p className='fw-medium'>Social</p>
                        <a>Instagram</a>
                        <a>Twitter</a>
                        <a>Facebook</a>
                    </div>
                    <div className='col-lg-3 col-12 text-white'>
                        <p className=' fw-medium'>Our Newsletter </p>
                        <p className=' fs-6'>Suscribe to our newsletter to get our news delivered to you</p>
                        <input type='text' className='col-8 bg-black border rounded-start'></input><button className='border border-success rounded-end' style={{ background: "#28D08A ", color: "white" }}>Join</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer