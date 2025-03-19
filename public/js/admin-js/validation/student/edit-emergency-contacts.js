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
                      ec1_fname: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ec1_fname_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_ec1_fname_stringLength').val()
                          }
                        }
                      },
                      ec1_lname: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ec1_lname_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_ec1_lname_stringLength').val()
                          }
                        }
                      },
                      ec1_relationship: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ec1_relationship_notEmpty').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 255,
                            message: $('#js_validation_ec1_relationship_stringLength').val()
                          }
                        }
                      },
                      ec1_relationship_with_parents: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ec1_relationship_with_parents_notEmpty').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 255,
                            message: $('#js_validation_ec1_relationship_with_parents_stringLength').val()
                          }
                        }
                      },
                      ec1_phone_code_country_code: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ec1_phone_code_country_code_notEmpty').val()
                          }
                        }
                      },
                      ec1_mobile: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ec1_mobile_notEmpty').val()
                          },
                          digits: {
                              message: $('#js_validation_ec1_mobile_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_ec1_mobile_stringLength').val()
                          }
                        }
                      },
                      ec1_phone: {
                        validators: {
                          digits: {
                            message: $('#js_validation_ec1_phone_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_ec1_phone_stringLength').val()
                          }
                        }
                      },
                      ec2_fname: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ec2_fname_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_ec2_fname_stringLength').val()
                          }
                        }
                      },
                      ec2_lname: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ec2_lname_notEmpty').val()
                          },
                          stringLength: {
                            min: 2,
                            max: 255,
                            message: $('#js_validation_ec2_lname_stringLength').val()
                          }
                        }
                      },
                      ec2_relationship: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ec2_relationship_notEmpty').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 255,
                            message: $('#js_validation_ec2_relationship_stringLength').val()
                          }
                        }
                      },
                      ec2_relationship_with_parents: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ec2_relationship_with_parents_notEmpty').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 255,
                            message: $('#js_validation_ec2_relationship_with_parents_stringLength').val()
                          }
                        }
                      },
                      ec2_phone_code_country_code: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ec2_phone_code_country_code_notEmpty').val()
                          }
                        }
                      },
                      ec2_mobile: {
                        validators: {
                          notEmpty: {
                            message: $('#js_validation_ec2_mobile_notEmpty').val()
                          },
                          digits: {
                            message: $('#js_validation_ec2_mobile_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_ec2_mobile_stringLength').val()
                          }
                        }
                      },
                      ec2_phone: {
                        validators: {
                          digits: {
                            message: $('#js_validation_ec2_phone_digits').val()
                          },
                          stringLength: {
                            min: 6,
                            max: 10,
                            message: $('#js_validation_ec2_phone_stringLength').val()
                          }
                        }
                      }
                    },
                    plugins: {
                        excluded: new FormValidation.plugins.Excluded({
                            excluded: function (field, ele, eles) {
                                const ec2Fname                = document.querySelector('[name="ec2_fname"]');
                                const ec2FnameVal             = ec2Fname ? ec2Fname.value : '';

                                const ec2Lname                = document.querySelector('[name="ec2_lname"]');
                                const ec2LnameVal             = ec2Lname ? ec2Lname.value : '';

                                const ec2Relationship         = document.querySelector('[name="ec2_relationship"]');
                                const ec2RelationshipVal      = ec2Relationship ? ec2Relationship.value : '';

                                const ec2Mobile               = document.querySelector('[name="ec2_mobile"]');
                                const ec2MobileVal            = ec2Mobile ? ec2Mobile.value : '';

                                return ((field === 'ec2_lname' && ec2FnameVal === '') 
                                          || (field === 'ec2_relationship' && ec2FnameVal === '')
                                          || (field === 'ec2_mobile' && ec2FnameVal === '')
                                          || (field === 'ec2_fname' && ec2FnameVal === ''));
                            },
                        }),
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

                /*let enabled = false;
                formAuthentication.querySelector('[id^="sport_"]').addEventListener('input', function (e) {
                    index      = e.target.id.split('_')[1];
                    sport      = e.target.value;


                    if (sport === '' && enabled) {
                        enabled = false;
                        fv.disableValidator('id^="sport-entity_' + index + '"').disableValidator('id^="sport-price_' + index + '"');
                    } else if (sport != '' && !enabled) {
                        enabled = true;
                        fv.enableValidator('id^="sport-entity_' + index + '"').enableValidator('id^="sport-price_' + index + '"');
                    }

                    if (sport !== '' && enabled) {
                        fv.revalidateField('id^="sport-entity_' + index + '"').revalidateField('id^="sport-price_' + index + '"');
                    }
                });*/
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