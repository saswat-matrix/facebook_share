<?php

namespace App\Models;

/*use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Auth\User as Authenticatable; // added for mongoDB
//use Illuminate\Foundation\Auth\User as Authenticatable; // blocked which was for mysql
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;   Previous One*/

use Illuminate\Auth\Authenticatable;
use Jenssegers\Mongodb\Eloquent\Model as Model;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Maklad\Permission\Traits\HasRoles;

use MongoDB\BSON\ObjectId;

use Crypt, Globals;

use App\Models\Parentt;

use Maklad\Permission\Models\Role;
use Maklad\Permission\Models\Permission;

//class User extends Authenticatable  // Previous One
class User extends Model implements AuthenticatableContract, AuthorizableContract
{
    //use HasApiTokens, HasFactory, Notifiable; //previous one
    use Authenticatable, Authorizable, HasRoles;

    protected $connection = 'mongodb';  // used for mongoDB
    /*protected $dates      = array(
                                    'created_at', 'updated_at', 'deleted_at',
                                    'created_date', 'modified_date',
                                    'email_verified_at', 'mobile_verified_at', 
                                    'approved_by_admin_at', 'last_login', 'dob'
                                );*/
    protected $casts      = array(
                                    'created_at'           => 'datetime', 
                                    'updated_at'           => 'datetime', 
                                    'deleted_at'           => 'datetime',
                                    'created_date'         => 'datetime', 
                                    'modified_date'        => 'datetime',
                                    'email_verified_at'    => 'datetime', 
                                    'mobile_verified_at'   => 'datetime', 
                                    'approved_by_admin_at' => 'datetime', 
                                    'last_login'           => 'datetime', 
                                    'dob'                  => 'datetime'
                                );
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'fname',
        'email',
        'password',
        'language',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        //'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    /*protected $casts = [
        'email_verified_at' => 'datetime',
    ];*/

    /****************************************************/
    # Function to get Id attribute
    # (Need this for hasMany relationship in MongoDB)
    # Need to use _id instead of id after having this
    # Function name    : getIdAttribute        
    # Created Date     : 04-07-2023            
    # Purpose          : Create hashed password      
    /***************************************************
    public function getIdAttribute($value = null) {
        return $value;
    }*/

    /****************************************************/
    # Function to create hashed password
    # Function name    : setPasswordAttribute        
    # Created Date     : 26-06-2023            
    # Purpose          : Create hashed password      
    /****************************************************/
    public function setPasswordAttribute($password) {
        if(isset($password)) {
            $this->attributes['password'] = bcrypt($password);
        }
    }

    /****************************************************/
    # Function to set remember token
    # Function name    : setRememberToken        
    # Created Date     : 28-07-2023            
    # Purpose          : Set Remember Token      
    /****************************************************/
    public function setRememberToken($token) {
        // Set the remember token your own way...
        $this->remember_token = Crypt::encryptString(json_encode(array('email' => $this->email, 'guid' => $this->guid)));
    }

    /****************************************************/
    # Function for user and country relationship
    # Function name    : userCountry        
    # Created Date     : 28-07-2023            
    # Purpose          : User and country relationship      
    /****************************************************/
    public function userCountry() {
        return $this->hasOne('App\Models\Country', 'country_code_iso2', 'country_code_iso2');
    }

    /****************************************************/
    # Function for user and country relationship
    # Function name    : userCountry        
    # Created Date     : 28-07-2023            
    # Purpose          : User and country relationship      
    /****************************************************/
    public function userParents() {
        return $this->hasOne('App\Models\Parentt', 'user_id', '_id');
    }

    /****************************************************/
    # Function to fetch parent detail of an user
    # Function name    : userParent
    # Created Date     : 28-07-2023
    # Purpose          : Fetch parent detail of an user
    /****************************************************/
    public function userParent($userId){
        $parentQuery = Parentt::where('user_id', new ObjectId($userId));
        if($parentQuery->count() > Globals::ROW_COUNT_ZERO) {
            return Parentt::where('user_id', new ObjectId($userId))->first()->toArray();
        } else {
            return false;
        }        
    }

    /****************************************************/
    # Function to get user roles of an user
    # Function name    : getUserRolesFromRoleIdArray
    # Created Date     : 28-07-2023
    # Purpose          : Get user roles of an user
    /****************************************************/
    public function getUserRolesFromRoleIdArray($userId) {
        $roleArray    = array();
        $userQuery    = User::where('_id', new ObjectId((string)$userId));
        if($userQuery->count() > Globals::ROW_COUNT_ZERO) {
            $userDetail         = $userQuery->first()->toArray();
            if(isset($userDetail['role_ids']) && !empty($userDetail['role_ids'])) {
                $roleIdArray    = $userDetail['role_ids'];
                if(isset($roleIdArray) && !empty($roleIdArray)) {
                    foreach($roleIdArray as $keyRoleId => $rowRoleId) {
                        $roleIdArray[$keyRoleId] = new ObjectId($rowRoleId);
                    }
                    $roleInfoQuery  = Role::whereIn('_id', $roleIdArray);
                    if($roleInfoQuery->count() > Globals::ROW_COUNT_ZERO) {
                        $roleList   = $roleInfoQuery->get()->toArray();
                        foreach($roleList as $keyRole => $rowRole) {
                            $roleData['name']               = $rowRole['name'];
                            $roleData['name_translation']   = (isset($rowRole['name_translation']) && !empty($rowRole['name_translation'])) ? $rowRole['name_translation'] : NULL;
                            $roleArray[]       = $roleData;
                        }
                    }
                }                
            }
        }            
        return $roleArray;
    }
}
