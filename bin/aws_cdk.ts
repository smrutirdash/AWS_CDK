#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkStack } from '../lib/aws_cdk-stack';
import { DynamodbStack } from '../lib/dynamodb-stack';
import { LambdaStack } from '../lib/lambda-stack';
const app = new cdk.App();
new AwsCdkStack(app, 'AwsCdkStack', {});
new DynamodbStack(app, 'DynamodbStack', {});
new LambdaStack(app, 'LambdaStack', {});