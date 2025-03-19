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
                        particular_id: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_particular_id_notEmpty').val()
                                }
                            }
                        },
                        academic_year_id: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_academic_year_id_notEmpty').val()
                                }
                            }
                        },
                        amount: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_amount_notEmpty').val()
                                },
                                numeric: {
                                    thousandsSeparator: '',
                                    decimalSeparator: '.',
                                    message: $('#js_validation_amount_numeric').val()
                                    // The default separators
                                }
                            }
                        },
                        age_specific: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_age_specific_notEmpty').val()
                                }
                            }
                        },
                        from_age_in_month: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_from_age_in_month_notEmpty').val()
                                }
                            }
                        },
                        to_age_in_month: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_to_age_in_month_notEmpty').val()
                                }
                            }
                        },
                        time_specific: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_time_specific_notEmpty').val()
                                }
                            }
                        },
                        academic_year_timing_id: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_academic_year_timing_id_notEmpty').val()
                                }
                            }
                        },
                        stime: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_stime_notEmpty').val()
                                }
                            }
                        },
                        etime: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_etime_notEmpty').val()
                                }
                            }
                        },
                        transport_specific: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_transport_specific_notEmpty').val()
                                }
                            }
                        },
                        transport_type: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_transport_type_notEmpty').val()
                                }
                            }
                        },
                        description: {
                            validators: {
                                stringLength: {
                                    max: 2000,
                                    message: $('#js_validation_description_stringLength').val()
                                },
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
                        trigger         : new FormValidation.plugins.Trigger(),
                        bootstrap5      : new FormValidation.plugins.Bootstrap5({
                                            eleValidClass: '',
                                            rowSelector: '.mb-3'
                                        }),
                        submitButton    : new FormValidation.plugins.SubmitButton(),

                        defaultSubmit   : new FormValidation.plugins.DefaultSubmit(),
                        autoFocus       : new FormValidation.plugins.AutoFocus(),
                        excluded        : new FormValidation.plugins.Excluded({
                                            excluded: function (field, ele, eles) {
                                                const ageSpecific             = formAuthentication.querySelector('[name="age_specific"]:checked');
                                                const ageSpecificVal          = ageSpecific ? ageSpecific.value : '';

                                                const fromAgeInMonth          = formAuthentication.querySelector('[name="from_age_in_month"]');
                                                const fromAgeInMonthVal       = fromAgeInMonth ? fromAgeInMonth.value : '';

                                                const toAgeInMonth            = formAuthentication.querySelector('[name="to_age_in_month"]');
                                                const toAgeInMonthVal         = toAgeInMonth ? toAgeInMonth.value : '';

                                                const timeSpecific            = formAuthentication.querySelector('[name="time_specific"]:checked');
                                                const timeSpecificVal         = timeSpecific ? timeSpecific.value : '';

                                                const academicYearTiming      = formAuthentication.querySelector('[name="academic_year_timing_id"]');
                                                const academicYearTimingVal   = academicYearTiming ? academicYearTiming.value : '';

                                                const sTime                   = formAuthentication.querySelector('[name="stime"]');
                                                const sTimeVal                = sTime ? sTime.value : '';

                                                const eTime                   = formAuthentication.querySelector('[name="etime"]');
                                                const eTimeVal                = eTime ? eTime.value : '';

                                                const transportSpecific            = formAuthentication.querySelector('[name="transport_specific"]:checked');
                                                const transportSpecificVal         = transportSpecific ? transportSpecific.value : '';

                                                return ((field === 'from_age_in_month' && ageSpecificVal === 'n')
                                                          || (field === 'to_age_in_month' && ageSpecificVal === 'n')
                                                          || (field === 'academic_year_timing_id' && timeSpecificVal === 'n')
                                                          || (field === 'stime' && timeSpecificVal === 'n')
                                                          || (field === 'etime' && timeSpecificVal === 'n')
                                                          || (field === 'transport_type' && transportSpecificVal === 'n'));
                                            },
                                        })
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