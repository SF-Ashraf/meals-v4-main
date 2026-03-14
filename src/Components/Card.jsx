import React from "react";
import { mealsData } from "../Data/mealsData";
import { Link } from "react-router-dom";
function Card() {
  const fetchedMealsData = mealsData.map((meal) => {
    return meal;
  });

  console.log(fetchedMealsData);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-18 gap-x-20 my-15 ">
        {mealsData.map((meal) => {
          return (
            <div className="card-boy shadow-2xl px-5 rounded-2xl " key={meal.idMeal}>
              <img
                className="w-96 object-cover h-60 rounded-t-2xl"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />

              <div className="card-title">
                <h2>Description : {meal.strMeal.slice(0 , 10)}...</h2>
                <h3>Price: {meal.price}</h3>
                
                <div className="btn-group flex justify-between py-3">
                    <Link className="bg-sky-500 px-5 py-1 rounded-md text-white font-medium " to="">View</Link>
                    <Link className="bg-amber-400 px-5 py-1 rounded-md text-white font-medium " to="">Edit</Link>
                    <Link className="bg-red-500 px-5 py-1 rounded-md text-white font-medium " to="">Delete</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
