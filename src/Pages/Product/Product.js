import React from "react";
import { useHistory, useRouteMatch, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import Placeholder from "../Placeholders/Product";
import ProductData from "./productData";

import "./product.css";

const GET_PRODUCT = gql`
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

const Product = () => {
  let history = useHistory();
  let { id } = useParams();
  let { url } = useRouteMatch();

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  if (loading) return <Placeholder />;
  if (error) return `Error! ${error}`;

  return <ProductData data={data} />;
};

export default Product;
