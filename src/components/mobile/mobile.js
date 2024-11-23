import React from "react";
import "../mobile/mobile.css";
// import Phone from "../../Assets/nokia.webp";
// import berry from "../../Assets/blackberry.jpeg"
// import lg from "../../Assets/lg-4.jpg"
// import moto from '../../Assets/Motoqb.jpg'
// import heart from "../../Assets/favorite-svgrepo-com.svg";

function Mobile({ img1, img2, price, title, loc, waeks }) {
  return (
    <div className="card-main-parent">
      <div className="primary-card-parent">
        <div className="card-image">
          <img src={img1} alt="Nokia 3310" />
        </div>

        <div className="card-content-parent">
          <div className="price-parent">
            <div className="price">Rs: {price}</div>
            <div className="fav-icon">
              <img src={img2} alt="Favorite Icon" />
            </div>
          </div>
          <div className="des-parent">
            <p className="des-child">{title}</p>
            <div className="address-parent">
              <p className="address-child">{loc}</p>
            </div>
            <div className="duration-parent">
              <div></div>
              <p className="duration-child">{waeks}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
