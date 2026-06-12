import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items:
    JSON.parse(
      localStorage.getItem("recentlyViewed")
    ) || [],
};

const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",

  initialState,

  reducers: {
    addViewedProduct: (
      state,
      action
    ) => {
      const product = action.payload;

      state.items = state.items.filter(
        (item) =>
          item.id !== product.id
      );

      state.items.unshift(product);

      if (state.items.length > 5) {
        state.items.pop();
      }

      localStorage.setItem(
        "recentlyViewed",
        JSON.stringify(state.items)
      );
    },
  },
});

export const {
  addViewedProduct,
} = recentlyViewedSlice.actions;

export default recentlyViewedSlice.reducer;