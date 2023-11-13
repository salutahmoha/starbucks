import React from 'react'
import './Shop.css';

import {BsStarFill} from 'react-icons/bs';
import {BsStarHalf} from 'react-icons/bs';

import shop1 from '../Assets/shop1.png';
import shop2 from '../Assets/shop2.png';
import shop3 from '../Assets/shop3.png';

const Shop = () => {
  return (
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
  )
}

export default Shop