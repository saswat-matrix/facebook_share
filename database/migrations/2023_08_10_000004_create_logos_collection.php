<?php

use Illuminate\Database\Migrations\Migration;
/*use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;*/
use Jenssegers\Mongodb\Schema\Blueprint;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    protected $connection = 'mongodb';

    public function up()
    {
        Schema::connection($this->connection)
                ->table('logos', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255)->nullable();
                    $collection->longText('image')->nullable();
                    $collection->enum('type', ['fw', 'fm', 'aw', 'am'])->default('aw')->comment("fw = front web; fm = front mobile; aw = admin web; am = admin mobile");
                    $collection->enum('registration_type', ['n', 'f', 'g', 'a'])->default('n')->comment("n => normal, f => facebook connect, g => googleplus connect");
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::connection($this->connection)
        ->table('logos', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
