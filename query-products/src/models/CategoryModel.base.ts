/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx";
import { types } from "mobx-state-tree";
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql";
import { ModelBase } from "./ModelBase";
import { ProductModel, ProductModelType } from "./ProductModel";
import { ProductModelSelector } from "./ProductModel.base";
import { RootStoreType } from "./index";

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  Products: IObservableArray<ProductModelType>;
};

/**
 * CategoryBase
 * auto generated base class for the model CategoryModel.
 */
export const CategoryModelBase = withTypedRefs<Refs>()(
  ModelBase.named("Category")
    .props({
      __typename: types.optional(types.literal("Category"), "Category"),
      id: types.identifier,
      name: types.union(types.undefined, types.string),
      Products: types.union(
        types.undefined,
        types.null,
        types.array(
          types.union(
            types.null,
            MSTGQLRef(types.late((): any => ProductModel))
          )
        )
      ),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>();
      },
    }))
);

export class CategoryModelSelector extends QueryBuilder {
  get id() {
    return this.__attr(`id`);
  }
  get name() {
    return this.__attr(`name`);
  }
  Products(
    builder?:
      | string
      | ProductModelSelector
      | ((selector: ProductModelSelector) => ProductModelSelector)
  ) {
    return this.__child(`Products`, ProductModelSelector, builder);
  }
}
export function selectFromCategory() {
  return new CategoryModelSelector();
}

export const categoryModelPrimitives = selectFromCategory().name;
