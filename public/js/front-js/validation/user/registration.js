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
                                    message: 'Please enter your first name'
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
                                    message: 'Please enter your last name'
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
                                    message: 'Please enter your email'
                                },
                                emailAddress: {
                                    message: 'Please enter valid email address'
                                },
                                stringLength: {
                                    min: 6,
                                    max: 255,
                                    message: 'Email should be between 6 characters and 255 characters'
                                }
                            }
                        },
                        password: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter your password'
                                },
                                stringLength: {
                                    min: 6,
                                    message: 'Password should be at least six characters'
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
                        terms: {
                            validators: {
                                notEmpty: {
                                    message: 'Please agree with the terms & conditions'
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
                    required    : true,
                    minlength   : 2,
                    maxlength   : 255
                },
                lname: {
                    required    : true,
                    minlength   : 2,
                    maxlength   : 255
                },
                email: {
                    required    : true,
                    email       : true,
                    minlength   : 2,
                    maxlength   : 255
                },
                password: {
                    required    : true,
                    minlength   : 6
                },
                mobile: {
                    required    : true,
                    number      : true,
                    minlength   : 6,
                    maxlength   : 14
                },
                city: {
                    required    : true,
                    minlength   : 2,
                    maxlength   : 255
                }
            },
            messages: {
                fname: {
                    required    : "Please, provide the first name",
                    minlength   : "First name should be at least 2 characters",
                    maxlength   : "First name should not exceed 255 characters"
                },
                lname: {
                    required    : "Please, provide the last name",
                    minlength   : "Last name should be at least 2 characters",
                    maxlength   : "Last name should not exceed 255 characters"
                },
                email: {
                    required    : "Please, provide an email",
                    email       : "Please, provide a valid email",
                    minlength   : "Email should be at least 2 characters",
                    maxlength   : "Email should not exceed 255 characters"
                },
                password: {
                    required    : "Please, provide a password",
                    minlength   : "Password should be at least six characters"
                },
                mobile: {
                    required    : "Please, provide a phone number",
                    number      : "Phone number must be in digits",
                    minlength   : "Phone number must be atleast 6 digits long",
                    maxlength   : "Phone number must not exceed 14 digits long"
                },
                city: {
                    required    : "Please provide a city",
                    minlength   : "City should be at least 2 characters",
                    maxlength   : "City should not exceed 255 characters"
                }
            },
            errorPlacement: function (error, element) {
                error.insertAfter($(element));
            },
            errorPlacement: function (error, element) {
                if($(element).parent().hasClass('input-group-merge')) {
                    error.insertAfter($(element).parent());
                } else {
                    error.insertAfter($(element));
                }
            },
            submitHandler : function(form){
                form.submit();
            }
        })
    });
}

