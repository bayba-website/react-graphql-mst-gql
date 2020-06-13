import { createStoreContext, createUseQueryHook } from "mst-gql";
import * as React from "react";
import { RootStoreType } from "./RootStore";

export const StoreContext = createStoreContext<RootStoreType>(React);
export const StoreProvider = StoreContext.Provider;

export const useQuery = createUseQueryHook(StoreContext, React);
