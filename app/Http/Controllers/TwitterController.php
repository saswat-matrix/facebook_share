<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;

class TwitterController extends Controller
{
    // Redirect user to Twitter for login (OAuth request token)
    public function authorization() {
        
        $oathToken          = Session::get('twitter_app_oauth_token');
        $oathTokenSecret    = Session::put('twitter_app_oauth_token_secret');
        if((!isset($oathToken) || empty($oathToken)) && (!isset($oathTokenSecret) || empty($oathTokenSecret))) {
            $getTwitterAppOathToken = TwitterHelper::fetchAppOathToken();
            if(isset($getTwitterAppOathToken) && !empty($getTwitterAppOathToken)) {
                $oathToken              = Session::get('twitter_app_oauth_token');
                $oathTokenSecret        = Session::get('twitter_app_oauth_token_secret');
                return redirect($authUrl . '?oauth_token=' . $oathToken);
            }
            
        } else {
            // Redirect user to Twitter for authentication
            return redirect($authUrl . '?oauth_token=' . $oathToken);
        }
    }

    // Handle the callback from Twitter (OAuth token exchange)
    public function redirection(Request $request)
    {
        // Get the oauth_token and oauth_verifier from the callback
        $oauthToken         = $request->query('oauth_token');
        $oauthVerifier      = $request->query('oauth_verifier');

        $getTwitterAppAccessToken = TwitterHelper::fetchAppAccessToken($oauthToken, $oauthVerifier);
        if(isset($getTwitterAppAccessToken) && !empty($getTwitterAppAccessToken)) {
            return redirect()->route('tweet.image.form');
        }
        // Redirect user to the tweet form
        
    }

    // Post a tweet with an image
    public function tweetWithImage(Request $request)
    {
        // Validate the request
        $request->validate([
            'tweet' => 'required|string|max:280',
            'image' => 'required|image|max:4096', // Max 4MB
        ]);

        // Retrieve the user's access tokens from session
        $accessToken = Session::get('access_token');
        if (!$accessToken) {
            return redirect()->route('twitter.login')->withErrors('You need to login first!');
        }

        // Prepare for media upload
        $uploadUrl = 'https://upload.twitter.com/1.1/media/upload.json';
        $client = new Client();

        // Upload image
        $imagePath = $request->file('image')->getRealPath();
        $uploadResponse = $client->post($uploadUrl, [
            'headers' => [
                'Authorization' => $this->buildOAuthHeader([
                    'oauth_token' => $accessToken['oauth_token'],
                    'oauth_token_secret' => $accessToken['oauth_token_secret']
                ])
            ],
            'multipart' => [
                [
                    'name' => 'media',
                    'contents' => fopen($imagePath, 'r'),
                    'filename' => $request->file('image')->getClientOriginalName()
                ]
            ]
        ]);

        // Parse the media response and extract the media_id
        $media = json_decode($uploadResponse->getBody()->getContents(), true);
        $mediaId = $media['media_id_string'];

        // Step 3: Post the tweet with the uploaded media
        $tweetUrl = 'https://api.twitter.com/1.1/statuses/update.json';
        $params = [
            'status' => $request->input('tweet'),
            'media_ids' => $mediaId,
        ];

        // Send the tweet request
        $tweetResponse = $client->post($tweetUrl, [
            'headers' => [
                'Authorization' => $this->buildOAuthHeader([
                    'oauth_token' => $accessToken['oauth_token'],
                    'oauth_token_secret' => $accessToken['oauth_token_secret']
                ])
            ],
            'form_params' => $params,
        ]);

        // Return the response
        return response()->json(['message' => 'Tweet posted!', 'tweet' => json_decode($tweetResponse->getBody()->getContents(), true)]);
    }

    
}