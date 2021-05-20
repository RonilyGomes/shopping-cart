import apolloClient from '../libs/apollo-client'
import { gql } from "@apollo/client";

export const getStock = async (productId) => {
  const client = apolloClient();

  const { data } = await client.query({
    query: gql`
      query {
        productById(id: ${productId}) {
          stock,
        }
      }
    `
  });

  return data?.productById?.stock || 0;
};

export const findAll = async () => {
  const client = apolloClient();

  const { data } = await client.query({
    query: gql`
      query {
        products {
          id,
          name,
          stock,
          main_image,
          value
        }
      }
    `
  });

  return data?.products;
};

export const findById = async (productId) => {
  const client = apolloClient();

  const { data } = await client.query({
    query: gql`
      query {
        productById(id: ${productId}) {
          id,
          name,
          stock,
          main_image,
          value,
          images {
            id,
            name
          }
        }
      }
    `
  });

  return data?.productById;
};
