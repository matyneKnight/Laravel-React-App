<?php

use Aws\Laravel\AwsServiceProvider;

return [

    /*
    |--------------------------------------------------------------------------
    | AWS SDK Configuration
    |--------------------------------------------------------------------------
    |
    | The configuration options set in this file will be passed directly to the
    | `Aws\Sdk` object, from which all client objects are created. The minimum
    | required options are declared here, but the full set of possible options
    | are documented at:
    | http://docs.aws.amazon.com/aws-sdk-php/v3/guide/guide/configuration.html
    |
    */

    'region' => env('AWS_REKOGNITION_REGION', 'ap-southeast-2'),
    'bucket' => env('AWS_REKOGNITION_BUCKET'),
    'version' => 'latest',
    'ua_append' => [
        'L5MOD/' . AwsServiceProvider::VERSION,
    ],
    'url' => '//s3-' . env('AWS_REKOGNITION_REGION') . '.amazonaws.com/' . env('AWS_REKOGNITION_BUCKET') .'/public/',
    'credentials' => [
        'key'    => env('AWS_REKOGNITION_ACCESS_KEY_ID'),
        'secret' => env('AWS_REKOGNITION_SECRET_ACCESS_KEY'),
        'token' => env('AWS_REKOGNITION_SESSION_TOKEN'),
    ],
];
