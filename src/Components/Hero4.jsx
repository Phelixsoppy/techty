import React, { useEffect, useState } from 'react'
import hero4 from '../images/hero4.jpg'
import ss from '../images/ss.png'
import axios from 'axios'
const Hero4 = () => {
    const [Comment, setComment] = useState([])
    useEffect(() => {
        axios
            .get('https://randomapi.dev/api/posts/comments?count=10')
            .then((res) => {
                console.log(res.data.data)
                setComment(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })



    }, [])

    return (
        <div>
            <div className=' bg-white col-lg-10 mx-auto px-4 py-4'>
                <div className=' d-lg-flex col-lg-11 mx-auto'>
                    <div className='col-lg-6'>
                        <img className=' w-100 img-fluid h-auto rounded-4 ' style={{ maxWidth: '400px' }} src={hero4} alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <p className='fs-3 fw-bold col-lg-7 mt-3 text-center text-lg-start  '>
                            Our priority is to provide the effective <span style={{ color: "#28D08A " }}>solutions</span>
                        </p>
                        <p className='col-lg-10'>with a library full of thousands of templates to choose from, go idea to launch in matter of minutes, Try uploading your own forsale</p>
                        <button className=" border d-flex rounded-2 fw-medium fs-6 justify-content-start my-4" style={{ background: "#28D08A ", color: "white" }}>Request A Free Demo</button>

                    </div>
                </div>
            </div>
            <div className=''>
                <img className='w-100 h-100 img-fluid' style={{}} src={ss}></img>
            </div>
            <div className='col-lg-10 mx-auto pb-3 '>
                <div>
                    <p className='text-center fs-4 fw-bold py-4'>Read what the <span style={{ color: "#28D08A " }}>customers</span>are saying about us</p>
                </div>
                <div className='row g-3 col-lg-8 mx-auto'>
                    {
                        Comment.map(comment =>
                            <div className='col-6 col-lg-4' key={comment.id}>
                                <div className='h-100 border border-tertiary p-3'>
                                    <p>{comment.body}</p>
                                    <div className='d-flex'>
                                        <img src></img>
                                        <div>
                                            <p>{comment.author.name}</p>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )
}
export default Hero4