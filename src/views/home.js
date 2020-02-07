import React, { Component } from "react";
import Navegation from "../components/navegation";
import CarrouselHome from "../components/carrousel";
class Home extends Component {
  render() {
    return (
      <div>
        <Navegation />

      <CarrouselHome />
      </div>
    );
  }
}
export default Home;
