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
                ->table('users', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('fname', 255);
                    $collection->string('lname', 255);
                    $collection->string('phone_code', 20);
                    $collection->string('country_code_iso2', 5)->nullable();
                    $collection->string('country_code_iso3', 5)->nullable();
                    $collection->string('mobile', 255);
                    $collection->string('email', 255)->unique();
                    $collection->string('username', 255)->unique();
                    $collection->longText('image')->nullable();
                    $collection->string('password');
                    $collection->string('timezone')->nullable();
                    $collection->string('city', 255)->nullable();
                    $collection->string('address', 255)->nullable();
                    $collection->string('postal_code', 10)->nullable();
                    $collection->dateTime('dob')->nullable();
                    $collection->string('language')->nullable();
                    $collection->string('email_activation_code', 50)->nullable();
                    $collection->string('password_reset_code', 50)->nullable();
                    $collection->enum('type', ['s', 'a', 'n', 'p', 't', 'e'])->default('s')->comment("s => Superadmin, a => Admin, n => nursery, p => parent, t => teacher");
                    $collection->enum('parent_type', ['f', 'm'])->default('f')->comment("f => Father, m => Mother");
                    $collection->enum('registration_type', ['n', 'f', 'g', 'a'])->default('n')->comment("n => normal, f => facebook connect, g => googleplus connect");
                    $collection->enum('platform_admin', ['y', 'n'])->default('n')->comment("y => yes, n => no");
                    $collection->array('role_ids')->nullable();
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->enum('is_login', ['y', 'n'])->default('n')->comment("y => yes, n => no");
                    $collection->enum('email_verified', ['y', 'n'])->default('n')->comment("y => yes, n => no");
                    $collection->enum('mobile_verified', ['y', 'n'])->default('n')->comment("y => yes, n => no");
                    $collection->enum('is_ban', ['y', 'n'])->default('n')->comment("y => yes, n => no");
                    $collection->enum('approved_by_admin', ['y', 'n'])->default('n')->comment("y => yes, n => no");
                    $collection->string('approver_admin')->nullable();
                    $collection->string('created_by')->nullable();
                    $collection->rememberToken();
                    $collection->string('guid', 50)->nullable();
                    $collection->enum('device_type', ['a', 'i', 'w'])->default('w')->comment("a => android, i => iOS, w => web")->nullable();
                    $collection->string('device_id', 255)->nullable();
                    $collection->dateTime('last_login')->nullable();
                    $collection->dateTime('created_date');
                    $collection->dateTime('modified_date');
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('email_verified_at')->nullable();
                    $collection->dateTime('mobile_verified_at')->nullable();
                    $collection->dateTime('approved_by_admin_at')->nullable();
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
        ->table('users', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
