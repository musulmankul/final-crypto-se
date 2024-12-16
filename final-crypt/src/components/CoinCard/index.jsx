import React from "react";
import "./index.css";
import Accordion from "../../UI/Accordion";
import Heading from "../../UI/Heading";
import Typography from "../../UI/Typography";
import Tooltip from "../../UI/Tooltip";

function CoinCard(props) {
  const {
    name,
    symbol,
    price_usd,
    price_btc,
    market_cap_usd,
    percent_change_24h,
  } = props.data;

  return (
    <Accordion title={<Heading level={5}>{name}</Heading>}>
      <Typography>
        <div className="coin">
          <Heading level={6}>Symbol: </Heading>
          {symbol}
        </div>
        <div className="coin">
          <Heading level={6}>Price USD: </Heading>
          {price_usd}
        </div>
        <div className="coin">
          <Heading level={6} Price>
            BTC:{" "}
          </Heading>
          {price_btc}
        </div>
        <div className="coin">
          <Heading level={6}><Tooltip position="top" text="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price">Market Cap USD: </Tooltip></Heading>
          {market_cap_usd}
        </div>
        <div className="coin">
          <Heading level={6}>Percent Change 24H: </Heading>
          <span style={{ color: percent_change_24h < 0 ? "red" : "inherit" }}>
            {percent_change_24h}%
          </span>
        </div>
      </Typography>
    </Accordion>
  );
}

export default CoinCard;
