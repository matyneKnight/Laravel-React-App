<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Jeylabs\AwsRekognition\AwsRekognition;

Route::get('/rekognition', function () {
  $rek = new AwsRekognition();
  $res = $rek->createCollection("faceMatcherfromlaravel");
  $result = $res;
    dd($result);
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/agents','API\AgentController@index');
Route::post('/agents/store','API\AgentController@store');

Route::post('/facial_rekognition/enroll','API\VisageController@enroll');
