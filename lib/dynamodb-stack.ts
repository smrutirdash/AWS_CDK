import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class DynamodbStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const dynamodbdemotable = new dynamodb.Table(this,'dynamodbdemotable',{
        readCapacity:3,
        writeCapacity:3,
        partitionKey:{name:'custmerid',type:dynamodb.AttributeType.NUMBER},
        tableName:'dynamodbdemotable',
        removalPolicy:cdk.RemovalPolicy.DESTROY
    })
  }
}
