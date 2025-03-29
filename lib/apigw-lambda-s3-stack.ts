import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as apigw from 'aws-cdk-lib/aws-apigateway';


export class Apigwlambdas3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create S3 bucket with a custom name
    const dataBucket = new s3.Bucket(this, 'BankBucket', {
      bucketName: 'apigw-lambda-s3-' + this.account + '-' + this.region,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      versioned: false,
      publicReadAccess: false
    });

    // Create Lambda function using Python 3.11
    const dataHandler = new lambda.Function(this, 'BankLambdaHandler', {
      runtime: lambda.Runtime.PYTHON_3_11,
      code: lambda.Code.fromAsset('./services/'),
      handler: 'banklambda.handler',
      environment: {
        BUCKET_NAME: dataBucket.bucketName
      }
    });

    // Grant Lambda read access to S3 bucket
    dataBucket.grantRead(dataHandler);

    // Create API Gateway with Lambda integration
    const api = new apigw.LambdaRestApi(this, 'BankApiGW', {
      handler: dataHandler,
      proxy: false,
    });

    // Create API resource and method
    const items = api.root.addResource('items');
    items.addMethod('GET');
  }
}
