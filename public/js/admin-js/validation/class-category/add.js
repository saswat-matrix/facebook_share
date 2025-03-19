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
                        title: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_title_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    max: 255,
                                    message: $('#js_validation_title_stringLength').val()
                                }
                            }
                        },
                        from_age: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_from_age_notEmpty').val()
                                },
                                digits: {
                                    message: $('#js_validation_from_age_digits').val()
                                },
                                stringLength: {
                                  min: 1,
                                  max: 3,
                                  message: $('#js_validation_from_age_stringLength').val()
                                }
                            }
                        },
                        to_age: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_to_age_notEmpty').val()
                                },
                                digits: {
                                    message: $('#js_validation_to_age_digits').val()
                                },
                                stringLength: {
                                  min: 1,
                                  max: 3,
                                  message: $('#js_validation_to_age_stringLength').val()
                                }
                            }
                        },
                        age_type: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_age_type_notEmpty').val()
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

