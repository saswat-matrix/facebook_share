<?php
use Illuminate\Database\Migrations\Migration;
/*use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;*/
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
        /*Schema::create('users', function (Blueprint $collection) {
               $collection->index('name');
               $collection->unique('email');
            });*/
        Schema::connection($this->connection)
                ->table('pre_enrolments', function (Blueprint $collection) 
                {
                	// student basic detail //
                    $collection->index('_id');
                    $collection->string('fname', 255);
                    $collection->string('mname', 255)->nullable();
                    $collection->string('lname', 255);
                    $collection->string('pname', 255);
                    $collection->string('phone_code', 20)->nullable();
                    $collection->string('country_code_iso2', 5)->nullable();
                    $collection->string('country_code_iso3', 5)->nullable();
                    $collection->string('phone', 255);
                    $collection->longText('image')->nullable();
                    $collection->string('timezone')->nullable();
                    $collection->string('city', 255)->nullable();
                    $collection->longText('address')->nullable();
                    $collection->string('postal_code', 10)->nullable();
                    $collection->dateTime('dob')->nullable();
                    $collection->string('pob', 255)->nullable();
                    $collection->enum('gender', [Globals::GENDER_MALE, Globals::GENDER_FEMALE, Globals::GENDER_TRANSGENDER])->default(Globals::GENDER_MALE)->comment("m => male, f => female, t => third gender");
                    $collection->string('nationality')->nullable();
                    $collection->string('religion')->nullable();
                    $collection->enum('has_sibling', ['y', 'n'])->default('n')->comment("y => yes, n => no");
                    $collection->integer('sibling_count', 1)->nullable();
                    $collection->string('first_language_id', 255)->nullable();
                    $collection->string('first_language_specify', 255)->nullable();
                    $collection->string('second_language_id', 255)->nullable();
                    $collection->string('second_language_specify', 255)->nullable();
                    $collection->string('citizenship_id', 255)->nullable();

                    // student's father detail //
                    $collection->string('father_user_id')->nullable();
                    $collection->string('father_parent_id')->nullable();
                    $collection->string('father_fname', 255)->nullable();
                    $collection->string('father_lname', 255)->nullable();
                    $collection->string('father_phone_code', 20)->nullable();
                    $collection->string('father_country_code_iso2', 5)->nullable();
                    $collection->string('father_country_code_iso3', 5)->nullable();
                    $collection->string('father_email', 255)->nullable();
                    $collection->string('father_mobile', 20)->nullable();
                    $collection->string('father_phone', 20)->nullable();
                    $collection->string('father_work_tel', 20)->nullable();
                    $collection->longText('father_image')->nullable();
                    $collection->string('father_company', 255)->nullable();
                    $collection->longText('father_address')->nullable();
                    $collection->string('father_po_box', 20)->nullable();
                    $collection->string('father_po_box', 20)->nullable();
                    $collection->string('father_citizenship_id', 255)->nullable();

                    // student's mother detail //
                    $collection->string('mother_user_id')->nullable();
                    $collection->string('mother_parent_id')->nullable();
                    $collection->string('mother_fname', 255)->nullable();
                    $collection->string('mother_lname', 255)->nullable();
                    $collection->string('mother_phone_code', 20)->nullable();
                    $collection->string('mother_country_code_iso2', 5)->nullable();
                    $collection->string('mother_country_code_iso3', 5)->nullable();
                    $collection->string('mother_email', 255)->nullable();
                    $collection->string('mother_mobile', 20)->nullable();
                    $collection->string('mother_phone', 20)->nullable();
                    $collection->string('mother_work_tel', 20)->nullable();
                    $collection->longText('mother_image')->nullable();
                    $collection->string('mother_company', 255)->nullable();
                    $collection->longText('mother_address')->nullable();
                    $collection->string('mother_po_box', 20)->nullable();
                    $collection->string('mother_citizenship_id', 255)->nullable();

                    // student's emergency contact detail //
                    $collection->string('ec1_fname', 255)->nullable();
                    $collection->string('ec1_lname', 255)->nullable();
                    $collection->string('ec1_relationship', 255)->nullable();
                    $collection->string('ec1_mobile', 20)->nullable();
                    $collection->string('ec2_fname', 255)->nullable();
                    $collection->string('ec2_lname', 255)->nullable();
                    $collection->string('ec2_relationship', 255)->nullable();
                    $collection->string('ec2_mobile', 20)->nullable();

                    // student's authorized personnel detail //
                    $collection->string('ap1_fname', 255)->nullable();
                    $collection->string('ap1_lname', 255)->nullable();
                    $collection->string('ap1_relationship', 255)->nullable();
                    $collection->string('ap1_mobile', 20)->nullable();
                    $collection->longText('ap1_image')->nullable();
                    $collection->string('ap2_fname', 255)->nullable();
                    $collection->string('ap2_lname', 255)->nullable();
                    $collection->string('ap2_relationship', 255)->nullable();
                    $collection->string('ap2_mobile', 20)->nullable();
                    $collection->longText('ap2_image')->nullable();

                    // student's enrolment detail //
                    $collection->string('enrolment_id', 255)->nullable();
                    $collection->string('enrolment_year_id', 255)->nullable();   // added on Date - Jan 29, 2024: contains object id of year:
                    $collection->string('enrolment_year', 255)->nullable();      // added on Date - Jan 29, 2024: contains text of year:
                    $collection->string('enrolment_term_id', 255)->nullable();   // added on Date - Jan 29, 2024: contains object id of term:
                    $collection->string('enrolment_term', 255)->nullable();      // added on Date - Jan 29, 2024: contains key of term:
                    $collection->array('enrolment_class_options')->nullable();   // added on Date - Jan 29, 2024: automatic filled based on age:
                    //$collection->string('enrolment_class', 255)->nullable();
                    $collection->string('enrolment_class_id', 255)->nullable();
                    $collection->array('enrolment_curriculums')->nullable();    // to be filled by parents via public url
                    $collection->array('enrolment_days')->nullable();           // to be filled by parents via public url
                    //$collection->string('enrolment_timing', 255)->nullable();   // to be filled by parents via public url
                    $collection->string('enrolment_timing_id', 255)->nullable();   // to be filled by parents via public url
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
                    $collection->enum('transport_type', ['p', 'd', 't'])->comment("p => pick up, d => drop off, t => two-ways")->nullable();
                    $collection->longText('transport_area')->nullable();
                    $collection->longText('transport_street_name')->nullable();
                    $collection->longText('transport_building_name')->nullable();
                    $collection->longText('transport_comment')->nullable();

                    // student's medical info //
                    $collection->string('family_physician_name', 255)->nullable();
                    $collection->string('family_physician_clinic', 255)->nullable();
                    $collection->string('family_physician_contact_number', 255)->nullable();
                    $collection->array('illnesses')->nullable();
                    $collection->longText('health_issue_operation_comment')->nullable();
                    $collection->longText('health_issue_serious_injuries_comment')->nullable();
                    $collection->longText('health_issue_other_comment')->nullable();
                    $collection->array('vaccinees')->nullable();

                    $collection->enum('allergy', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->default(Globals::SMALL_CHAR_NO)->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no"); // allergy
                    $collection->longText('allergy_comment')->nullable();
                    $collection->enum('vision_hearing_problem', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->default(Globals::SMALL_CHAR_NO)->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no"); // allergy
                    $collection->longText('vision_hearing_problem_comment')->nullable();
                    $collection->enum('special_disability', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->default(Globals::SMALL_CHAR_NO)->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no"); // allergy
                    $collection->longText('special_disability_comment')->nullable();
                    $collection->longText('hospitalized_comment')->nullable();
                    $collection->longText('health_information_other_comment')->nullable();
                    $collection->longText('regular_medication_comment')->nullable();
                    $collection->longText('sporting_activity_restriction_comment')->nullable();
                    $collection->string('blood_type', 255)->nullable();

                    // heard about us from //
                    $collection->longText('friend_child_name')->nullable();
                    $collection->array('heard_about_us_from')->nullable();
                    $collection->longText('heard_about_us_other')->nullable();
                    $collection->longText('comment')->nullable();
                    
                    $collection->string('unique_pre_enrolment_form_id', 255)->nullable();
                    $collection->string('student_id', 255)->nullable();
                    $collection->string('registration_id', 255)->nullable();
                    $collection->integer('increment_id')->nullable();
                    $collection->integer('invoice_id')->nullable();   // added on Date - Jan 29, 2024
                    $collection->enum('is_booking', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->nullable()->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no"); // added on Date - Jan 29, 2024:
                    $collection->enum('terms_and_conditions', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->nullable()->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no"); // added on Date - Jan 29, 2024:
                    $collection->longText('signature_dataurl', 255)->nullable();
                    $collection->enum('payment_mode', [Globals::PAYMENT_MODE_ONLINE, Globals::PAYMENT_MODE_BANK_TRANSFER, Globals::PAYMENT_MODE_OFFLINE])->nullable()->comment(Globals::PAYMENT_MODE_ONLINE . " => online, " . Globals::PAYMENT_MODE_BANK_TRANSFER . " => bank transfer, " . Globals::PAYMENT_MODE_OFFLINE . " => offline"); // added on Date - Jan 29, 2024:
                    
                    $collection->enum('authorization_photo', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->default(Globals::SMALL_CHAR_NO)->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no"); // general info
                    //$collection->enum('archived', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->default(Globals::SMALL_CHAR_NO)->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no");
                    //$collection->enum('pre_enroled', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->default(Globals::SMALL_CHAR_NO)->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no");
                    $collection->enum('status', [Globals::SMALL_CHAR_ACTIVE, Globals::SMALL_CHAR_INACTIVE])->default(Globals::SMALL_CHAR_INACTIVE)->comment(Globals::SMALL_CHAR_ACTIVE . " => active, " . Globals::SMALL_CHAR_INACTIVE . " => inactive");
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
        ->table('pre_enrolments', function (Blueprint $collection) 
        {
            $collection->drop();
        });        
    }
};