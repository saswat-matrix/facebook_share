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
                ->table('parents', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('fname', 255)->nullable();
                    $collection->string('lname', 255)->nullable();
                    $collection->string('phone_code', 20)->nullable();
                    $collection->string('country_code_iso2', 5)->nullable();
                    $collection->string('country_code_iso3', 5)->nullable();
                    $collection->string('email', 255)->nullable();
                    $collection->string('mobile', 20)->nullable();
                    $collection->string('phone', 20)->nullable();
                    $collection->string('work_tel', 20)->nullable();
                    $collection->longText('image')->nullable();
                    $collection->string('company', 255)->nullable();
                    $collection->longText('address')->nullable();
                    $collection->string('po_box', 20)->nullable();
                    $collection->string('citizenship_id', 255)->nullable();
                    $collection->string('user_id')->nullable();
                    $collection->enum('type', ['f', 'm'])->default('f')->comment("f => Father, m => Mother");
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->string('created_by')->nullable();
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
        ->table('parents', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
