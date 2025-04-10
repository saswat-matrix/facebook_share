<?php
namespace App\Classes;

use App;

class Globals
{
   # Class name: Globals (After the namespace declaration using keyword "Use") #
      public const FACEBOOK_APP_ID           = '1388646458814965';
      public const FACEBOOK_APP_SECRET       = '909cdd1f209d4679d772f3937f7bc7d2';
      public const FACEBOOK_AUTH_URI         = 'https://www.facebook.com/v22.0/dialog/oauth';
      public const FACEBOOK_ACCESS_TOKEN_URI = 'https://graph.facebook.com/v22.0/oauth/access_token';
      public const FACEBOOK_REDIRECT_URI     = 'http://localhost/facebook_share/callback';


      public const LINKEDIN_CLIENT_ID        = '78qil7arvbki45';
      public const LINKEDIN_CLIENT_SECRET    = 'WPL_AP1.svHyXXeuegKBjV7g.fmcG/g==';
      public const LINKEDIN_AUTH_URI         = 'https://www.linkedin.com/oauth/v2/authorization';
      public const LINKEDIN_ACCESS_TOKEN_URI = 'https://www.linkedin.com/oauth/v2/accessToken';
      public const LINKEDIN_REDIRECT_URL     = 'http://localhost/facebook_share/callback';
      public const LINKEDIN_ORGANIZATION_URN_URL     = 'https://api.linkedin.com/v2/organizationAcls';
      public const LINKEDIN_ORGANIZATION_POST_URL    = 'https://api.linkedin.com/v2/ugcPosts';


      public const ACTION_IMAGE_POST         = 'ip';

      public const SHOW_EXCEPTION            = 1;
}