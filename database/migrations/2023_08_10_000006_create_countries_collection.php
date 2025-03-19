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
                ->table('countries', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('name', 255);
                    $collection->string('capital', 255);
                    $collection->string('country_code_iso2', 10);
                    $collection->string('country_code_iso3', 10);
                    $collection->string('phone_code', 10);
                    $collection->string('currency', 255);
                    $collection->string('currency_code', 10);
                    $collection->string('managed_currency', 10);
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => Active, i => Inactive");
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('country_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('name', 255);
                    $collection->string('capital', 255);
                    $collection->string('currency', 255);
                    $collection->string('language', 10);
                    $collection->string('country_id');
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
        ->table('countries', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('country_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};

                