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
                      father_fname: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the first name of the father'
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: 'The first name should be between 2 and 255 characters length'
                          }
                        }
                      },
                      father_lname: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the last name of the father'
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: 'The last name of the father should be between 2 and 255 characters length'
                          }
                        }
                      },
                      father_email: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the email address of the father'
                          },
                          emailAddress: {
                              message: 'The the email address should be a valid one'
                          },
                          stringLength: {
                              min: 6,
                              max: 255,
                              message: 'The the email address should be between 6 characters and 255 characters'
                          }
                        }
                      },
                      father_mobile: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the mobile number of the father'
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
                      father_phone: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the phone number of the father'
                          },
                          digits: {
                              message: 'The phone number should only contain digits'
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: 'The phone number should be between 6 and 10 digits'
                          }
                        }
                      },
                      father_work_tel: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the work telephone number of the father'
                          },
                          digits: {
                              message: 'The work telephone number should only contain digits'
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: 'The work telephone number should be between 6 and 10 digits'
                          }
                        }
                      },
                      father_company: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the company detail of the father'
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: 'The company detail should be between 2 and 255 characters length'
                          }
                        }
                      },
                      father_address: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the father\'s address'
                          },
                          stringLength: {
                            min: 2,
                            max: 2000,
                            message: 'The address should be between 2 and 2000 characters length'
                          }
                        }
                      },
                      mother_fname: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the first name of the mother'
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: 'The first name should be between 2 and 255 characters length'
                          }
                        }
                      },
                      mother_lname: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the last name of the mother'
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: 'The last name should be between 2 and 255 characters length'
                          }
                        }
                      },
                      mother_email: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the email address of the mother'
                          },
                          emailAddress: {
                              message: 'The mother\'s email address should be a valid one'
                          },
                          stringLength: {
                              min: 6,
                              max: 255,
                              message: 'The email address should be between 6 characters and 255 characters'
                          }
                        }
                      },
                      mother_mobile: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the mobile number of the mother'
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
                      mother_phone: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the phone number of the mother'
                          },
                          digits: {
                              message: 'The phone number should only contain digits'
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: 'The phone number should be between 6 and 10 digits'
                          }
                        }
                      },
                      mother_work_tel: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the work telephone number of the mother'
                          },
                          digits: {
                              message: 'The work telephone number should only contain digits'
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: 'The work telephone number should be between 6 and 10 digits'
                          }
                        }
                      },
                      mother_company: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the company detail of the mother'
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: 'The company detail should be between 2 and 255 characters length'
                          }
                        }
                      },
                      mother_address: {
                        validators: {
                          notEmpty: {
                            message: 'Please, provide the address of the mother'
                          },
                          stringLength: {
                            min: 2,
                            max: 2000,
                            message: 'The address should be between 2 and 2000 characters length'
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