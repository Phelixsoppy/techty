import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg border fixed-top "style={{ background: "#F2F5F8" }}>
                <div className="container-fluid mx-lg-5">
                    <a className="navbar-brand" href="#">Techty</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className=" navbar-nav mx-auto mb-2  mb-lg-0">
                            <li className="nav-item me-2 fw-medium" style={{fontSize:'13px'}}>
                                <a >Home</a>
                            </li>
                            <li className="nav-item me-2 fw-medium " style={{fontSize:'13px'}}>
                                <a>About</a>
                            </li>
                            <li className="nav-item me-2 fw-medium" style={{fontSize:'13px'}}>
                                <a>Service</a>
                            </li>
                             <li className="nav-item me-2 fw-medium" style={{fontSize:'13px'}}>
                                <a>Blog</a>
                            </li>
                             <li className="nav-item fw-medium" style={{fontSize:'13px'}}>
                                <a>Contact</a>
                            </li>
                        </ul>
                       <button className='border border-2 border-tertiary rounded-2 fw-medium'>Request A Free Demo</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar