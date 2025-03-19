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
                        current_password: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_current_password_notEmpty').val()
                                }
                            }
                        },
                        new_password: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_new_password_notEmpty').val()
                                },
                                stringLength: {
                                    min: 6,
                                    message: $('#js_validation_new_password_stringLength').val()
                                }
                            }
                        },
                        confirm_password: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_confirm_password_notEmpty').val()
                                },
                                identical: {
                                    compare: function () {
                                      return formAuthentication.querySelector('[name="new_password"]').value;
                                    },
                                    message: $('#js_validation_confirm_password_identical').val()
                                },
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
                current_password: {
                    required    : true
                },
                new_password: {
                    required    : true,
                    minlength   : 6
                },
                confirm_password: {
                    required    : true,
                    equalTo     : "#new_password"
                }
            },
            messages: {
                current_password: {
                    required    : "Please, provide current password"
                },
                new_password: {
                    required    : "Please, provide a new password",
                    minlength   : "New password should be at least six characters"
                },
                confirm_password: {
                    required    : "Please, re-enter the new password",
                    equalTo     : "Password and confirm password do not match"
                }
            },
            errorPlacement: function (error, element) {
                error.insertAfter($(element));
            },
            errorPlacement: function (error, element) {
                //alert($(element).prop('type') + ' name: ' + $(element).prop('name'));            
                if($(element).prop('type') === 'password')
                {
                    if($(element).prop('name') === 'current_password') {
                        error.insertAfter($('.current_password'));
                    } else if($(element).prop('name') === 'new_password') {
                        error.insertAfter($('.new_password'));
                    } else if($(element).prop('name') === 'confirm_password') {
                        error.insertAfter($('.confirm_password'));
                    }
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

