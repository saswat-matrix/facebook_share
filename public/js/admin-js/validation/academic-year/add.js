/*function descSetData() {
    var myEditor = document.querySelector('#desc-editor');
    if(myEditor.children[0].innerHTML === '<h6><br></h6>') {
        $('#desc').val('');
    } else {
        $('#desc').val(myEditor.children[0].innerHTML);
    }
}

$(document).ready(function() {
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
                        year: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_year_notEmpty').val()
                                }
                            }
                        },
                        /*term: {
                            validators: {
                                notEmpty: {
                                    message: 'Please select a term'
                                }
                            }
                        },*/
                        sdate: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_sdate_notEmpty').val()
                                }
                            }
                        },
                        edate: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_edate_notEmpty').val()
                                }
                            }
                        },
                        sdate_booking: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_sdate_booking_notEmpty').val()
                                }
                            }
                        },
                        edate_booking: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_edate_booking_notEmpty').val()
                                }
                            }
                        },
                        sdate_of_term1: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_sdate_of_term1_notEmpty').val()
                                }
                            }
                        },
                        edate_of_term1: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_edate_of_term1_notEmpty').val()
                                }
                            }
                        },
                        sdate_of_term1_term2_break: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_sdate_of_term1_term2_break_notEmpty').val()
                                }
                            }
                        },
                        edate_of_term1_term2_break: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_edate_of_term1_term2_break_notEmpty').val()
                                }
                            }
                        },
                        sdate_of_term2: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_sdate_of_term2_notEmpty').val()
                                }
                            }
                        },
                        edate_of_term2: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_edate_of_term2_notEmpty').val()
                                }
                            }
                        },
                        sdate_of_term2_term3_break: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_sdate_of_term2_term3_break_notEmpty').val()
                                }
                            }
                        },
                        edate_of_term2_term3_break: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_edate_of_term2_term3_break_notEmpty').val()
                                }
                            }
                        },
                        sdate_of_term3: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_sdate_of_term3_notEmpty').val()
                                }
                            }
                        },
                        edate_of_term3: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_edate_of_term3_notEmpty').val()
                                }
                            }
                        },
                        /*max_students: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter maximum number of students'
                                },
                                digits: {
                                    message: 'Max. number of students should only contain digits'
                                },
                                stringLength: {
                                    min: 2,
                                    max: 3,
                                    message: 'No. of students should be between 2 and 3 digits'
                                }
                            }
                        },*/
                        max_days_per_week: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_max_days_per_week_notEmpty').val()
                                },
                                digits: {
                                    message: $('#js_validation_max_days_per_week_digits').val()
                                },
                                stringLength: {
                                  min: 1,
                                  max: 1,
                                  message: $('#js_validation_max_days_per_week_stringLength').val()
                                }
                            }
                        },
                        min_days_per_week: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_min_days_per_week_notEmpty').val()
                                },
                                digits: {
                                    message: $('#js_validation_min_days_per_week_digits').val()
                                },
                                stringLength: {
                                  min: 1,
                                  max: 1,
                                  message: $('#js_validation_min_days_per_week_stringLength').val()
                                }
                                /*numeric: {
                                    thousandsSeparator: '',
                                    decimalSeparator: '.',
                                    message: 'The value can only be numeric, specially integer in nature',
                                    // The default separators
                                }*/
                            }
                        },
                        age_limit_for_min_days_in_month: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_age_limit_for_min_days_in_month_notEmpty').val()
                                },
                                digits: {
                                    message: $('#js_validation_age_limit_for_min_days_in_month_digits').val()
                                },
                                stringLength: {
                                  min: 1,
                                  max: 3,
                                  message: $('#js_validation_age_limit_for_min_days_in_month_stringLength').val()
                                }
                            }
                        },
                        /*fee: {
                            validators: {
                                notEmpty: {
                                    message: 'Please enter fee'
                                },
                                numeric: {
                                    thousandsSeparator: '',
                                    decimalSeparator: '.',
                                    message: 'Fee can only be numeric, either integer or decimal in nature',
                                    // The default separators
                                }
                            }
                        },*/
                        'days[]': {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_days_notEmpty').val()
                                }
                            }
                        },
                        'stime[]': {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_stime_notEmpty').val()
                                }
                            }
                        },
                        'etime[]': {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_etime_notEmpty').val()
                                }
                            }
                        },
                        rules: {
                            validators: {
                                notEmpty: {
                                    message: $('#js_validation_rules_notEmpty').val()
                                },
                                stringLength: {
                                    min: 2,
                                    max: 3000,
                                    message: $('#js_validation_rules_stringLength').val()
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