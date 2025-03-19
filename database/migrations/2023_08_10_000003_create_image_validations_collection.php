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
                ->table('image_validations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255);
                    $collection->string('entity', 255)->unique();
                    $collection->integer('width', 10);
                    $collection->integer('height', 10);
                    $collection->integer('size', 10)->default('s')->comment("in bytes (1 mb = 1024 kb = 1048576 byte)");
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
        ->table('image_validations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
