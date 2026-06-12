import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchProducts =
  createAsyncThunk(
    "products/fetchProducts",
    async () => {
      const response =
        await fetch(
          "https://fakestoreapi.com/products"
        );

      return response.json();
    }
  );

const productsSlice = createSlice({
  name: "products",

  initialState: {
    all: [],
    filtered: [],
    loading: false,
  },

  reducers: {
    filterByCategory: (
      state,
      action
    ) => {
      state.filtered =
        state.all.filter(
          (product) =>
            product.category ===
            action.payload
        );
    },

    filterByPrice: (
      state,
      action
    ) => {
      state.filtered =
        state.all.filter(
          (product) =>
            product.price <=
            action.payload
        );
    },

    resetFilters: (state) => {
      state.filtered = state.all;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProducts.pending,
        (state) => {
          state.loading = true;
        }
      )

      .addCase(
        fetchProducts.fulfilled,
        (state, action) => {
          state.loading = false;

          state.all =
            action.payload;

          state.filtered =
            action.payload;
        }
      )

      .addCase(
        fetchProducts.rejected,
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const {
  filterByCategory,
  filterByPrice,
  resetFilters,
} = productsSlice.actions;

export default productsSlice.reducer;