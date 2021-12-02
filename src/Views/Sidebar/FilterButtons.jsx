import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UseAnimations from "react-useanimations";
import radioButton from "react-useanimations/lib/radioButton";
import { filterList } from "../../Reducer/RestaurantSlice";
import { updateOption } from "../../Reducer/SideBarSlice";

function FilterButtons({ filterOptions, menuIndex }) {
  const dispatch = useDispatch();
  const fullSideBarMenu = useSelector((state) => state.sideBar);
  localStorage.setItem("sideBarMenu", JSON.stringify(fullSideBarMenu));

  return (
    <>
      {filterOptions.map((optionData, index) => {
        return (
          <UseAnimations
            key={index}
            animation={radioButton}
            reverse={optionData.active}
            onClick={() => {
              dispatch(
                updateOption({ index: menuIndex, name: optionData.name })
              );
              dispatch(
                filterList({
                  dataList: JSON.parse(localStorage.getItem("sideBarMenu")),
                  menuIndex: menuIndex,
                  changedOption: optionData.name,
                })
              );
            }}
            render={(eventProps, animationProps) => (
              <button
                className={`sidebar_filter_option ${
                  optionData.active ? "active" : ""
                }`}
                type="button"
                {...eventProps}
              >
                <div {...animationProps} />
                <span>{optionData.name}</span>
              </button>
            )}
          />
        );
      })}
    </>
  );
}

export default FilterButtons;
