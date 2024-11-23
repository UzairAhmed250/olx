import React from "react";
import AddImage from "../../Assets/Advertise.jpeg"
import "../Addbanner/addbanner.css"

function Add(){
    return(
        <div className="addBanner-main-parent">
            <div className="add">
                <img src={AddImage} alt="banner-image" />
            </div>
        </div>






    );
}
export default Add;