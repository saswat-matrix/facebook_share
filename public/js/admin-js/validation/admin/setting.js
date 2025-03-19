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
                        site_name: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_site_name_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    max: 255,
                                    message: $('#js_validation_site_name_stringLength').val()
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
                                    max: 14,
                                    message: $('#js_validation_mobile_stringLength').val()
                                }
                            }
                        },
                        fax: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_fax_notEmpty').val()
                                },
                                digits: {
                                    message: $('#js_validation_fax_digits').val()
                                },
                                stringLength: {
                                    min: 6,
                                    max: 14,
                                    message: $('#js_validation_fax_stringLength').val()
                                }
                            }
                        },
                        phone: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_phone_notEmpty').val()
                                },
                                digits: {
                                    message: $('#js_validation_phone_digits').val()
                                },
                                stringLength: {
                                    min: 6,
                                    max: 14,
                                    message: $('#js_validation_phone_stringLength').val()
                                }
                            }
                        },
                        phone_2: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_phone_2_notEmpty').val()
                                },
                                digits: {
                                    message: $('#js_validation_phone_2_digits').val()
                                },
                                stringLength: {
                                    min: 6,
                                    max: 14,
                                    message: $('#js_validation_phone_2_stringLength').val()
                                }
                            }
                        },
                        term_and_condition_details: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_term_and_condition_details_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    message: $('#js_validation_term_and_condition_details_stringLength').val()
                                }
                            }
                        },
                        bank_details: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_bank_details_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    message: $('#js_validation_bank_details_stringLength').val()
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
                                    message: $('#js_validation_address_stringLength').val()
                                }
                            }
                        },
                        site_name_fr: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_site_name_fr_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    max: 255,
                                    message: $('#js_validation_site_name_fr_stringLength').val()
                                }
                            }
                        },
                        term_and_condition_details_fr: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_term_and_condition_details_fr_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    message: $('#js_validation_term_and_condition_details_fr_stringLength').val()
                                }
                            }
                        },
                        bank_details_fr: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_bank_details_fr_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    message: $('#js_validation_bank_details_fr_stringLength').val()
                                }
                            }
                        },
                        address_fr: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_address_fr_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    message: $('#js_validation_address_fr_stringLength').val()
                                }
                            }
                        },
                        payment_mode: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_payment_mode_notEmpty').val()
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

