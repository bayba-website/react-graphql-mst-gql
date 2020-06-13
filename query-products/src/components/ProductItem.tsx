import React, { FC, memo } from "react";
import {
  Grid,
  Card,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
} from "@material-ui/core";
import { ProductModelType } from "../models";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  name: {
    fontWeight: 700,
    paddingBottom: "0.5rem",
  },
  price: {
    color: "#aaa",
    textDecoration: "line-through",
    marginRight: "0.5rem",
  },
  discount: {
    fontWeight: 700,
  },
});

interface ProductItemProps {
  product: ProductModelType;
}

export const ProductItem: FC<ProductItemProps> = memo(
  ({ product }: ProductItemProps) => {
    const classes = useStyles();
    return (
      <Grid item={true} xs={3}>
        <Card>
          <CardMedia
            className={classes.media}
            image={product.thumb}
            title={product.name}
          />
          <CardContent>
            <Typography
              color="textPrimary"
              component="h6"
              className={classes.name}
            >
              {product.name}
            </Typography>
            <Typography
              color="textPrimary"
              component="span"
              className={classes.price}
            >
              ${product.price}
            </Typography>
            <Typography
              color="textPrimary"
              component="span"
              className={classes.discount}
            >
              ${product.discountPrice}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
);
