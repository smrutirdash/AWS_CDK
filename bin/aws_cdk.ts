#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkStack } from '../lib/aws_cdk-stack';
import { DynamodbStack } from '../lib/dynamodb-stack';
const app = new cdk.App();
new AwsCdkStack(app, 'AwsCdkStack', {});
new DynamodbStack(app, 'DynamodbStack', {});