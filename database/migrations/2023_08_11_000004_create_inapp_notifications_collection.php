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
        $eventArray = array(
                        Globals::EVENT_NURSERY_ADD,
                        Globals::EVENT_NURSERY_REGISTRATION,
                        Globals::EVENT_NURSERY_APPROVED,
                        Globals::EVENT_NURSERY_REJECTED,

                        Globals::EVENT_STUDENT_ADD,
                        Globals::EVENT_STUDENT_EDIT,
                        Globals::EVENT_STUDENT_PROMOTED_ENROLED,

                        Globals::EVENT_PRE_ENROLMENT_REQUESTED,
                        Globals::EVENT_PRE_ENROLMENT_APPROVED,
                        Globals::EVENT_PRE_ENROLMENT_REJECTED,

                        Globals::EVENT_ENROLMENT_REQUESTED,
                        Globals::EVENT_ENROLMENT_APPROVED,
                        Globals::EVENT_ENROLMENT_REJECTED,

                        Globals::EVENT_ACTIVITY_REQUESTED,
                        Globals::EVENT_ACTIVITY_APPROVED,
                        Globals::EVENT_ACTIVITY_REJECTED
                    );
        $eventComment   = Globals::EVENT_NURSERY_ADD . " => Nursery Add, ";
        $eventComment  .= Globals::EVENT_NURSERY_REGISTRATION . " => Nursery Registration, ";
        $eventComment  .= Globals::EVENT_NURSERY_APPROVED . " => Nursery Approved, ";
        $eventComment  .= Globals::EVENT_NURSERY_REJECTED . " => Nursery Rejected, ";

        $eventComment  .= Globals::EVENT_STUDENT_ADD . " => Student Add, ";
        $eventComment  .= Globals::EVENT_STUDENT_EDIT . " => Student Edit, ";
        $eventComment  .= Globals::EVENT_STUDENT_PROMOTED_ENROLED . " => Student Promoted Enrolled, ";

        $eventComment  .= Globals::EVENT_PRE_ENROLMENT_REQUESTED . " => Pre-Enrolment Requested, ";
        $eventComment  .= Globals::EVENT_PRE_ENROLMENT_APPROVED . " => Pre-Enrolment Approved, ";
        $eventComment  .= Globals::EVENT_PRE_ENROLMENT_REJECTED . " => Pre-Enrolment Rejected, ";

        $eventComment  .= Globals::EVENT_ENROLMENT_REQUESTED . " => Enrolment Requested, ";
        $eventComment  .= Globals::EVENT_ENROLMENT_APPROVED . " => Enrolment Approved, ";
        $eventComment  .= Globals::EVENT_ENROLMENT_REJECTED . " => Enrolment Rejected, ";

        $eventComment  .= Globals::EVENT_ACTIVITY_REQUESTED . " => Activity Requested, ";
        $eventComment  .= Globals::EVENT_ACTIVITY_APPROVED . " => Activity Approved, ";
        $eventComment  .= Globals::EVENT_ACTIVITY_REJECTED . " => Activity Rejected, ";

        Schema::connection($this->connection)
                ->table('inapp_notifications', function (Blueprint $collection) use($eventArray, $eventComment)
                {
                    /*$collection->index('_id');
                    $collection->string('title', 255);
                    $collection->string('message', 255);
                    $collection->string('sender');
                    $collection->array('receiver');
                    $collection->enum('type', ['s', 'b'])->default('s')->comment("s => Single Type Notification, b => Broadcast Type Notification");
                    $collection->enum('event', ['urg', 'vad', 'uap', 'vap' ])->default('urg')->comment("urg => User Registration, vad => Venue Add, uap => User Approved, vap => Venue Approve");
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => Active, i => Inactive");
                    $collection->enum('is_read', ['y', 'n'])->default('n')->comment("y => Yes, n => No");
                    $collection->string('created_by');
                    $collection->dateTime('read_at')->nullable();
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();*/
                    $collection->index('_id');
                    $collection->string('title', 255);
                    $collection->string('message', 255);
                    $collection->string('sender')->nullable();
                    $collection->array('receiver');
                    $collection->array('reader');
                    $collection->array('inapp_notification_extra_data')->nullable();
                    $collection->enum('type', [Globals::NOTIFICATION_SINGLE, Globals::NOTIFICATION_BROADCAST])
                                ->default('s')->comment(Globals::NOTIFICATION_SINGLE . " => Single Type Notification, " . Globals::NOTIFICATION_BROADCAST . " => Broadcast Type Notification");
                    $collection->enum('event', $eventArray)->default(Globals::EVENT_NURSERY_ADD)->comment($eventComment);
                    $collection->array('data');
                    $collection->enum('status', [Globals::SMALL_CHAR_ACTIVE, Globals::SMALL_CHAR_INACTIVE])
                                ->default(Globals::SMALL_CHAR_ACTIVE)->comment(Globals::SMALL_CHAR_ACTIVE . " => Active, " . Globals::SMALL_CHAR_INACTIVE . " => Inactive");
                    $collection->enum('is_read', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])
                                ->default(Globals::SMALL_CHAR_YES)->comment(Globals::SMALL_CHAR_YES . " => Yes, " . Globals::SMALL_CHAR_NO . " => No");
                    $collection->string('created_by');
                    $collection->dateTime('read_at')->nullable();
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('inapp_notification_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255);
                    $collection->string('message', 255);
                    $collection->string('language', 10);
                    $collection->string('inapp_notification_id');
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
        ->table('inapp_notifications', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('inapp_notification_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};

                