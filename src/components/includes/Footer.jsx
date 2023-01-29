import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <section className="section footer bg-dark text-white text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr />
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quibusdam odit corporis eveniet, repellat sunt rerum. Aliquam nesciunt itaque cum, reprehenderit impedit omnis, incidunt pariatur voluptatibus, sint harum quia enim!</p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p className="text-white mb-1">Punjab, India</p></div>
                        <div><p className="text-white mb-1">+91 7667516XXX</p></div>
                        <div><p className="text-white mb-1">+91 7667516XXX</p></div>
                        <div><p className="text-white mb-1">reactlusmail@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;