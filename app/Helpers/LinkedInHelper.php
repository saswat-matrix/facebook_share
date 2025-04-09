<?php
namespace App\Helpers;

use GuzzleHttp\Client;

use Config, Globals, Session;

class LinkedInHelper {


    public static function fetchAppAccessToken($code) {

        $clientId          = Config::get('linkedin.client_id');
        $clientSecret      = Config::get('linkedin.client_secret');
        $authUrl           = Config::get('linkedin.auth_uri');
        $accessTokenUrl    = Config::get('linkedin.access_token_uri');
        $redirectUrl       = Config::get('linkedin.redirect_uri');

        $postData       = array(
                            'client_id'         => $clientId,
                            'client_secret'     => $clientSecret,
                            'redirect_uri'      => $redirectUrl,
                            'code'              => $code,
                            'grant_type'        => 'authorization_code'
                        );
        $guzzleParams   = array('form_params' => $postData);      

        try {
            $guzzleClient   = new Client();
            $response       = $guzzleClient->post($accessTokenUrl, $guzzleParams); // Use Guzzle to make a request to exchange the code for an access token
            $data           = json_decode($response->getBody(), true);
            $accessToken    = $data['access_token'];

            // Store access token in session
            Session::put('linkedin_app_access_token', $accessToken);
            return true;
        } catch(\Exceptions $e) {
            return false;
        }
    }

    public static function fetchOrganizationUrn() {
        $appAccessToken    = Session::get('linkedin_app_access_token');
        /*response = Http::withToken($accessToken)
            ->get('https://api.linkedin.com/v2/organizationAcls', [
                'q' => 'roleAssignee',
                'role' => 'ADMINISTRATOR',
                'state' => 'APPROVED',
            ]);*/

        $linkedInOrganizationUrnUrl = Config::get('linkedin.organization_urn_uri');
        $headers        = array(
                            'Authorization' => 'Bearer ' . $appAccessToken,
                            'Accept'        => 'application/json',
                        );
        $query         = array(
                            'q'         => 'roleAssignee',
                            'role'      => 'ADMINISTRATOR',
                            'state'     => 'APPROVED',
                        );
        $client         = new Client();
        $response       = $client->get($linkedInOrganizationUrnUrl, array(
                                                                    'headers' => $headers,
                                                                    'query' => $query
                                                                ));

        echo "No Test Last";

        print_r($response);
        //$organizationId = $response['elements'][0]['organization']; // example: urn:li:organization:123456
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
