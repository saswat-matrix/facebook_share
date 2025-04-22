<?php
namespace App\Helpers;

use GuzzleHttp\Client;

use Config, Globals, Session;

class TwitterHelper {


    /**************************************************/
    # Function to fetch access token from Linked-In
    # Function name    : fetchAppAccessToken
    # Author           : Saswat Routroy
    # Created Date     : 30-09-2020
    # Purpose          : Get access token
    # Params           : $code
    /**************************************************/
    public static function fetchAppOathToken() {

        $consumerKey        = Config::get('twitter.consumer_key');
        $consumerSecret     = Config::get('twitter.consumer_secret');
        
        // OAuth endpoints and the callback URL
        $authUrl            = Config::get('twitter.auth_url');
        $requestTokenUrl    = Config::get('twitter.request_token_url');
        $redirectUrl        = Config::get('twitter.redirect_url');

        // Generate OAuth signature and parameters
        $oauth = array(
            'oauth_callback'            => $redirectUrl,
            'oauth_consumer_key'        => $consumerKey,
            'oauth_nonce'               => (string) time(),
            'oauth_signature_method'    => 'HMAC-SHA1',
            'oauth_timestamp'           => (string) time(),
            'oauth_version'             => '1.0',
        );

        // Create the base string and signature
        $signature = $this->generateOAuthSignature('POST', $requestTokenUrl, $oauth, $consumerSecret);

        // Add the signature to the OAuth parameters
        $oauth['oauth_signature'] = $signature;

        try {
            // Send the request for a request token
            $client = new Client();
            $response = $client->post($requestTokenUrl, [
                'headers' => ['Authorization' => $this->buildOAuthHeader($oauth)],
                'form_params' => $oauth,
            ]);

            // Parse the response to extract the oauth_token and oauth_token_secret
            parse_str($response->getBody()->getContents(), $responseData);
            
            // Save the request tokens in the session
            Session::put('twitter_app_oauth_token', $responseData['oauth_token']);
            Session::put('twitter_app_oauth_token_secret', $responseData['oauth_token_secret']);
            return true;
        } catch(\Exceptions $e) {
            return false;
        }
    }

    /**************************************************/
    # Function to fetch access token from Linked-In
    # Function name    : fetchAppAccessToken
    # Author           : Saswat Routroy
    # Created Date     : 30-09-2020
    # Purpose          : Get access token
    # Params           : $code
    /**************************************************/
    public static function fetchAppAccessToken($oauthToken, $oauthVerifier) {

        // Get the saved oauth_token and oauth_token_secret from session
        $oauthTokenSecret   = Session::get('oauth_token_secret');
        $consumerKey        = Config::get('twitter.consumer_key');
        $consumerSecret     = Config::get('twitter.consumer_secret');

        // Step 2: Exchange the request token for access tokens
        $accessTokenUrl     = Config::get('twitter.access_token_url');

        // Prepare the OAuth parameters
        $oauth              = array(
                                'oauth_consumer_key'        => $consumerKey,
                                'oauth_token'               => $oauthToken,
                                'oauth_verifier'            => $oauthVerifier,
                                'oauth_nonce'               => (string) time(),
                                'oauth_signature_method'    => 'HMAC-SHA1',
                                'oauth_timestamp'           => (string) time(),
                                'oauth_version'             => '1.0',
                            );

        // Generate the signature for the access token request
        $signature                  = LinkedInHelper::generateOAuthSignature('POST', $accessTokenUrl, $oauth, $consumerSecret, $oauthTokenSecret);

        // Add the signature to the OAuth parameters
        $oauth['oauth_signature']   = $signature;
        $authorization              = LinkedInHelper::buildOAuthHeader($oauth);
        $headers                    = array(
                                        'Authorization' => $authorization
                                    );

        // Send the request to exchange tokens
        try {
            $client = new Client();
            $response = $client->post($accessTokenUrl, array(
                                                        'headers'       => $headers,
                                                        'form_params'   => $oauth,
                                                    ));

            // Parse the response and save the access tokens
            parse_str($response->getBody()->getContents(), $accessTokenData);

            // Save the access tokens in the session (or database for persistent storage)
            Session::put('twitter_app_access_token', $accessTokenData);
            return true;
        } catch(\Exceptions $e) {
            return false;
        }
    }

    // Generate the OAuth signature for the given request
    public static function generateOAuthSignature($method, $url, $params, $consumerSecret, $oauthTokenSecret = '')
    {
        // Construct the base string
        $baseString = strtoupper($method) . '&' .
            rawurlencode($url) . '&' .
            rawurlencode(http_build_query($params, '', '&', PHP_QUERY_RFC3986));

        // Create the signing key
        $signingKey = rawurlencode($consumerSecret) . '&' . rawurlencode($oauthTokenSecret);

        // Generate the signature
        return base64_encode(hash_hmac('sha1', $baseString, $signingKey, true));
    }

    // Build the OAuth authorization header
    public static function buildOAuthHeader($oauth)
    {
        $header = 'OAuth ';
        $headerParams = [];
        foreach ($oauth as $key => $value) {
            $headerParams[] = "$key=\"" . rawurlencode($value) . "\"";
        }
        return $header . implode(', ', $headerParams);
    }


};
