// import logo from '../logo-img/logo.svg';
import "../header/header.css";
import logo from "../../Assets/OLX_green_logo.svg.png";
import car from "../../Assets/Car_Icon.svg.png";
import prop from "../../Assets/property.png";
import sellimg from "../../Assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg";
import plusSell from "../../Assets/iconPlusSell_noinline.75fc7ea23e80b50447cf5757d8ef083a.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App">
      <div className="App-Main-header">
        <div className="App-header">
          <div className="logo">
            <img src={logo} alt="olX-logo"  />
          </div>
          <div className="main-parent-two">
            <div className="moto-parent">
              <div className="moto-child-one">
                <div className="moto-pre-child-one">
                  <img src={car} alt="Motor-Icon" height="24" width="24" />
                </div>
              </div>
              <div className="moto-child-two">Motor</div>
            </div>
            <div className="property-parent">
              <div className="property-child-one">
                <div className="property-pre-child-one">
                  <img src={prop} alt="Property-Icon" width="24" height="24" />
                </div>
              </div>
              <div className="property-child-two">Property</div>
            </div>
          </div>
        </div>
        <div className="second-main-parent">
          <div className="location-search-input">
            <input type="search" placeholder="Location or Compound" />
          </div>
          <div className="search-input">
            <input
              type="search"
              placeholder="Find Cars, Mobile Phones and more..."
            />
          </div>
          <div className="log-parent">
            <Link to="/login">
              <div className="login">Login</div>
            </Link>
          </div>
          <div className="main-parent-sell">
            <div className="sellImg">
              <img src={sellimg} alt="sell-image" width={"180"} />
            </div>
            <div className="sell">
              <img src={plusSell} alt="plus-sign" />
              <span className="sell-child-one">Sell</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
