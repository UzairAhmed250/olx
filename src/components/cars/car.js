import React from 'react'
import { RightOutlined } from "@ant-design/icons";
import favicon from "../../Assets/favorite-svgrepo-com.svg";
import almira from "../../Assets/almira.webp";
import corolla from "../../Assets/corolla se.jpeg";
import honda from "../../Assets/honda vti.webp";
import changan from "../../Assets/changan.webp";
import "./car.css";
import Cars from "../../components/carscard/cars";
// import Cars from "../../components/carscard/cars"

function Car() {
  return (
    <>
    <div className='parent-div'>
        <div className='parent-one-child-one'>
            Cars
        </div>
        <div className='parent-one-child-two'>
            <div className='child-one'>View more</div>
            <div className='child-two'>
            <RightOutlined color="#4077FF"  />
            </div>
        </div>
    </div>
    <div className='aaa_999'>
      <Cars
      img1={almira}
      img2={favicon}
      price="21,65,000"
      title="New Suzuki van best pickup and milage."
      loc="Gulshan-e-johar, Karachi"
      waeks="4 weeks ago"
    />
     <Cars
      img1={corolla}
      img2={favicon}
      price="21,65,000"
      title="New Suzuki van best pickup and milage."
      loc="Gulshan-e-johar, Karachi"
      waeks="4 weeks ago"
    />
    <Cars
      img1={honda}
      img2={favicon}
      price="21,65,000"
      title="New Suzuki van best pickup and milage."
      loc="Gulshan-e-johar, Karachi"
      waeks="4 weeks ago"
    />
    <Cars
      img1={changan}
      img2={favicon}
      price="21,65,000"
      title="New Suzuki van best pickup and milage."
      loc="Gulshan-e-johar, Karachi"
      waeks="4 weeks ago"
    />
    </div>
    </>
  )
}

export default Car