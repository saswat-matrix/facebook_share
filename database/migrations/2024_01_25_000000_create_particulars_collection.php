<?php
use Illuminate\Database\Migrations\Migration;
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
                ->table('particulars', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255)->unique();
                    //$collection->array('classes')->nullable();
                    $collection->enum('mandatory', ['y', 'n'])->nullable()->comment("y => yes, n => no");
                    $collection->enum('age_specific', ['y', 'n'])->default('n')->comment("y => yes, n => no");
                    $collection->enum('type', ['ot', 'a', 'pt', 'pu', 'ptpu'])->nullable()
                                ->comment("ot => one time, a => annual, pt => per term, pu => per unit");
                    $collection->array('charge_type')->nullable()
                                ->comment("bc => booking charge, pec => pre-enrolment charge, ec => enrolment charge, tc => term charge, ic => item charge, ac => addon charge");            
                    $collection->enum('refundable', ['y', 'n'])->default('n')->comment("y => yes, n => no"); 
                    $collection->longText('description')->nullable();
                    $collection->integer('order')->nullable();         
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->string('created_by')->nullable();
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('particular_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255);
                    $collection->longText('description')->nullable();
                    $collection->string('language', 10);
                    $collection->string('particular_id');
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
        ->table('particulars', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('particular_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
