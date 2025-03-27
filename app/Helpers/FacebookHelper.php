<?php
namespace App\Helpers;

use RecursiveDirectoryIterator, RecursiveIteratorIterator;

use Facebook\Facebook;
use GuzzleHttp\Client;

use Config, Globals, Session;

class FacebookHelper {


    public static function fetchAppAccessToken($code) {

        $appId          = Config::get('facebook.app_id');
        $appSecret      = Config::get('facebook.app_secret');
        $authUrl        = Config::get('facebook.auth_uri');
        $accessTokenUrl = Config::get('facebook.access_token_uri');
        $redirectUrl    = Config::get('facebook.redirect_uri');

        $postData       = array(
                            'client_id'         => $appId,
                            'client_secret'     => $appSecret,
                            'redirect_uri'      => $redirectUrl,
                            'code'              => $code
                        );
        $guzzleParams   = array('form_params' => $postData);      

        try {
            $guzzleClient   = new Client();
            $response       = $guzzleClient->post($accessTokenUrl, $guzzleParams); // Use Guzzle to make a request to exchange the code for an access token
            $data           = json_decode($response->getBody(), true);
            $accessToken    = $data['access_token'];

            // Store access token in session
            Session::put('facebook_app_access_token', $accessToken);
            return true;
        } catch(\Exceptions $e) {
            return false;
        }
    }

    public static function userDetail() {

        $appAccessToken    = Session::get('facebook_app_access_token');
        $userDetailUrl     = 'https://graph.facebook.com/v22.0/me?access_token=' . $appAccessToken;  // Use your page id if posting to a page, not 'me' for user feed'
        try {
            // Initialize Guzzle client
            $guzzleClient       = new Client();
            $response           = $guzzleClient->get($userDetailUrl);
            $data               = json_decode($response->getBody()->getContents(), true);
            print_r($data);
            if (isset($data['id'])) {
                Session::put('facebook_user_id', $data['id']);
                return true;
            } else {
                return false;
            }
        } catch(\Exceptions $e) {
            return false;
        }
    }


    public static function post() {

        $appAccessToken    = Session::get('facebook_app_access_token');
        $postUrl = 'https://graph.facebook.com/v22.0/me/feed';

    $postData = [
        'message' => 'Test',
        'access_token' => $appAccessToken
    ];

    try {
        $guzzleClient = new Client();
        $response = $guzzleClient->post($postUrl, ['form_params' => $postData]);
            $data               = json_decode($response->getBody()->getContents(), true);
            print_r($data);
            if (isset($data['id'])) {
                Session::put('facebook_user_id', $data['id']);
                return true;
            } else {
                return false;
            }
        } catch(\Exceptions $e) {
            return false;
        }
    }

    public function postImage(Request $request)
    {
        // Store the image locally
        $imagePath = $request->file('image')->store('images');

        // Get the Facebook App credentials from the .env file
        $appId              = Config::get('facebook.app_id');
        $appSecret          = Config::get('facebook.app_secret');
        $pageAccessToken    = Config::get('facebook.access_token');
        $pageId = 'your-page-id'; // Replace with your Facebook Page ID

        // Initialize the Facebook SDK
        $fb = new Facebook([
            'app_id' => $appId,
            'app_secret' => $appSecret,
            'default_graph_version' => 'v15.0',
        ]);

        try {
            // Prepare the data for posting the image
            $data = [
                'source' => $fb->fileToUpload(storage_path('app/' . $imagePath)), // Path to the image file
                'message' => 'Your caption here', // Optional caption
            ];

            // Send the POST request to Facebook Graph API
            $response = $fb->post("/{$pageId}/photos", $data, $pageAccessToken);

            // Get the response from the API
            $graphNode = $response->getGraphNode();

            // Return a success response
            return response()->json([
                'success' => 'Image posted successfully!',
                'data' => $graphNode
            ]);
        } catch (\Facebook\Exceptions\FacebookResponseException $e) {
            // When Facebook API returns an error
            return response()->json(['error' => 'Facebook API error: ' . $e->getMessage()], 400);
        } catch (\Facebook\Exceptions\FacebookSDKException $e) {
            // When the SDK fails
            return response()->json(['error' => 'Facebook SDK error: ' . $e->getMessage()], 400);
        }
    }
};
