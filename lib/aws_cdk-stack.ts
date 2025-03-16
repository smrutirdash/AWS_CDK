import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class AwsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const s3demobucket = new s3.Bucket(this,'s3demobucket',{
      bucketName:'demos3bucket20250315',
      versioned: false,
      publicReadAccess: false,
      removalPolicy:cdk.RemovalPolicy.DESTROY
    })
  }
}
