#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkStack } from '../lib/aws_cdk-stack';
import { DynamodbStack } from '../lib/dynamodb-stack';
import { LambdaStack } from '../lib/lambda-stack';
const app = new cdk.App();
new AwsCdkStack(app, 'AwsCdkStack', {});
new DynamodbStack(app, 'DynamodbStack', {});
new LambdaStack(app, 'LambdaStack', {});
//below line too is same only here we are specifying that the stack will run in default account and region of aws configure
//new LambdaStack(app, 'LambdaStack', {env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION}});
//below line too is same only here we are specifying that the stack will run in mentioned account and region
//can be used to create stack in different region of same account
//new LambdaStack(app, 'LambdaStack', {env: { account: '123456789012', region: 'us-east-1'}});