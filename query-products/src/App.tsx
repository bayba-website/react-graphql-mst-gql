import React, { FC } from "react";
import { createHttpClient } from "mst-gql";
import { RootStore } from "./models/RootStore";
import { StoreProvider } from "./models/reactUtils";
import { Products } from "./pages/Products";

// Initializing the store
// -------------------------------------------------
const gqlHttpClient = createHttpClient("http://localhost:4000");

const rootStore = RootStore.create(undefined, {
  gqlHttpClient,
});
// -------------------------------------------------

const App: FC = () => {
  return (
    <StoreProvider value={rootStore}>
      <Products />
    </StoreProvider>
  );
};

export default App;
