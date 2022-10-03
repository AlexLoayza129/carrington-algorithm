<?php

namespace App\Http\Controllers\Ajax;

use App\Http\Controllers\Controller;
use App\Models\Contrast;
use Illuminate\Http\Request;

class getDataController extends Controller
{
    public function getData(Request $request){

        $contrast = Contrast::find($request);

        return response()->json($contrast);
    }
}

