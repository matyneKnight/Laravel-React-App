<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VisageController extends Controller
{
    public function enroll(Request $request)
    {
      $image = $request->file;
      return response()->json($image);
        // $photo = $temp_file_location;
        // $fp_image = fopen($photo, 'r');
        // $image = fread($fp_image, filesize($photo));
        // fclose($fp_image);
    }
}
