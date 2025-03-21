<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $collectionNames = config('permission.collection_names');

        Schema::table($collectionNames['roles'], function (Blueprint $collection) {
            $collection->unique(['name', 'name_translation', 'guard_name', 'created_by']);
        });

        Schema::table($collectionNames['permissions'], function (Blueprint $collection) {
            $collection->unique(['name', 'guard_name']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $collectionNames = config('permission.collection_names');

        Schema::dropIfExists($collectionNames['roles']);
        Schema::dropIfExists($collectionNames['permissions']);
    }
};
