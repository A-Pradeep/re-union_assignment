import UseAnimations from "react-useanimations";
import menu from "react-useanimations/lib/menu";

function Navbar() {
  return (
    <div className="navbar_div">
      <UseAnimations animation={menu} size={32} reverse="true" />
      <input type="text" value="Magadi Road" disabled={true} />
    </div>
  );
}

export default Navbar;
