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
                        autoFocus: new FormValidation.plugins.AutoFocus(),
                        submitButton: new FormValidation.plugins.SubmitButton()
                        //defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                    },
                    init: instance => {
                        instance.on('plugins.message.placed', function (e) {
                            if (e.element.parentElement.classList.contains('input-group')) {
                                e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
                            }
                        });
                    }
                }).on('core.form.valid', function () {
                  // You can submit the form
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    var url      = $('#' + $dynamicFormId).attr('action');
                    var formData = new FormData($('#' + $dynamicFormId)[0]);
                    $.ajax({
                        url         : url,
                        type        : "POST",
                        data        : formData,
                        cache       : false,
                        contentType : false,
                        processData : false,
                        dataType    : 'json',
                        headers     : config,
                        beforeSend  : function() {
                                        $('.loader-without-image').show();
                                        $('.invalid-feedback').html('');
                                    },
                        success     : function (data) {
                            var status        = data.status;
                            var message       = data.message;
                            var responseData  = data.data;
                            window.location.href = $('#addAjaxReturnUrl').val() + '?status=' + encodeURIComponent(status) + '&message=' + encodeURIComponent(message);
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            var data = jqXHR.responseJSON;console.log(data);
                            if($.isEmptyObject(data.errors) == false) {
                                $.each(data.errors, function (key, value) {
                                    $('#' + key).closest('.col-sm-12').find('.invalid-feedback').html('<span class="help-block">' + value + '</span>');
                                });
                            }
                            $('.loader-without-image').hide();
                        }
                    });
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