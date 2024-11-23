import "../list/list.css";
import React from "react";

function List() {
  return (
    <div className="parent-main-list">
      <div className="list-child-one">
        ALL CATEGORIES
        <div className="drop-down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          class="_0f61da95"
          alt="Dropdown trigger"
        >
          <path
            d="M85.4 277.33h60.32l366.34 366.34L878.4 277.33h60.33v60.33l-408.99 409h-35.3l-409.05-409z"
            class="rui-77aaa"
          ></path>
          
        </svg>
        </div>
      </div>
      <div className="list-child-two"> Mobile Phones</div>
      <div className="list-child-three">Cars</div>
      <div className="list-child-four">Motorcycles</div>
      <div className="list-child-five">Houses</div>
      <div className="list-child-six">Video-Audios</div>
      <div className="list-child-seven">Tablets</div>
      <div className="list-child-eight">Land & Plots</div>
    </div>
  );
}
export default List;
