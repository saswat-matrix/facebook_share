<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

use Config, Globals, Session;

use App\Helpers\LinkedInHelper;

class LinkedInController extends Controller
{
    public function index(Request $request)
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

    public function authorization()
    {
        $linkedIdClientId       = Config::get('linkedin.client_id');
        $linkedIdClientSecret   = Config::get('linkedin.client_secret');
        $linkedIdAuthUrl        = Config::get('linkedin.auth_uri');
        $linkedIdRedirectUrl    = Config::get('linkedin.redirect_uri');
        $buildQuery             = array(
                                    'client_id'         => $linkedIdClientId,
                                    'redirect_uri'      => $linkedIdRedirectUrl,
                                    'scope'             => 'w_member_social', //'w_member_social+w_organization_social+rw_organization_admin', // Add other permissions if needed
                                    //openid%20profile%20email
                                    'response_type'     => 'code'
                                );
        $client                 = new Client();
        $linkedInLoginurl       = $linkedIdAuthUrl . '?' . http_build_query($buildQuery);
        return redirect()->to($linkedInLoginurl);
    }

    public function redirection(Request $request)
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
            $getLinkedInAppAccessToken = LinkedInHelper::fetchAppAccessToken($code);
            if($getLinkedInAppAccessToken) {
                return redirect()->route('linked-in.post');
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
            $appAccessToken  = Session::get('linkedin_app_access_token');

            if ($appAccessToken) {
                // If access token exists, make a post request to Facebook
                //$userDetail  = FacebookHelper::userDetail();
                $postDetail  = LinkedInHelper::fetchOrganizationUrn();
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




            // https://stackoverflow.com/questions/61257840/how-to-post-on-linkedin-company-page-via-linkedin-api-v2-in-php
            // https://jcergolj.me.uk/blog/publish-linkedin-post-with-video/
            // https://medium.com/@codesolutionstuff/laravel-9-socialite-login-with-linkedin-tutorial-example-c3aea2de1e0a
            // https://www.elegantlaravel.com/article/linkedin-oauth-authentication-in-laravel-without-socialite
            // https://stackoverflow.com/questions/56131827/linkedin-api-organizationalentityacls-returns-messagenot-enough-permissio
        }      
    }

    public function clearSessions(Request $request) {
        Session::flush();
    }
}
