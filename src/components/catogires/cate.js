import React from "react";
import "./cate.css";
import mobile from "../../Assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png";
import vechile from "../../Assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png";
import sale from "../../Assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png";
import rent from "../../Assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png";
import electronic from "../../Assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png";
import bike from "../../Assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png";
import buis from "../../Assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png";
import service from "../../Assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png";
import job from "../../Assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png";
import animals from "../../Assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png";
import furnit from "../../Assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png";
import fashion from "../../Assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png";
import books from "../../Assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png";
import kids from "../../Assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png";

function Cat() {
  return (
    <div className="Categories">
      <div className="topheading">
        <h2 className="cat">All categories</h2>
      </div>
      <div className="mainSec">
        <div className="imgSec">
          <img src={mobile} alt="" />
          <p>Mobile</p>
        </div>
        <div className="imgSec">
          <img src={vechile} alt="" />
          <p>Vechiles</p>
        </div>
        <div className="imgSec">
          <img src={sale} alt="" />
          <p>Property for Sale</p>
        </div>
        <div className="imgSec">
          <img src={rent} alt="" />
          <p>Property for Rent</p>
        </div>
        <div className="imgSec">
          <img src={electronic} alt="" />
          <p>Electronics & Home Appliences</p>
        </div>
        <div className="imgSec">
          <img src={bike} alt="" />
          <p>Bikes</p>
        </div>
        <div className="imgSec">
          <img src={buis} alt="" />
          <p>Buisness, Industrial & Agricultrul</p>
        </div>
        <div className="imgSec">
          <img src={service} alt="" />
          <p>Services</p>
        </div>
        <div className="imgSec">
          <img src={job} alt="" />
          <p>Jobs</p>
        </div>
        <div className="imgSec">
          <img src={animals} alt="" />
          <p>Animals</p>
        </div>
        <div className="imgSec">
          <img src={furnit} alt="" />
          <p>Furniture & Home Decor </p>
        </div>
        <div className="imgSec">
          <img src={fashion} alt="" />
          <p>Fashion & Beauty</p>
        </div>
        <div className="imgSec">
          <img src={books} alt="" />
          <p>Books, Sports & Hobbies</p>
        </div>
        <div className="imgSec">
          <img src={kids} alt="" />
          <p>Kids</p>
        </div>
      </div>
    </div>
  );
}

export default Cat;
