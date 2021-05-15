import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation AddProduct(
    $name: String!
    $sku: String!
    $price: String!
    $imageURL: String!
    $quantity: Int!
    $author: String!
    $detail: String!
  ) {
    addProduct(
      name: $name
      sku: $sku
      price: $price
      imageURL: $imageURL
      quantity: $quantity
      author: $author
      detail: $detail
    ) {
      id
      name
      sku
      price
      imageURL
      quantity
      author
      detail
    }
  }
`;

export const GET_CART = gql`
  query Carts($id: ID!) {
    carts(id: $id) {
      id
      sku
      name
      author
      price
      imageURL
      quantity
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($sku: String!) {
    product(sku: $sku) {
      id
      name
      sku
      author
      price
      imageURL
      quantity
      detail
    }
  }
`;

export const ADD_CART = gql`
  mutation AddCart(
    $user: ID!
    $product: ID!
    $quantity: String!
    $price: String!
  ) {
    addCart(
      user: $user
      product: $product
      quantity: $quantity
      price: $price
    ) {
      id
      user
      price
      quantity
    }
  }
`;

export const ADD_WISHLIST = gql`
  mutation AddWishlist($user: ID!, $product: ID!) {
    addWishlist(user: $user, product: $product) {
      id
      user
      product
    }
  }
`;

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      sku
      price
      imageURL
    }
  }
`;

export const DELETE_CART = gql`
  mutation DeleteCart($id: ID!) {
    deleteCart(id: $id) {
      id
    }
  }
`;

export const DELETE_WISHLIST = gql`
  mutation DeleteWishlist($id: ID!) {
    deleteWishlist(id: $id) {
      id
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
