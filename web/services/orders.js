import apolloClient from '../libs/apollo-client'
import { gql } from '@apollo/client';

export const addOrders = async (dataOrder) => {
  const client = apolloClient();

  return await client.mutate({
      mutation: gql`
        mutation {
          addOrder(input: {quantity: "${dataOrder.quantity.toString()}", productIds: "${dataOrder.productIds.toString()}"}) {
            quantity,
            productIds
          }
        }
      `
    });
};
