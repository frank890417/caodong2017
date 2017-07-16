<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    //

  protected $fillable=[
    "album_id",
    "title",
    "eng_title",
    "date",
    "description",
    "lyrics",
    "eng_lyrics",
    "price",
    "cover",
    "mv",
  ];
}
