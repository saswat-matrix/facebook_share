<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use MongoDB\BSON\ObjectId;

use Maklad\Permission\Models\Role;
use Maklad\Permission\Models\Permission;

use App, Config, Hash, Globals, StichozaGoogleTranslate;

use App\Helpers\MiscHelper;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Seeding Superadmin Data Starts //
        $languageArray      = MiscHelper::getLanguageFolders();
        if(\App\Models\User::count() === Globals::ROW_COUNT_ZERO) {
            $firstSegment   = MiscHelper::randomCode(Globals::RANDOM_CODE_TYPE_BIG_CAR_ALPHABET, 4);
            $secondSegment  = MiscHelper::randomCode(Globals::RANDOM_CODE_TYPE_BIG_CAR_ALPHABET, 4);
            $thirdSegment   = MiscHelper::randomCode(Globals::RANDOM_CODE_TYPE_BIG_CAR_ALPHABET, 4);
            $fourthSegment  = MiscHelper::randomCode(Globals::RANDOM_CODE_TYPE_BIG_CAR_ALPHABET, 4);
            $guid           = $firstSegment . '-' . $secondSegment . '-' . $thirdSegment . '-' . $fourthSegment;
            $nowTime        = date(Globals::DATETIME_Y_M_D_H_I_S);

            /*$superAdminUser = array(
                             'fname'                    => 'LPP',
                             'lname'                    => 'SuperAdmin',
                             'phone_code'               => '971',
                             'country_code_iso2'        => 'AE',
                             'country_code_iso3'        => 'UAE',
                             'mobile'                   => '',
                             'email'                    => 'lpp@mailinator.com',
                             'username'                 => 'lpp',
                             'image'                    => NULL,
                             'password'                 => 'ar-RFtA>8d+X28uG', 
                             'timezone'                 => NULL,
                             'city'                     => NULL,
                             'address'                  => NULL,
                             'postal_code'              => NULL,
                             'dob'                      => NULL,
                             'language'                 => NULL,
                             'email_activation_code'    => NULL,
                             'password_reset_code'      => NULL,
                             'type'                     => Globals::SUPERADMIN_USER, 
                             'parent_type'              => NULL, 
                             'registration_type'        => Globals::REG_NORMAL,
                             'role_ids'                 => array(),
                             'status'                   => Globals::SMALL_CHAR_ACTIVE, 
                             'is_login'                 => Globals::SMALL_CHAR_NO, 
                             'email_verified'           => Globals::SMALL_CHAR_YES,
                             'mobile_verified'          => Globals::SMALL_CHAR_NO,
                             'is_ban'                   => Globals::SMALL_CHAR_NO,
                             'approved_by_admin'        => Globals::SMALL_CHAR_NO,
                             'approver_admin'           => NULL,
                             'created_by'               => NULL,
                             'remember_token'           => Str::random(10), 
                             'guid'                     => $guid, 
                             'device_type'              => Globals::DEVICE_WEB, 
                             'device_id'                => NULL,
                             'last_login'               => NULL,
                             'created_date'             => $nowTime, 
                             'modified_date'            => $nowTime, 
                             'email_verified_at'        => NULL,
                             'mobile_verified_at'       => NULL,
                             'approved_by_admin_at'     => NULL,
                             //'created_at'               => , 
                             //'updated_at'               => , 
                             'deleted_at'               => NULL,
                        );
            \App\Models\User::create($superAdminUser);*/

            
            $data = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_USER . '.json')), true);
            if(isset($data) && !empty($data)) {
                foreach($data as $key => $row) {
                    $entityData = array();
                    if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                        $entityData['_id']         = new ObjectId($row['_id']['$oid']);
                    }
                    $entityData['fname']                    = $row['fname'];
                    $entityData['lname']                    = $row['lname'];
                    $entityData['phone_code']               = $row['phone_code'];
                    $entityData['country_code_iso2']        = $row['country_code_iso2'];
                    $entityData['country_code_iso3']        = $row['country_code_iso3'];
                    $entityData['mobile']                   = $row['mobile'];
                    $entityData['email']                    = $row['email'];
                    $entityData['username']                 = $row['username'];
                    $entityData['image']                    = NULL;
                    $entityData['password']                 = 'ar-RFtA>8d+X28uG';
                    $entityData['timezone']                 = (isset($row['timezone']) && !empty($row['timezone'])) ? $row['timezone'] : NULL;
                    $entityData['city']                     = (isset($row['city']) && !empty($row['city'])) ? $row['city'] : NULL;
                    $entityData['address']                  = (isset($row['address']) && !empty($row['address'])) ? $row['address'] : NULL;
                    $entityData['postal_code']              = (isset($row['postal_code']) && !empty($row['postal_code'])) ? $row['postal_code'] : NULL;
                    $entityData['dob']                      = (isset($row['dob']) && !empty($row['dob'])) ? $row['dob'] : NULL;
                    $entityData['language']                 = (isset($row['language']) && !empty($row['language'])) ? $row['language'] : NULL;
                    $entityData['email_activation_code']    = (isset($row['email_activation_code']) && !empty($row['email_activation_code'])) ? $row['email_activation_code'] : NULL;
                    $entityData['password_reset_code']      = (isset($row['password_reset_code']) && !empty($row['password_reset_code'])) ? $row['password_reset_code'] : NULL;
                    $entityData['type']                     = $row['type']; 
                    $entityData['parent_type']              = $row['parent_type'];
                    $entityData['registration_type']        = $row['registration_type'];
                    $entityData['platform_admin']           = (isset($row['platform_admin']) && !empty($row['platform_admin'])) 
                                                                      ? $row['platform_admin'] 
                                                                      : ((isset($row['type']) && !empty($row['type']) && $row['type'] === Globals::SUPERADMIN_USER)
                                                                          ? Globals::SMALL_CHAR_YES 
                                                                          : Globals::SMALL_CHAR_NO);
                    $entityData['role_ids']                 = (isset($row['role_ids']) && !empty($row['role_ids'])) ? $row['role_ids'] : array();
                    $entityData['status']                   = $row['status']; 
                    $entityData['is_login']                 = $row['is_login']; 
                    $entityData['email_verified']           = $row['email_verified'];
                    $entityData['mobile_verified']          = $row['mobile_verified'];
                    $entityData['is_ban']                   = $row['is_ban'];
                    $entityData['approved_by_admin']        = $row['approved_by_admin'];
                    if(isset($row['approver_admin']) && !empty($row['approver_admin']) && isset($row['approver_admin']['$oid']) && !empty($row['approver_admin']['$oid'])) {
                        $entityData['approver_admin']       = new ObjectId($row['approver_admin']['$oid']);
                    } else {
                        $entityData['approver_admin']       = NULL;
                    }
                    if(isset($row['created_by']) && !empty($row['created_by']) && isset($row['created_by']['$oid']) && !empty($row['created_by']['$oid'])) {
                        $entityData['created_by']           = new ObjectId($row['created_by']['$oid']);
                    } else {
                        $entityData['created_by']           = NULL;
                    }                    
                    $entityData['remember_token']           = $row['remember_token']; 
                    $entityData['guid']                     = $row['guid']; 
                    $entityData['device_type']              = $row['device_type']; 
                    $entityData['device_id']                = (isset($row['device_id']) && !empty($row['device_id'])) ? $row['device_id'] : NULL;
                    if(isset($row['last_login']) && !empty($row['last_login']) && isset($row['last_login']['$date']) && !empty($row['last_login']['$date'])) {
                        $entityData['last_login']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['last_login']['$date']));
                    } else {
                        $entityData['last_login']   = NULL;
                    }
                    if(isset($row['created_date']) && !empty($row['created_date']) && isset($row['created_date']['$date']) && !empty($row['created_date']['$date'])) {
                        $entityData['created_date']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_date']['$date']));
                    } else {
                        $entityData['created_date']   = NULL;
                    }
                    if(isset($row['modified_date']) && !empty($row['modified_date']) && isset($row['modified_date']['$date']) && !empty($row['modified_date']['$date'])) {
                        $entityData['modified_date']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['modified_date']['$date']));
                    } else {
                        $entityData['modified_date']   = NULL;
                    }

                    if(isset($row['email_verified_at']) && !empty($row['email_verified_at']) && isset($row['email_verified_at']['$date']) && !empty($row['email_verified_at']['$date'])) {
                        $entityData['email_verified_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['email_verified_at']['$date']));
                    } else {
                        $entityData['email_verified_at']   = NULL;
                    }
                    if(isset($row['mobile_verified_at']) && !empty($row['mobile_verified_at']) && isset($row['mobile_verified_at']['$date']) && !empty($row['mobile_verified_at']['$date'])) {
                        $entityData['mobile_verified_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['mobile_verified_at']['$date']));
                    } else {
                        $entityData['mobile_verified_at']   = NULL;
                    }
                    if(isset($row['approved_by_admin_at']) && !empty($row['approved_by_admin_at']) && isset($row['approved_by_admin_at']['$date']) && !empty($row['approved_by_admin_at']['$date'])) {
                        $entityData['approved_by_admin_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['approved_by_admin_at']['$date']));
                    } else {
                        $entityData['approved_by_admin_at']   = NULL;
                    }
                    if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                        $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                    } else {
                        $entityData['deleted_at']   = NULL;
                    }
                    if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                        $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                    } else {
                        $entityData['updated_at']   = NULL;
                    }
                    if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                        $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                    } else {
                        $entityData['created_at']   = NULL;
                    }

                    $lastUser   = \App\Models\User::create($entityData);
                }
            }
        }
        // Seeding Superadmin Data Ends //

        // Seeding Modules Data Starts //
        /*
        if(\App\Models\Module::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_MODULE . '.json')), true);
            if(isset($seedData) && !empty($seedData)) {
                foreach($seedData as $key => $row) {
                    $entityData              = array();
                    if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                        $moduleData['_id']         = new ObjectId($row['_id']['$oid']);
                    }
                    $entityData['title']           = $row['title'];
                    $entityData['display_title']   = $row['display_title'];
                    $entityData['type']            = $row['type'];
                    $entityData['status']          = $row['status'];
                    if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                        $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                    } else {
                        $entityData['deleted_at']   = NULL;
                    }
                    if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                        $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                    } else {
                        $entityData['updated_at']   = NULL;
                    }
                    if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                        $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                    } else {
                        $entityData['created_at']   = NULL;
                    }
                    $lastEntity            = \App\Models\Module::create($entityData);
                    if(isset($languageArray) && !empty($languageArray)) {
                        $lastEntityId           = $lastEntity->_id;
                        foreach($languageArray as $keyLang => $rowLang) {
                            $languageData       = array();
                            if($rowLang === 'en') {
                                $languageData['display_title']  = $row['display_title'];
                            } else if($rowLang === 'fr') {
                                $languageData['display_title']  = $row['display_title_fr'];
                            }
                            $languageData['language']           = $rowLang;
                            $languageData['action_id']          = new ObjectId($lastEntityId);
                            \App\Models\ModuleTranslation::create($languageData);
                        }                        
                    }
                }
            }
        }
        */
        $moduleSeedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_MODULE . '.json')), true);
        $moduleQuery    = new \App\Models\Module;
        if($moduleQuery::count() === Globals::ROW_COUNT_ZERO) {
            // if no record in the db at all,
            if(isset($moduleSeedData) && !empty($moduleSeedData)) {
                foreach($moduleSeedData as $key => $row) {
                    $entityData              = array();
                    if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                        $entityData['_id']         = new ObjectId($row['_id']['$oid']);
                    }
                    $entityData['title']           = $row['title'];
                    $entityData['display_title']   = $row['display_title'];
                    $entityData['type']            = $row['type'];
                    $entityData['status']          = $row['status'];
                    if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                        $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                    } else {
                        $entityData['deleted_at']   = NULL;
                    }
                    if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                        $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                    } else {
                        $entityData['updated_at']   = NULL;
                    }
                    if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                        $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                    } else {
                        $entityData['created_at']   = NULL;
                    }
                    $lastEntity            = \App\Models\Module::create($entityData);
                    if(isset($languageArray) && !empty($languageArray)) {
                        $lastEntityId           = $lastEntity->_id;
                        foreach($languageArray as $keyLang => $rowLang) {
                            $languageData       = array();
                            if($rowLang === 'en') {
                                $languageData['display_title']  = $row['display_title'];
                            } else if($rowLang === 'fr') {
                                $languageData['display_title']  = $row['display_title_fr'];
                            }
                            $languageData['language']           = $rowLang;
                            $languageData['module_id']          = new ObjectId($lastEntityId);
                            \App\Models\ModuleTranslation::create($languageData);
                        }                        
                    }
                }
            }
        } else {
            // if record in the db is present, proceed to feed those data which aren't in the db
            if(isset($moduleSeedData) && !empty($moduleSeedData)) {
                // get ids from the db
                $moduleIdArray = array();
                $moduleListing = $moduleQuery->get()->toArray();
                foreach($moduleListing as $moduleKey => $moduleRow) {
                    $moduleIdArray[]  = (string)$moduleRow['_id'];
                }
                //print_r($moduleIdArray);
                foreach($moduleSeedData as $key => $row) {
                    // iterate through each seed data
                    if(isset($row['_id']) && !empty($row['_id']) 
                        && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])
                        && !in_array($row['_id']['$oid'], $moduleIdArray)) {
                        // if the seed id is not present in the array of id from db, feed it
                        $entityData              = array();
                        if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                            $entityData['_id']         = new ObjectId($row['_id']['$oid']);
                        }
                        $entityData['title']           = $row['title'];
                        $entityData['display_title']   = $row['display_title'];
                        $entityData['type']            = $row['type'];
                        $entityData['status']          = $row['status'];
                        if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                            $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                        } else {
                            $entityData['deleted_at']   = NULL;
                        }
                        if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                            $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                        } else {
                            $entityData['updated_at']   = NULL;
                        }
                        if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                            $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                        } else {
                            $entityData['created_at']   = NULL;
                        }
                        //print_r($entityData);
                        $lastEntity            = \App\Models\Module::create($entityData);
                        if(isset($languageArray) && !empty($languageArray)) {
                            $lastEntityId           = $lastEntity->_id;
                            foreach($languageArray as $keyLang => $rowLang) {
                                $languageData       = array();
                                if($rowLang === 'en') {
                                    $languageData['display_title']  = $row['display_title'];
                                } else if($rowLang === 'fr') {
                                    $languageData['display_title']  = $row['display_title_fr'];
                                }
                                $languageData['language']           = $rowLang;
                                $languageData['module_id']          = new ObjectId($lastEntityId);
                                \App\Models\ModuleTranslation::create($languageData);
                            }                        
                        }
                    }
                }
            }
        }
        // Seeding Modules Data Ends //

        // Seeding Actions Data Starts //
        $actionSeedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_ACTION . '.json')), true);
        $actionQuery    = new \App\Models\Action;
        if($actionQuery::count() === Globals::ROW_COUNT_ZERO) {
            // if no record in the db at all,
            if(isset($actionSeedData) && !empty($actionSeedData)) {
                foreach($actionSeedData as $key => $row) {
                    $entityData              = array();
                    if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                        $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                    }
                    $entityData['title']           = $row['title'];
                    $entityData['display_title']   = $row['display_title'];
                    $entityData['status']          = $row['status'];
                    if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                        $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                    } else {
                        $entityData['deleted_at']   = NULL;
                    }
                    if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                        $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                    } else {
                        $entityData['updated_at']   = NULL;
                    }
                    if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                        $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                    } else {
                        $entityData['created_at']   = NULL;
                    }
                    $lastEntity            = \App\Models\Action::create($entityData);
                    if(isset($languageArray) && !empty($languageArray)) {
                        $lastEntityId           = $lastEntity->_id;
                        foreach($languageArray as $keyLang => $rowLang) {
                            $languageData       = array();
                            if($rowLang === 'en') {
                                $languageData['display_title']  = $row['display_title'];
                            } else if($rowLang === 'fr') {
                                $languageData['display_title']  = $row['display_title_fr'];
                            }
                            $languageData['language']           = $rowLang;
                            $languageData['action_id']          = new ObjectId($lastEntityId);
                            \App\Models\ActionTranslation::create($languageData);
                        }
                    }
                }
            }
        } else {
            // if record in the db is present, proceed to feed those data which aren't in the db
            if(isset($actionSeedData) && !empty($actionSeedData)) {
                // get ids from the db
                $actionIdArray = array();
                $actionListing = $actionQuery->get()->toArray();
                foreach($actionListing as $actionKey => $actionRow) {
                    $actionIdArray[]  = (string)$actionRow['_id'];
                }
                foreach($actionSeedData as $key => $row) {
                    // iterate through each seed data
                    if(isset($row['_id']) && !empty($row['_id']) 
                        && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])
                        && !in_array($row['_id']['$oid'], $actionIdArray)) {
                        // if the seed id is not present in the array of id from db, feed it
                        $entityData              = array();
                        if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                            $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                        }
                        $entityData['title']           = $row['title'];
                        $entityData['display_title']   = $row['display_title'];
                        $entityData['status']          = $row['status'];
                        if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                            $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                        } else {
                            $entityData['deleted_at']   = NULL;
                        }
                        if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                            $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                        } else {
                            $entityData['updated_at']   = NULL;
                        }
                        if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                            $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                        } else {
                            $entityData['created_at']   = NULL;
                        }
                        $lastEntity            = \App\Models\Action::create($entityData);
                        if(isset($languageArray) && !empty($languageArray)) {
                            $lastEntityId           = $lastEntity->_id;
                            foreach($languageArray as $keyLang => $rowLang) {
                                $languageData       = array();
                                if($rowLang === 'en') {
                                    $languageData['display_title']  = $row['display_title'];
                                } else if($rowLang === 'fr') {
                                    $languageData['display_title']  = $row['display_title_fr'];
                                }
                                $languageData['language']           = $rowLang;
                                $languageData['action_id']          = new ObjectId($lastEntityId);
                                \App\Models\ActionTranslation::create($languageData);
                            }
                        }
                    }
                }
            }
        }
        // Seeding Actions Data Ends //

        if(Config::get('database.connections.mongodb.database') === env('MONGODB_MASTER_DATABASE'))
        {
            // Seeding Permission Data Starts //
            if(Permission::count() === Globals::ROW_COUNT_ZERO) {
                $data = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_PERMISSION . '.json')), true);
                if(isset($data) && !empty($data)) {
                    foreach($data as $key => $row) {
                        $permissionData         = array();
                        if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                            $permissionData['_id']         = new ObjectId($row['_id']['$oid']);
                        }
                        $permissionData['guard_name']       = $row['guard_name'];
                        $permissionData['name']             = $row['name'];
                        $permissionData['role_ids']         = $row['role_ids'];
                        if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                            $permissionData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                        } else {
                            $permissionData['updated_at']   = NULL;
                        }
                        if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                            $permissionData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                        } else {
                            $permissionData['created_at']   = NULL;
                        }
                        $lastPermission                     = Permission::create($permissionData);
                    }
                }
            }
            // Seeding Permission Data Ends //

            // Seeding Role Data Starts //
            if(Role::count() === Globals::ROW_COUNT_ZERO) {
                $data = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_ROLE . '.json')), true);
                if(isset($data) && !empty($data)) {
                    foreach($data as $key => $row) {
                        $roleData         = array();
                        if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                            $roleData['_id']         = new ObjectId($row['_id']['$oid']);
                        }
                        $roleData['guard_name']       = $row['guard_name'];
                        $roleData['name']             = $row['name'];
                        $roleData['name_translation'] = $row['name_translation'];
                        $roleData['permission_ids']   = $row['permission_ids'];
                        if(isset($row['user_ids']) && !empty($row['user_ids'])) {
                            $roleData['user_ids']         = $row['user_ids'];
                        } else {
                            $roleData['user_ids']         = array();
                        }                        
                        if(isset($row['created_by']) && !empty($row['created_by']) && isset($row['created_by']['$oid']) && !empty($row['created_by']['$oid'])) {
                            $roleData['created_by']   = new ObjectId($row['created_by']['$oid']);
                        } else {
                            $roleData['created_by']   = NULL;
                        }
                        if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                            $roleData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                        } else {
                            $roleData['updated_at']   = NULL;
                        }
                        if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                            $roleData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                        } else {
                            $roleData['created_at']   = NULL;
                        }
                        $lastRole                     = Role::create($roleData);
                    }
                }
            }
            // Seeding Permission Data Ends //
        }

        // Seeding Admin Config Data Starts //
        if(\App\Models\AdminConfig::count() === Globals::ROW_COUNT_ZERO) {
            $appName                  = config('app.name');
            $nonEncryptApiPassword    = $appName . '|' . date('Y-m-d H:i:s') . '|' . time();
            $encryptApiPassword       = Hash::make($nonEncryptApiPassword);            

            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_ADMIN_CONFIG . '.json')), true);
            if(isset($seedData) && !empty($seedData)) {
                foreach($seedData as $key => $row) {                    
                    $entityData              = array();
                    if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                        $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                    }
                    $entityData['config_key']        = $row['config_key'];
                    $entityData['config_value']      = $row['config_value'];
                    $entityData['value_unit']        = $row['value_unit'];
                    $entityData['status']            = $row['status'];
                    if(isset($row['created_date']) && !empty($row['created_date']) && isset($row['created_date']['$date']) && !empty($row['created_date']['$date'])) {
                        $entityData['created_date']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_date']['$date']));
                    } else {
                        $entityData['created_date']   = NULL;
                    }
                    if(isset($row['modified_date']) && !empty($row['modified_date']) && isset($row['modified_date']['$date']) && !empty($row['modified_date']['$date'])) {
                        $entityData['modified_date']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['modified_date']['$date']));
                    } else {
                        $entityData['modified_date']   = NULL;
                    }
                    if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                        $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                    } else {
                        $entityData['deleted_at']   = NULL;
                    }
                    if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                        $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                    } else {
                        $entityData['updated_at']   = NULL;
                    }
                    if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                        $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                    } else {
                        $entityData['created_at']   = NULL;
                    }
                    $lastEntity            = \App\Models\AdminConfig::create($entityData);
                }
            }
        }
        // Seeding Admin Config Data Starts //

        // Seeding Image Validation Data Starts //
        if(\App\Models\ImageValidation::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_IMAGE_VALIDATION . '.json')), true);
            if(isset($seedData) && !empty($seedData)) {
                foreach($seedData as $key => $row) {                    
                    $entityData              = array();
                    if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                        $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                    }
                    $entityData['title']           = $row['title'];
                    $entityData['entity']          = $row['entity'];
                    $entityData['width']           = $row['width'];
                    $entityData['height']          = $row['height'];
                    $entityData['size']            = $row['size'];
                    $entityData['status']          = $row['status'];
                    if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                        $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                    } else {
                        $entityData['deleted_at']   = NULL;
                    }
                    if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                        $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                    } else {
                        $entityData['updated_at']   = NULL;
                    }
                    if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                        $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                    } else {
                        $entityData['created_at']   = NULL;
                    }
                    $lastEntity            = \App\Models\ImageValidation::create($entityData);
                }
            }
        }
        // Seeding Image Validation Data Ends //

        // Seeding Country Data Starts //
        if(\App\Models\Country::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_COUNTRY . '.json')), true);
            if(isset($seedData) && !empty($seedData)) {
                foreach($seedData as $key => $row) {
                    $entityData              = array();
                    if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                        $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                    }
                    $entityData['name']                  = $row['name'];
                    $entityData['capital']               = $row['capital'];
                    $entityData['country_code_iso2']     = $row['country_code_iso2'];
                    $entityData['country_code_iso3']     = $row['country_code_iso3'];
                    $entityData['phone_code']            = $row['phone_code'];
                    $entityData['currency']              = $row['currency'];
                    $entityData['currency_code']         = $row['currency_code'];
                    $entityData['managed_currency']      = $row['managed_currency'];
                    $entityData['status']                = $row['status'];
                    if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                        $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                    } else {
                        $entityData['deleted_at']   = NULL;
                    }
                    if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                        $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                    } else {
                        $entityData['updated_at']   = NULL;
                    }
                    if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                        $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                    } else {
                        $entityData['created_at']   = NULL;
                    }
                    $lastEntity            = \App\Models\Country::create($entityData);
                    if(isset($languageArray) && !empty($languageArray)) {
                        $lastEntityId          = $lastEntity->_id;
                        foreach($languageArray as $keyLang => $rowLang) {
                            $languageData       = array();
                            if($rowLang === 'en') {
                                $languageData['name']          = $row['name'];
                                $languageData['capital']       = $row['capital'];
                                $languageData['currency']      = $row['currency'];
                            } else if($rowLang === 'fr') {
                                $languageData['name']          = $row['name_fr'];
                                $languageData['capital']       = $row['capital_fr'];
                                $languageData['currency']      = $row['currency_fr'];
                            }
                            $languageData['language']          = $rowLang;
                            $languageData['country_id']        = new ObjectId($lastEntityId);
                            \App\Models\CountryTranslation::create($languageData);
                        }
                    }
                }
            }
        }
        // Seeding Country Data Ends //

        // Seeding Currency Data Starts //
        if(\App\Models\Currency::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_CURRENCY . '.json')), true);
            if(isset($seedData) && !empty($seedData)) {
                foreach($seedData as $key => $row) {
                    $entityData              = array();
                    if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                        $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                    }
                    $entityData['name']                   = $row['name'];
                    $entityData['code']                   = $row['code'];
                    $entityData['symbol']                 = $row['symbol'];
                    $entityData['is_stripe_currency']     = $row['is_stripe_currency'];
                    $entityData['stripe_zero_decimal']    = $row['stripe_zero_decimal'];
                    $entityData['stripe_three_decimal']   = $row['stripe_three_decimal'];
                    $entityData['status']                 = $row['status'];
                    if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                        $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                    } else {
                        $entityData['deleted_at']   = NULL;
                    }
                    if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                        $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                    } else {
                        $entityData['updated_at']   = NULL;
                    }
                    if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                        $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                    } else {
                        $entityData['created_at']   = NULL;
                    }
                    $lastEntity            = \App\Models\Currency::create($entityData);
                    if(isset($languageArray) && !empty($languageArray)) {
                        $lastEntityId          = $lastEntity->_id;
                        foreach($languageArray as $keyLang => $rowLang) {
                            $languageData       = array();
                            if($rowLang === 'en') {
                                $languageData['name']          = $row['name'];
                            } else if($rowLang === 'fr') {
                                $languageData['name']          = $row['name_fr'];
                            }
                            $languageData['language']          = $rowLang;
                            $languageData['currency_id']       = new ObjectId($lastEntityId);
                            \App\Models\CurrencyTranslation::create($languageData);
                        }
                    }
                }
            }
        }
        // Seeding Currency Data Ends //

        // Seeding Religion Data Starts //
        if(\App\Models\Religion::count() === Globals::ROW_COUNT_ZERO) {  
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_RELIGION . '.json')), true);
            foreach($seedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                $entityData['name']         = $row['name'];
                $entityData['status']       = $row['status'];
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }

                $lastEntity              = \App\Models\Religion::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId      = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData       = array();
                        if($rowLang === 'en') {
                            $languageData['name']          = $row['name'];
                        } else if($rowLang === 'fr') {
                            $languageData['name']          = $row['name_fr'];
                        }
                        $languageData['language']          = $rowLang;
                        $languageData['religion_id']       = new ObjectId($lastEntityId);
                        \App\Models\ReligionTranslation::create($languageData);
                    }
                }
            }
        }
        // Seeding Religion Data Ends //

        // Seeding Term Data Starts //
        if(\App\Models\Term::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_TERM . '.json')), true);
            foreach($seedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                $entityData['title']         = $row['title'];
                $entityData['key']           = $row['key'];
                $entityData['status']        = $row['status'];
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }
                $lastEntity            = \App\Models\Term::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId      = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData       = array();
                        if($rowLang === 'en') {
                            $languageData['title']          = $row['title'];
                        } else if($rowLang === 'fr') {
                            $languageData['title']          = $row['title_fr'];
                        }
                        $languageData['language']           = $rowLang;
                        $languageData['term_id']            = new ObjectId($lastEntityId);
                        \App\Models\TermTranslation::create($languageData);
                    }
                }
            }
        }
        // Seeding Term Data Ends //

        // Seeding Hearing Data Starts //
        if(\App\Models\Hearing::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_HEARING . '.json')), true);
            foreach($seedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                $entityData['title']         = $row['title'];
                $entityData['status']        = $row['status'];
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }
                $lastEntity                 = \App\Models\Hearing::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId      = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData  = array();
                        if($rowLang === 'en') {
                            $languageData['title']          = $row['title'];
                        } else if($rowLang === 'fr') {
                            $languageData['title']          = $row['title_fr'];
                        }
                        $languageData['language']           = $rowLang;
                        $languageData['hearing_id']         = new ObjectId($lastEntityId);
                        \App\Models\HearingTranslation::create($languageData);
                        //$trEntity          = new StichozaGoogleTranslate();
                        //$trEntity->setSource()->setTarget($rowLang)->translate($lastEntityTitle),
                    }
                }
            }
        }
        // Seeding Hearing Data Ends //

        // Seeding Curriculum Data Starts //
        if(\App\Models\Curriculum::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_CURRICULUM . '.json')), true);
            foreach($seedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                $entityData['title']         = $row['title'];
                $entityData['status']        = $row['status'];
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }
                $lastEntity                 = \App\Models\Curriculum::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId       = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData       = array();
                        if($rowLang === 'en') {
                            $languageData['title']          = $row['title'];
                        } else if($rowLang === 'fr') {
                            $languageData['title']          = $row['title_fr'];
                        }
                        $languageData['language']           = $rowLang;
                        $languageData['curriculum_id']      = new ObjectId($lastEntityId);
                        \App\Models\CurriculumTranslation::create($languageData);
                    }
                }
            }
        }
        // Seeding Curriculum Data Ends //

        // Seeding Illness Data Starts //
        if(\App\Models\Illness::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_ILLNESS . '.json')), true);
            foreach($seedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                $entityData['title']         = $row['title'];
                $entityData['status']        = $row['status'];
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }
                $lastEntity                 = \App\Models\Illness::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId       = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData       = array();
                        if($rowLang === 'en') {
                            $languageData['title']          = $row['title'];
                        } else if($rowLang === 'fr') {
                            $languageData['title']          = $row['title_fr'];
                        }
                        $languageData['language']           = $rowLang;
                        $languageData['illness_id']         = new ObjectId($lastEntityId);
                        \App\Models\IllnessTranslation::create($languageData);
                    }
                }
            }
        }
        // Seeding Illness Data Ends //

        // Seeding Vaccine Data Starts //
        if(\App\Models\Vaccine::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_VACCINE . '.json')), true);
            foreach($seedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                $entityData['title']         = $row['title'];
                $entityData['status']        = $row['status'];
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }
                $lastEntity                 =  \App\Models\Vaccine::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId       = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData       = array();
                        if($rowLang === 'en') {
                            $languageData['title']          = $row['title'];
                        } else if($rowLang === 'fr') {
                            $languageData['title']          = $row['title_fr'];
                        }
                        $languageData['language']           = $rowLang;
                        $languageData['vaccine_id']         = new ObjectId($lastEntityId);
                        \App\Models\VaccineTranslation::create($languageData);
                    }
                }
            }
        }
        // Seeding Vaccine Data Ends //

        // Seeding Blood Group Data Starts //
        if(\App\Models\BloodGroup::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_BLOOD_GROUP . '.json')), true);
            foreach($seedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                $entityData['title']         = $row['title'];
                $entityData['status']        = $row['status'];
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }
                $lastEntity                 =  \App\Models\BloodGroup::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId       = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData       = array();
                        if($rowLang === 'en') {
                            $languageData['title']          = $row['title'];
                        } else if($rowLang === 'fr') {
                            $languageData['title']          = $row['title_fr'];
                        }
                        $languageData['language']           = $rowLang;
                        $languageData['blood_group_id']     = new ObjectId($lastEntityId);
                        \App\Models\BloodGroupTranslation::create($languageData);
                    }
                }
            }
        }
        // Seeding Blood Group Data Ends //

        // Seeding Teacher Role Data Starts //
        if(\App\Models\TeacherRole::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_TEACHER_ROLE . '.json')), true);
            foreach($seedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                $entityData['title']         = $row['title'];
                $entityData['status']        = $row['status'];
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }
                $lastEntity            = \App\Models\TeacherRole::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId      = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData       = array();
                        if($rowLang === 'en') {
                            $languageData['title']          = $row['title'];
                        } else if($rowLang === 'fr') {
                            $languageData['title']          = $row['title_fr'];
                        }
                        $languageData['language']           = $rowLang;
                        $languageData['teacher_role_id']    = new ObjectId($lastEntityId);
                        \App\Models\TeacherRoleTranslation::create($languageData);
                    }
                }
            }
        }
        // Seeding Teacher Role Data Ends //

        // Seeding Class Categories Data Starts //
        if(\App\Models\ClassCategory::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_CLASS_CATEGORY . '.json')), true);
            foreach($seedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                $entityData['title']            = $row['title'];
                $entityData['from_age']         = $row['from_age'];
                $entityData['to_age']           = $row['to_age'];

                $entityData['from_age_in_month'] = $row['from_age_in_month'];
                $entityData['to_age_in_month']   = $row['to_age_in_month'];

                $entityData['age_type']         = $row['age_type'];

                $entityData['status']           = $row['status'];
                if(isset($row['created_by']) && !empty($row['created_by']) && isset($row['created_by']['$oid']) && !empty($row['created_by']['$oid'])) {
                    $entityData['created_by']   = new ObjectId($row['created_by']['$oid']);
                } else {
                    $entityData['created_by']   = NULL;
                }
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }
                $lastEntity            = \App\Models\ClassCategory::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId      = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData       = array();
                        if($rowLang === 'en') {
                            $languageData['title']          = $row['title'];
                        } else if($rowLang === 'fr') {
                            $languageData['title']          = $row['title_fr'];
                        }
                        $languageData['language']           = $rowLang;
                        $languageData['class_category_id']  = new ObjectId($lastEntityId);
                        \App\Models\ClassCategoryTranslation::create($languageData);
                    }
                }
            }
        }
        // Seeding Class Categories Data Ends //

        // Seeding Languages Data Starts //
        if(\App\Models\Language::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_LANGUAGE . '.json')), true);
            foreach($seedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                $entityData['name']             = $row['name'];
                $entityData['status']           = $row['status'];
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }
                $lastEntity            = \App\Models\Language::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId      = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData       = array();
                        if($rowLang === 'en') {
                            $languageData['name']          = $row['name'];
                        } else if($rowLang === 'fr') {
                            $languageData['name']          = $row['name_fr'];
                        }
                        $languageData['language']          = $rowLang;
                        $languageData['language_id']       = new ObjectId($lastEntityId);
                        \App\Models\LanguageTranslation::create($languageData);
                    }
                }
            }
        }
        // Seeding Languages Data Ends //

        // Seeding Particulars Data Starts //
        if(\App\Models\Particular::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_PARTICULAR . '.json')), true);
            foreach($seedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                $entityData['title']         = $row['title'];
                $entityData['mandatory']     = $row['mandatory'];
                $entityData['age_specific']  = $row['age_specific'];
                $entityData['type']          = $row['type'];
                $entityData['charge_type']   = $row['charge_type'];
                $entityData['refundable']    = $row['refundable'];
                $entityData['description']   = $row['description'];
                $entityData['order']         = $row['order'];
                $entityData['status']        = $row['status'];
                if(isset($row['created_by']) && !empty($row['created_by']) && isset($row['created_by']['$oid']) && !empty($row['created_by']['$oid'])) {
                    $entityData['created_by']   = new ObjectId($row['created_by']['$oid']);
                } else {
                    $entityData['created_by']   = NULL;
                }
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }
                $lastEntity            = \App\Models\Particular::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId           = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData       = array();
                        if($rowLang === 'en') {
                            $languageData['title']          = $row['title'];
                            $languageData['description']    = $row['description'];
                        } else if($rowLang === 'fr') {
                            $languageData['title']          = $row['title_fr'];
                            $languageData['description']    = $row['description_fr'];
                        }
                        $languageData['language']           = $rowLang;
                        $languageData['particular_id']      = new ObjectId($lastEntityId);
                        \App\Models\ParticularTranslation::create($languageData);
                    }
                }
            }
        }
        // Seeding Particulars Data Ends //

        // Seeding Charges Data Starts //
        if(\App\Models\Charge::count() === Globals::ROW_COUNT_ZERO) {
            $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_CHARGE . '.json')), true);
            foreach($seedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                if(isset($row['particular_id']) && !empty($row['particular_id']) && isset($row['particular_id']['$oid']) && !empty($row['particular_id']['$oid'])) {
                    $entityData['particular_id']           = new ObjectId($row['particular_id']['$oid']);
                } else {
                    $entityData['particular_id']           = NULL;
                }
                if(isset($row['academic_year_id']) && !empty($row['academic_year_id']) && isset($row['academic_year_id']['$oid']) && !empty($row['academic_year_id']['$oid'])) {
                    $entityData['academic_year_id']           = new ObjectId($row['academic_year_id']['$oid']);
                } else {
                    $entityData['academic_year_id']           = NULL;
                }
                $entityData['amount']             = $row['amount'];
                $entityData['age_specific']       = $row['age_specific'];
                $entityData['from_age_in_month']  = $row['from_age_in_month'];
                $entityData['to_age_in_month']    = $row['to_age_in_month'];
                $entityData['time_specific']      = $row['time_specific'];
                if(isset($row['academic_year_timing_id']) && !empty($row['academic_year_timing_id']) && isset($row['academic_year_timing_id']['$oid']) && !empty($row['academic_year_timing_id']['$oid'])) {
                    $entityData['academic_year_timing_id']  = new ObjectId($row['academic_year_timing_id']['$oid']);
                } else {
                    $entityData['academic_year_timing_id']  = NULL;
                }
                $entityData['stime']                 = $row['stime'];
                $entityData['etime']                 = $row['etime'];
                $entityData['transport_specific']    = $row['transport_specific'];
                $entityData['transport_type']        = $row['transport_type'];
                $entityData['description']           = $row['description'];
                $entityData['status']                = $row['status'];
                if(isset($row['created_by']) && !empty($row['created_by']) && isset($row['created_by']['$oid']) && !empty($row['created_by']['$oid'])) {
                    $entityData['created_by']   = new ObjectId($row['created_by']['$oid']);
                } else {
                    $entityData['created_by']   = NULL;
                }
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }
                $lastEntity            = \App\Models\Charge::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId           = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData       = array();
                        if($rowLang === 'en') {
                            $languageData['description']    = $row['description'];
                        } else if($rowLang === 'fr') {
                            $languageData['description']    = $row['description_fr'];
                        }
                        $languageData['language']           = $rowLang;
                        $languageData['charge_id']          = new ObjectId($lastEntityId);
                        \App\Models\ChargeTranslation::create($languageData);
                    }
                }
            }
        }
        // Seeding Charges Data Ends //

        // Seeding Discounts Data Starts //
        $discountSeedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_DISCOUNT . '.json')), true);
        $discountQuery    = new \App\Models\Discount;
        if($discountQuery::count() === Globals::ROW_COUNT_ZERO) {
            // if no record in the db at all,
            foreach($discountSeedData as $key => $row) {
                $entityData              = array();
                if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                    $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                }
                $entityData['title']            = $row['title'];
                $entityData['amount']           = $row['amount'];
                $entityData['type']             = $row['type'];
                $entityData['description']      = $row['description'];
                $entityData['status']           = $row['status'];
                if(isset($row['created_by']) && !empty($row['created_by']) && isset($row['created_by']['$oid']) && !empty($row['created_by']['$oid'])) {
                    $entityData['created_by']   = new ObjectId($row['created_by']['$oid']);
                } else {
                    $entityData['created_by']   = NULL;
                }
                if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                    $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                } else {
                    $entityData['deleted_at']   = NULL;
                }
                if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                    $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                } else {
                    $entityData['updated_at']   = NULL;
                }
                if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                    $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                } else {
                    $entityData['created_at']   = NULL;
                }
                $lastEntity            = \App\Models\Discount::create($entityData);
                if(isset($languageArray) && !empty($languageArray)) {
                    $lastEntityId           = $lastEntity->_id;
                    foreach($languageArray as $keyLang => $rowLang) {
                        $languageData       = array();
                        if($rowLang === 'en') {
                            $languageData['title']          = $row['title'];
                            $languageData['description']    = $row['description'];
                        } else if($rowLang === 'fr') {
                            $languageData['title']          = $row['title_fr'];
                            $languageData['description']    = $row['description_fr'];
                        }
                        $languageData['language']       = $rowLang;
                        $languageData['discount_id']    = new ObjectId($lastEntityId);
                        \App\Models\DiscountTranslation::create($languageData);
                    }
                }
            }
        }
        // Seeding Discounts Data Ends //

        if(Config::get('database.connections.mongodb.database') === env('MONGODB_MASTER_DATABASE')) {
            // Seeding Academic Year Data Starts //
            if(\App\Models\AcademicYear::count() === Globals::ROW_COUNT_ZERO) {
                $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_ACADEMIC_YEAR . '.json')), true);
                foreach($seedData as $key => $row) {
                    $entityData              = array();
                    if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                        $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                    }
                    $entityData['year']             = $row['year'];
                    $entityData['term']             = $row['term'];

                    if(isset($row['sdate']) && !empty($row['sdate']) && isset($row['sdate']['$date']) && !empty($row['sdate']['$date'])) {
                        $entityData['sdate']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['sdate']['$date']));
                    } else {
                        $entityData['sdate']   = NULL;
                    }
                    if(isset($row['edate']) && !empty($row['edate']) && isset($row['edate']['$date']) && !empty($row['edate']['$date'])) {
                        $entityData['edate']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['edate']['$date']));
                    } else {
                        $entityData['edate']   = NULL;
                    }

                    if(isset($row['sdate_booking']) && !empty($row['sdate_booking']) && isset($row['sdate_booking']['$date']) && !empty($row['sdate_booking']['$date'])) {
                        $entityData['sdate_booking']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['sdate_booking']['$date']));
                    } else {
                        $entityData['sdate_booking']   = NULL;
                    }

                    if(isset($row['edate_booking']) && !empty($row['edate_booking']) && isset($row['edate_booking']['$date']) && !empty($row['edate_booking']['$date'])) {
                        $entityData['edate_booking']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['edate_booking']['$date']));
                    } else {
                        $entityData['edate_booking']   = NULL;
                    }

                    if(isset($row['sdate_of_term1']) && !empty($row['sdate_of_term1']) && isset($row['sdate_of_term1']['$date']) && !empty($row['sdate_of_term1']['$date'])) {
                        $entityData['sdate_of_term1']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['sdate_of_term1']['$date']));
                    } else {
                        $entityData['sdate_of_term1']   = NULL;
                    }

                    if(isset($row['edate_of_term1']) && !empty($row['edate_of_term1']) && isset($row['edate_of_term1']['$date']) && !empty($row['edate_of_term1']['$date'])) {
                        $entityData['edate_of_term1']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['edate_of_term1']['$date']));
                    } else {
                        $entityData['edate_of_term1']   = NULL;
                    }

                    if(isset($row['sdate_of_term1_term2_break']) && !empty($row['sdate_of_term1_term2_break']) && isset($row['sdate_of_term1_term2_break']['$date']) && !empty($row['sdate_of_term1_term2_break']['$date'])) {
                        $entityData['sdate_of_term1_term2_break']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['sdate_of_term1_term2_break']['$date']));
                    } else {
                        $entityData['sdate_of_term1_term2_break']   = NULL;
                    }

                    if(isset($row['edate_of_term1_term2_break']) && !empty($row['edate_of_term1_term2_break']) && isset($row['edate_of_term1_term2_break']['$date']) && !empty($row['edate_of_term1_term2_break']['$date'])) {
                        $entityData['edate_of_term1_term2_break']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['edate_of_term1_term2_break']['$date']));
                    } else {
                        $entityData['edate_of_term1_term2_break']   = NULL;
                    }

                    if(isset($row['sdate_of_term2']) && !empty($row['sdate_of_term2']) && isset($row['sdate_of_term2']['$date']) && !empty($row['sdate_of_term2']['$date'])) {
                        $entityData['sdate_of_term2']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['sdate_of_term2']['$date']));
                    } else {
                        $entityData['sdate_of_term2']   = NULL;
                    }

                    if(isset($row['edate_of_term2']) && !empty($row['edate_of_term2']) && isset($row['edate_of_term2']['$date']) && !empty($row['edate_of_term2']['$date'])) {
                        $entityData['edate_of_term2']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['edate_of_term2']['$date']));
                    } else {
                        $entityData['edate_of_term2']   = NULL;
                    }

                    if(isset($row['sdate_of_term2_term3_break']) && !empty($row['sdate_of_term2_term3_break']) && isset($row['sdate_of_term2_term3_break']['$date']) && !empty($row['sdate_of_term2_term3_break']['$date'])) {
                        $entityData['sdate_of_term2_term3_break']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['sdate_of_term2_term3_break']['$date']));
                    } else {
                        $entityData['sdate_of_term2_term3_break']   = NULL;
                    }

                    if(isset($row['edate_of_term2_term3_break']) && !empty($row['edate_of_term2_term3_break']) && isset($row['edate_of_term2_term3_break']['$date']) && !empty($row['edate_of_term2_term3_break']['$date'])) {
                        $entityData['edate_of_term2_term3_break']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['edate_of_term2_term3_break']['$date']));
                    } else {
                        $entityData['edate_of_term2_term3_break']   = NULL;
                    }

                    if(isset($row['sdate_of_term3']) && !empty($row['sdate_of_term3']) && isset($row['sdate_of_term3']['$date']) && !empty($row['sdate_of_term3']['$date'])) {
                        $entityData['sdate_of_term3']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['sdate_of_term3']['$date']));
                    } else {
                        $entityData['sdate_of_term3']   = NULL;
                    }

                    if(isset($row['edate_of_term3']) && !empty($row['edate_of_term3']) && isset($row['edate_of_term3']['$date']) && !empty($row['edate_of_term3']['$date'])) {
                        $entityData['edate_of_term3']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['edate_of_term3']['$date']));
                    } else {
                        $entityData['edate_of_term3']   = NULL;
                    }

                    $entityData['max_students']         = $row['max_students'];
                    $entityData['min_days_per_week']    = $row['min_days_per_week'];
                    $entityData['max_days_per_week']    = $row['max_days_per_week'];

                    $entityData['age_limit_for_min_days_in_month']    = $row['age_limit_for_min_days_in_month'];
                    $entityData['days']                 = $row['days'];                
                    $entityData['rules']                = $row['rules'];
                    $entityData['status']               = $row['status'];
                    if(isset($row['created_by']) && !empty($row['created_by']) && isset($row['created_by']['$oid']) && !empty($row['created_by']['$oid'])) {
                        $entityData['created_by']           = new ObjectId($row['created_by']['$oid']);
                    } else {
                        $entityData['created_by']           = NULL;
                    }
                    if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                        $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                    } else {
                        $entityData['deleted_at']   = NULL;
                    }
                    if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                        $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                    } else {
                        $entityData['updated_at']   = NULL;
                    }
                    if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                        $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                    } else {
                        $entityData['created_at']   = NULL;
                    }
                    $lastEntity            = \App\Models\AcademicYear::create($entityData);
                    if(isset($languageArray) && !empty($languageArray)) {
                        $lastEntityId           = $lastEntity->_id;
                        $lastEntityRules        = $lastEntity->rules;
                        $trEntity               = new StichozaGoogleTranslate();
                        foreach($languageArray as $keyLang => $rowLang) {
                            $languageData   = array(
                                    'rules'     => $trEntity->setSource()->setTarget($rowLang)->translate($lastEntityRules),
                                    'language'  => $rowLang,
                                    'academic_year_id'  => new ObjectId($lastEntityId)
                                );
                            \App\Models\AcademicYearTranslation::create($languageData);
                        }
                    }
                }
            }
            // Seeding Academic Year Data Ends //

            // Seeding Academic Year Timing Data Starts //
            if(\App\Models\AcademicYearTiming::count() === Globals::ROW_COUNT_ZERO) {
                $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_ACADEMIC_YEAR_TIMING . '.json')), true);
                foreach($seedData as $key => $row) {
                    $entityData              = array();
                    if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                        $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                    }
                    $entityData['stime']             = $row['stime'];
                    $entityData['etime']             = $row['etime'];

                    if(isset($row['academic_year_id']) && !empty($row['academic_year_id']) && isset($row['academic_year_id']['$oid']) && !empty($row['academic_year_id']['$oid'])) {
                        $entityData['academic_year_id']   = new ObjectId($row['academic_year_id']['$oid']);
                    } else {
                        $entityData['academic_year_id']   = NULL;
                    }

                    $entityData['status']               = $row['status'];
                    if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                        $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                    } else {
                        $entityData['deleted_at']   = NULL;
                    }
                    if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                        $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                    } else {
                        $entityData['updated_at']   = NULL;
                    }
                    if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                        $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                    } else {
                        $entityData['created_at']   = NULL;
                    }
                    $lastEntity            = \App\Models\AcademicYearTiming::create($entityData);                
                }
            }
            // Seeding Academic Year Data Ends //

            // Seeding Teachers Data Starts //
            if(\App\Models\Teacher::count() === Globals::ROW_COUNT_ZERO) {
                $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_TEACHER . '.json')), true);
                foreach($seedData as $key => $row) {
                    $entityData              = array();
                    if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                        $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                    }
                    $entityData['fname']              = $row['fname'];
                    $entityData['lname']              = $row['lname'];
                    if(isset($row['teacher_role_id']) && !empty($row['teacher_role_id']) && isset($row['teacher_role_id']['$oid']) && !empty($row['teacher_role_id']['$oid'])) {
                        $entityData['teacher_role_id']  = new ObjectId($row['teacher_role_id']['$oid']);
                    } else {
                        $entityData['teacher_role_id']  = NULL;
                    }                
                    $entityData['status']                = $row['status'];
                    if(isset($row['created_by']) && !empty($row['created_by']) && isset($row['created_by']['$oid']) && !empty($row['created_by']['$oid'])) {
                        $entityData['created_by']           = new ObjectId($row['created_by']['$oid']);
                    } else {
                        $entityData['created_by']           = NULL;
                    }
                    if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                        $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                    } else {
                        $entityData['deleted_at']   = NULL;
                    }
                    if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                        $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                    } else {
                        $entityData['updated_at']   = NULL;
                    }
                    if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                        $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                    } else {
                        $entityData['created_at']   = NULL;
                    }
                    $lastEntity            = \App\Models\Teacher::create($entityData);
                }
            }
            // Seeding Teachers Data Ends //

            // Seeding Classes Data Starts //
            if(\App\Models\Classs::count() === Globals::ROW_COUNT_ZERO) {
                $seedData = json_decode(file_get_contents(public_path('json/' . Globals::ENTITY_CLASS . '.json')), true);
                foreach($seedData as $key => $row) {
                    $entityData              = array();
                    if(isset($row['_id']) && !empty($row['_id']) && isset($row['_id']['$oid']) && !empty($row['_id']['$oid'])) {
                        $entityData['_id']   = new ObjectId($row['_id']['$oid']);
                    }
                    $entityData['title']              = $row['title'];
                    $entityData['rules']              = $row['rules'];
                    if(isset($row['class_category_id']) && !empty($row['class_category_id']) && isset($row['class_category_id']['$oid']) && !empty($row['class_category_id']['$oid'])) {
                        $entityData['class_category_id']  = new ObjectId($row['class_category_id']['$oid']);
                    } else {
                        $entityData['class_category_id']  = NULL;
                    }
                    $teacherArray                     = array();
                    foreach($row['teachers'] as $keyTeacher => $rowTeacher) {
                        if(isset($rowTeacher['$oid']) && !empty($rowTeacher['$oid'])) {
                            $teacherArray[]    = new ObjectId($rowTeacher['$oid']);
                        }
                    }
                    $entityData['teachers']              = $teacherArray;
                    $entityData['max_students']          = (isset($row['max_students']) && !empty($row['max_students'])) ? $row['max_students'] : 100;
                    $entityData['status']                = $row['status'];
                    if(isset($row['created_by']) && !empty($row['created_by']) && isset($row['created_by']['$oid']) && !empty($row['created_by']['$oid'])) {
                        $entityData['created_by']           = new ObjectId($row['created_by']['$oid']);
                    } else {
                        $entityData['created_by']           = NULL;
                    }
                    if(isset($row['deleted_at']) && !empty($row['deleted_at']) && isset($row['deleted_at']['$date']) && !empty($row['deleted_at']['$date'])) {
                        $entityData['deleted_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['deleted_at']['$date']));
                    } else {
                        $entityData['deleted_at']   = NULL;
                    }
                    if(isset($row['updated_at']) && !empty($row['updated_at']) && isset($row['updated_at']['$date']) && !empty($row['updated_at']['$date'])) {
                        $entityData['updated_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['updated_at']['$date']));
                    } else {
                        $entityData['updated_at']   = NULL;
                    }
                    if(isset($row['created_at']) && !empty($row['created_at']) && isset($row['created_at']['$date']) && !empty($row['created_at']['$date'])) {
                        $entityData['created_at']   = date(Globals::DATETIME_Y_M_D_H_I_S, strtotime($row['created_at']['$date']));
                    } else {
                        $entityData['created_at']   = NULL;
                    }
                    $lastEntity            = \App\Models\Classs::create($entityData);
                    if(isset($languageArray) && !empty($languageArray)) {
                        $lastEntityId           = $lastEntity->_id;
                        $lastEntityTitle        = $lastEntity->title;
                        $lastEntityRules        = $lastEntity->rules;
                        $trEntity               = new StichozaGoogleTranslate();
                        foreach($languageArray as $keyLang => $rowLang) {
                            $languageData   = array(
                                    'title'     => $trEntity->setSource()->setTarget($rowLang)->translate($lastEntityTitle),
                                    'rules'     => $trEntity->setSource()->setTarget($rowLang)->translate($lastEntityRules),
                                    'language'  => $rowLang,
                                    'teacher_id'  => new ObjectId($lastEntityId)
                                );
                            \App\Models\ClassTranslation::create($languageData);
                        }
                    }
                }
            }
            // Seeding Classes Data Ends //
        }
    }
}
