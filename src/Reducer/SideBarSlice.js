import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    name: "Features",
    sub_options: [
      {
        name: "Best rated (4+)",
        active: false,
      },
      {
        name: "Good rated (3+)",
        active: false,
      },
      {
        name: "Average rated (2+)",
        active: false,
      },
    ],
  },
  {
    name: "Cuisine",
    sub_options: [
      {
        name: "American",
        active: false,
      },
      {
        name: "Australian",
        active: false,
      },
      {
        name: "Italian",
        active: false,
      },
      {
        name: "Asian",
        active: false,
      },
    ],
  },
  {
    name: "Rating",
    sub_options: [
      {
        name: "Excellent 🤯",
        active: false,
      },
      {
        name: "Very good 😄",
        active: false,
      },
      {
        name: "Good 😅",
        active: false,
      },
      {
        name: "Average 🙄",
        active: false,
      },
    ],
  },
];

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    updateOption: (state, { payload }) => {
      const { index, name } = payload;
      state[index].sub_options.forEach((option) => {
        if (option.name === name) {
          option.active = !option.active;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateOption } = sideBarSlice.actions;

export default sideBarSlice.reducer;
