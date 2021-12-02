import TabLink from "../../Components/TabLink";
import ListCard from "./ListCard/ListCard";

function MainBody() {
  return (
    <div className="MainBody">
      {/* Tab Links */}
      <div className="TabWrapper">
        <TabLink title="All opportunities" active={true} />
        <TabLink title="Free delivery" />
        <TabLink title="Special Offers" />
      </div>
      <hr style={{ borderColor: "#DBEAFE", marginBottom: "1rem" }} />
      {/* List Card */}
      <ListCard />
    </div>
  );
}

export default MainBody;
