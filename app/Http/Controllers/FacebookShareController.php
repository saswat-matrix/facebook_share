<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Facebook\Facebook;

class FacebookShareController extends Controller
{

    public function postImage(Request $request)
    {
        // Validate the image input
        $validated = $request->validate([
            'image' => 'required|image|mimes:jpg,png,jpeg,gif|max:10240',
        ]);

        // Store the image locally
        $imagePath = $request->file('image')->store('images');

        // Get the Facebook App credentials from the .env file
        $appId = env('FACEBOOK_APP_ID');
        $appSecret = env('FACEBOOK_APP_SECRET');
        $pageAccessToken = env('FACEBOOK_PAGE_ACCESS_TOKEN');
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

    
    public function view(Request $request)
    {  
        try
        {
            return view('view');

            //https://tijana-sokovic.medium.com/post-on-facebook-page-with-graph-api-and-laravel-d31a8dd6e5c3
        }
        catch(\Exception $e)             // catch block of the try-catch exception
        {
            $error_message    = $e->getMessage();                       // get error message
            $error_code       = $e->getCode();                          // get error code
            $error_location   = 'Line No. ' . $e->getLine() . ' in file ' . $e->getFile();    // get error line number and file
            $error            = 'Error Code:- ' . $error_code . '| Error Message:- '. $error_message . '| Error Location:- ' . $error_location; //die;
            /*try
            {
                $miscObj          = New Misc;
                $errorSaved       = $miscObj->saveExceptionReport($error);
            }
            catch(\Exception $exp)             // catch block of the try-catch exception
            {
                $error            .= '| Error Code:- ' . $exp->getCode() . '| Error Message:- '. $exp->getMessage() . '| Error Location:- ' . 'Line No. ' . $exp->getLine() . ' in file ' . $exp->getFile(); //die;
            }*/
            if(Globals::SHOW_EXCEPTION == 0){
                $error        = Globals::DEFAULT_EXCEPTION_MESSAGE; //die;
            }
            echo $error;
            $back = route('admin.dashboard');
            return Redirect::Route('error.exception')->with(array('error' => $error, 'back'  => $back));     // redirect with exception messages
        }      
    }
}
