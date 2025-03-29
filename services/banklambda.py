import os
import boto3

s3 = boto3.client('s3')
bucket_name = os.environ['BUCKET_NAME']

def handler(event, context):
    try:
        key = event['queryStringParameters']['key']
        response = s3.get_object(Bucket=bucket_name, Key=key)
        content = response['Body'].read().decode('utf-8')
        return {
            'statusCode': 200,
            'body': content
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': str(e)
        }
