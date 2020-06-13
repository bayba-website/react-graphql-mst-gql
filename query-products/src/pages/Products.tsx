import React, { useCallback, useState, FC } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { ListProducts } from "../components/ListProducts";
import { Categories } from "../components/Categories";

const useStyles = makeStyles({
  root: {
    maxWidth: 1024,
    margin: "0 auto",
  },
});

export const Products: FC = () => {
  const classes = useStyles();
  const [category, setCategory] = useState(0);

  const handleCategoryChange = useCallback((category: number) => {
    setCategory(category);
  }, []);

  return (
    <Grid container={true} classes={{ root: classes.root }} justify="center">
      <Categories onChangeCategory={handleCategoryChange} />
      <ListProducts category={`${category + 1}`.toString()} />
    </Grid>
  );
};
