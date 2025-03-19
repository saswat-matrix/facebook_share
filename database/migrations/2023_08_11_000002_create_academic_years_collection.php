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
                ->table('academic_years', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('year', 255);
                    $collection->string('term', 255)->nullable();
                    $collection->dateTime('sdate', 255);
                    $collection->dateTime('edate', 255);
                    $collection->dateTime('sdate_booking', 255);
                    $collection->dateTime('edate_booking', 255);
                    $collection->dateTime('sdate_of_term1', 255);
                    $collection->dateTime('edate_of_term1', 255);
                    $collection->dateTime('sdate_of_term1_term2_break', 255);
                    $collection->dateTime('edate_of_term1_term2_break', 255);
                    $collection->dateTime('sdate_of_term2', 255);
                    $collection->dateTime('edate_of_term2', 255);
                    $collection->dateTime('sdate_of_term2_term3_break', 255);
                    $collection->dateTime('edate_of_term2_term3_break', 255);
                    $collection->dateTime('sdate_of_term3', 255);
                    $collection->dateTime('edate_of_term3', 255);
                    //$collection->unique(['year', 'term']);
                    $collection->integer('max_students', 10)->nullable();
                    $collection->integer('min_days_per_week', 1);
                    $collection->integer('max_days_per_week', 1);
                    $collection->integer('age_limit_for_min_days_in_month', 1);
                    $collection->array('days');
                    $collection->longText('rules');
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->string('created_by')->nullable();
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('academic_year_timings', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->time('stime');
                    $collection->time('etime');
                    $collection->string('academic_year_id');
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('academic_year_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('rules', 255);
                    $collection->string('language', 10);
                    $collection->string('academic_year_id');
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
        ->table('academic_years', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('academic_year_timings', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('academic_year_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
