import React from "react";
import Card from "../Components/Card";

function HomePage() {
  return (
    <div className="container mx-auto  flex flex-col items-center justify-center">
      <h2 className="maret-meal text-gray-500 font-bold text-2xl w-3/4 leading-11 text-center mt-15 uppercase">Discover our carefully selected products designed to make your everyday life better.</h2>

      <Card />
    </div>
  );
}

export default HomePage;
