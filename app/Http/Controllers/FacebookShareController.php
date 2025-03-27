<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Facebook\Facebook;
use GuzzleHttp\Client;

use Config, Globals, Session;

use App\Helpers\FacebookHelper;

class FacebookShareController extends Controller
{

    public function postImageToFacebookUsingGraphSdk(Request $request)
    {
        // Validate the image input
        $validated = $request->validate([
            'image' => 'required|image|mimes:jpg,png,jpeg,gif|max:10240',
        ]);

        // Store the image locally
        //$imagePath = $request->file('image')->store('images');

        // Get the Facebook App credentials from the .env file
        $facebookappId          = env('FACEBOOK_APP_ID');
        $facebookappSecret      = env('FACEBOOK_APP_SECRET');
        $facebookAccessToken    = env('FACEBOOK_PAGE_ACCESS_TOKEN');
        $facebookPageId         = 'your-page-id'; // Replace with your Facebook Page ID

        $facebookCredentials    = array(
                                    'app_id'                    => $facebookappId,
                                    'app_secret'                => $facebookappSecret,
                                    'default_graph_version'     => 'v15.0',
                                );

        // Initialize the Facebook SDK
        $facebookObject         = new Facebook($facebookCredentials);

        try {
            // Prepare the data for posting the image
            /*$postData           = array(
                                    //'source'    => $fb->fileToUpload(storage_path('app/' . $imagePath)), // Path to the image file
                                    'message'   => 'Your caption here', // Optional caption
                                );

            // Send the POST request to Facebook Graph API
            $response           = $facebookObject->post("/{$pageId}/photos", $postData, $facebookAccessToken);

            // Get the response from the API
            $graphNode          = $response->getGraphNode();

            // Return a success response
            return response()->json(array(
                                    'success' => 'Image posted successfully!',
                                    'data' => $graphNode
                                ));
            */

            return response()->json(array('success' => true, 'data' => $body), 200);
            $postData           = array('message' => 'Your caption here');
            $response           = $facebookObject->post('/me/feed', $postData, $accessToken);

            // Get the response body (post ID, etc.)
            $body = $response->getDecodedBody();

            
        } catch (\Facebook\Exceptions\FacebookResponseException $e) {
            // When Facebook API returns an error
            return response()->json(['error' => 'Facebook API error: ' . $e->getMessage()], 400);
        } catch (\Facebook\Exceptions\FacebookSDKException $e) {
            // When the SDK fails
            return response()->json(['error' => 'Facebook SDK error: ' . $e->getMessage()], 400);
        }
    }

    public function postImageToFacebookUsingGuzzleHttp(Request $request)
    {
        $facebookappId          = Config::get('facebook.app_id');
        $facebookappSecret      = Config::get('facebook.app_secret');
        $facebookAccessToken    = Config::get('facebook.access_token');
        $facebookPageId         = 'your-page-id'; // Replace with your Facebook Page ID

        $facebookCredentials    = array(
                                    'app_id'                    => $facebookappId,
                                    'app_secret'                => $facebookappSecret,
                                    'default_graph_version'     => 'v15.0',
                                );

        try {
            // Prepare the data for posting the image
            $postData           = array(
                                    //'source'    => $fb->fileToUpload(storage_path('app/' . $imagePath)), // Path to the image file
                                    'message'   => 'Your caption here', // Optional caption
                                );

            $facebookUrl        = 'https://graph.facebook.com/v15.0/SaswatRoutroy/page';  // Use your page id if posting to a page, not 'me' for user feed

            // Initialize Guzzle client
            $guzzleClient       = new Client();
            $guzzleParams       = array(
                                    'query'       => array('access_token' => $facebookAccessToken),
                                    'form_params' => $postData
                                );

            $response           = $guzzleClient->post($facebookUrl, $guzzleParams);

            // Decode the response
            $responseData = json_decode($response->getBody()->getContents(), true);
            print_r($response);

            if (isset($responseData['id'])) {
                // Post was successful
                return response()->json([
                    'status' => 'success',
                    'message' => 'Post created successfully!',
                    'data' => $responseData
                ]);
            } else {
                // Handle error response from Facebook
                return response()->json([
                    'status' => 'error',
                    'message' => 'Failed to post content',
                    'error' => $responseData
                ]);
            }

            
        } catch (\Facebook\Exceptions\FacebookResponseException $e) {
            // When Facebook API returns an error
            return response()->json(['error' => 'Facebook API error: ' . $e->getMessage()], 400);
        } catch (\Facebook\Exceptions\FacebookSDKException $e) {
            // When the SDK fails
            return response()->json(['error' => 'Facebook SDK error: ' . $e->getMessage()], 400);
        }
    }

        public function pageAccessToken(Request $request)
    {
        $facebookappId          = Config::get('facebook.app_id');
        $facebookappSecret      = Config::get('facebook.app_secret');
        $facebookAuthUrl        = Config::get('facebook.auth_uri');
        $facebookAccessTokenUrl = Config::get('facebook.access_token_uri');
        $facebookRedirectUrl    = Config::get('facebook.redirect_uri');
        //$facebookPageId         = 'your-page-id'; // Replace with your Facebook Page ID

        $facebookAccessToken    = 'EAATu93LlcfUBO8BpDMllX6oTSgzkYbsBXEk1ZAqYrSIHruXHyv92RMi2u7MSSKO91J1KL3tftMFT8HMuZAxZBsNXPrfyzwrfvTT582F5bLNgFZBCf6SzI6SmuZAdimMZCYkZATowj845aMHQAH8mmCGFDd7p4wFV06PfTtEOuz9PhrDOfY6eFpLzldwvmmgKkJUU71nzImZAJevofl10qyWE7MrwiTI8ZBcjVDXoZD';

        $queryData          = array('access_token' => $facebookAccessToken);
        /*$postData               = array(
                                        'client_id'         => $facebookappId,
                                        'client_secret'     => $facebookappSecret,
                                        'redirect_uri'      => $facebookRedirectUrl,                                        
                                        'code'              => $code
                                    );*/
        //$guzzleParams           = array('form_params' => $postData);

        $postData           = array(
                                            //'source'    => $fb->fileToUpload(storage_path('app/' . $imagePath)), // Path to the image file
                                            'message'   => 'Your caption here', // Optional caption
                                        );
        $guzzleParams       = array(
                                            'query'       => $queryData,
                                            'form_params' => $postData
                                        );

        

        // Use Guzzle to make a request to exchange the code for an access token
        $guzzleClient           = new Client();
        $response               = $guzzleClient->get('https://graph.facebook.com/v22.0/102665917811113?fields=access_token', $guzzleParams);

        $data                   = json_decode($response->getBody(), true);

        print_r($data); die();
        $accessToken            = $data['access_token'];

        // Store access token in session
        Session::put('facebook_access_token', $accessToken);

        // Redirect back to post
        //return redirect()->route('facebook.post');
    }

    public function login()
    {
        $facebookappId          = Config::get('facebook.app_id');
        $facebookappSecret      = Config::get('facebook.app_secret');
        $facebookAuthUrl        = Config::get('facebook.auth_uri');
        $facebookRedirectUrl    = Config::get('facebook.redirect_uri');
        $buildQuery             = array(
                                    'client_id'         => $facebookappId,
                                    'redirect_uri'      => $facebookRedirectUrl,
                                    'scope'             => 'email,public_profile,user_posts', // Add other permissions if needed
                                    'response_type'     => 'code'
                                );
        $client                 = new Client();
        $facebookLoginurl       = $facebookAuthUrl . '?' . http_build_query($buildQuery);
        return redirect()->to($facebookLoginurl);
    }

    public function loginRedirectCallback(Request $request)
    {
        $facebookappId          = Config::get('facebook.app_id');
        $facebookappSecret      = Config::get('facebook.app_secret');
        $facebookAuthUrl        = Config::get('facebook.auth_uri');
        $facebookAccessTokenUrl = Config::get('facebook.access_token_uri');
        $facebookRedirectUrl    = Config::get('facebook.redirect_uri');
        $code                   = $request->input('code');
        if (!$code) {
            return redirect()->route('facebook.view')->with('error', 'Authorization failed.');
        } else {
            $getFacebookAppAccessToken = FacebookHelper::fetchAppAccessToken($code);
            if($getFacebookAppAccessToken) {
                return redirect()->route('facebook.post');
            } else {

            }
            // Redirect back to post
            return redirect()->route('facebook.post');
        }        
    }

    public function post(Request $request)
    {  
        try
        {
            Session::put('facebook_action', Globals::ACTION_IMAGE_POST);
            $appbookAccessToken    = 'EAATu93LlcfUBO7P37cYLKG9WUTnWQaJ24bmRsKVE1XXOL8h0UGgoVdmR1Jlk4HwVgqjiXPZAsnlLzvBcocPWb6DHzZAeYKJwc04QDTFjUlBIyYWliUN46bcx7H581yJBefSF33t1kimohWkJfiTnZAldngXJIzEpBIhbjaYrxe4yCCDOzIzlGmOPw6XO7CNKIlvILfDl7Tr9e8JFgZDZD'; //Session::get('facebook_app_access_token');

            if ($appbookAccessToken) {
                // If access token exists, make a post request to Facebook
                //$userDetail  = FacebookHelper::userDetail();
                $postDetail  = FacebookHelper::post();
                die();                
            } else {
                return redirect()->route('facebook.login');
            }
            return view('view');
        }
        catch(\Exception $e)             // catch block of the try-catch exception
        {
            $error_message    = $e->getMessage();                       // get error message
            $error_code       = $e->getCode();                          // get error code
            $error_location   = 'Line No. ' . $e->getLine() . ' in file ' . $e->getFile();    // get error line number and file
            $error            = 'Error Code:- ' . $error_code . '| Error Message:- '. $error_message . '| Error Location:- ' . $error_location; //die;
            if(Globals::SHOW_EXCEPTION == 0){
                $error        = Globals::DEFAULT_EXCEPTION_MESSAGE; //die;
            }
            echo $error;
        }      
    }

    
    public function view(Request $request)
    {  
        try
        {
            return view('view');            
        }
        catch(\Exception $e)             // catch block of the try-catch exception
        {
            $error_message    = $e->getMessage();                       // get error message
            $error_code       = $e->getCode();                          // get error code
            $error_location   = 'Line No. ' . $e->getLine() . ' in file ' . $e->getFile();    // get error line number and file
            $error            = 'Error Code:- ' . $error_code . '| Error Message:- '. $error_message . '| Error Location:- ' . $error_location; //die;
            if(Globals::SHOW_EXCEPTION == 0){
                $error        = Globals::DEFAULT_EXCEPTION_MESSAGE; //die;
            }
            echo $error;
            //https://tijana-sokovic.medium.com/post-on-facebook-page-with-graph-api-and-laravel-d31a8dd6e5c3
            //'https://graph.facebook.com/v22.0/102665917811113'
            //https://github.com/Nazmul7989/laravel-facebook-post
            //https://dev.to/johnmaths9/how-to-implement-login-with-facebook-in-laravel-2m5p
        }      
    }

    public function clearSessions(Request $request) {
        Session::flush();
    }
}
