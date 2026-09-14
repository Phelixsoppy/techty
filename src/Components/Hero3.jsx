import React from 'react'
import shutter from '../images/shutter.svg'
import ball from '../images/ball.svg'
import history from '../images/history.svg'
const Hero3 = () => {
    return (
        <div className='pb-4 px-2 ' style={{ background: "#F2F5F8" }}>
            <div className='col-lg-10 mx-auto'>
                <div>
                    <p className='text-center pb-4 fw-medium fs-3 pt-4'><span style={{ color: "#28D08A" }}>Unleash</span> business's full potential</p>
                </div>
                <div className='row g-4'>
                    <div className='col-lg-4 '>
                        <div style={{ width: '30px', height: '30px', borderRadius: '100%' }} className='bg-white mb-1  d-flex align-items-center justify-content-center'>
                            <img src={shutter} alt="" />
                        </div>
                         <h4>SEO Expert Team</h4>
                            <p className='col-10'>Creating products to meet our user needs and market demands</p>
                    </div>
                    <div className='col-lg-4'>
                        <div style={{ width: '30px', height: '30px', borderRadius: '100%' }} className='bg-white mb-1 d-flex align-items-center justify-content-center'>
                            <img src={ball} alt="" />
                        </div>
                         <h4>Stragedic planning</h4>
                            <p className='col-10'>Improving products to meet our user needs and market demands</p>
                    </div>
                    <div className=' col-lg-4'>
                        <div style={{ width: '30px', height: '30px', borderRadius: '100%' }} className='bg-white mb-1 d-flex align-items-center justify-content-center'>
                            <img src={history} alt="" />
                        </div>
                         <h4>24/7 Live Support</h4>
                            <p className='col-10'>We are ready to help you all day and our customer service are active</p>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
export default Hero3