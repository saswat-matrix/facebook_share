<?php
namespace App\Helpers;

use RecursiveDirectoryIterator, RecursiveIteratorIterator;

use Facebook\Facebook;

class FacebookHelper {

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
