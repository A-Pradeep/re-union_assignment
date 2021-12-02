import {
  GlobeIcon,
  PercentageIcon,
  TableIcon,
  PaymentIcon,
} from "../util/Icons";
import Badge from "./Badge";
import ToolTipWrapper from "./ToolTipWrapper";

function Card({ details }) {
  function getConditionColor(
    condition,
    overrideTrue = "#34D399",
    overrideFalse = "#EF4444"
  ) {
    return condition === 1 ? overrideTrue : overrideFalse;
  }

  return (
    <div className="card">
      <div className="additional">
        <div className="user-card">
          <div
            className="level center"
            style={{
              backgroundColor: `#${details.user_rating.rating_color}`,
            }}
          >
            {details.user_rating.rating_text}
          </div>
          <div className="points center">
            {`${details.user_rating.aggregate_rating} (${details.user_rating.votes} votes)`}
          </div>
          <div className="cardImageHolder">
            <img
              src={
                details.featured_image
                  ? details.featured_image
                  : "https://firebasestorage.googleapis.com/v0/b/qa-forum-development.appspot.com/o/Default%20Image%2Fpeople-g842d3aef8_640.png?alt=media&token=eb213614-5f77-4b6a-af5a-7e61cf807cb8"
              }
              alt={details.featured_image}
              className={`cardImage ${
                !details.featured_image ? "defaultImage" : ""
              }`}
            />
          </div>
        </div>
        <div className="more-info">
          <h1 style={{ textAlign: "start", margin: "0 1rem" }}>
            {details.name}
          </h1>
          <div className="coords">
            <span>{details.location.locality_verbose}</span>
          </div>
          <div className="costDetails">
            <span>
              Avg Cost : {details.currency} {details.average_cost_for_two}
            </span>
          </div>
          <div className="stats">
            <div>
              <div className="title">
                <ToolTipWrapper toolTipTitle="Online Delivery">
                  <GlobeIcon
                    color={getConditionColor(
                      details.has_online_delivery,
                      "#047857",
                      "#DC2626"
                    )}
                  />
                </ToolTipWrapper>
              </div>
              <i className="fa fa-trophy"></i>
              <div className="value">
                {details.has_online_delivery ? (
                  <ToolTipWrapper
                    toolTipTitle="Delivery Partner"
                    customToolTipClass="nameTooltip"
                  >
                    Zomato
                  </ToolTipWrapper>
                ) : (
                  "N/A"
                )}
              </div>
            </div>
            <div>
              <div className="title">
                <ToolTipWrapper toolTipTitle="Table Booking">
                  <TableIcon
                    color={getConditionColor(
                      details.has_table_booking,
                      "#047857",
                      "#DC2626"
                    )}
                  />
                </ToolTipWrapper>
              </div>
              <i className="fa fa-gamepad"></i>
              <div className="value">
                {details.has_table_booking ? (
                  <ToolTipWrapper
                    toolTipTitle="Booking Partner"
                    customToolTipClass="nameTooltip"
                  >
                    ZapIt
                  </ToolTipWrapper>
                ) : (
                  "N/A"
                )}
              </div>
            </div>
            <div>
              <div className="title">
                <ToolTipWrapper toolTipTitle="Payment">
                  <PaymentIcon
                    color={getConditionColor(
                      details.is_online_payment_available,
                      "#047857",
                      "#DC2626"
                    )}
                  />
                </ToolTipWrapper>
              </div>
              <i className="fa fa-group"></i>
              <div className="value">
                {details.is_online_payment_available ? (
                  <ToolTipWrapper
                    toolTipTitle="Payment Partner"
                    customToolTipClass="nameTooltip"
                  >
                    ZomoPay
                  </ToolTipWrapper>
                ) : (
                  "N/A"
                )}
              </div>
            </div>
            <div>
              <div className="title">
                <ToolTipWrapper toolTipTitle="Offers">
                  <PercentageIcon
                    color={getConditionColor(
                      details.offers,
                      "#047857",
                      "#DC2626"
                    )}
                  />
                </ToolTipWrapper>
              </div>
              <i className="fa fa-coffee"></i>
              <div className="value infinity">
                {details.offers ? (
                  <ToolTipWrapper
                    toolTipTitle="Discount Partner"
                    customToolTipClass="nameTooltip"
                  >
                    Zurprise
                  </ToolTipWrapper>
                ) : (
                  "N/A"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="general">
        <h2>{details.name}</h2>
        <p>
          <div className="badgeList">
            {details.cuisines.split(",").map((tag, index) => (
              <Badge key={index} title={tag} badgeClass="titleBadge" />
            ))}
          </div>
        </p>
        <div className="iconFeatures">
          <GlobeIcon color={getConditionColor(details.has_online_delivery)} />
          <TableIcon color={getConditionColor(details.has_table_booking)} />
          <PaymentIcon
            color={getConditionColor(details.is_online_payment_available)}
          />
          <PercentageIcon color={getConditionColor(details.offers)} />
        </div>
        <span className="more">{details.location.address}</span>
      </div>
    </div>
  );
}

export default Card;
