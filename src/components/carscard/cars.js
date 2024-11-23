import React from "react";
import './cars.css'
// import favIcon from "../../Assets/favorite-svgrepo-com.svg";
// import almira from "../../Assets/almira.webp";
// import corolla from "../../Assets/corolla se.jpeg";
// import honda from "../../Assets/honda vti.webp";
// import changan from "../../Assets/changan.webp";

function Cars({img1, img2, price, title, loc, weeks}) {
  return (
    <div>
      <div className="main-card-parent">
        <div className="card-one-parent-one">
          <div className="img-parent">
            <img src={img1} alt="card" />
          </div>
          <div className="content-parent">
            <div className="prize">Rs {price}</div>
            <div className="fav_icon">
              <img src={img2} alt="icon" />
            </div>
          </div>
          <div className="des_parent">
            <div className="des_child1">{title}</div>
            <div className="des_child2">
                <div className="meter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" class="fd258638"><path fill-rule="evenodd" d="M7 .3c3.7 0 6.7 3 6.7 6.7 0 1.5-.2 3.1-1.6 4.5l-.4.2H2.3l-.4-.2C.5 10 .3 8.5.3 7 .3 3.3 3.3.3 7 .3zm0 1.4C4 1.7 1.7 4 1.7 7c0 1.6.2 2.6 1 3.3h8.7c.7-.7 1-1.7 1-3.3 0-3-2.5-5.3-5.4-5.3zm3.3 2v1l-.8.8-.7.6.2 1A2 2 0 1 1 8 5l1.5-1.4h1zM7 6.3a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4z"></path></svg></div>
            <span className="milage"> 22,000 </span> 
            <span className="dot">•</span>
            <span className="model"> 2019 </span>
            </div>
            <div className="des_child3">
                <div className="loc">{loc} </div>
            </div>
            <div className="dur">{weeks}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cars;
