import React from "react";
import LogoImage from "../assets/Images/mealschefLogo.png";

function AddMeals() {
  return (
    <div className="container mx-auto">
      <form action="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 my-15 h-96">
          {/* Start Fileds */}
          <div className="shadow-2xl rounded-md">
            {/* Fildes -1 */}
            <div className="fileds-strMeal flex flex-col p-3">
              <label htmlFor="strMeal">Enter Meal Name</label>
              <input
                type="text"
                name="strMeal"
                id="strMeal"
                placeholder="Enter Meal Name"
              />
            </div>

            {/* Fildes -2 */}

            <div className="fileds-Price flex flex-col p-3">
              <label htmlFor="price">Enter Price Meal</label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Enter Price Meal"
              />
            </div>

            {/* Fildes-3 */}

            <div className="fileds-strMealThumb flex flex-col p-3">
              <label htmlFor="strMealThumb">Enter Meal Thumb</label>
              <input
                type="url"
                name="strMealThumb"
                id="strMealThumb"
                placeholder="Enter Meal Thumb"
              />
            </div>

            {/* Fildes -4 */}

            <div className="fileds-mealPictures flex flex-col p-3">
              <label htmlFor="mealPictures">Enter Meal Pictures</label>
              <input
                type="url"
                name="mealPictures"
                id="mealPictures"
                placeholder="Enter Meal Pictures"
              />
            </div>

            {/* fildes -5 */}

            <div className="fileds-ingredients flex flex-col p-3">
              <label htmlFor="ingredients">Enter Meal ingredients</label>
              <input
                type="text"
                name="ingredients"
                id="ingredients"
                placeholder="Enter Meal ingredients"
              />
            </div>
          </div>
          {/* End Fileds */}

          {/*Start ingredent */}
          <div className="shadow-2xl rounded-md">
            <ul className="px-3">
              <li className="border-b border-amber-400 px-4`">Ingredient</li>
              <li className="border-b border-amber-400 px-4`">Ingredient</li>
              <li className="border-b border-amber-400 px-4`">Ingredient</li>
              <li className="border-b border-amber-400 px-4`">Ingredient</li>
              <li className="border-b border-amber-400 px-4`">Ingredient</li>
              <li className="border-b border-amber-400 px-4`">Ingredient</li>
              <li className="border-b border-amber-400 px-4`">Ingredient</li>
            </ul>
          </div>

          {/*Start ingredent */}

          {/* start Picture & Btn */}
          <div className="shadow-2xl rounded-md px-5">
            <img className="w-1/2 mx-auto my-6" src={LogoImage} alt="" />

            {/*Start Slider */}
            <div className=" flex overflow-x-scroll py-6 gap-3 bg-gray-200/40 px-3">
              <img className="w-1/4 object-contain rounded-md cursor-pointer" src={LogoImage} alt="" />
              <img className="w-1/4 object-contain rounded-md cursor-pointer" src={LogoImage} alt="" />
              <img className="w-1/4 object-contain rounded-md cursor-pointer" src={LogoImage} alt="" />
              <img className="w-1/4 object-contain rounded-md cursor-pointer" src={LogoImage} alt="" />
              <img className="w-1/4 object-contain rounded-md cursor-pointer" src={LogoImage} alt="" />
            </div>

            <div className="btn-group flex flex-col my-5 gap-3">
            <button className="bg-sky-500 py-2 text-white font-medium uppercase text-lg rounded-lg cursor-pointer">Add</button>
            <button className="bg-red-500 py-2 text-white font-medium uppercase text-lg rounded-lg cursor-pointer">Cancel</button>
            </div>
            {/*End Slider */}
          </div>

          {/* End Picture & Btn */}
          
        </div>
      </form>
    </div>
  );
}

export default AddMeals;
