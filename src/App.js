import React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import Currencies from "./Currencies";

const useStyles = makeStyles(() => ({
  favoriteButton: {
    marginBottom: "15px"
  }
}));

const money = [
  { country: "BR", value: "1", code: "BRL", favorite: false },
  { country: "PT", value: "6,5", code: "EUR", favorite: false },
  { country: "EUA", value: "5,7", code: "DOL", favorite: false },
  { country: "COL", value: "9000", code: "PESO", favorite: false }
];

export default function App() {
  const classes = useStyles();

  const [currencies, setCurrencies] = React.useState(money);
  const [isFavorite, setIsFavorite] = React.useState(false);

  function onlyFavorites(currency) {
    return currency.favorite;
  }

  return (
    <>
      <Typography component="h1" variant="h2" align="center" gutterBottom>
        Currency
      </Typography>
      <Button
        color="secondary"
        variant="outlined"
        className={classes.favoriteButton}
        fullWidth
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? "All" : "Favorites"}
      </Button>
      <Currencies
        list={isFavorite ? currencies.filter(onlyFavorites) : currencies}
        setCurrencies={setCurrencies}
      />
    </>
  );
}
