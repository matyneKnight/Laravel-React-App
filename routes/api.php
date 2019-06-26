<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/agents','API\AgentController@index');
Route::post('/agents/store','API\AgentController@store');
Route::delete('/agents/delete/{id}','API\AgentController@destroy');
Route::get('/agents/edit/{id}','API\AgentController@edit');
Route::put('/agents/update/{id}','API\AgentController@update');
Route::post('/facial_rekognition/enroll','API\VisageController@enroll');
