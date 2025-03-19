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
                      family_physician_name: {
                          validators: {
                              stringLength: {
                                min: 2,
                                max: 255,
                                message: 'The physician\'s name should be between 2 and 255 characters'
                              }
                          }
                      },
                      family_physician_clinic: {
                          validators: {
                              notEmpty: {
                                  message: 'Please enter physician\'s clinic name'
                              },
                              stringLength: {
                                min: 2,
                                max: 255,
                                message: 'The clinic name should be between 2 and 255 characters'
                              }
                          }
                      },
                      family_physician_contact_number: {
                          validators: {
                              notEmpty: {
                                  message: 'Please enter physician\'s contact number'
                              },
                              digits: {
                                  message: 'The contact number should only contain digits'
                              },
                              stringLength: {
                                min: 6,
                                max: 10,
                                message: 'The contact number should be between 6 and 10 digits'
                              }
                          }
                      },
                      allergy_comment: {
                          validators: {
                              notEmpty: {
                                  message: 'Please enter comment about the child\'s allergy'
                              },
                              stringLength: {
                                min: 2,
                                max: 2000,
                                message: 'The comment regarding allergy should be between 2 and 2000 characters'
                              }
                          }
                      },
                      vision_hearing_problem_comment: {
                          validators: {
                              notEmpty: {
                                  message: 'Please enter comment about the child\'s vision or hearing problem'
                              },
                              stringLength: {
                                min: 2,
                                max: 2000,
                                message: 'The comment regarding vision or hearing problem should be between 2 and 2000 characters'
                              }
                          }
                      },
                      special_disability_comment: {
                          validators: {
                              notEmpty: {
                                  message: 'Please enter comment about the child\'s special disability'
                              },
                              stringLength: {
                                min: 2,
                                max: 2000,
                                message: 'The comment regarding the special disability should be between 2 and 2000 characters'
                              }
                          }
                      },
                      blood_type: {
                          validators: {
                              notEmpty: {
                                  message: 'Please select a blood type'
                              }
                          }
                      }
                    },
                    plugins: {
                        excluded: new FormValidation.plugins.Excluded({
                            excluded: function (field, ele, eles) {
                                const familyPhysicianName     = document.querySelector('[name="family_physician_name"]');
                                const familyPhysicianNameVal  = familyPhysicianName ? familyPhysicianName.value : '';

                                const allergy                 = document.querySelector('[name="allergy"]:checked');
                                const allergyVal              = allergy ? allergy.value : '';

                                const visionHearingProblem    = document.querySelector('[name="vision_hearing_problem"]:checked');
                                const visionHearingProblemVal = visionHearingProblem ? visionHearingProblem.value : '';

                                const specialDisability       = document.querySelector('[name="special_disability"]:checked');
                                const specialDisabilityVal    = specialDisability ? specialDisability.value : '';

                                return ((field === 'family_physician_clinic' && familyPhysicianNameVal === '') 
                                          || (field === 'family_physician_contact_number' && familyPhysicianNameVal === '')
                                          || (field === 'family_physician_name' && familyPhysicianNameVal !== '')
                                          || (field === 'allergy_comment' && (allergyVal === '' || allergyVal === 'n'))
                                          || (field === 'vision_hearing_problem_comment' 
                                                  && (visionHearingProblemVal === '' || visionHearingProblemVal === 'n'))
                                          || (field === 'special_disability_comment' 
                                                  && (specialDisabilityVal === '' || specialDisabilityVal === 'n')));
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