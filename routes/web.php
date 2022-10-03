<?php

use App\Http\Controllers\Ajax\getDataController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/main', function(){
    return view('carrinton.index');
})->name('main');

Route::post('getData', [getDataController::class, 'getData'])->name('getData');
