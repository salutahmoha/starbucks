import React from 'react'

import delivery from '../Assets/delivery.png';

import './Delivery.css'

const Delivery = () => {
  return (
    <div className="container" id='delivery'>
        <h4>GET NOW</h4>
        <h3>ORDER WITH UBER EATS</h3>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={delivery} alt="" />
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
  )
}

export default Delivery