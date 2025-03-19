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
                        name: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_name_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    max: 255,
                                    message: $('#js_validation_name_stringLength').val()
                                }
                            }
                        },
                        username: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_username_notEmpty').val()
                                },
                                stringLength: {
                                    min: 3,
                                    max: 255,
                                    message: $('#js_validation_username_stringLength').val()
                                }
                            }
                        },
                        email: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_email_notEmpty').val()
                                },
                                emailAddress: {
                                    message: $('#js_validation_email_emailAddress').val()
                                },
                                stringLength: {
                                    min: 6,
                                    max: 255,
                                    message: $('#js_validation_email_stringLength').val()
                                }
                            }
                        },
                        password: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_password_notEmpty').val()
                                },
                                stringLength: {
                                    min: 6,
                                    message: $('#js_validation_password_stringLength').val()
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
                        mobile: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_mobile_notEmpty').val()
                                },
                                digits: {
                                    message: $('#js_validation_mobile_digits').val()
                                },
                                stringLength: {
                                    min: 6,
                                    max: 10,
                                    message: $('#js_validation_mobile_stringLength').val()
                                }
                            }
                        },
                        address: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_address_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    max: 2000,
                                    message: $('#js_validation_address_stringLength').val()
                                }
                            }
                        },
                        postal_code: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_postal_code_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    max: 10,
                                    message: $('#js_validation_postal_code_stringLength').val()
                                }
                            }
                        },
                        city: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_city_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    max: 255,
                                    message: $('#js_validation_city_stringLength').val()
                                }
                            }
                        },
                        terms_conditions: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_terms_conditions_notEmpty').val()
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

