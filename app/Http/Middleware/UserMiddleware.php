<?php

namespace App\Http\Middleware;

use Closure;

use Auth, Redirect, Globals;

class UserMiddleware
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
        return $next($request);
        if (\Auth::guard('user')->check()) 
        {
            return $next($request);
        }
        return redirect()->route('user@login');
    }
}
