<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Songs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('songs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('album_id')->nullable();
            $table->string('title')->default("");
            $table->string('eng_title')->default("");
            $table->string('date')->default("");
            $table->text('description')->nullable();
            $table->text('lyrics')->nullable();
            $table->text('eng_lyrics')->nullable();
            $table->integer('price')->default(30);
            $table->string('cover',500)->default("");
            $table->string('preview',500)->default("");
            $table->string('mv',500)->default("");
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::drop('songs');
    }
}
