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
                ->table('charges', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('particular_id', 255);
                    $collection->string('academic_year_id', 255);
                    $collection->integer('amount', 10);
                    $collection->enum('time_specific', ['y', 'n'])->default('n')->comment("y => yes, n => no");
                    $collection->time('stime');
                    $collection->time('etime');
                    $collection->enum('refundable', ['y', 'n'])->default('n')->comment("y => yes, n => no");            
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->string('created_by')->nullable();
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('charge_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255);
                    $collection->string('language', 10);
                    $collection->string('charge_id');
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
        ->table('charges', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('charge_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
