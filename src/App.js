import React from "react";
import Carousel from "./Components/Carousel";
import CarouselItems from "./TestData/carouselItems";
export const App = () => {
 
  return (
    <div>
      <Carousel items={CarouselItems} />
    </div>
  );
};
export default App;
