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
                        title: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter an activity name'
                                },
                                stringLength: {
                                    min: 2,
                                    max: 255,
                                    message: 'The activity name should be more than 2 characters and less than 255 characters',
                                },
                            }
                        },
                        from_age: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter a lower limit of age'
                                },
                                digits: {
                                    message: 'The age lower limit should only contain digits'
                                },
                                stringLength: {
                                  min: 1,
                                  max: 3,
                                  message: 'The age lower limit should be between 1 and 3 digits'
                                }
                            }
                        },
                        to_age: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter an upper limit of age'
                                },
                                digits: {
                                    message: 'The age upper limit should only contain digits'
                                },
                                stringLength: {
                                  min: 1,
                                  max: 3,
                                  message: 'The age upper limit should be between 1 and 3 digits'
                                }
                            }
                        },
                        age_type: {
                            validators: {
                                notEmpty: {
                                    message: 'Please select an age in'
                                }
                            }
                        },
                        stime: {
                            validators: {
                                notEmpty: {
                                    message: 'Please select start time'
                                }
                            }
                        },
                        etime: {
                            validators: {
                                notEmpty: {
                                    message: 'Please select end time'
                                }
                            }
                        },
                        status: {
                            validators: {
                                notEmpty: {
                                    message: 'Please select a status'
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