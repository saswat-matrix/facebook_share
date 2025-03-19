if(FormValidation.formValidation){
    // If jquery form validate function does not exist, proceed with JS FormValidation (https://formvalidation.io) library
    /* JS FormValidation Code */

    'use strict';
    const formAuthentication = document.querySelector('#' + $dynamicFormId);

    document.addEventListener('DOMContentLoaded', function (e) {
        (function () {
            // Form validation for Add new record
            if (formAuthentication) {
                const fv = FormValidation.formValidation(formAuthentication, {
                    fields: {
                        fname: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter the first name'
                                },
                                stringLength: {
                                    min: 2,
                                    max: 255,
                                    message: 'First name should be between 2 characters and 255 characters'
                                }
                            }
                        },
                        lname: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter the last name'
                                },
                                stringLength: {
                                    min: 2,
                                    max: 255,
                                    message: 'Last name should be between 2 characters and 255 characters'
                                }
                            }
                        },
                        email: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter an email'
                                },
                                emailAddress: {
                                    message: 'Please enter a valid email address'
                                },
                                stringLength: {
                                    min: 6,
                                    max: 255,
                                    message: 'Email should be between 6 characters and 255 characters'
                                }
                            }
                        },
                        mobile: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter your contact number'
                                },
                                digits: {
                                    message: 'Phone Number should only contain digits'
                                },
                                stringLength: {
                                    min: 6,
                                    max: 14,
                                    message: 'Phone Number should be between 6 and 14 digits'
                                }
                            }
                        },
                        city: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter your city'
                                },
                                stringLength: {
                                    min: 2,
                                    max: 255,
                                    message: 'City should be between 2 characters and 255 characters'
                                }
                            }
                        },
                        role: {
                            validators: {
                                notEmpty: {
                                    message: 'Please select the role'
                                }
                            }
                        },
                        status: {
                            validators: {
                                notEmpty: {
                                    message: 'Please select the status'
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
            }
        })();
    });
} else if($.fn.validate) {
    // If jquery form validate function exists, proceed with form validate method
    /* Jquery Form Validate Validation Code */
    $(document).ready(function(){
        $('#' + $dynamicFormId).validate({
            rules: {
                fname: {
                    required    : true
                },
                lname: {
                    required    : true
                },
                email: {
                    required    : true,
                    email       : true
                },
                mobile: {
                    required    : true,
                    number      : true,
                    minlength   : 8,
                    maxlength   : 10
                },
                city: {
                    required    : true
                }
            },
            messages: {
                fname: {
                    required    : "Please, provide a first name"
                },
                lname: {
                    required    : "Please, provide a last name"
                },
                email: {
                    required    : "Please, provide an email",
                    email       : "Please, provide a valid email"
                },
                mobile: {
                    required    : "Please provide your contact number",
                    number      : "Contact number must be in digits",
                    minlength   : "Contact number must be atleast 8 digits long",
                    maxlength   : "Contact number must not exceed 10 digits long"
                },
                city: {
                    required    : "Please provide your city",
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

