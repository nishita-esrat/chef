import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  getLocalStorgeRecipe,
  setLocalStorgeRecipe,
} from "../../utility/utilities";
import { toast } from "react-toastify";

const ChefTable = ({ recipe, pathname, deleteChefItem }) => {
  const [isFav, setIsFav] = useState({});
  const [check, setCheck] = useState("");
  const {
    recipeId,
    recipeName,
    recipePic,
    cookingMethod,
    ingredients,
    rating,
  } = recipe;
  // set chef item local storage
  const selectRecipe = (id) => {
    const result = setLocalStorgeRecipe(id);
    if (result == "item added") {
      toast.success(result, { icon: <FaHeart /> });
    } else {
      toast.info(result, { icon: <FaHeart /> });
    }
    setCheck(result);
  };
  // get chef items from local storage
  useEffect(() => {
    const result = getLocalStorgeRecipe();
    setIsFav(result);
  }, [check]);
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
        {pathname == "/my_item" && (
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-14 h-14">
                  <img
                    src={recipe.chefPhotoId}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold text-yellow-700">
                  {recipe.chefName}
                </div>
              </div>
            </div>
          </td>
        )}
        {pathname != "/my_item" && (
          <td>
            {ingredients &&
              ingredients.map((item, index) => {
                return (
                  <span className="badge badge-ghost badge-sm" key={index}>
                    {item},
                  </span>
                );
              })}
          </td>
        )}
        {pathname != "/my_item" && (
          <td className="text-xs h-0">{cookingMethod}</td>
        )}
        {pathname != "/my_item" && (
          <th>
            <button className="btn btn-ghost btn-xs text-yellow-700">
              {rating}
            </button>
          </th>
        )}
        {pathname == "/my_item" && (
          <th>
            <button className="btn btn-ghost btn-xs text-yellow-700 ">
              <MdDelete
                className="w-5 h-5"
                onClick={() => deleteChefItem(recipeId)}
              />
            </button>
          </th>
        )}
        <th>
          <button className="btn btn-ghost btn-xs text-yellow-700 ">
            {isFav[recipeId] ? (
              <FaHeart
                className="w-6 h-6"
                onClick={() => selectRecipe(recipeId)}
              />
            ) : (
              <FaRegHeart
                className="w-5 h-5"
                onClick={() => selectRecipe(recipeId)}
              />
            )}
          </button>
        </th>
      </tr>
    </>
  );
};

export default ChefTable;
