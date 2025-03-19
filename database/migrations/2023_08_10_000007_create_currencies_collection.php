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
                ->table('currencies', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('name', 255);
                    $collection->string('code', 10);
                    $collection->string('symbol', 10);
                    $collection->string('is_stripe_currency', 10);
                    $collection->string('stripe_zero_decimal', 10);
                    $collection->string('stripe_three_decimal', 255);
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => Active, i => Inactive");
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('currency_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('name', 255);
                    $collection->string('language', 10);
                    $collection->string('currency_id');
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
        ->table('currencies', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('currency_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};

                