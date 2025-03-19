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
                        fname: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_fname_notEmpty').val()
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: $('#js_validation_fname_stringLength').val()
                            }
                          }
                        },
                        mname: {
                          validators: {
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: $('#js_validation_mname_stringLength').val()
                            }
                          }
                        },
                        lname: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_lname_notEmpty').val()
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: $('#js_validation_lname_stringLength').val()
                            }
                          }
                        },
                        pname: {
                          validators: {
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: $('#js_validation_pname_stringLength').val()
                            }
                          }
                        },
                        phone_code_country_code: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_phone_code_country_code_notEmpty').val()
                            }
                          }
                        },
                        phone: {
                          validators: {
                            /*notEmpty: {
                              message: $('#js_validation_phone_notEmpty').val()
                            },*/
                            digits: {
                                message: $('#js_validation_phone_digits').val()
                            },
                            stringLength: {
                              min: 6,
                              max: 10,
                              message: $('#js_validation_phone_stringLength').val()
                            }
                          }
                        },
                        address: {
                          validators: {
                            /*notEmpty: {
                              message: $('#js_validation_address_notEmpty').val()
                            },*/
                            stringLength: {
                              min: 2,
                              max: 2000,
                              message: $('#js_validation_address_stringLength').val()
                            }
                          }
                        },
                        dob: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_dob_notEmpty').val()
                            }
                          }
                        },
                        pob: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_pob_notEmpty').val()
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: $('#js_validation_pob_stringLength').val()
                            }
                          }
                        },
                        gender: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_gender_notEmpty').val()
                            }
                          }
                        },
                        nationality: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_nationality_notEmpty').val()
                            }
                          }
                        },
                        religion: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_religion_notEmpty').val()
                            }
                          }
                        },
                        has_sibling: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_has_sibling_notEmpty').val()
                            }
                          }
                        },
                        sibling_count: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_sibling_count_notEmpty').val()
                            },
                            digits: {
                                message: $('#js_validation_sibling_count_digits').val()
                            },
                            stringLength: {
                              min: 1,
                              max: 1,
                              message: $('#js_validation_sibling_count_stringLength').val()
                            }
                          }
                        },
                        first_language_id: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_first_language_id_notEmpty').val()
                            }
                          }
                        },
                        first_language_specify: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_first_language_specify_notEmpty').val()
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: $('#js_validation_first_language_specify_stringLength').val()
                            }
                          }
                        },
                        second_language_specify: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_second_language_specify_notEmpty').val()
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: $('#js_validation_second_language_specify_stringLength').val()
                            }
                          }
                        },
                        citizenship_id: {
                          validators: {
                            /*notEmpty: {
                              message: $('#js_validation_citizenship_id_notEmpty').val()
                            },*/
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: $('#js_validation_citizenship_id_stringLength').val()
                            }
                          }
                        },
                        status: {
                          validators: {
                            notEmpty: {
                              message: $('#js_validation_status_notEmpty').val()
                            }
                          }
                        }
                    },
                    plugins: {
                        excluded: new FormValidation.plugins.Excluded({
                            excluded: function (field, ele, eles) {
                                /*const phone    = formAuthentication.querySelector('[name="phone"]');
                                const phoneVal = phone ? phone.value : '';                

                                return ((field === 'phone_code_country_code' && phoneVal === ''));*/

                                const phone    = formAuthentication.querySelector('[name="phone"]');
                                const phoneVal = phone ? phone.value : '';

                                const firstLanguage         = formAuthentication.querySelector('[name="first_language_id"]');
                                const firstLanguageIsOther  = firstLanguage 
                                                                ? (firstLanguage.selectedOptions[0].hasAttribute('is_other')
                                                                    ? firstLanguage.selectedOptions[0].getAttribute('is_other')
                                                                    : '') 
                                                                : '';

                                const secondLanguage        = formAuthentication.querySelector('[name="second_language_id"]');
                                const secondLanguageIsOther = secondLanguage 
                                                                ? (secondLanguage.selectedOptions[0].hasAttribute('is_other')
                                                                    ? secondLanguage.selectedOptions[0].getAttribute('is_other')
                                                                    : '') 
                                                                : '';

                                const hasSibling            = formAuthentication.querySelector('[name="has_sibling"]');
                                const hasSiblingValue       = hasSibling ? hasSibling.selectedOptions[0].value : '';                                

                                return ((field === 'phone_code_country_code' && phoneVal === '')
                                          || (field === 'first_language_specify' && (firstLanguageIsOther === 'n' || firstLanguageIsOther === ''))
                                          || (field === 'second_language_specify' && (secondLanguageIsOther === 'n' || secondLanguageIsOther === ''))
                                          || (field === 'sibling_count' && (hasSiblingValue === 'n' || hasSiblingValue === ''))
                                          );
                            },
                        }),
                        trigger: new FormValidation.plugins.Trigger(),
                        bootstrap5: new FormValidation.plugins.Bootstrap5({
                            eleValidClass: '',
                            rowSelector: '.mb-3'
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