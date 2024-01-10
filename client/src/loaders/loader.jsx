import { getLocalStorgeRecipe } from "../utility/utilities";

// for sending chef favourite item from local storage to server
export const showFavItem = async () => {
  try {
    const favItems = getLocalStorgeRecipe();
    const res = await fetch("https://chef-server-murex.vercel.app/all_fav_item", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favItems),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    return "something went wrong";
  }
};
