import React, { FC, useEffect } from "react";
import { observer } from "mobx-react";
import { Grid, makeStyles } from "@material-ui/core";
import { useQuery } from "../models/reactUtils";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { ProductItem } from "./ProductItem";
import { ProductModelType } from "../models";

const useStyles = makeStyles({
  root: {
    paddingTop: "2rem",
  },
});

interface ListProductsProps {
  category: string;
}

export const ListProducts: FC<ListProductsProps> = observer(
  ({ category }: ListProductsProps) => {
    const classes = useStyles();
    const { setQuery, loading, error, data } = useQuery((store) =>
      store.queryAllProducts({
        filter: {
          category_id: category,
        },
      })
    );
    useEffect(() => {
      setQuery((store) =>
        store.queryAllProducts({
          filter: {
            category_id: category,
          },
        })
      );
    }, [category, setQuery]);

    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error message={error.message} />;
    }

    return (
      <Grid container={true} spacing={2} classes={{ root: classes.root }}>
        {data?.allProducts.map((product: ProductModelType) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </Grid>
    );
  }
);
