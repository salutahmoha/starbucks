import React from 'react'
import './Home.css'

import home from '../Assets/home.png';
import shop1 from '../Assets/shop1.png';
import shop2 from '../Assets/shop2.png';
import shop3 from '../Assets/shop3.png';
import delivery from '../Assets/delivery.png';
import app from '../Assets/app.png';
import about from '../Assets/about.png'

import {BsStarFill} from 'react-icons/bs';
import {BsStarHalf} from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

const Home = () => {
  return (
    <section id='home'>
      <div className="container" id='homepage'>
        <div className="row">
          <div className="col-12 col-lg-6">
            <h4>WELCOME TO</h4>
            <h2>Starbucks Coffee</h2>
            <p>FREE COFFEE IS A <br />TAP AWAY</p>

            <button type="button" class="btn btn-success">Join Now</button>
          </div>

          <div className="col-12 col-lg-6">
            <img src={home} alt="" className='homepage-img'/>
          </div>
        </div>
      </div>

      <div className="container" id='shop'>
        <h4>SHOP NOW</h4>
        <h3>SHOP COFFEE</h3>
        <div className="row">
          <div className="col-12 col-lg-4">
            <img src={shop1} alt="" className='shop-img'/>
            <div className="shop-div">
              <div className="shop-icons">
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarHalf/>
              </div>
              <h6>starbucks coffee</h6>
              <h5>$12.00</h5>
              <button type="button" class="btn btn-success">Order Now</button>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <img src={shop2} alt="" className='shop-img'/>
            <div className="shop-div">
              <div className="shop-icons">
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarHalf/>
              </div>
              <h6>starbucks coffee</h6>
              <h5>$12.00</h5>
              <button type="button" class="btn btn-success">Order Now</button>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <img src={shop3} alt="" className='shop-img'/>
            <div className="shop-div">
              <div className="shop-icons">
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarHalf/>
              </div>
              <h6>starbucks coffee</h6>
              <h5>$12.00</h5>
              <button type="button" class="btn btn-success">Order Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id='delivery'>
        <h4>GET NOW</h4>
        <h3>ORDER WITH UBER EATS</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={delivery} alt="" className='delivery-img'/>
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

      <div className="container" id='app'>
        <h4>OUR APP</h4>
        <h3>DOWNLOAD APP</h3>

        <div className="row">
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

          <div className="col-12 col-lg-6">
            <img src={app} alt="" className='app-img'/>
          </div>
        </div>
      </div>

      <div className="container about" id='about'>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={about} alt="" className='about-img'/>
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

export default Home