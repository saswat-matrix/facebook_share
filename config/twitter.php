<?php

use \App\Classes\Globals;

return [
    'consumer_key'     => env('TWITTER_CONSUMER_KEY', Globals::TWITTER_CONSUMER_KEY),
    'consumer_secret'  => env('TWITTER_CONSUMER_SECRET', Globals::TWITTER_CONSUMER_SECRET),
    'access_token'     => env('TWITTER_ACCESS_TOKEN', Globals::TWITTER_ACCESS_TOKEN),
    'access_secret'    => env('TWITTER_ACCESS_TOKEN_SECRET', Globals::TWITTER_ACCESS_TOKEN_SECRET),
    'auth_url'         => env('TWITTER_AUTH_URL', Globals::TWITTER_AUTH_URI),
    'access_token_url' => env('TWITTER_ACCESS_TOKEN_URL', Globals::TWITTER_ACCESS_TOKEN_URI),
    'redirect_url'     => env('TWITTER_REDIRECT_URL', Globals::TWITTER_REDIRECT_URI),
];
