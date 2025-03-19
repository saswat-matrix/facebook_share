<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FacebookShareController extends Controller
{
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
