<?php

use \App\Classes\Globals;

return [
    'client_id'        			=> env('LINKEDIN_CLIENT_ID', Globals::LINKEDIN_REDIRECT_URL),
    'client_secret'    			=> env('LINKEDIN_CLIENT_SECRET', Globals::LINKEDIN_CLIENT_SECRET),
    'auth_uri'         			=> env('LINKEDIN_AUTH_URI', Globals::LINKEDIN_AUTH_URI),
    'access_token_uri' 			=> env('LINKEDIN_ACCESS_TOKEN_URI', Globals::LINKEDIN_ACCESS_TOKEN_URI),
    'redirect_uri'     			=> env('LINKEDIN_REDIRECT_URL', Globals::LINKEDIN_REDIRECT_URL),
    'organization_urn_uri'     	=> env('LINKEDIN_ORGANIZATION_URN_URL', Globals::LINKEDIN_ORGANIZATION_URN_URL),
];
