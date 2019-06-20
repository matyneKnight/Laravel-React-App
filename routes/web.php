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
  //on crée dabord une nouvelle instance de requête AWS pour les opérations dans un compartiment sur le cloud
  $rek = new AwsRekognition();

  //createCollection permet de créer une nouvelle collection (une face en globalité)
  // $res = $rek->createCollection("faceMatcherfromlaravel");
  // $result = $res;
  //   dd($result);
  // resultat : 1 collection returnée, créée avec succes


  //listCollections permet de lister les collections existantes avec une limite à 5
  // $res = $rek->listCollections(5);
  // $result = $res;
  //   dd($result);
  // resultat : 2 collections : faceMatcher et faceMatcherfromlaravel


  //indexFaces permet de detecter les visages d'une image en parametre, de notre bucket, et l'ajouter à une collection indiqué
  // $res = $rek->indexFaces("enroll/photo_passport.png","faceMatcher");
  // $result = $res;
  //   dd($result);
  // resultat : 1 visage détecté sur ma photo et ajouté à la collection faceMatcher


  //même principe que précedemment avec exemple image : bucket/enroll/IMG-20190618-WA0013.jpg et collection : faceMatcherfromlaravel
  // $res = $rek->indexFaces("enroll/IMG-20190618-WA0013.jpg","faceMatcherfromlaravel");
  // $result = $res;
  //   dd($result);
  // resultat : 1 visage détecté sur la photo de la charmante fille et ajouté à la collection faceMatcherfromlaravel


  //même principe que précedemment
  // $res = $rek->indexFaces("enroll/IMG_20180531_195058.jpg","faceMatcherfromlaravel");
  // $result = $res;
  //   dd($result);
  // resultat : 3 visage détectés sur la photo d'amis et ajouté à la collection faceMatcherfromlaravel


  //même principe que précedemment
  // $res = $rek->indexFaces("enroll/IMG_20180518_135601.jpg","faceMatcherfromlaravel");
  // $result = $res;
  //   dd($result);
  // resultat : 20 visage détectés sur la photo de classe tc2b et ajouté à la collection faceMatcherfromlaravel


  //listFaces permet de lister les visages d'une collection indiqué
  // $res = $rek->listFaces("faceMatcherfromlaravel");
  // $result = $res;
  //   dd($result);
  // resultat : 24, 3 visages dans la photo d'amis, 1 de celle de la charmante fille et 20 de la photo de classe tc2b


  //searchFacesByImage permet de chercher une correspondance de visage dans une collection avec comme reférence les visages d'une image de notre bucket
  // $res = $rek->searchFacesByImage("faceMatcherfromlaravel","enroll/photo_passport.png");
  // $result = $res;
  //   dd($result);
  // resultat : 2 correspondance avec le visage sur ma photo, une dans la photo de classe tc2b et la seconde dans la photo d'amis
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/agents','API\AgentController@index');
Route::post('/agents/store','API\AgentController@store');

Route::post('/facial_rekognition/enroll','API\VisageController@enroll');
