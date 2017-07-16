<?php

use Illuminate\Database\Seeder;

use App\Album;

class AlbumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
       

       Album::create([
         "title"=>"醜奴兒",
         "eng_title"=>"The Servile",
         "date"=>"2016/4/30",
         "description"=>"",
         "price"=>300,
         "cover"=>"/img/03_WORKS/album.jpg",
         "songlist"=>"[]",
        'updated_at' => date("Y-m-d H:i:s"),
        'created_at' => date("Y-m-d H:i:s"),
       ]);
    }
}
