<?php

namespace App\Http\Traits;

use Auth, Cookie, Crypt;

trait RememberMeTrait
{
    /****************************************************/
    # Purpose          : Seting Up Epiration       
    /****************************************************/
    protected $minutesExpiration = 1; //30 days = 43200 minutes; 1 day = 1440 minutes

    /***********************************************************/
    # Customize the user logged remember me expiration 
    # 
    # @param  \Illuminate\Contracts\Auth\Authenticatable  $user
    /***********************************************************/
    public function setRememberMeExpiration($user) 
    {
        $rememberMeSessionName  = $this->getRememberMeSessionName($user);
        $rememberMeValue        = $this->setRememberMeValue($user); 
        //echo "$rememberMeSessionName | $rememberMeValue"; 
        //echo " - " . Crypt::decryptString($rememberMeSessionName);
        //echo " - " . Crypt::decryptString($rememberMeValue); die();
        Cookie::queue($rememberMeSessionName, $rememberMeValue, $this->minutesExpiration);
    }

    /***********************************************************/
    # Generate remember me value
    #
    # @return string
    /***********************************************************/
    protected function setRememberMeValue($user) 
    {
        $tokenString = $user['_id'] . "|" . $user['email'];
        return Crypt::encryptString($tokenString);
        //return $user->id . "|" . $user->remember_token . "|" . $user->password;
    }

    /***********************************************************/
    # Get remember me session name
    #
    # @return string
    /***********************************************************/
    protected function getRememberMeSessionName($user) 
    {
    	//$cookieName = $user['_id'] . "|" . $user['guid'];
    	//return $cookieName; Crypt::encryptString($cookieName);
        return Auth::getRecallerName('admin');
    }
}