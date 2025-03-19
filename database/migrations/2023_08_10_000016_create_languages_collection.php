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
                ->table('languages', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('name', 255)->unique();
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->string('created_by')->nullable();
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('language_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('name', 255);
                    $collection->string('language', 10);
                    $collection->string('language_id');
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
        ->table('languages', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('language_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        //https://www.youtube.com/watch?v=B1s8JAx7CEM
    }
};
