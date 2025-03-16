import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const lambdademofunction = new lambda.Function(this,'lambdademofunction',{
        handler:'lambda_function.lambda_handler',
        runtime:lambda.Runtime.PYTHON_3_9,
        code:lambda.Code.fromAsset('./services/'),
        functionName:'demofunction'
    })
  }
}
