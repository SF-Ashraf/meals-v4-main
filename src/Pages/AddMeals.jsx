import React from "react";
import LogoImage from "../assets/Images/mealschefLogo.png";
import { useForm, useFieldArray } from "react-hook-form";
import { Plus, PlusCircle, Trash } from "lucide-react";

function AddMeals() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    mode: "all",
    defaultValues: {
      mealPictures: [],
      ingredients: [],
    },
  });

  const {
    fields: fieldsMealPictures,
    append: appendMealPictures,
    remove: removeMealPictures,
  } = useFieldArray({
    control,
    name: "mealPictures",
  });

  const {
    fields: ingredientsFields,
    append: appendIngredients,
    remove: removeIngredients,
  } = useFieldArray({
    control,
    name: "ingredients",
  });
  return (
    <div className="container mx-auto">
      <form action="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 my-15 ">
          {/* Start Fileds */}
          <div className="shadow-2xl rounded-md">
            {/* Fildes -1 */}
            <div className="fileds-strMeal flex flex-col p-3">
              <label htmlFor="strMeal">Enter Meal Name</label>
              <input
                type="text"
                name="strMeal"
                id="strMeal"
                className="border ps-4 py-1.5 rounded"
                placeholder="Enter Meal Name"
                {...register("strMeal", {
                  required: "fileds required",
                })}
              />
              <span className="text-red-500">{errors.strMeal?.message}</span>
            </div>

            {/* Fildes -2 */}

            <div className="fileds-Price flex flex-col p-3">
              <label htmlFor="price">Enter Price Meal</label>
              <input
                type="number"
                name="price"
                id="price"
                className="border ps-4 py-1.5 rounded"
                placeholder="Enter Price Meal"
                {...register("price", {
                  required: "fileds required",
                  min: {
                    value: 1,
                    message: "The minimum price for a meal is $1",
                  },
                })}
              />
              <span className="text-red-500">{errors.price?.message}</span>
            </div>

            {/* Fildes-3 */}

            <div className="fileds-strMealThumb flex flex-col p-3">
              <label htmlFor="strMealThumb">Enter Meal Thumb</label>
              <input
                type="url"
                name="strMealThumb"
                id="strMealThumb"
                placeholder="Enter Meal Thumb"
                className="border ps-4 py-1.5 rounded"
                {...register("strMealThumb", {
                  required: "fileds required",
                  pattern: {
                    value: /^https?:\/\/.*\.(jpg|jpeg|png|webp)$/,
                    message: "Enter a valid image URL",
                  },
                })}
              />
              <span className="text-red-500">
                {errors.strMealThumb?.message}
              </span>
            </div>

            {/* Fildes -4 */}
        
              <div className="fileds-mealPictures flex flex-col p-3 bg-amber-200/50 overflow-y-scroll h-50">
              <p className="ps-4 font-medium ">
                Enter (+) Button To Add Fields picture Meals
              </p>
                {fieldsMealPictures.map((meal, index) => {
                  return (
                    <div className="" key={meal.id}>
                      <div className="daynamic-fileds-pictures flex justify-between items-center my-3  ">
                        <input
                          type="url"
                          name="mealPictures"
                          id="mealPictures"
                          placeholder="Enter Meal Pictures"
                          className="border w-96 rounded px-3 py-1"
                          {...register(`mealPictures.${index}.mealPicture`, {
                            required: "fileds reqiure",
                            pattern: {
                              value: /^https?:\/\/.*\.(jpg|jpeg|png|webp)$/,
                              message: "Enter a valid image URL",
                            },
                          })}
                        />

                        <button
                          type="button"
                          className="ms-3 cursor-pointer"
                          onClick={() => removeMealPictures(index)}
                        >
                          <Trash />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="btn-add-daynamic-file my-3">
                <button
                  type="button"
                  className="ms-3 cursor-pointer"
                  onClick={() => appendMealPictures({ mealPictures: "" })}
                >
                  <Plus />
                </button>
              </div>
         

            {/* fildes -5 */}

            <div className="fileds-ingredients flex flex-col p-4 bg-amber-200/50">
            <p className="font-medium">Enter (+) Button To Add Fields Meal ingredients</p>
            <div className="overflow-y-scroll h-50">
              {ingredientsFields.map((ingredient, index) => {
                return (
                  <div key={ingredient.id} className="">
                    <div className="flex justify-between">
                      <input
                      type="text"
                      placeholder="enter ingredient meal"
                      className="border px-2 py-1.5 rounded w-96"
                      {...register(`ingredients.${index}.ingredient` , {
                        required: "fields require" ,

                      })}
                    />

                    <button type="button" onClick={()=> removeIngredients(index)}><Trash /></button>
                    </div>
                    <p className="text-red-500">{errors.ingredients?.[index]?.ingredient?.message}</p>
                  </div>
                );

                

              })}
              </div>
            </div>
              <button type="button" className="p-4" onClick={()=> appendIngredients({ingredients: ""})}><PlusCircle /></button>
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
              <img
                className="w-1/4 object-contain rounded-md cursor-pointer"
                src={LogoImage}
                alt=""
              />
              <img
                className="w-1/4 object-contain rounded-md cursor-pointer"
                src={LogoImage}
                alt=""
              />
              <img
                className="w-1/4 object-contain rounded-md cursor-pointer"
                src={LogoImage}
                alt=""
              />
              <img
                className="w-1/4 object-contain rounded-md cursor-pointer"
                src={LogoImage}
                alt=""
              />
              <img
                className="w-1/4 object-contain rounded-md cursor-pointer"
                src={LogoImage}
                alt=""
              />
            </div>

            <div className="btn-group flex flex-col my-5 gap-3">
              <button className="bg-sky-500 py-2 text-white font-medium uppercase text-lg rounded-lg cursor-pointer">
                Add
              </button>
              <button className="bg-red-500 py-2 text-white font-medium uppercase text-lg rounded-lg cursor-pointer">
                Cancel
              </button>
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
