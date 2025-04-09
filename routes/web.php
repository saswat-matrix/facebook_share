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
    Route::get('/post-image-to-facebook', 'FacebookShareController@postImageToFacebookUsingGuzzleHttp')->name('facebook.post-image-to-facebook');
    Route::post('/post-image-to-facebook', 'FacebookShareController@postImageToFacebookUsingGuzzleHttp')->name('facebook.post-image-to-facebook');



    Route::get('/facebook-login', 'FacebookShareController@login')->name('facebook.login');
    Route::post('/facebook-login', 'FacebookShareController@login')->name('facebook.login');

    Route::get('/facebook-login-callback-redirect', 'FacebookShareController@loginRedirectCallback')->name('facebook.login-callback-redirect');
    Route::post('/facebook-login-callback-redirect', 'FacebookShareController@loginRedirectCallback')->name('facebook.login-callback-redirect');

    Route::get('/facebook-post', 'FacebookShareController@post')->name('facebook.post');
    Route::post('/facebook-post', 'FacebookShareController@post')->name('facebook.post');

    Route::get('/facebook-page-access-token', 'FacebookShareController@PageAccessToken')->name('facebook.page-access-token');
    Route::post('/facebook-page-access-token', 'FacebookShareController@PageAccessToken')->name('facebook.page-access-token');

    Route::get('/clear-sessions', 'FacebookShareController@clearSessions')->name('facebook.clear-sessions');

    Route::group(['prefix' => 'linked-in'], function () {
        // linked in
        Route::get('/', 'LinkedInController@index')->name('linked-in.index');
        Route::get('/authorization', 'LinkedInController@authorization')->name('linked-in.authorization');
        Route::get('/authorization', 'LinkedInController@authorization')->name('linked-in.authorization');
        Route::get('/redirection', 'LinkedInController@redirection')->name('linked-in.redirection');
        Route::post('/redirection', 'LinkedInController@redirection')->name('linked-in.redirection');

        Route::get('/post', 'LinkedInController@post')->name('linked-in.post');
        Route::post('/post', 'LinkedInController@post')->name('linked-in.post');
    });

});