<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
                ->table('settings', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('site_name', 255);
                    $collection->string('phone_code', 20)->nullable();
                    $collection->string('country_code_iso2', 5)->nullable();
                    $collection->string('country_code_iso3', 5)->nullable();
                    $collection->string('mobile', 20)->nullable();
                    $collection->string('phone', 20)->nullable();
                    $collection->string('phone_2', 20)->nullable();
                    $collection->string('fax')->nullable();

                    $collection->longText('logo')->nullable();
                    $collection->longText('fav_icon')->nullable();
                    $collection->longText('image')->nullable();
                    $collection->longText('banner')->nullable();
                    $collection->longText('email_header')->nullable();

                    $collection->longText('terms_and_conditions_text')->nullable();
                    $collection->longText('bank_details')->nullable();
                    $collection->longText('address')->nullable();

                    $collection->enum('payment_mode_' . Globals::PAYMENT_MODE_ONLINE, [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->nullable()->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no");
                    $collection->enum('payment_mode_' . Globals::PAYMENT_MODE_BANK_TRANSFER, [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->nullable()->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no");
                    $collection->enum('payment_mode_' . Globals::PAYMENT_MODE_OFFLINE, [Globals::SMALL_CHAR_YES, Globals::SMALL_CHAR_NO])->nullable()->comment(Globals::SMALL_CHAR_YES . " => yes, " . Globals::SMALL_CHAR_NO . " => no");
                    $collection->string('smtp_host')->nullable();
                    $collection->string('smtp_port')->nullable();
                    $collection->string('smtp_encryption')->nullable();
                    $collection->string('smtp_email')->nullable();
                    $collection->string('smtp_password')->nullable();
                    $collection->string('primary_color')->nullable();
                    $collection->string('secondary_color')->nullable();
                    $collection->string('prefix')->nullable();
                    $collection->string('registration_prefix')->nullable();
                    $collection->string('username', 255);
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->string('created_by')->nullable();
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });
        Schema::connection($this->connection)
                ->table('setting_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('site_name', 255);
                    $collection->longText('terms_and_conditions_text')->nullable();
                    $collection->longText('bank_details')->nullable();
                    $collection->longText('address')->nullable();
                    $collection->string('language', 10);
                    $collection->string('setting_id');
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
        ->table('settings', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('setting_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
