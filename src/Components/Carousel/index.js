import React from "react";
import owlOptions from "./options";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
const index = (props) => {
  return (
    <div>
      <OwlCarousel options={owlOptions}>
        {props.items.map((value) => (
          <div>
            <img src={value.image} alt="Deneme"/>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};
export default index;
