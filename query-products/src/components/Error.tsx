import React, { FC, memo } from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "2rem",
  },
});

interface ErrorProps {
  message: string;
}

export const Error: FC<ErrorProps> = memo(({ message }: ErrorProps) => {
  const classes = useStyles();
  return (
    <Grid
      container={true}
      alignContent="center"
      justify="center"
      classes={{ root: classes.root }}
    >
      {message}
    </Grid>
  );
});
