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
                ->table('admin_configs', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('config_key', 255)->unique();
                    $collection->string('config_key', 255);
                    $collection->string('value_unite', 255);
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->dateTime('created_date');
                    $collection->dateTime('modified_date');
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
        ->table('admin_configs', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
