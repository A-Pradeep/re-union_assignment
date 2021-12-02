import { configureStore } from "@reduxjs/toolkit";
import RestaurantSlice from "./RestaurantSlice";
import SideBarSlice from "./SideBarSlice";

export const store = configureStore({
  reducer: {
    restaurant: RestaurantSlice,
    sideBar: SideBarSlice,
  },
});
