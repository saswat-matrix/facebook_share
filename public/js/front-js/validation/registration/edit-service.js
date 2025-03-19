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
                      lunch_terms: {
                          validators: {
                              notEmpty: {
                                  message: 'Please select a term'
                              }
                          }
                      },
                      'lunch_days[]': {
                          validators: {
                              notEmpty: {
                                  message: 'Please select a day'
                              }
                          }
                      },
                      transport_type: {
                          validators: {
                              notEmpty: {
                                  message: 'Please select a transport type'
                              }
                          }
                      },
                      transport_area: {
                          validators: {
                              notEmpty: {
                                  message: 'Please enter area'
                              },
                              stringLength: {
                                min: 2,
                                max: 2000,
                                message: 'The area details should be between 2 and 2000 characters'
                              }
                          }
                      },
                      transport_street_name: {
                          validators: {
                              notEmpty: {
                                  message: 'Please enter a street name'
                              },
                              stringLength: {
                                min: 2,
                                max: 2000,
                                message: 'The street name should be between 2 and 2000 characters'
                              }
                          }
                      },
                      transport_building_name: {
                          validators: {
                              notEmpty: {
                                  message: 'Please enter a building name'
                              },
                              stringLength: {
                                min: 2,
                                max: 2000,
                                message: 'The building name should be between 2 and 2000 characters'
                              }
                          }
                      }
                    },
                    plugins: {
                        excluded: new FormValidation.plugins.Excluded({
                            excluded: function (field, ele, eles) {
                                const lunchEffectiveStarting     = document.querySelector('[name="lunch_effective_starting"]');
                                const lunchEffectiveStartingVal  = lunchEffectiveStarting ? lunchEffectiveStarting.value : '';
                                const transportEffectiveStarting     = document.querySelector('[name="transport_effective_starting"]');
                                const transportEffectiveStartingVal  = transportEffectiveStarting ? transportEffectiveStarting.value : '';

                                return ((field === 'lunch_terms[]' && lunchEffectiveStartingVal === '') 
                                          || (field === 'lunch_days[]' && lunchEffectiveStartingVal === '')
                                          || (field === 'lunch_effective_starting' && lunchEffectiveStartingVal !== '')
                                          || (field === 'transport_type' && transportEffectiveStartingVal === '') 
                                          || (field === 'transport_area' && transportEffectiveStartingVal === '')
                                          || (field === 'transport_street_name' && transportEffectiveStartingVal === '')
                                          || (field === 'transport_building_name' && transportEffectiveStartingVal === '')
                                          || (field === 'transport_effective_starting' && transportEffectiveStartingVal !== ''));
                            },
                        }),
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