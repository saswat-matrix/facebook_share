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
                        ec1_fname: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide first name of the first emergency contact person'
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: 'The first name should be between 2 and 255 characters length'
                            }
                          }
                        },
                        ec1_lname: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide last name of the first emergency contact person'
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: 'The last name should be between 2 and 255 characters length'
                            }
                          }
                        },
                        ec1_relationship: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide the relationship of the first emergency contact person with the child'
                            },
                            stringLength: {
                                min: 6,
                                max: 255,
                                message: 'The relationship with the child should be between 6 characters and 255 characters'
                            }
                          }
                        },
                        ec1_mobile: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide the first emergency contact person\'s mobile number'
                            },
                            digits: {
                                message: 'The mobile number should only contain digits'
                            },
                            stringLength: {
                              min: 6,
                              max: 10,
                              message: 'The mobile number should be between 6 and 10 digits'
                            }
                          }
                        },
                        ec2_fname: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide first name of the second emergency contact person'
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: 'The first name should be between 2 and 255 characters length'
                            }
                          }
                        },
                        ec2_lname: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide last name of the second emergency contact person'
                            },
                            stringLength: {
                              min: 2,
                              max: 255,
                              message: 'The last name should be between 2 and 255 characters length'
                            }
                          }
                        },
                        ec2_relationship: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide the relationship of the second emergency contact person with the child'
                            },
                            stringLength: {
                                min: 6,
                                max: 255,
                                message: 'The relationship with the child should be between 6 characters and 255 characters'
                            }
                          }
                        },
                        ec2_mobile: {
                          validators: {
                            notEmpty: {
                              message: 'Please, provide the second emergency contact person\'s mobile number'
                            },
                            digits: {
                                message: 'The mobile number should only contain digits'
                            },
                            stringLength: {
                              min: 6,
                              max: 10,
                              message: 'The mobile number should be between 6 and 10 digits'
                            }
                          }
                        },
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