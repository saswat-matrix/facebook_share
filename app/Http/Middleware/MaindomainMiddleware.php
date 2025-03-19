<?php
namespace App\Http\Middleware;

use Auth, Closure, Config, DB, Redirect, Session, Globals;

class MaindomainMiddleware
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
        if(Session::has('subdomain')) {
            // If session subdomain exists, fetchit;

            // getting sub domain name from route
            $subdomainArray = Session::get('subdomain');

            // Disconnect connection: mongodb
            DB::disconnect('mongodb'); 

            // Purge connection: mongodb
            DB::purge('mongodb');

            // Set new database
            Config::set('database.connections.mongodb.database', $subdomainArray['username']);
            // This is for MongoDB connection string part [?authSource=admin]
            // This points to the database where the username resides. Since newly created DB has no user of its own, this one is blocked
            // Config::set('database.connections.mongodb.options', array('database' => $subdomainArray['username']));

            // Reconnect connection: mongodb
            DB::reconnect('mongodb');
            $newDatabase = DB::connection('mongodb')->getDatabaseName();
            $request->route()->setParameter('isSubdomain', Globals::SMALL_CHAR_YES);
            $request->route()->setParameter('subdomainUsername', $subdomainArray['username']);
        }
        return $next($request);
    }
}
