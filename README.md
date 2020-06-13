# React query data with Graphql (Mobx & GraphQL)

## Description

Example use [mst-gql](https://github.com/mobxjs/mst-gql) for react project

## Quickly start

### Fake GraphQL server

- I used the [json-graphql-server](https://github.com/marmelab/json-graphql-server) to fake GraphQL API.

- Start GraphQL server

  - `cd server && json-graphql-server db.js --p 4000`

- Notes:
  - In case need update initiation data, please help to update content in **db.js**
  - To use a port other than 4000, you can run json-graphql-server db.js --p <your port here>

### Start React App

`cd query-products && yarn && yarn start`

### Generated scaffold TypeScript models

`yarn mst-gql --format ts http://localhost:4000`
