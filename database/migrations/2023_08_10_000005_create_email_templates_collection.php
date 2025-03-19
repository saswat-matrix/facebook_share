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
                ->table('email_templates', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255);
                    $collection->string('type', 255);
                    $collection->string('subject', 255);
                    $collection->string('message', 255);
                    $collection->longText('description');
                    $collection->enum('status', ['a', 'i'])->default('a')->comment("a => active, i => inactive");
                    $collection->dateTime('created_at');
                    $collection->dateTime('updated_at');
                    $collection->dateTime('deleted_at')->nullable();
                });

        Schema::connection($this->connection)
                ->table('email_template_translations', function (Blueprint $collection) 
                {
                    $collection->index('_id');
                    $collection->string('title', 255);
                    $collection->string('subject', 255);
                    $collection->string('message', 255);
                    $collection->longText('description');
                    $collection->string('language', 10);
                    $collection->string('email_template_id');
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
        ->table('email_templates', function (Blueprint $collection) 
        {
            $collection->drop();
        });
        Schema::connection($this->connection)
        ->table('email_template_translations', function (Blueprint $collection) 
        {
            $collection->drop();
        });
    }
};
