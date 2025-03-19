<?php
namespace App\Http\Middleware;

use Auth, Closure, Config, DB, Redirect, Globals;
use MongoDB\Client as MongoClient;

use App\Helpers\MiscHelper;

class SubdomainMiddleware
{
    /**
    * Handle an incoming request.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \Closure  $next
    * @return mixed
    */
    public function handle($request, Closure $next)
    {
        // getting sub domain name from route
        $subdomain = $request->route()->parameters['subdomain'];

        if(isset($subdomain) && !empty($subdomain)) {

            $jsonFilePath     = public_path('json/json-files/organization.json');
            $subdomainExists  = MiscHelper::readDataFromJsonFile($jsonFilePath, $subdomain);

            if($subdomainExists) {
                // if subdomain is active
                //$connectionString = 'mongodb://' . env('MONGODB_USERNAME') . ':' . env('MONGODB_PASSWORD') . '@' . env('MONGODB_HOST') . ':' . env('MONGODB_PORT') . '/?authSource=' . env('MONGODB_AUTH_DATABASE');

                $connectionString = 'mongodb://' . config('database.connections.mongodb.username') . ':' . config('database.connections.mongodb.password') . '@' . config('database.connections.mongodb.host') . ':' . config('database.connections.mongodb.port') . '/?authSource=' . config('database.connections.mongodb.options.database');

                $client           = new MongoClient($connectionString);                      // Connect to MongoDB server
                $databaseArray    = (array)$client->listDatabaseNames();    // get list of database names

                if(in_array($subdomain, $databaseArray)) {
                    // if the subdomain name is present in the array of database names, then the database for this subdomain exists
                    // proceed to load the database

                    // Disconnect connection: mongodb ; listDatabaseNames()
                    DB::disconnect('mongodb'); 

                    // Purge connection: mongodb
                    DB::purge('mongodb');

                    // Set new database
                    Config::set('database.connections.mongodb.database', $subdomain);
                    // This is for MongoDB connection string part [?authSource=admin]
                    // This points to the database where the username resides. Since newly created DB has no user of its own, this one is blocked
                    // Config::set('database.connections.mongodb.options', array('database' => $subdomain));

                    // Reconnect connection: mongodb
                    DB::reconnect('mongodb');
                    $newDatabase = DB::connection('mongodb')->getDatabaseName();
                    $request->route()->forgetParameter('subdomain');
                    $request->route()->setParameter('isSubdomain', Globals::SMALL_CHAR_YES);
                    $request->route()->setParameter('subdomainUsername', $subdomain);
                    return $next($request);
                } else {
                    // database unavailable error
                    return response()->view('admin.error.database-not-found', array('page_title' => __('web/caption_error.error_database_not_found_title'), 'page_message' => __('web/caption_error.error_database_not_found_message')));
                    //return $next($request);
                    die();                    
                }  
            } else {
                // if subdomain is inactive
                return response()->view('admin.error.domain-not-found', array('page_title' => __('web/caption_error.error_domain_not_found_title'), 'page_message' => __('web/caption_error.error_domain_not_found_message')));
                //return $next($request);
                die();
            }              
        } else {
            return $next($request);
        }
    }
}
