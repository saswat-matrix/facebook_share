<?php

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

/*Route::get('/', function () {
    return view('welcome');
});*/

Route::group(['prefix' => ''], function () {
    //Route::get('/', [ 'as'    => 'admin.login', 'uses' => 'LoginController@index' ]);

    Route::get('/', 'FacebookShareController@view')->name('facebook.view');
    Route::post('/post', 'FacebookShareController@post')->name('facebook.post');    
});