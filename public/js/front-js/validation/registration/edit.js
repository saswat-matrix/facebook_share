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
                              message: 'Please, provide first name'
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: 'The first name should be between 2 and 255 characters length'
                            }
                          }
                        },
                        mname: {
                          validators: {
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: 'The middle name should be between 2 and 255 characters length'
                            }
                          }
                        },
                        lname: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide last name'
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: 'The last name should be between 2 and 255 characters length'
                            }
                          }
                        },
                        pname: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide any preferred name'
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: 'The preferred name should be between 2 and 255 characters length'
                            }
                          }
                        },
                        phone: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide the residence phone number'
                            },
                            digits: {
                                message: 'The residence phone Number should only contain digits'
                            },
                            stringLength: {
                              min: 6,
                              max: 10,
                              message: 'The residence phone number name should be between 6 and 10 digits'
                            }
                          }
                        },
                        address: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide the residence address'
                            },
                            stringLength: {
                              min: 2,
                              max: 2000,
                              message: 'The residence address name should be between 2 and 2000 characters length'
                            }
                          }
                        },
                        dob: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide the date of birth'
                            }
                          }
                        },
                        pob: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide the place of birth'
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: 'The place of birth name should be between 2 and 255 characters length'
                            }
                          }
                        },
                        gender: {
                          validators: {
                            notEmpty: {
                              message: 'Please, select a gender'
                            }
                          }
                        },
                        nationality: {
                          validators: {
                            notEmpty: {
                              message: 'Please, select a nationality'
                            }
                          }
                        },
                        religion: {
                          validators: {
                            notEmpty: {
                              message: 'Please, select a religion'
                            }
                          }
                        },
                        uae_id: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide UAE ID'
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: 'The  UAE ID should be between 2 and 255 characters length'
                            }
                          }
                        }
                    },
                    plugins: {
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