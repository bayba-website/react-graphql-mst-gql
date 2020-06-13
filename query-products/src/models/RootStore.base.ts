/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx";
import { types } from "mobx-state-tree";
import {
  MSTGQLStore,
  configureStoreMixin,
  QueryOptions,
  withTypedRefs,
} from "mst-gql";

import { ProductModel, ProductModelType } from "./ProductModel";
import {
  productModelPrimitives,
  ProductModelSelector,
} from "./ProductModel.base";
import { CategoryModel, CategoryModelType } from "./CategoryModel";
import {
  categoryModelPrimitives,
  CategoryModelSelector,
} from "./CategoryModel.base";
import { ListMetadataModel, ListMetadataModelType } from "./ListMetadataModel";
import {
  listMetadataModelPrimitives,
  ListMetadataModelSelector,
} from "./ListMetadataModel.base";

export type ProductFilter = {
  q?: string;
  ids?: string[];
  id?: string;
  name?: string;
  rating?: number;
  price?: number;
  discountPrice?: number;
  thumb?: string;
  category_id?: string;
  rating_lt?: number;
  rating_lte?: number;
  rating_gt?: number;
  rating_gte?: number;
  price_lt?: number;
  price_lte?: number;
  price_gt?: number;
  price_gte?: number;
  discountPrice_lt?: number;
  discountPrice_lte?: number;
  discountPrice_gt?: number;
  discountPrice_gte?: number;
};
export type CategoryFilter = {
  q?: string;
  ids?: string[];
  id?: string;
  name?: string;
};
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  products: ObservableMap<string, ProductModelType>;
  categories: ObservableMap<string, CategoryModelType>;
};

/**
 * Enums for the names of base graphql actions
 */
export enum RootStoreBaseQueries {
  queryProduct = "queryProduct",
  queryAllProducts = "queryAllProducts",
  query_allProductsMeta = "query_allProductsMeta",
  queryCategory = "queryCategory",
  queryAllCategories = "queryAllCategories",
  query_allCategoriesMeta = "query_allCategoriesMeta",
}
export enum RootStoreBaseMutations {
  mutateCreateProduct = "mutateCreateProduct",
  mutateUpdateProduct = "mutateUpdateProduct",
  mutateCreateCategory = "mutateCreateCategory",
  mutateUpdateCategory = "mutateUpdateCategory",
}

/**
 * Store, managing, among others, all the objects received through graphQL
 */
export const RootStoreBase = withTypedRefs<Refs>()(
  MSTGQLStore.named("RootStore")
    .extend(
      configureStoreMixin(
        [
          ["Product", () => ProductModel],
          ["Category", () => CategoryModel],
          ["ListMetadata", () => ListMetadataModel],
        ],
        ["Product", "Category"],
        "js"
      )
    )
    .props({
      products: types.optional(
        types.map(types.late((): any => ProductModel)),
        {}
      ),
      categories: types.optional(
        types.map(types.late((): any => CategoryModel)),
        {}
      ),
    })
    .actions((self) => ({
      queryProduct(
        variables: { id: string },
        resultSelector:
          | string
          | ((
              qb: ProductModelSelector
            ) => ProductModelSelector) = productModelPrimitives.toString(),
        options: QueryOptions = {}
      ) {
        return self.query<{ Product: ProductModelType }>(
          `query Product($id: ID!) { Product(id: $id) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ProductModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options
        );
      },
      queryAllProducts(
        variables: {
          page?: number;
          perPage?: number;
          sortField?: string;
          sortOrder?: string;
          filter?: ProductFilter;
        },
        resultSelector:
          | string
          | ((
              qb: ProductModelSelector
            ) => ProductModelSelector) = productModelPrimitives.toString(),
        options: QueryOptions = {}
      ) {
        return self.query<{ allProducts: ProductModelType[] }>(
          `query allProducts($page: Int, $perPage: Int, $sortField: String, $sortOrder: String, $filter: ProductFilter) { allProducts(page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder, filter: $filter) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ProductModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options
        );
      },
      query_allProductsMeta(
        variables: { page?: number; perPage?: number; filter?: ProductFilter },
        resultSelector:
          | string
          | ((
              qb: ListMetadataModelSelector
            ) => ListMetadataModelSelector) = listMetadataModelPrimitives.toString(),
        options: QueryOptions = {}
      ) {
        return self.query<{ _allProductsMeta: ListMetadataModelType }>(
          `query _allProductsMeta($page: Int, $perPage: Int, $filter: ProductFilter) { _allProductsMeta(page: $page, perPage: $perPage, filter: $filter) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ListMetadataModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options
        );
      },
      queryCategory(
        variables: { id: string },
        resultSelector:
          | string
          | ((
              qb: CategoryModelSelector
            ) => CategoryModelSelector) = categoryModelPrimitives.toString(),
        options: QueryOptions = {}
      ) {
        return self.query<{ Category: CategoryModelType }>(
          `query Category($id: ID!) { Category(id: $id) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CategoryModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options
        );
      },
      queryAllCategories(
        variables: {
          page?: number;
          perPage?: number;
          sortField?: string;
          sortOrder?: string;
          filter?: CategoryFilter;
        },
        resultSelector:
          | string
          | ((
              qb: CategoryModelSelector
            ) => CategoryModelSelector) = categoryModelPrimitives.toString(),
        options: QueryOptions = {}
      ) {
        return self.query<{ allCategories: CategoryModelType[] }>(
          `query allCategories($page: Int, $perPage: Int, $sortField: String, $sortOrder: String, $filter: CategoryFilter) { allCategories(page: $page, perPage: $perPage, sortField: $sortField, sortOrder: $sortOrder, filter: $filter) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CategoryModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options
        );
      },
      query_allCategoriesMeta(
        variables: { page?: number; perPage?: number; filter?: CategoryFilter },
        resultSelector:
          | string
          | ((
              qb: ListMetadataModelSelector
            ) => ListMetadataModelSelector) = listMetadataModelPrimitives.toString(),
        options: QueryOptions = {}
      ) {
        return self.query<{ _allCategoriesMeta: ListMetadataModelType }>(
          `query _allCategoriesMeta($page: Int, $perPage: Int, $filter: CategoryFilter) { _allCategoriesMeta(page: $page, perPage: $perPage, filter: $filter) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ListMetadataModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          options
        );
      },
      mutateCreateProduct(
        variables: {
          id: string;
          name: string;
          rating: number;
          price: number;
          discountPrice: number;
          thumb: string;
          categoryId: string;
        },
        resultSelector:
          | string
          | ((
              qb: ProductModelSelector
            ) => ProductModelSelector) = productModelPrimitives.toString(),
        optimisticUpdate?: () => void
      ) {
        return self.mutate<{ createProduct: ProductModelType }>(
          `mutation createProduct($id: ID!, $name: String!, $rating: Int!, $price: Int!, $discountPrice: Int!, $thumb: String!, $categoryId: ID!) { createProduct(id: $id, name: $name, rating: $rating, price: $price, discountPrice: $discountPrice, thumb: $thumb, category_id: $categoryId) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ProductModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate
        );
      },
      mutateUpdateProduct(
        variables: {
          id: string;
          name?: string;
          rating?: number;
          price?: number;
          discountPrice?: number;
          thumb?: string;
          categoryId?: string;
        },
        resultSelector:
          | string
          | ((
              qb: ProductModelSelector
            ) => ProductModelSelector) = productModelPrimitives.toString(),
        optimisticUpdate?: () => void
      ) {
        return self.mutate<{ updateProduct: ProductModelType }>(
          `mutation updateProduct($id: ID!, $name: String, $rating: Int, $price: Int, $discountPrice: Int, $thumb: String, $categoryId: ID) { updateProduct(id: $id, name: $name, rating: $rating, price: $price, discountPrice: $discountPrice, thumb: $thumb, category_id: $categoryId) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new ProductModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate
        );
      },
      mutateCreateCategory(
        variables: { id: string; name: string },
        resultSelector:
          | string
          | ((
              qb: CategoryModelSelector
            ) => CategoryModelSelector) = categoryModelPrimitives.toString(),
        optimisticUpdate?: () => void
      ) {
        return self.mutate<{ createCategory: CategoryModelType }>(
          `mutation createCategory($id: ID!, $name: String!) { createCategory(id: $id, name: $name) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CategoryModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate
        );
      },
      mutateUpdateCategory(
        variables: { id: string; name?: string },
        resultSelector:
          | string
          | ((
              qb: CategoryModelSelector
            ) => CategoryModelSelector) = categoryModelPrimitives.toString(),
        optimisticUpdate?: () => void
      ) {
        return self.mutate<{ updateCategory: CategoryModelType }>(
          `mutation updateCategory($id: ID!, $name: String) { updateCategory(id: $id, name: $name) {
        ${
          typeof resultSelector === "function"
            ? resultSelector(new CategoryModelSelector()).toString()
            : resultSelector
        }
      } }`,
          variables,
          optimisticUpdate
        );
      },
    }))
);
