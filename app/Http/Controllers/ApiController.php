<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Album;
use App\Song;
use Auth;

class ApiController extends Controller
{
  //
  public function albums(){
    return Album::all();
  }
  public function getAlbumByTitle($title){
    return Album::where("title",$title)->first();
  }
  public function nowUser(){
    dd(Auth::user());
    if (Auth::check() && Auth::user()->name){
      return ["status"=> "logined", "user"=> Auth::user() ];
    }
    return ["status"=> "unauthed"];
  }

  public function getAlbumSongsByTitle($title){
    return Album::where("title",$title)->first()->songs;
  }
}
