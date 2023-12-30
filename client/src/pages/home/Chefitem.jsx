import React from "react";
import { Link } from "react-router-dom";

const Chefitem = ({ item }) => {
  const {
    chefId,
    chefName,
    chefPhotoId,
    yearsOfExperience,
    numOfRecipes,
    likes,
  } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-44 object-cover object-top">
        <img src={chefPhotoId} alt="chef photo" />
      </figure>
      <div className="card-body text-yellow-900 ">
        <h2 className="card-title text-lg">
          <span className="text-base text-gray-600">chef name : </span>
          {chefName}
        </h2>

        <div className="font-medium">
          <div>
            <span className="text-base text-gray-600">
              year of experience :
            </span>
            {yearsOfExperience}
          </div>
          <div>
            <span className="text-base text-gray-600">number of recipes :</span>
            {numOfRecipes}
          </div>
          <div>
            <span className="text-base text-gray-600">likes : </span> {likes}
          </div>
          <Link to={`/single_chef/${chefId}`} className="btn-common block mt-5 text-center">view recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default Chefitem;
