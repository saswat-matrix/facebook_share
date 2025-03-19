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
                            message: $('#js_validation_father_fname_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_father_fname_stringLength').val()
                          }
                        }
                      },
                      father_lname: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_father_lname_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_father_lname_stringLength').val()
                          }
                        }
                      },
                      father_email: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_father_email_notEmpty').val()
                          },
                          emailAddress: {
                              message: $('#js_validation_father_email_emailAddress').val()
                          },
                          stringLength: {
                              min: 6,
                              max: 255,
                              message: $('#js_validation_father_email_stringLength').val()
                          }
                        }
                      },
                      father_phone_code_country_code: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_father_phone_code_country_code_notEmpty').val()
                          }
                        }
                      },
                      father_mobile: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_father_mobile_notEmpty').val()
                          },
                          digits: {
                              message: $('#js_validation_father_mobile_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_father_mobile_stringLength').val()
                          }
                        }
                      },
                      father_phone: {
                        validators: {
                          digits: {
                              message: $('#js_validation_father_phone_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_father_phone_stringLength').val()
                          }
                        }
                      },
                      father_work_tel: {
                        validators: {
                          digits: {
                              message: $('#js_validation_father_work_tel_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_father_work_tel_stringLength').val()
                          }
                        }
                      },
                      father_company: {
                        validators: {
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_father_company_stringLength').val()
                          }
                        }
                      },
                      father_address: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_father_address_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 2000,
                            message: $('#js_validation_father_address_stringLength').val()
                          }
                        }
                      },
                      father_po_box: {
                        validators: {
                          stringLength: {
                            min: 2,
                            max: 20,
                            message: $('#js_validation_father_po_box_stringLength').val()
                          }
                        }
                      },
                      father_citizenship_id: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_father_citizenship_id_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_father_citizenship_id_stringLength').val()
                          }
                        }
                      },
                      mother_fname: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_mother_fname_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_mother_fname_stringLength').val()
                          }
                        }
                      },
                      mother_lname: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_mother_lname_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_mother_lname_stringLength').val()
                          }
                        }
                      },
                      mother_email: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_mother_email_notEmpty').val()
                          },
                          emailAddress: {
                              message: $('#js_validation_mother_email_emailAddress').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 255,
                            message: $('#js_validation_mother_email_stringLength').val()
                          }
                        }
                      },
                      mother_phone_code_country_code: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_mother_phone_code_country_code_notEmpty').val()
                          }
                        }
                      },
                      mother_mobile: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_mother_mobile_notEmpty').val()
                          },
                          digits: {
                              message: $('#js_validation_mother_mobile_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_mother_mobile_stringLength').val()
                          }
                        }
                      },
                      mother_phone: {
                        validators: {
                          digits: {
                              message: $('#js_validation_mother_phone_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_mother_phone_stringLength').val()
                          }
                        }
                      },
                      mother_work_tel: {
                        validators: {
                          digits: {
                            message: $('#js_validation_mother_work_tel_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_mother_work_tel_stringLength').val()
                          }
                        }
                      },
                      mother_company: {
                        validators: {
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_mother_company_stringLength').val()
                          }
                        }
                      },
                      mother_address: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_mother_address_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 2000,
                            message: $('#js_validation_mother_address_stringLength').val()
                          }
                        }
                      },
                      mother_po_box: {
                        validators: {
                          stringLength: {
                            min: 2,
                            max: 20,
                            message: $('#js_validation_mother_po_box_stringLength').val()
                          }
                        }
                      },
                      mother_citizenship_id: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_mother_citizenship_id_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_mother_citizenship_id_stringLength').val()
                          }
                        }
                      }
                    },
                    plugins: {
                        trigger: new FormValidation.plugins.Trigger(),
                        bootstrap5: new FormValidation.plugins.Bootstrap5({
                            eleValidClass: '',
                            rowSelector: '.col-sm-12'
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