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
        /*Schema::create('users', function (Blueprint $collection) {
               $collection->index('name');
               $collection->unique('email');
            });*/
        Schema::connection($this->connection)
                ->table('enrolments', function (Blueprint $collection) 
                {
                	// student basic detail //
                    $collection->index('_id');
                    
                    // student's enrolment detail //
                    $collection->string('student_enrolment_id', 255)->nullable();
                    $collection->string('enrolment_year_id', 255)->nullable();   // added on Date - Jan 29, 2024: contains object id of year:
                    $collection->string('enrolment_year', 255)->nullable();      // added on Date - Jan 29, 2024: contains text of year:
                    $collection->string('enrolment_term_id', 255)->nullable();   // added on Date - Jan 29, 2024: contains object id of term:
                    $collection->string('enrolment_term', 255)->nullable();      // added on Date - Jan 29, 2024: contains key of term:
                    //$collection->array('enrolment_class_options')->nullable();   // added on Date - Jan 29, 2024: automatic filled based on age:
                    //$collection->string('enrolment_class', 255)->nullable();
                    $collection->string('enrolment_class_id', 255)->nullable();
                    $collection->array('enrolment_curriculums')->nullable();    // to be filled by parents via public url
                    $collection->array('enrolment_days')->nullable();           // to be filled by parents via public url
                    //$collection->string('enrolment_timing', 255)->nullable();   // to be filled by parents via public url
                    $collection->string('enrolment_timing_id', 255)->nullable();   // to be filled by parents via public url
                    //$collection->enum('joining_type', ['p', 'e'])->comment("p => promotion, e => enrolment")->nullable(); // also goes into general info; when the form was filled
                    $collection->enum('joining_type', [Globals::CLASS_JOINING_REGISTRATION, Globals::CLASS_JOINING_RE_ENROLMENT])->comment(Globals::CLASS_JOINING_REGISTRATION . " => registration, " . Globals::CLASS_JOINING_RE_ENROLMENT . " => re-enrolment")->nullable(); // also goes into general info; when the form was filled
                    $collection->dateTime('enrolment_date')->nullable();   // also goes into general info; when the form was filled
                    $collection->dateTime('joining_date')->nullable();      // also goes into general info; when the form was filled

                    // student's service //
                    //$collection->string('lunch_id', 255)->nullable();
                    $collection->enum('lunch_service', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->default(Globals::SMALL_CHAR_NO)->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no")->nullable();
                    $collection->string('lunch_year_id', 255)->nullable();   // contains id of year:
                    $collection->string('lunch_year', 255)->nullable();      // contains text of year:
                    $collection->string('lunch_term_id', 255)->nullable();   // contains id of term:
                    $collection->string('lunch_term', 255)->nullable();      // contains text of term:
                    //$collection->array('lunch_term_id')->nullable();
                    //$collection->array('lunch_term')->nullable();
                    //$collection->string('lunch_terms', 255)->nullable();
                    $collection->dateTime('lunch_effective_starting')->nullable();
                    $collection->array('lunch_days')->nullable();
                    $collection->longText('food_allergy_comment')->nullable();
                    $collection->longText('special_diet_comment')->nullable();
                    $collection->enum('vegetarian_alternative', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->nullable()->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no");

                    //$collection->string('transport_id', 255)->nullable();
                    $collection->enum('transport_service', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->default(Globals::SMALL_CHAR_NO)->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no")->nullable();
                    $collection->string('transport_year_id', 255)->nullable();
                    $collection->string('transport_year', 255)->nullable();
                    $collection->string('transport_term_id', 255)->nullable();
                    $collection->string('transport_term', 255)->nullable();
                    $collection->dateTime('transport_effective_starting')->nullable();
                    $collection->enum('transport_type', [Globals::TRANSPORT_TYPE_PICK_UP, Globals::TRANSPORT_TYPE_DROP_OFF, Globals::TRANSPORT_TYPE_TWO_WAYS])->comment(Globals::TRANSPORT_TYPE_PICK_UP . " => pick up, " . Globals::TRANSPORT_TYPE_DROP_OFF . " => drop off, " . Globals::TRANSPORT_TYPE_TWO_WAYS . " => two-ways")->nullable();
                    $collection->longText('transport_area')->nullable();
                    $collection->longText('transport_street_name')->nullable();
                    $collection->longText('transport_building_name')->nullable();
                    $collection->longText('transport_comment')->nullable();
                   
                    $collection->string('unique_enrolment_id', 255)->nullable();
                    $collection->string('student_id', 255)->nullable();
                    //$collection->string('registration_id', 255)->nullable();
                    $collection->string('student_registration_id', 255)->nullable();                         // added on Date - Nov 11, 2024: ; previously registration_id
                    $collection->integer('increment_id')->nullable();
                    $collection->integer('invoice_id')->nullable();   // added on Date - Jan 29, 2024
                    $collection->enum('is_booking', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->nullable()->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no");   // added on Date - Jan 29, 2024:
                    //$collection->string('pre_enrolment_id', 255)->nullable();
                    $collection->string('registration_id', 255)->nullable();                                 // added on Date - Nov 11, 2024: ; previously pre_enrolment_id

                    $collection->enum('current', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->default(Globals::SMALL_CHAR_NO)->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no");
                    $collection->enum('status', [Globals::SMALL_CHAR_ACTIVE, Globals::SMALL_CHAR_INACTIVE])->default(Globals::SMALL_CHAR_ACTIVE)->comment(Globals::SMALL_CHAR_ACTIVE . " => active, " . Globals::SMALL_CHAR_INACTIVE . " => inactive");
                    $collection->enum('approved_by_admin', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->default(Globals::SMALL_CHAR_NO)->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no");
                    $collection->string('approver_admin')->nullable();
                    $collection->string('created_by')->nullable();

                    $collection->dateTime('created_date');
                    $collection->dateTime('modified_date');
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');

                    $collection->dateTime('approved_by_admin_at')->nullable(); // joining date, when the student was approved
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
        //Schema::dropIfExists('users');
        Schema::connection($this->connection)
        ->table('enrolments', function (Blueprint $collection) 
        {
            $collection->drop();
        });        
    }
};
