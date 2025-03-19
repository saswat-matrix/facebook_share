<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
                ->table('organizations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('name', 255);
                    $collection->string('phone_code', 255)->nullable();
                    $collection->string('country_code_iso2', 5)->nullable();
                    $collection->string('country_code_iso3', 5)->nullable();
                    $collection->string('mobile', 255);
                    $collection->string('username', 255)->unique();
                    $collection->string('email', 255)->unique();
                    $collection->string('password', 255);
                    $collection->string('timezone')->nullable();
                    $collection->string('city', 255)->nullable();
                    $collection->string('address', 255)->nullable();
                    $collection->string('postal_code', 10)->nullable();
                    $collection->enum('status', [Globals::SMALL_CHAR_ACTIVE, Globals::SMALL_CHAR_INACTIVE])->default(Globals::SMALL_CHAR_INACTIVE)->comment(Globals::SMALL_CHAR_ACTIVE . " => active, " . Globals::SMALL_CHAR_INACTIVE . " => inactive");
                    $collection->enum('approved_by_admin', [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO,  Globals::SMALL_CHAR_PENDING])->default(Globals::SMALL_CHAR_NO)->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no, " . Globals::SMALL_CHAR_PENDING . " => pending");
                    $collection->string('approver_admin')->nullable();
                    $collection->string('created_by')->nullable();
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('approved_by_admin_at')->nullable(); // joining date, when the student was approved
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('organization_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->longText('name')->nullable();
                    $collection->string('language', 10);
                    $collection->string('organization_id');
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
        ->table('organizations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('organization_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
