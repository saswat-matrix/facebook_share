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
                ->table('modules', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255)->unique();
                    $collection->string('display_title', 255);
                    $collection->enum('type', ['a', 'f', 'b'])->default('a')->comment("a => admin module, f => front module, b => both for admin and front");
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->string('created_by')->nullable();
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('module_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('display_title', 255);
                    $collection->string('language', 10);
                    $collection->string('module_id');
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
        ->table('modules', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('module_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
