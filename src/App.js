import React from "react";
import { Typography, Button, ButtonGroup, makeStyles } from "@material-ui/core";
import Currencies from "./Currencies";

const useStyles = makeStyles((theme) => ({
  margin: {
    "& > *": {
      margin: 50
    }
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

  return (
    <>
      <Typography component="h1" variant="h2" align="center" gutterBottom>
        Currency
      </Typography>
      <ButtonGroup
        className={classes.margin}
        color="secondary"
        variant="text"
        size="large"
        fullWidth
      >
        <Button>All</Button>
        <Button>Favorites</Button>
      </ButtonGroup>
      <Currencies list={money} />
    </>
  );
}
