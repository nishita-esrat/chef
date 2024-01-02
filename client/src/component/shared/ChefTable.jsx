import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ChefTable = ({ recipe }) => {
  const [isFav, setIsFav] = useState(false);
  const {
    recipeId,
    recipeName,
    recipePic,
    cookingMethod,
    ingredients,
    rating,
  } = recipe;
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-14 h-14">
                <img src={recipePic} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-yellow-700">{recipeName}</div>
            </div>
          </div>
        </td>
        <td>
          {ingredients &&
            ingredients.map((item, index) => {
              return (
                <span className="badge badge-ghost badge-sm">{item},</span>
              );
            })}
        </td>
        <td className="text-xs h-0">{cookingMethod}</td>
        <th>
          <button className="btn btn-ghost btn-xs text-yellow-700">
            {rating}
          </button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs text-yellow-700 ">
            {isFav ? (
              <FaHeart className="w-5 h-5" />
            ) : (
              <FaRegHeart className="w-5 h-5" />
            )}
          </button>
        </th>
      </tr>
    </>
  );
};

export default ChefTable;
