import React from 'react'


import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

import about from '../Assets/about.png'

const Contact = () => {
  return (
    
    <section>
      <div className="container about" id='about'>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={about} alt="" />
          </div>

          <div className="col-12 col-lg-6 text">
            <h5>Today deserves delivery</h5>
            <div className="text-container">
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit voluptatem praesentium. 
            Maiores, obcaecati? Voluptatibus vero, est aspernatur ad voluptatem praesentium
            placeat nobis obcaecati incidunt voluptatem praesentium <br /><br />
            
            tempora, accusantium fugiat expedita voluptate sit. Illum, adipisicing elit
            debitis voluptatem praesentium iste ipsum nam deleniti dolore adipisicing elit
            doloremque illo,
            </p>
            </div>
            <button type="button" className="btn btn-success">Order Now</button>
          </div>

        </div>
      </div>

      <div className="container" id='contact'>
        <div className="row">
          <div className="contact-icons">
            <div className="contact-icon"><BsFacebook size={25}/></div>
            <div className="contact-icon"><BsTwitter size={25}/></div>
            <div className="contact-icon"><BsInstagram size={25}/></div>
            <div className="contact-icon"><BsYoutube size={25}/></div>
          </div>

          <div className="contact-info">
            <h6>Privacy Policy</h6>
            <h6>Terms of Use</h6>
            <h6>Our Company</h6>
          </div>

          <div className="copyright">
            <h5>All Rights Reserved &copy; Salad Mohamed.</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact