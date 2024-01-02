import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefTable from "../../component/shared/ChefTable";

const Chef = () => {
  const dataOfChef = useLoaderData();
  const {
    bio,
    chefId,
    chefName,
    chefPhotoId,
    likes,
    numOfRecipes,
    yearsOfExperience,
    recipes,
  } = dataOfChef;

  return (
    <>
      <div className="container ">
        <div className="hero min-h-fit mt-24 border-y-2 border-y-yellow-700">
          <div className="hero-content flex-col lg:flex-row px-0 py-4">
            <img src={chefPhotoId} className="lg:max-w-sm rounded-lg" />
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-700">
                {chefName}
              </h1>
              <p className="py-6 text-sm md:text-base text-gray-600">{bio}</p>
              <div className="font-medium text-yellow-700">
                <div>
                  <span className="text-base text-gray-600">
                    year of experience :
                  </span>
                  {yearsOfExperience}
                </div>
                <div>
                  <span className="text-base text-gray-600">
                    number of recipes :
                  </span>
                  {numOfRecipes}
                </div>
                <div>
                  <span className="text-base text-gray-600">likes : </span>{" "}
                  {likes}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto mt-20 mb-16">
          <table className="table w-[1100px]">
            <thead className="text-yellow-700">
              <tr>
                <th>Name</th>
                <th>ingredients</th>
                <th>cooking method</th>
                <th>rating</th>
                <th>Favorite</th>
              </tr>
            </thead>
            <tbody>
              {recipes &&
                recipes.map((item) => (
                  <ChefTable key={item.recipeId} recipe={item} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Chef;
