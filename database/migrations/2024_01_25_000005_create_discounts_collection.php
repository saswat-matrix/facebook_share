<?php
use Illuminate\Database\Migrations\Migration;
use Jenssegers\Mongodb\Schema\Blueprint;

use App\Classes\Globals;

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
                ->table('discounts', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255)->unique();
                    $collection->integer('amount', 3);
                    $collection->longText('description')->nullable();
                    $collection->enum('type', [Globals::DISCOUNT_TYPE_ENROLMENT_SIBLING, Globals::DISCOUNT_TYPE_ENROLMENT_EARLY_PAYMENT])->nullable()
                                ->comment(Globals::DISCOUNT_TYPE_ENROLMENT_SIBLING . " => sibling enrolment, " . Globals::DISCOUNT_TYPE_ENROLMENT_EARLY_PAYMENT . " => early payment");
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->string('created_by')->nullable();
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('discount_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255);
                    $collection->longText('description')->nullable();
                    $collection->string('language', 10);
                    $collection->string('discount_id');
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
        ->table('discounts', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('discount_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
