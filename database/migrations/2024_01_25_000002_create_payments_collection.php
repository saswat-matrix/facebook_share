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
                ->table('payments', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('academic_year_id', 255);
                    $collection->string('academic_year', 255);
                    $collection->string('term_id', 255);
                    $collection->string('term', 255);
                    $collection->integer('amount', 10);
                    $collection->integer('deduction', 10);
                    $collection->integer('gross_payable', 10);
                    $collection->integer('discount', 10);
                    $collection->integer('net_payable', 10);
                    $collection->longText('deduction_description')->nullable();
                    $collection->string('invoice_id', 255)->nullable();
                    $collection->string('student_id', 255)->nullable();
                    $collection->enum('type', ['p', 'e', 't', 's', 'a'])
                                ->comment("b => booking, p => promotion, e => enrolment, t => term payment, s => service payment, a => additional payment")
                                ->nullable(); // also goes into general info; when the form was filled
                    $collection->string('enrolment_id', 255)->nullable();
                    $collection->string('registration_id', 255)->nullable();
                    $collection->string('re_enrolment_id', 255)->nullable();
                    //$collection->string('pre_enrolment_id', 255)->nullable();
                    $collection->longText('description')->nullable();
                    $collection->enum('payment_status', ['c', 'i', 'd', 'p', 'pp', 'f'])
                                ->default('a')
                                ->comment("c => complete, i => initiated, d => due, p => pending, pp => partially paid, f => failed, na => not applicable");
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->string('created_by')->nullable();
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('payment_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->longText('description')->nullable();
                    $collection->string('language', 10);
                    $collection->string('payment_id');
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
        ->table('payments', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('payment_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
