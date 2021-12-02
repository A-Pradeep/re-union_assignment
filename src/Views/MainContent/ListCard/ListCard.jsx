import { useSelector, useDispatch } from "react-redux";
import Card from "../../../Components/Card";
import { loadMore } from "../../../Reducer/RestaurantSlice";
import { LoadMoreIcon } from "../../../util/Icons";

function ListCard() {
  const { isLoadable, restaurantData } = useSelector(
    (state) => state.restaurant
  );
  const dispatch = useDispatch();

  return (
    <>
      <h2>Choose Restaurants ({restaurantData.total})</h2>
      <div className="cardWrapper">
        {restaurantData.data.map((item, index) => (
          <Card key={index} details={item.restaurant} />
        ))}
        {isLoadable && (
          <div className="cardFooter">
            <button
              className="loadMoreButton"
              onClick={() => dispatch(loadMore())}
            >
              <LoadMoreIcon />
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ListCard;
