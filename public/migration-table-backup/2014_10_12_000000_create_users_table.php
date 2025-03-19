<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('fname', '255');
            $table->string('lname', '255');
            $table->string('phone_code', '255')->default('+966');
            $table->string('mobile', '255');
            $table->string('email', '255')->unique();
            $table->string('username', '255')->unique();
            $table->longText('image')->nullable();
            $table->string('password');
            $table->string('timezone')->nullable();
            $table->dateTime('dob')->nullable();
            $table->string('email_activation_code', '50')->nullable();
            $table->string('password_reset_code', '50')->nullable();
            $table->enum('type', ['s', 'a', 'p', 'c'])->default('s')->comment("s => Superadmin, a => Admin, p => partner, c => customer");
            $table->enum('registration_type', ['n', 'f', 'g', 'a'])->default('n')->comment("n => normal, f => facebook connect, g => googleplus connect");
            $table->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
            $table->enum('is_login', ['y', 'n'])->default('n')->comment("y => yes, n => no");
            $table->enum('email_verified', ['y', 'n'])->default('n')->comment("y => yes, n => no");
            $table->enum('mobile_verified', ['y', 'n'])->default('n')->comment("y => yes, n => no");
            $table->enum('is_ban', ['y', 'n'])->default('n')->comment("y => yes, n => no");
            $table->rememberToken();
            $table->string('guid', '50')->nullable();
            $table->enum('device_type', ['a', 'i', 'w'])->default('w')->comment("a => android, i => iOS, w => web")->nullable();
            $table->string('device_id', '255')->nullable();
            $table->dateTime('last_login')->nullable();
            $table->dateTime('created_date');
            $table->dateTime('modified_date');
            $table->dateTime('created_at');
            $table->dateTime('updated_at');
            $table->dateTime('email_verified_at')->nullable();
            $table->dateTime('mobile_verified_at')->nullable();
            $table->dateTime('deleted_at')->nullable();
            //$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
