export default {
    cognito: {
        REGION: "us-east-2",
        //USER_POOL_ID: "us-east-2_gDwVQu0wm",
        USER_POOL_ID:"us-east-2_EwzimWOth",
        //APP_CLIENT_ID: "52p33vb7r0fae57tkjd1j6ggof",
        APP_CLIENT_ID:"5qdqs3kc6ng68erahvkatkc9rc",
        IDENTITY_POOL_ID: "us-east-2:ebf0402f-1a79-466e-9df3-e4807aece184"
    },
    graphql: {
        //URL: "https://svg45ofuvzbnjdfoueqv73ptsm.appsync-api.us-east-2.amazonaws.com/graphq",
        URL: "https://giz5pdnpijdw5bnzjsj4bi2qwa.appsync-api.us-east-2.amazonaws.com/graphql",
        REGION: "us-east-2",
        AUTHENTICATION_TYPE: "AMAZON_COGNITO_USER_POOLS"
      },
    s3: {
        REGION: "us-east-2",
        BUCKET: "https://s3.console.aws.amazon.com/s3/buckets/aws-codestar-us-east-2-185628410800/?region=ca-central-1&tab=overview"
      }
};