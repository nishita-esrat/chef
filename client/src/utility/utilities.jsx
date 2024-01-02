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
    // set local storage job item
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
