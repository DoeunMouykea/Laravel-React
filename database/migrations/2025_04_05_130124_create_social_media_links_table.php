<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('social_media_links', function (Blueprint $table) {
            $table->id();
            $table->string('platform'); // e.g., Facebook, Twitter
            $table->string('url');      // e.g., https://facebook.com/yourpage
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('social_media_links');
    }
};
