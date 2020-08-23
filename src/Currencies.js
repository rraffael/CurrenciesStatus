import React from "react";
import { Grid, Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const Coin = ({ value }) => {
  return <Grid item>{value}</Grid>;
};

const Currencies = ({ list, setCurrencies }) => {
  function updateFavorite(country) {
    const item = list.find((coin) => coin.country === country);
    const newItem = { ...item, favorite: !item.favorite };

    setCurrencies((prevState) =>
      prevState.map((item) => (item.country === country ? newItem : item))
    );
  }

  return (
    <>
      {list.map((coin) => (
        <Grid container key={coin.country} justify="space-around" spacing={3}>
          <Coin value={coin.country} />
          <Coin value={coin.value} />
          <Coin value={coin.code} />
          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => updateFavorite(coin.country)}
            >
              {coin.favorite ? <StarIcon /> : <StarBorderIcon />}
            </Button>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Currencies;
