import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Decimal: any;
};

export type Address = {
  __typename?: 'Address';
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customerId: Scalars['Int'];
  id: Scalars['Int'];
  state?: Maybe<Scalars['String']>;
};

export type AddressFilterInput = {
  addressLine1?: InputMaybe<StringOperationFilterInput>;
  addressLine2?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<AddressFilterInput>>;
  city?: InputMaybe<StringOperationFilterInput>;
  country?: InputMaybe<StringOperationFilterInput>;
  customerId?: InputMaybe<IntOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<AddressFilterInput>>;
  state?: InputMaybe<StringOperationFilterInput>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Address>;
  contactNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  orders?: Maybe<Array<Maybe<Order>>>;
};

export type CustomerFilterInput = {
  address?: InputMaybe<AddressFilterInput>;
  and?: InputMaybe<Array<CustomerFilterInput>>;
  contactNumber?: InputMaybe<StringOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  firstName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastName?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CustomerFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
};

export type CustomerModelInput = {
  addressLine1?: InputMaybe<Scalars['String']>;
  addressLine2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contactNumber?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  neq?: InputMaybe<Scalars['Decimal']>;
  ngt?: InputMaybe<Scalars['Decimal']>;
  ngte?: InputMaybe<Scalars['Decimal']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  nlt?: InputMaybe<Scalars['Decimal']>;
  nlte?: InputMaybe<Scalars['Decimal']>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ListFilterInputTypeOfOrderFilterInput = {
  all?: InputMaybe<OrderFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<OrderFilterInput>;
  some?: InputMaybe<OrderFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrUpdateCustomer?: Maybe<Customer>;
  addOrUpdateOrder?: Maybe<Order>;
  deleteCustomer: Scalars['Boolean'];
  deleteOrder: Scalars['Boolean'];
};


export type MutationAddOrUpdateCustomerArgs = {
  customer?: InputMaybe<CustomerModelInput>;
};


export type MutationAddOrUpdateOrderArgs = {
  order?: InputMaybe<OrderModelInput>;
};


export type MutationDeleteCustomerArgs = {
  customerId: Scalars['Int'];
};


export type MutationDeleteOrderArgs = {
  orderId: Scalars['Int'];
};

export type Order = {
  __typename?: 'Order';
  customer?: Maybe<Customer>;
  customerId: Scalars['Int'];
  depositAmount: Scalars['Decimal'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  isDelivery: Scalars['Boolean'];
  orderDate: Scalars['DateTime'];
  otherNotes?: Maybe<Scalars['String']>;
  status: Status;
  totalAmount: Scalars['Decimal'];
};

export type OrderFilterInput = {
  and?: InputMaybe<Array<OrderFilterInput>>;
  customer?: InputMaybe<CustomerFilterInput>;
  customerId?: InputMaybe<IntOperationFilterInput>;
  depositAmount?: InputMaybe<DecimalOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isDelivery?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<OrderFilterInput>>;
  orderDate?: InputMaybe<DateTimeOperationFilterInput>;
  otherNotes?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<StatusOperationFilterInput>;
  totalAmount?: InputMaybe<DecimalOperationFilterInput>;
};

export type OrderModelInput = {
  customerId: Scalars['Int'];
  depositAmount: Scalars['Decimal'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isDelivery: Scalars['Boolean'];
  orderDate: Scalars['DateTime'];
  otherNotes?: InputMaybe<Scalars['String']>;
  status: Status;
  totalAmount: Scalars['Decimal'];
};

export type Query = {
  __typename?: 'Query';
  customers?: Maybe<Array<Maybe<Customer>>>;
  orders?: Maybe<Array<Maybe<Order>>>;
  stats?: Maybe<Stats>;
};


export type QueryCustomersArgs = {
  where?: InputMaybe<CustomerFilterInput>;
};


export type QueryOrdersArgs = {
  where?: InputMaybe<OrderFilterInput>;
};

export type Stats = {
  __typename?: 'Stats';
  completedOrders: Scalars['Int'];
  draftOrders: Scalars['Int'];
  pendingOrders: Scalars['Int'];
  shippedOrders: Scalars['Int'];
  totalCustomers: Scalars['Int'];
  totalOrders: Scalars['Int'];
};

export enum Status {
  Completed = 'COMPLETED',
  Draft = 'DRAFT',
  Pending = 'PENDING',
  Shipped = 'SHIPPED'
}

export type StatusOperationFilterInput = {
  eq?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  neq?: InputMaybe<Status>;
  nin?: InputMaybe<Array<Status>>;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type AddOrUpdateCustomerMutationVariables = Exact<{
  customer: CustomerModelInput;
}>;


export type AddOrUpdateCustomerMutation = { __typename?: 'Mutation', addOrUpdateCustomer?: { __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, email?: string | null, contactNumber?: string | null, address?: { __typename?: 'Address', addressLine1?: string | null, addressLine2?: string | null, city?: string | null, state?: string | null, country?: string | null } | null } | null };

export type AddOrUpdateOrderMutationVariables = Exact<{
  order: OrderModelInput;
}>;


export type AddOrUpdateOrderMutation = { __typename?: 'Mutation', addOrUpdateOrder?: { __typename?: 'Order', id: number, orderDate: any, description?: string | null, totalAmount: any, depositAmount: any, isDelivery: boolean, status: Status, otherNotes?: string | null, customer?: { __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, contactNumber?: string | null, email?: string | null } | null } | null };

export type DeleteCustomerMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCustomerMutation = { __typename?: 'Mutation', deleteCustomer: boolean };

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteOrderMutation = { __typename?: 'Mutation', deleteOrder: boolean };

export type GetCustomerByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCustomerByIdQuery = { __typename?: 'Query', customers?: Array<{ __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, contactNumber?: string | null, email?: string | null, address?: { __typename?: 'Address', addressLine1?: string | null, addressLine2?: string | null, city?: string | null, state?: string | null, country?: string | null } | null, orders?: Array<{ __typename?: 'Order', id: number, orderDate: any, description?: string | null, totalAmount: any, depositAmount: any, isDelivery: boolean, status: Status, otherNotes?: string | null, customer?: { __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null } | null } | null> | null } | null> | null };

export type GetCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersQuery = { __typename?: 'Query', customers?: Array<{ __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, contactNumber?: string | null, email?: string | null, address?: { __typename?: 'Address', addressLine1?: string | null, addressLine2?: string | null, city?: string | null, state?: string | null, country?: string | null } | null, orders?: Array<{ __typename?: 'Order', id: number, orderDate: any, description?: string | null, totalAmount: any, depositAmount: any, isDelivery: boolean, status: Status, otherNotes?: string | null } | null> | null } | null> | null };

export type GetOrderByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetOrderByIdQuery = { __typename?: 'Query', orders?: Array<{ __typename?: 'Order', id: number, customerId: number, orderDate: any, description?: string | null, totalAmount: any, depositAmount: any, isDelivery: boolean, status: Status, otherNotes?: string | null, customer?: { __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, contactNumber?: string | null, email?: string | null } | null } | null> | null };

export type GetOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrdersQuery = { __typename?: 'Query', orders?: Array<{ __typename?: 'Order', id: number, orderDate: any, description?: string | null, totalAmount: any, depositAmount: any, isDelivery: boolean, status: Status, otherNotes?: string | null, customer?: { __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, contactNumber?: string | null, email?: string | null } | null } | null> | null };

export type GetStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatsQuery = { __typename?: 'Query', stats?: { __typename?: 'Stats', totalCustomers: number, totalOrders: number, pendingOrders: number, draftOrders: number, completedOrders: number, shippedOrders: number } | null };


export const AddOrUpdateCustomerDocument = gql`
    mutation AddOrUpdateCustomer($customer: CustomerModelInput!) {
  addOrUpdateCustomer(customer: $customer) {
    id
    firstName
    lastName
    email
    contactNumber
    address {
      addressLine1
      addressLine2
      city
      state
      country
    }
  }
}
    `;
export type AddOrUpdateCustomerMutationFn = Apollo.MutationFunction<AddOrUpdateCustomerMutation, AddOrUpdateCustomerMutationVariables>;

/**
 * __useAddOrUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useAddOrUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOrUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOrUpdateCustomerMutation, { data, loading, error }] = useAddOrUpdateCustomerMutation({
 *   variables: {
 *      customer: // value for 'customer'
 *   },
 * });
 */
export function useAddOrUpdateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<AddOrUpdateCustomerMutation, AddOrUpdateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddOrUpdateCustomerMutation, AddOrUpdateCustomerMutationVariables>(AddOrUpdateCustomerDocument, options);
      }
export type AddOrUpdateCustomerMutationHookResult = ReturnType<typeof useAddOrUpdateCustomerMutation>;
export type AddOrUpdateCustomerMutationResult = Apollo.MutationResult<AddOrUpdateCustomerMutation>;
export type AddOrUpdateCustomerMutationOptions = Apollo.BaseMutationOptions<AddOrUpdateCustomerMutation, AddOrUpdateCustomerMutationVariables>;
export const AddOrUpdateOrderDocument = gql`
    mutation AddOrUpdateOrder($order: OrderModelInput!) {
  addOrUpdateOrder(order: $order) {
    id
    orderDate
    description
    totalAmount
    depositAmount
    isDelivery
    status
    otherNotes
    customer {
      id
      firstName
      lastName
      contactNumber
      email
    }
  }
}
    `;
export type AddOrUpdateOrderMutationFn = Apollo.MutationFunction<AddOrUpdateOrderMutation, AddOrUpdateOrderMutationVariables>;

/**
 * __useAddOrUpdateOrderMutation__
 *
 * To run a mutation, you first call `useAddOrUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOrUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOrUpdateOrderMutation, { data, loading, error }] = useAddOrUpdateOrderMutation({
 *   variables: {
 *      order: // value for 'order'
 *   },
 * });
 */
export function useAddOrUpdateOrderMutation(baseOptions?: Apollo.MutationHookOptions<AddOrUpdateOrderMutation, AddOrUpdateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddOrUpdateOrderMutation, AddOrUpdateOrderMutationVariables>(AddOrUpdateOrderDocument, options);
      }
export type AddOrUpdateOrderMutationHookResult = ReturnType<typeof useAddOrUpdateOrderMutation>;
export type AddOrUpdateOrderMutationResult = Apollo.MutationResult<AddOrUpdateOrderMutation>;
export type AddOrUpdateOrderMutationOptions = Apollo.BaseMutationOptions<AddOrUpdateOrderMutation, AddOrUpdateOrderMutationVariables>;
export const DeleteCustomerDocument = gql`
    mutation DeleteCustomer($id: Int!) {
  deleteCustomer(customerId: $id)
}
    `;
export type DeleteCustomerMutationFn = Apollo.MutationFunction<DeleteCustomerMutation, DeleteCustomerMutationVariables>;

/**
 * __useDeleteCustomerMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerMutation, { data, loading, error }] = useDeleteCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCustomerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCustomerMutation, DeleteCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCustomerMutation, DeleteCustomerMutationVariables>(DeleteCustomerDocument, options);
      }
export type DeleteCustomerMutationHookResult = ReturnType<typeof useDeleteCustomerMutation>;
export type DeleteCustomerMutationResult = Apollo.MutationResult<DeleteCustomerMutation>;
export type DeleteCustomerMutationOptions = Apollo.BaseMutationOptions<DeleteCustomerMutation, DeleteCustomerMutationVariables>;
export const DeleteOrderDocument = gql`
    mutation DeleteOrder($id: Int!) {
  deleteOrder(orderId: $id)
}
    `;
export type DeleteOrderMutationFn = Apollo.MutationFunction<DeleteOrderMutation, DeleteOrderMutationVariables>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument, options);
      }
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<DeleteOrderMutation, DeleteOrderMutationVariables>;
export const GetCustomerByIdDocument = gql`
    query GetCustomerById($id: Int!) {
  customers(where: {id: {eq: $id}}) {
    id
    firstName
    lastName
    contactNumber
    email
    address {
      addressLine1
      addressLine2
      city
      state
      country
    }
    orders {
      id
      orderDate
      description
      totalAmount
      depositAmount
      isDelivery
      status
      otherNotes
      customer {
        id
        firstName
        lastName
      }
    }
  }
}
    `;

/**
 * __useGetCustomerByIdQuery__
 *
 * To run a query within a React component, call `useGetCustomerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCustomerByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>(GetCustomerByIdDocument, options);
      }
export function useGetCustomerByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>(GetCustomerByIdDocument, options);
        }
export type GetCustomerByIdQueryHookResult = ReturnType<typeof useGetCustomerByIdQuery>;
export type GetCustomerByIdLazyQueryHookResult = ReturnType<typeof useGetCustomerByIdLazyQuery>;
export type GetCustomerByIdQueryResult = Apollo.QueryResult<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>;
export const GetCustomersDocument = gql`
    query GetCustomers {
  customers {
    id
    firstName
    lastName
    contactNumber
    email
    address {
      addressLine1
      addressLine2
      city
      state
      country
    }
    orders {
      id
      orderDate
      description
      totalAmount
      depositAmount
      isDelivery
      status
      otherNotes
    }
  }
}
    `;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomersQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
      }
export function useGetCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
        }
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersQueryResult = Apollo.QueryResult<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetOrderByIdDocument = gql`
    query GetOrderById($id: Int!) {
  orders(where: {id: {eq: $id}}) {
    id
    customerId
    orderDate
    description
    totalAmount
    depositAmount
    isDelivery
    status
    otherNotes
    customer {
      id
      firstName
      lastName
      contactNumber
      email
    }
  }
}
    `;

/**
 * __useGetOrderByIdQuery__
 *
 * To run a query within a React component, call `useGetOrderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderByIdQuery(baseOptions: Apollo.QueryHookOptions<GetOrderByIdQuery, GetOrderByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
      }
export function useGetOrderByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderByIdQuery, GetOrderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrderByIdQuery, GetOrderByIdQueryVariables>(GetOrderByIdDocument, options);
        }
export type GetOrderByIdQueryHookResult = ReturnType<typeof useGetOrderByIdQuery>;
export type GetOrderByIdLazyQueryHookResult = ReturnType<typeof useGetOrderByIdLazyQuery>;
export type GetOrderByIdQueryResult = Apollo.QueryResult<GetOrderByIdQuery, GetOrderByIdQueryVariables>;
export const GetOrdersDocument = gql`
    query GetOrders {
  orders {
    id
    orderDate
    description
    totalAmount
    depositAmount
    isDelivery
    status
    otherNotes
    customer {
      id
      firstName
      lastName
      contactNumber
      email
    }
  }
}
    `;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetStatsDocument = gql`
    query GetStats {
  stats {
    totalCustomers
    totalOrders
    pendingOrders
    draftOrders
    completedOrders
    shippedOrders
  }
}
    `;

/**
 * __useGetStatsQuery__
 *
 * To run a query within a React component, call `useGetStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatsQuery(baseOptions?: Apollo.QueryHookOptions<GetStatsQuery, GetStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatsQuery, GetStatsQueryVariables>(GetStatsDocument, options);
      }
export function useGetStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatsQuery, GetStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatsQuery, GetStatsQueryVariables>(GetStatsDocument, options);
        }
export type GetStatsQueryHookResult = ReturnType<typeof useGetStatsQuery>;
export type GetStatsLazyQueryHookResult = ReturnType<typeof useGetStatsLazyQuery>;
export type GetStatsQueryResult = Apollo.QueryResult<GetStatsQuery, GetStatsQueryVariables>;