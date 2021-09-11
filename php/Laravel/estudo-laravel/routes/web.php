<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\{
    UserController
};

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
    return view('index');
});

Route::post('/user/create',[UserController::class, 'store'])->name('user.store');

Route::post('user/list',[UserController::class, 'list'])->name('user.list');



