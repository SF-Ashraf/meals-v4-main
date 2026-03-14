import React from "react";
import Logo from "./Logo";
import CustomButton from "./CustomButton";
import ShopIcons from "./ShopIcons";

function Header() {
  return (
    <div className="header ">
        <div className="container mx-auto">
          <div className="grid grid-col-1 lg:grid-col-3 ">
            <div className="flex items-center justify-between py-2">
            <div className="logo flex items-center gap-3">
              <Logo />
              <CustomButton decoration={"text-amber-300 font-medium text-xl uppercase border border-amber-300 px-5 py-1.5 rounded-md "} path={"/addMeals"}>
                Add Meal
              </CustomButton>
            </div>

            <div className="shoop-icon">
                <ShopIcons />
            </div>
          </div>
        </div>
      </div>

        {/*  Start Content */}
      <div className="content flex flex-col items-center justify-center h-150 leading-loose text-amber-300 text-3xl   text-center">
        <h2 className=" mb-3">🍽️ Fresh Meals Delivered To Your Door</h2>
        <p className=" mb-3">
          Enjoy delicious, freshly prepared meals made with <br/> the finest
          ingredients and delivered straight to you.
        </p>
        <CustomButton decoration={"border border-amber-400 text-2xl px-6 py-2 rounded-lg my-3 text-white uppercase hover:border-white hover:text-amber-400"} path={"/"}>Order Now</CustomButton>
      </div>
        {/*  End Content */}

    </div>
  );
}

export default Header;
