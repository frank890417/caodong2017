<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Album;
use App\Song;


class ApiController extends Controller
{
    //
  public function albums(){
    return Album::all();
  }
  public function getAlbumByTitle($title){
    return Album::where("title",$title)->first();
  }

  public function getAlbumSongsByTitle($title){
    return Album::where("title",$title)->first()->songs;
  }
}
