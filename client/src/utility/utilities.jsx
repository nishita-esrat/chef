import { showFavItem } from "../loaders/loader";

// set favourite chef item local storage
export const setLocalStorgeRecipe = (id) => {
  let storageFavItem = {};
  let isStorage = localStorage.getItem("storageFavItem");
  if (isStorage) {
    storageFavItem = JSON.parse(isStorage);
  }
  let item = storageFavItem[id];
  if (!item) {
    storageFavItem[id] = 1;
    // set local storage chef item
    localStorage.setItem("storageFavItem", JSON.stringify(storageFavItem));
    return "item added";
  } else {
    return "item exits";
  }
};

// get favourite chef items from local storage
export const getLocalStorgeRecipe = () => {
  let storageFavItem = {};
  let isStorage = localStorage.getItem("storageFavItem");
  if (isStorage) {
    storageFavItem = JSON.parse(isStorage);
    return storageFavItem;
  } else {
    return {};
  }
};

// delete chef favourite item
export const deleteChefItemLocalStorage = (id) => {
  let storageFavItem = {};
  let isStorage = localStorage.getItem("storageFavItem");
  if (isStorage) {
    storageFavItem = JSON.parse(isStorage);
  }
  let item = storageFavItem[id];
  if (item) {
    delete storageFavItem[id];
    // set local storage chef item
    localStorage.setItem("storageFavItem", JSON.stringify(storageFavItem));
    const result = showFavItem();
    return result;
  }
};
