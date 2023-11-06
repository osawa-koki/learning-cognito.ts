import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js'
import { CognitoIdentityServiceProvider } from 'aws-sdk'
import getEnvVar from './getEnvVar'

const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider({ region: 'ap-northeast-1' })

const userPool = new AmazonCognitoIdentity.CognitoUserPool({
  ClientId: getEnvVar<string>('USER_POOL_CLIENT_ID'),
  UserPoolId: getEnvVar<string>('USER_POOL_ID')
})

export { userPool, cognitoIdentityServiceProvider }
