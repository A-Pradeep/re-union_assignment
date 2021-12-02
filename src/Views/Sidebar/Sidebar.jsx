import { useSelector } from "react-redux";
import FilterButtons from "./FilterButtons";

function Sidebar() {
  const sideBarMenu = useSelector((state) => state.sideBar);

  return (
    <div className="sidebar_div">
      {sideBarMenu.map((item, index) => {
        return (
          <div key={index} className="sidebar_filter">
            <span>{sideBarMenu[index].name}</span>
            <FilterButtons
              key={index}
              menuIndex={index}
              filterOptions={item.sub_options}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
