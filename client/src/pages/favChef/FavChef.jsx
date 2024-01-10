import React, { useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import ChefTable from "../../component/shared/ChefTable";
import { deleteChefItemLocalStorage } from "../../utility/utilities";
import { MdRemoveShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import Loading from "../loader/Loading";

const FavChef = () => {
  const result = useLoaderData();
  const [chefFav, setChefFav] = useState(result);
  const { pathname } = useLocation();

  //   delete chef favourite item
  const deleteChefItem = async (id) => {
    const result = await deleteChefItemLocalStorage(id);
    if (result) {
      toast.success("deleted item", { icon: <MdDelete /> });
    }
    setChefFav(result);
  };

  return (
    <>
      {Array.isArray(result) ? (
        <div className="container min-h-screen">
          {chefFav.length == 0 ? (
            <div className="flex justify-center items-center h-[500px] font-bold text-base sm:text-lg md:text-2xl">
              <p>there is no favourite food item</p>
              <MdRemoveShoppingCart className="w-10 h-10 text-yellow-900" />
            </div>
          ) : (
            <div className="overflow-x-auto  mt-32 mb-16">
              <table className="table w-[800px] mx-auto">
                <thead className="text-yellow-700">
                  <tr>
                    <th>recipe Name</th>
                    <th>chef name</th>
                    <th>remove</th>
                    <th>Favorite</th>
                  </tr>
                </thead>
                <tbody>
                  {chefFav &&
                    chefFav.map((item) => (
                      <ChefTable
                        key={item.recipeId}
                        recipe={item}
                        pathname={pathname}
                        deleteChefItem={deleteChefItem}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FavChef;
