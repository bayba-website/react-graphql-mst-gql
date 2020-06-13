import React, { FC } from "react";
import { Grid, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "2rem",
  },
});

export const Loading: FC = () => {
  const classes = useStyles();
  return (
    <Grid
      container={true}
      alignContent="center"
      justify="center"
      classes={{ root: classes.root }}
    >
      <CircularProgress />
    </Grid>
  );
};
