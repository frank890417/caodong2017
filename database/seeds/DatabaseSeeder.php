<?php

use Illuminate\Database\Seeder;
use database\seeds\AlbumSeeder;
use database\seeds\SongSeeder;

use App\Album;
use App\Song;
class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Album::truncate();
      Song::truncate();
      // $this->call(UsersTableSeeder::class);
      $this->call('AlbumSeeder');
      $this->call('SongSeeder');
    }
}
