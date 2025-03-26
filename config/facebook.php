<?php

use \App\Classes\Globals;

return [
    'app_id'           => env('FACEBOOK_APP_ID', Globals::FACEBOOK_APP_ID),
    'app_secret'       => env('FACEBOOK_APP_SECRET', Globals::FACEBOOK_APP_SECRET),
    'access_token'     => env('FACEBOOK_ACCESS_TOKEN', 'Laravel'),
    'auth_uri'         => env('FACEBOOK_AUTH_URI', Globals::FACEBOOK_AUTH_URI),
    'access_token_uri' => env('FACEBOOK_ACCESS_TOKEN_URI', Globals::FACEBOOK_ACCESS_TOKEN_URI),
    'redirect_uri'     => env('FACEBOOK_REDIRECT_URI', Globals::FACEBOOK_REDIRECT_URI),
];
