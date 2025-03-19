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
                ->table('class_categories', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255)->unique();
                    $collection->integer('from_age', 3);
                    $collection->integer('to_age', 3);
                    $collection->integer('from_age_in_month', 3);
                    $collection->integer('to_age_in_month', 3);
                    $collection->enum('age_type', ['y', 'm'])->default('y')->comment("y => year, m => month");
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->string('created_by')->nullable();
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('class_category_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255);
                    $collection->string('language', 10);
                    $collection->string('class_category_id');
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
        ->table('class_categories', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('class_category_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
