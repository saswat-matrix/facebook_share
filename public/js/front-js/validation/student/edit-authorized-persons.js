if(FormValidation.formValidation){
    // If jquery form validate function does not exist, proceed with JS FormValidation (https://formvalidation.io) library
    /* JS FormValidation Code */

    'use strict';
    const formAuthentication = document.querySelector('#' + $dynamicFormId);
    //const form               = document.getElementById('demoForm');('#' + $dynamicFormId);
    document.addEventListener('DOMContentLoaded', function (e) {
        (function () {
            // Form validation for Add new record
            if (formAuthentication) {
                const fv = FormValidation.formValidation(formAuthentication, {
                    fields: {
                      ap1_fname: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ap1_fname_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_ap1_fname_stringLength').val()
                          }
                        }
                      },
                      ap1_lname: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ap1_lname_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_ap1_lname_stringLength').val()
                          }
                        }
                      },
                      ap1_relationship: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ap1_relationship_notEmpty').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 255,
                            message: $('#js_validation_ap1_relationship_stringLength').val()
                          }
                        }
                      },
                      ap1_phone_code_country_code: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ap1_phone_code_country_code_notEmpty').val()
                          }
                        }
                      },
                      ap1_mobile: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ap1_mobile_notEmpty').val()
                          },
                          digits: {
                            message: $('#js_validation_ap1_mobile_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_ap1_mobile_stringLength').val()
                          }
                        }
                      },
                      ap1_phone: {
                        validators: {
                          digits: {
                            message: $('#js_validation_ap1_phone_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_ap1_phone_stringLength').val()
                          }
                        }
                      },
                      ap1_citizenship_id: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ap1_citizenship_id_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_ap1_citizenship_id_stringLength').val()
                          }
                        }
                      },
                      ap2_fname: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ap2_fname_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_ap2_fname_stringLength').val()
                          }
                        }
                      },
                      ap2_lname: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ap2_lname_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_ap2_lname_stringLength').val()
                          }
                        }
                      },
                      ap2_relationship: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ap2_relationship_notEmpty').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 255,
                            message: $('#js_validation_ap2_relationship_stringLength').val()
                          }
                        }
                      },
                      ap2_phone_code_country_code: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ap2_phone_code_country_code_notEmpty').val()
                          }
                        }
                      },
                      ap2_mobile: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ap2_mobile_notEmpty').val()
                          },
                          digits: {
                            message: $('#js_validation_ap2_mobile_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_ap2_mobile_stringLength').val()
                          }
                        }
                      },
                      ap2_phone: {
                        validators: {
                          digits: {
                            message: $('#js_validation_ap2_phone_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_ap2_phone_stringLength').val()
                          }
                        }
                      },
                      ap2_citizenship_id: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ap2_citizenship_id_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_ap2_citizenship_id_stringLength').val()
                          }
                        }
                      }
                    },
                    plugins: {
                        excluded: new FormValidation.plugins.Excluded({
                            excluded: function (field, ele, eles) {

                                const ap1Fname                = document.querySelector('[name="ap1_fname"]');
                                const ap1FnameVal             = ap1Fname ? ap1Fname.value : '';

                                const ap1Lname                = document.querySelector('[name="ap1_lname"]');
                                const ap1LnameVal             = ap1Lname ? ap1Lname.value : '';

                                const ap1Relationship         = document.querySelector('[name="ap1_relationship"]');
                                const ap1RelationshipVal      = ap1Relationship ? ap1Relationship.value : '';

                                const ap1PhoneCodeCountryCode       = document.querySelector('[name="ap1_phone_code_country_code"]');
                                const ap1PhoneCodeCountryCodeVal    = ap1PhoneCodeCountryCode ? ap1PhoneCodeCountryCode.value : '';

                                const ap1Mobile               = document.querySelector('[name="ap1_mobile"]');
                                const ap1MobileVal            = ap1Mobile ? ap1Mobile.value : '';

                                const ap1CitizenshipId        = document.querySelector('[name="ap1_citizenship_id"]');
                                const ap1CitizenshipIdVal     = ap1CitizenshipId ? ap1CitizenshipId.value : '';

                                const ap2Fname                = document.querySelector('[name="ap2_fname"]');
                                const ap2FnameVal             = ap2Fname ? ap2Fname.value : '';

                                const ap2Lname                = document.querySelector('[name="ap2_lname"]');
                                const ap2LnameVal             = ap2Lname ? ap2Lname.value : '';

                                const ap2Relationship         = document.querySelector('[name="ap2_relationship"]');
                                const ap2RelationshipVal      = ap2Relationship ? ap2Relationship.value : '';

                                const ap2PhoneCodeCountryCode       = document.querySelector('[name="ap2_phone_code_country_code"]');
                                const ap2PhoneCodeCountryCodeVal    = ap2PhoneCodeCountryCode ? ap2PhoneCodeCountryCode.value : '';

                                const ap2Mobile               = document.querySelector('[name="ap2_mobile"]');
                                const ap2MobileVal            = ap2Mobile ? ap2Mobile.value : '';

                                const ap2CitizenshipId        = document.querySelector('[name="ap2_citizenship_id"]');
                                const ap2CitizenshipIdVal     = ap2CitizenshipId ? ap2CitizenshipId.value : '';

                                return ((field === 'ap1_lname' && ap1FnameVal === '') 
                                          || (field === 'ap1_relationship' && ap1FnameVal === '')
                                          || (field === 'ap1_phone_code_country_code' && ap1FnameVal === '' && ap1MobileVal === '')
                                          || (field === 'ap1_mobile' && ap1FnameVal === '')
                                          || (field === 'ap1_citizenship_id' && ap1FnameVal === '')
                                          || (field === 'ap1_fname' && ap1FnameVal === '')

                                          || (field === 'ap2_lname' && ap2FnameVal === '') 
                                          || (field === 'ap2_relationship' && ap2FnameVal === '')
                                          || (field === 'ap2_phone_code_country_code' && ap2FnameVal === '' && ap2MobileVal === '')
                                          || (field === 'ap2_mobile' && ap2FnameVal === '')
                                          || (field === 'ap2_citizenship_id' && ap2FnameVal === '')
                                          || (field === 'ap2_fname' && ap2FnameVal === ''));
                            },
                        }),
                        trigger: new FormValidation.plugins.Trigger(),
                        bootstrap5: new FormValidation.plugins.Bootstrap5({
                            eleValidClass: '',
                            rowSelector: '.col-sm-12'
                        }),
                        submitButton: new FormValidation.plugins.SubmitButton(),

                        defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                        autoFocus: new FormValidation.plugins.AutoFocus()
                    },
                    init: instance => {
                        instance.on('plugins.message.placed', function (e) {
                            if (e.element.parentElement.classList.contains('input-group')) {
                                e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
                            }
                        });
                    }
                });

                /*let enabled = false;
                formAuthentication.querySelector('[id^="sport_"]').addEventListener('input', function (e) {
                    index      = e.target.id.split('_')[1];
                    sport      = e.target.value;


                    if (sport === '' && enabled) {
                        enabled = false;
                        fv.disableValidator('id^="sport-entity_' + index + '"').disableValidator('id^="sport-price_' + index + '"');
                    } else if (sport != '' && !enabled) {
                        enabled = true;
                        fv.enableValidator('id^="sport-entity_' + index + '"').enableValidator('id^="sport-price_' + index + '"');
                    }

                    if (sport !== '' && enabled) {
                        fv.revalidateField('id^="sport-entity_' + index + '"').revalidateField('id^="sport-price_' + index + '"');
                    }
                });*/
            }
        })();
    });
} else if($.fn.validate) {
    // If jquery form validate function exists, proceed with form validate method
    /* Jquery Form Validate Validation Code */
    $(document).ready(function(){
        $('#' + $dynamicFormId).validate({
            rules: {
                title: {
                    required    : true
                },
                type: {
                    required    : true
                },
                image: {
                    required    : true
                }
            },
            messages: {
                title: {
                    required    : "Please, provide a title"
                },
                type: {
                    required    : "Please, select a type"
                },
                image: {
                    required    : "Please, select an image"
                }
            },
            errorPlacement: function (error, element) {
                error.insertAfter($(element));
            },
            errorPlacement: function (error, element) {
                //alert($(element).prop('type') + ' name: ' + $(element).prop('name'));            
                if($(element).prop('type') === 'password' && $(element).prop('name') === 'password')
                {
                    error.insertAfter($('.input-group-merge'));
                }
                else
                {
                    error.insertAfter($(element));
                }
            },
            submitHandler : function(form){
                form.submit();
            }
        })
    });
}