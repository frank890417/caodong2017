<?php
use Illuminate\Http\Request;
use App\Http\Controllers\ApiContoller;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("nowUser","AuthApiController@nowUser");
Route::get("albums","ApiController@albums");
Route::get("album/{title}/songs","ApiController@getAlbumSongsByTitle");
Route::get("album/{title}","ApiController@getAlbumByTitle");