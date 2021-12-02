import { createSlice } from "@reduxjs/toolkit";
import defaultData from "../Data/RestaurantData.json";

const getRestaurantData = (start = 0, end = 10) => {
  return defaultData.slice(start, end);
};
const getFullRestaurantData = () => {
  return defaultData;
};

const initialState = {
  isLoadable: true,
  restaurantData: {
    total: defaultData.length,
    data: getRestaurantData(),
    current: 10,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    loadMore: (state, _) => {
      state.restaurantData.data = getRestaurantData(
        0,
        state.restaurantData.current + 10
      );
      state.restaurantData.current += 10;
      if (state.restaurantData.current >= state.restaurantData.total) {
        state.isLoadable = false;
      }
    },
    filterList: (state, action) => {
      const { dataList, menuIndex, changedOption } = action.payload;
      dataList[menuIndex].sub_options.forEach((option) => {
        if (option.name === changedOption) {
          option.active = !option.active;
        }
      });
      localStorage.setItem("sideBarMenu", JSON.stringify(dataList));

      // Filter the restaurant data using the selected options
      let filterData = [];
      dataList.forEach((type) => {
        let isFilterSelected = false;
        type.sub_options.forEach((option) => {
          if (option.active) {
            isFilterSelected = true;
          }
        });
        filterData.push({ type: type.name, isFilter: isFilterSelected });
      });

      // Reset the restaurant data if all the options are deselected
      if (!filterData.some((type) => type.isFilter)) {
        state.restaurantData.data = getRestaurantData();
        state.restaurantData.current = 10;
        state.isLoadable = true;
        state.restaurantData.total = defaultData.length;
        return;
      }

      state.isLoadable = false;
      // Filter the restaurant data using the selected options
      let fullRestaurantData = getFullRestaurantData();
      filterData.forEach((filterType, index) => {
        if (filterType.isFilter) {
          const filterOptions = dataList[index].sub_options;
          switch (filterType.type) {
            case "Features":
              state.restaurantData.data = fullRestaurantData.filter(
                ({ restaurant }) =>
                  filterOptions.some((option) => {
                    return (
                      (option.active &&
                        option.name === "Best rated (4+)" &&
                        restaurant.user_rating.aggregate_rating >= 4) ||
                      (option.active &&
                        option.name === "Good rated (3+)" &&
                        restaurant.user_rating.aggregate_rating >= 3 &&
                        restaurant.user_rating.aggregate_rating < 4) ||
                      (option.active &&
                        option.name === "Average rated (2+)" &&
                        restaurant.user_rating.aggregate_rating >= 2 &&
                        restaurant.user_rating.aggregate_rating < 3)
                    );
                  })
              );
              fullRestaurantData = state.restaurantData.data;
              break;
            case "Cuisine":
              state.restaurantData.data = fullRestaurantData.filter(
                // Return the restaurant data if cuisineOption is selected
                ({ restaurant }) =>
                  filterOptions.some((cuisineOption) => {
                    return (
                      cuisineOption.active &&
                      restaurant.cuisines
                        .split(",")
                        .includes(cuisineOption.name)
                    );
                  })
              );
              fullRestaurantData = state.restaurantData.data;
              break;
            default:
              state.restaurantData.data = fullRestaurantData.filter(
                // Return the restaurant data if ratingOption is selected
                ({ restaurant }) =>
                  filterOptions.some((ratingOption) => {
                    return (
                      ratingOption.active &&
                      ratingOption.name.slice(0, -3).toLowerCase() ===
                        restaurant.user_rating.rating_text.toLowerCase()
                    );
                  })
              );
              fullRestaurantData = state.restaurantData.data;
              break;
          }
          state.restaurantData.total = state.restaurantData.data.length;
        }
      });
    },
    // previousDataSet: (state, action) => {
    //   state.restaurantData.start -= action.payload;
    // },
    // incrementLimit: (state, action) => {
    //   state.restaurantData.limit += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { loadMore, filterList } = restaurantSlice.actions;

export default restaurantSlice.reducer;
