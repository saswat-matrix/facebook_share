/*function descSetData() {
    var myEditor = document.querySelector('#desc-editor');
    if(myEditor.children[0].innerHTML === '<h6><br></h6>') {
        $('#desc').val('');
    } else {
        $('#desc').val(myEditor.children[0].innerHTML);
    }

/*$(document).ready(function() {
// --------------------------------------------------------------------
    const snowEditor = new Quill('#desc-editor', {
        bounds: '#desc-editor',
        modules: {
            formula: true,
            toolbar: '#desc-toolbar'
        },
        theme: 'snow'
    });
});*/

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
                                    message: 'Please enter a venue name'
                                },
                                stringLength: {
                                    min: 2,
                                    max: 255,
                                    message: 'The name should be more than 2 characters and less than 255 characters',
                                },
                            }
                        },
                        'active_days[]': {
                            validators: {
                                notEmpty: {
                                    message: 'Please select days when the venue remains opened'
                                }
                            }
                        },
                        'amenity[]': {
                            validators: {
                                notEmpty: {
                                    message: 'Please select amenities'
                                }
                            }
                        },
                        'sport[]': {
                            validators: {
                                notEmpty: {
                                    message: 'Please select a sport'
                                }
                            }
                        },
                        location: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter a location'
                                },
                                stringLength: {
                                    min: 2,
                                    max: 255,
                                    message: 'The location should be more than 2 characters and less than 255 characters',
                                },
                            }
                        },
                        price: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter the price'
                                }
                            }
                        },
                        desc: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter the about information'
                                },
                                stringLength: {
                                    min: 2,
                                    max: 3000,
                                    message: 'The about information should be more than 2 characters and less than 3000 characters',
                                },
                            }
                        },
                        booking_status: {
                            validators: {
                                notEmpty: {
                                    message: 'Please select a booking status'
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

                /*formAuthentication.querySelector('[name="status"]').addEventListener('click', function (e) {
                    const statusValue = e.target.value;
                    //fv.enableFieldValidators('status', true);
                    if(statusValue === '') {
                        fv.enableValidator('status');
                        fv.revalidateField('status');
                    } else if(statusValue !== '') {
                        fv.disableValidator('status');
                    }
                });*/
            }
        })();
    });

                /*document.getElementById('status')?.addEventListener('change', function (e) {
                    //fv.enableFieldValidators('status', true);
                    fv.enableValidator('status');
                    fv.revalidateField('confirmPassword');
                });*/
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

