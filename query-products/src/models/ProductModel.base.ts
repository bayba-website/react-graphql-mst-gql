/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree";
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql";
import { ModelBase } from "./ModelBase";
import { CategoryModel, CategoryModelType } from "./CategoryModel";
import { CategoryModelSelector } from "./CategoryModel.base";
import { RootStoreType } from "./index";

/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  Category: CategoryModelType;
};

/**
 * ProductBase
 * auto generated base class for the model ProductModel.
 */
export const ProductModelBase = withTypedRefs<Refs>()(
  ModelBase.named("Product")
    .props({
      __typename: types.optional(types.literal("Product"), "Product"),
      id: types.identifier,
      name: types.union(types.undefined, types.string),
      rating: types.union(types.undefined, types.integer),
      price: types.union(types.undefined, types.integer),
      discountPrice: types.union(types.undefined, types.integer),
      thumb: types.union(types.undefined, types.string),
      category_id: types.union(types.undefined, types.string),
      Category: types.union(
        types.undefined,
        types.null,
        MSTGQLRef(types.late((): any => CategoryModel))
      ),
    })
    .views((self) => ({
      get store() {
        return self.__getStore<RootStoreType>();
      },
    }))
);

export class ProductModelSelector extends QueryBuilder {
  get id() {
    return this.__attr(`id`);
  }
  get name() {
    return this.__attr(`name`);
  }
  get rating() {
    return this.__attr(`rating`);
  }
  get price() {
    return this.__attr(`price`);
  }
  get discountPrice() {
    return this.__attr(`discountPrice`);
  }
  get thumb() {
    return this.__attr(`thumb`);
  }
  get category_id() {
    return this.__attr(`category_id`);
  }
  Category(
    builder?:
      | string
      | CategoryModelSelector
      | ((selector: CategoryModelSelector) => CategoryModelSelector)
  ) {
    return this.__child(`Category`, CategoryModelSelector, builder);
  }
}
export function selectFromProduct() {
  return new ProductModelSelector();
}

export const productModelPrimitives = selectFromProduct().name.rating.price
  .discountPrice.thumb.category_id;
