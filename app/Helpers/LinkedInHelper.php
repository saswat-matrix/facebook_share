<?php
namespace App\Helpers;

use GuzzleHttp\Client;

use Config, Globals, Session;

class LinkedInHelper {

    /**************************************************/
    # Function to fetch access token from Linked-In
    # Function name    : fetchAppAccessToken
    # Author           : Saswat Routroy
    # Created Date     : 30-09-2020
    # Purpose          : Get access token
    # Params           : $code
    /**************************************************/
    public static function fetchAppAccessToken($code) {

        $clientId       = Config::get('linkedin.client_id');
        $clientSecret   = Config::get('linkedin.client_secret');
        $authUrl        = Config::get('linkedin.auth_uri');
        $accessTokenUrl = Config::get('linkedin.access_token_uri');
        $redirectUrl    = Config::get('linkedin.redirect_uri');

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

    /**********************************************************************/
    # Function to fetch organization urk
    # Function name    : fetchOrganizationUrn
    # Author           : Saswat Routroy
    # Created Date     : 30-09-2020
    # Purpose          : Get organization urn to post to organization page
    # Params           : $code
    /**********************************************************************/
    public static function fetchOrganizationUrn() {
        $appAccessToken    = Session::get('linkedin_app_access_token');
        $linkedInOrganizationUrnUrl = Config::get('linkedin.organization_urn_uri');
        $headers    = array(
                        'Authorization' => 'Bearer ' . $appAccessToken,
                        'Accept'        => 'application/json',
                    );
        $query      = array(
                        'q'         => 'roleAssignee',
                        'role'      => 'ADMINISTRATOR',
                        'state'     => 'APPROVED',
                    );
        try {
            $client         = new Client();
            $response       = $client->get($linkedInOrganizationUrnUrl, array(
                                                                        'headers' => $headers,
                                                                        'query' => $query
                                                                    ));

            $body = json_decode($response->getBody(), true);
            if(isset($body) && !empty($body)) {
                if(isset($body['elements']) && !empty($body['elements'])) {
                    $organizations = $body['elements'];
                    if(count($organizations) > 0) {
                        $organizationId = $organizations[0]['organization'];
                        Session::put('linkedin_organization_id', $organizationId);
                        return true;
                    } else {
                        echo "Not admin of any page";
                    }                
                } else {
                    echo "No access";
                }
            }
        }  catch(\Exceptions $e) {
            return false;
        }
    }

    /**********************************************************************/
    # Function to post to organization page
    # Function name    : post
    # Author           : Saswat Routroy
    # Created Date     : 30-09-2020
    # Purpose          : post to organization page
    # Params           : $code
    /**********************************************************************/
    public static function post() {
        $appAccessToken = Session::get('linkedin_app_access_token');
        $organizationId = Session::get('linkedin_organization_id');
        $postUrl        = Config::get('linkedin.organization_post_uri');
        $headers        = array(
                            'Authorization'             => 'Bearer ' . $appAccessToken,
                            'Accept'                    => 'application/json',                            
                            'Content-Type'              => 'application/json',
                            'X-Restli-Protocol-Version' => '2.0.0',
                        );
        $postParamas    = array(
                            'author'            => $organizationId, // ex: 'urn:li:organization:123456'
                            'lifecycleState'    => 'PUBLISHED',
                            'specificContent'   => array(
                                                    'com.linkedin.ugc.ShareContent' => array(
                                                                                        'shareCommentary' => array(
                                                                                                                'text' => 'In order to improvize our business aspects further, we are implementing some models and features. This message is a testing of one such model. Please ignore this post. Thank you',
                                                                                                            ),
                                                                                        'shareMediaCategory' => 'NONE',
                                                                                    ),
                                                ),
                            'visibility'        => array(
                                                    'com.linkedin.ugc.MemberNetworkVisibility' => 'PUBLIC',
                                                ),
                        );
        try {
            $client         = new Client();
            $response       = $client->post($postUrl, array(
                                                        'headers'       => $headers,
                                                        'json'          => $postParamas
                                                    ));

            $data           = json_decode($response->getBody(), true);
            print_r($data); die();
            //$organizationId = $response['elements'][0]['organization']; // example: urn:li:organization:123456
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
