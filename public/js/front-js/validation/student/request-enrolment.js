/**
 *  Form Wizard
 */

'use strict';

(function () {
  const select2 = $('.select2'),
    selectPicker = $('.selectpicker');

  // Wizard Validation
  // --------------------------------------------------------------------
  const wizardValidation = document.querySelector('#' + $dynamicFormId + 'Container');
  if (typeof wizardValidation !== undefined && wizardValidation !== null) {
    // Wizard form
    const wizardValidationForm = wizardValidation.querySelector('#' + $dynamicFormId);
    // Wizard steps
    const stepEnrolmentDataValidation           = wizardValidationForm.querySelector('#enrolment-data');
    const stepServiceDataValidation             = wizardValidationForm.querySelector('#service-data');
    // Wizard next prev button
    const wizardValidationNext = [].slice.call(wizardValidationForm.querySelectorAll('.btn-next'));
    const wizardValidationPrev = [].slice.call(wizardValidationForm.querySelectorAll('.btn-prev'));

    const validationStepper = new Stepper(wizardValidation, {
      linear: true
    });

    // Enrolment Data Info
    const FormValidationEnrolment = FormValidation.formValidation(stepEnrolmentDataValidation, {
      fields: {
        'enrolment_days[]': {
            validators: {
                notEmpty: {
                    message: 'Please select days'
                }
            }
        },
        enrolment_timing: {
            validators: {
                notEmpty: {
                    message: 'Please select a timing'
                }
            }
        },
        'enrolment_curriculums[]': {
            validators: {
                notEmpty: {
                    message: 'Please select curiculums'
                }
            }
        },
        enrolment_class: {
            validators: {
                notEmpty: {
                    message: 'Please select a class'
                }
            }
        },
        enrolment_year: {
            validators: {
                notEmpty: {
                    message: 'Please select a year'
                }
            }
        },
        enrolment_term: {
            validators: {
                notEmpty: {
                    message: 'Please select a term'
                }
            }
        },
        enrolment_date: {
            validators: {
                notEmpty: {
                    message: 'Please select an enrolment session year'
                }
            }
        },
        joining_date: {
            validators: {
                notEmpty: {
                    message: 'Please select a joining date'
                }
            }
        },
        enrolment_id: {
            validators: {
                notEmpty: {
                    message: 'Please enter an enrolment id'
                }
            }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-sm-6'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      // Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    // Service Data Info
    const FormValidationService = FormValidation.formValidation(stepServiceDataValidation, {
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
        },
      },
      plugins: {
        excluded: new FormValidation.plugins.Excluded({
            excluded: function (field, ele, eles) {
                const lunchEffectiveStarting     = wizardValidationForm.querySelector('[name="lunch_effective_starting"]');
                const lunchEffectiveStartingVal  = lunchEffectiveStarting ? lunchEffectiveStarting.value : '';
                const transportEffectiveStarting     = wizardValidationForm.querySelector('[name="transport_effective_starting"]');
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
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-sm-6'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      // Jump to the next step when all fields in the current step are valid
      wizardValidationForm.submit()
    });

    wizardValidationNext.forEach(item => {
      item.addEventListener('click', event => {
        // When click the Next button, we will validate the current step
        switch (validationStepper._currentIndex) {
          case 0:
            FormValidationEnrolment.validate();
            //validationStepper.next();
            break;

          case 1:
            FormValidationService.validate();
            //validationStepper.next();
            break;

          default:
            break;
        }
      });
    });

    wizardValidationPrev.forEach(item => {
      item.addEventListener('click', event => {
        switch (validationStepper._currentIndex) {
          case 1:
            validationStepper.previous();
            break;

          case 0:

          default:
            break;
        }
      });
    });
  }
})();