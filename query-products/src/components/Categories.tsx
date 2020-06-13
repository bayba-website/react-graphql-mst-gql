import React, { useCallback, useState, FC } from "react";
import { observer } from "mobx-react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { useQuery } from "../models/reactUtils";
import { Loading } from "./Loading";
import { Error } from "./Error";

interface CategoriesProps {
  onChangeCategory: (index: number) => void;
}

export const Categories: FC<CategoriesProps> = observer(
  ({ onChangeCategory }: CategoriesProps) => {
    const [index, setIndex] = useState(0);
    const { data, loading, error } = useQuery((store) =>
      store.queryAllCategories({})
    );
    const handleChangeTab = useCallback(
      (event: React.ChangeEvent<{}>, newValue: number) => {
        setIndex(newValue);
        onChangeCategory(newValue);
      },
      [onChangeCategory]
    );

    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error message={error.message} />;
    }
    return (
      <AppBar position="static" color="default">
        <Tabs
          aria-label="product-tabs"
          value={index}
          onChange={handleChangeTab}
          indicatorColor="primary"
        >
          {data?.allCategories.map((category) => (
            <Tab label={category.name} key={category.id} />
          ))}
        </Tabs>
      </AppBar>
    );
  }
);
