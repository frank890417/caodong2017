<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    //
    protected $fillable=[
      "title",
      "eng_title",
      "date",
      "description",
      "price",
      "cover",
      "songlist",
      "updated_at",
      "created_at"
    ];

    public function songs(){
      return $this->hasMany('App\Song','album_id');
    }
}
