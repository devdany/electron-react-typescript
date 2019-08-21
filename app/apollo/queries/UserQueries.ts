import {gql} from 'apollo-boost'

export const SIGN_UP = gql`
  mutation signUp($accountId: String!, $password: String!) {
    signUp(accountId: $accountId, password: $password){
      user {
        accountId
        createdAt
        updatedAt
      }
      token
    }	
  }
`

export const SIGN_IN = gql`
  mutation signIn($accountId: String!, $password: String!) {
    signIn(accountId: $accountId, password: $password){
      user {
        accountId
        createdAt
        updatedAt
      }
      token
    }
  }
`