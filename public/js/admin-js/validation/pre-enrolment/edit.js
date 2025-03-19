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
    const stepStudentDataValidation             = wizardValidationForm.querySelector('#student-data');
    const stepParentsDataValidation             = wizardValidationForm.querySelector('#parents-data');
    const stepEmergencyContactDataValidation    = wizardValidationForm.querySelector('#emergency-contact-data');
    const stepAuthorizedPersonDataValidation    = wizardValidationForm.querySelector('#authorized-person-data');
    const stepEnrolmentDataValidation           = wizardValidationForm.querySelector('#enrolment-data');
    //const stepCurrentDataValidation             = wizardValidationForm.querySelector('#current-data');
    const stepServiceDataValidation             = wizardValidationForm.querySelector('#service-data');
    const stepMedicalDataValidation             = wizardValidationForm.querySelector('#medical-data');
    const stepGeneralInfoDataDataValidation     = wizardValidationForm.querySelector('#general-info-data');
    // Wizard next prev button
    const wizardValidationNext = [].slice.call(wizardValidationForm.querySelectorAll('.btn-next'));
    const wizardValidationPrev = [].slice.call(wizardValidationForm.querySelectorAll('.btn-prev'));

    const validationStepper = new Stepper(wizardValidation, {
      linear: true
    });

    // Student details
    const FormValidationStudent = FormValidation.formValidation(stepStudentDataValidation, {
      fields: {
        fname: {
          validators: {
            notEmpty: {
              message: 'Please provide first name'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The first name should be between 2 and 255 characters length'
            }
          }
        },
        mname: {
          validators: {
            stringLength: {
              min: 2,
              max: 255,
              message: 'The middle name should be between 2 and 255 characters length'
            }
          }
        },
        lname: {
          validators: {
            notEmpty: {
              message: 'Please provide last name'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The last name should be between 2 and 255 characters length'
            }
          }
        },
        pname: {
          validators: {
            notEmpty: {
              message: 'Please provide any preferred name'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The preferred name should be between 2 and 255 characters length'
            }
          }
        },
        phone: {
          validators: {
            notEmpty: {
              message: 'Please provide the residence phone number'
            },
            digits: {
                message: 'The residence phone Number should only contain digits'
            },
            stringLength: {
              min: 6,
              max: 10,
              message: 'The residence phone number name should be between 6 and 10 digits'
            }
          }
        },
        address: {
          validators: {
            notEmpty: {
              message: 'Please provide the residence address'
            },
            stringLength: {
              min: 2,
              max: 2000,
              message: 'The residence address name should be between 2 and 2000 characters length'
            }
          }
        },
        dob: {
          validators: {
            notEmpty: {
              message: 'Please provide the date of birth'
            }
          }
        },
        pob: {
          validators: {
            notEmpty: {
              message: 'Please provide the place of birth'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The place of birth name should be between 2 and 255 characters length'
            }
          }
        },
        gender: {
          validators: {
            notEmpty: {
              message: 'Please select a gender'
            }
          }
        },
        nationality: {
          validators: {
            notEmpty: {
              message: 'Please select a nationality'
            }
          }
        },
        religion: {
          validators: {
            notEmpty: {
              message: 'Please select a religion'
            }
          }
        },
        uae_id: {
          validators: {
            notEmpty: {
              message: 'Please provide UAE ID'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The  UAE ID should be between 2 and 255 characters length'
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
          rowSelector: '.col-sm-12'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      },
      init: instance => {
        instance.on('plugins.message.placed', function (e) {
          //* Move the error message out of the `input-group` element
          if (e.element.parentElement.classList.contains('input-group')) {
            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
          }
        });
      }
    }).on('core.form.valid', function () {
      // Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    // Parent info
    const FormValidationParent = FormValidation.formValidation(stepParentsDataValidation, {
      fields: {
        father_fname: {
          validators: {
            notEmpty: {
              message: 'Please provide the first name of the father'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The first name of the father should be between 2 and 255 characters length'
            }
          }
        },
        father_lname: {
          validators: {
            notEmpty: {
              message: 'Please provide the last name of the father'
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
              message: 'Please provide the email address of the father'
            },
            emailAddress: {
                message: 'The father\'s email address should be a valid one'
            },
            stringLength: {
                min: 6,
                max: 255,
                message: 'The father\'s email address should be between 6 characters and 255 characters'
            }
          }
        },
        father_mobile: {
          validators: {
            notEmpty: {
              message: 'Please provide the father\'s mobile number'
            },
            digits: {
                message: 'The father\'s mobile number should only contain digits'
            },
            stringLength: {
              min: 6,
              max: 10,
              message: 'The father\'s mobile number should be between 6 and 10 digits'
            }
          }
        },
        father_phone: {
          validators: {
            notEmpty: {
              message: 'Please provide the father\'s phone number'
            },
            digits: {
                message: 'The father\'s phone number should only contain digits'
            },
            stringLength: {
              min: 6,
              max: 10,
              message: 'The father\'s phone number should be between 6 and 10 digits'
            }
          }
        },
        father_work_tel: {
          validators: {
            notEmpty: {
              message: 'Please provide the father\'s work telephone number'
            },
            digits: {
                message: 'The father\'s work telephone number should only contain digits'
            },
            stringLength: {
              min: 6,
              max: 10,
              message: 'The father\'s work telephone number should be between 6 and 10 digits'
            }
          }
        },
        father_company: {
          validators: {
            notEmpty: {
              message: 'Please provide the father\'s company detail'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The father\'s company detail should be between 2 and 255 characters length'
            }
          }
        },
        father_address: {
          validators: {
            notEmpty: {
              message: 'Please provide the father\'s address'
            },
            stringLength: {
              min: 2,
              max: 2000,
              message: 'The father\'s address should be between 2 and 2000 characters length'
            }
          }
        },
        mother_fname: {
          validators: {
            notEmpty: {
              message: 'Please provide the first name of the mother'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The first name of the mother should be between 2 and 255 characters length'
            }
          }
        },
        mother_lname: {
          validators: {
            notEmpty: {
              message: 'Please provide the last name of the mother'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The last name of the mother should be between 2 and 255 characters length'
            }
          }
        },
        mother_email: {
          validators: {
            notEmpty: {
              message: 'Please provide the email address of the mother'
            },
            emailAddress: {
                message: 'The mother\'s email address should be a valid one'
            },
            stringLength: {
                min: 6,
                max: 255,
                message: 'The mother\'s email address should be between 6 characters and 255 characters'
            }
          }
        },
        mother_mobile: {
          validators: {
            notEmpty: {
              message: 'Please provide the mother\'s mobile number'
            },
            digits: {
                message: 'The mother\'s mobile number should only contain digits'
            },
            stringLength: {
              min: 6,
              max: 10,
              message: 'The mother\'s mobile number should be between 6 and 10 digits'
            }
          }
        },
        mother_phone: {
          validators: {
            notEmpty: {
              message: 'Please provide the mother\'s phone number'
            },
            digits: {
                message: 'The mother\'s phone number should only contain digits'
            },
            stringLength: {
              min: 6,
              max: 10,
              message: 'The mother\'s phone number should be between 6 and 10 digits'
            }
          }
        },
        mother_work_tel: {
          validators: {
            digits: {
                message: 'The mother\'s work telephone number should only contain digits'
            },
            stringLength: {
              min: 6,
              max: 10,
              message: 'The mother\'s work telephone number should be between 6 and 10 digits'
            }
          }
        },
        mother_company: {
          validators: {
            stringLength: {
              min: 2,
              max: 255,
              message: 'The mother\'s company detail should be between 2 and 255 characters length'
            }
          }
        },
        mother_address: {
          validators: {
            notEmpty: {
              message: 'Please provide the mother\'s address'
            },
            stringLength: {
              min: 2,
              max: 2000,
              message: 'The mother\'s address should be between 2 and 2000 characters length'
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
          rowSelector: '.col-sm-12'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      // Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    // Emergency Contact Info
    const FormValidationEmergencyContact = FormValidation.formValidation(stepEmergencyContactDataValidation, {
      fields: {
        ec1_fname: {
          validators: {
            notEmpty: {
              message: 'Please provide the first name'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The first name should be between 2 and 255 characters length'
            }
          }
        },
        ec1_lname: {
          validators: {
            notEmpty: {
              message: 'Please provide the last name'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The last name should be between 2 and 255 characters length'
            }
          }
        },
        ec1_relationship: {
          validators: {
            notEmpty: {
              message: 'Please provide the relationship with the child'
            },
            stringLength: {
                min: 6,
                max: 255,
                message: 'The relationship should be between 6 characters and 255 characters'
            }
          }
        },
        ec1_mobile: {
          validators: {
            notEmpty: {
              message: 'Please provide the mobile number'
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
        ec2_fname: {
          validators: {
            notEmpty: {
              message: 'Please provide the first name'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The first name should be between 2 and 255 characters length'
            }
          }
        },
        ec2_lname: {
          validators: {
            notEmpty: {
              message: 'Please provide the last name'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The last name should be between 2 and 255 characters length'
            }
          }
        },
        ec2_relationship: {
          validators: {
            notEmpty: {
              message: 'Please provide the relationship with the child'
            },
            stringLength: {
                min: 6,
                max: 255,
                message: 'The relationship should be between 6 characters and 255 characters'
            }
          }
        },
        ec2_mobile: {
          validators: {
            notEmpty: {
              message: 'Please provide the mobile number'
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
      },
      plugins: {
        excluded: new FormValidation.plugins.Excluded({
            excluded: function (field, ele, eles) {
                const ec2Fname                = wizardValidationForm.querySelector('[name="ec2_fname"]');
                const ec2FnameVal             = ec2Fname ? ec2Fname.value : '';

                const ec2Lname                = wizardValidationForm.querySelector('[name="ec2_lname"]');
                const ec2LnameVal             = ec2Lname ? ec2Lname.value : '';

                const ec2Relationship         = wizardValidationForm.querySelector('[name="ec2_relationship"]');
                const ec2RelationshipVal      = ec2Relationship ? ec2Relationship.value : '';

                const ec2Mobile               = wizardValidationForm.querySelector('[name="ec2_mobile"]');
                const ec2MobileVal            = ec2Mobile ? ec2Mobile.value : '';

                return ((field === 'ec2_lname' && ec2FnameVal === '') 
                          || (field === 'ec2_relationship' && ec2FnameVal === '')
                          || (field === 'ec2_mobile' && ec2FnameVal === '')
                          || (field === 'ec2_fname' && ec2FnameVal === ''));
            },
        }),
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-sm-12'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      // Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    // Authorized Person Info
    const FormValidationAuthorizedPerson = FormValidation.formValidation(stepAuthorizedPersonDataValidation, {
      fields: {
        ap1_fname: {
          validators: {
            notEmpty: {
              message: 'Please provide the first authorized person\'s first name'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The first authorized person\'s first name should be between 2 and 255 characters length'
            }
          }
        },
        ap1_lname: {
          validators: {
            notEmpty: {
              message: 'Please provide the first authorized person\'s last name'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The first authorized person\'s last name should be between 2 and 255 characters length'
            }
          }
        },
        ap1_relationship: {
          validators: {
            notEmpty: {
              message: 'Please provide the relationship of the first authorized person with the child'
            },
            stringLength: {
                min: 6,
                max: 255,
                message: 'The first authorized person\'s relationship with the child should be between 6 characters and 255 characters'
            }
          }
        },
        ap1_mobile: {
          validators: {
            notEmpty: {
              message: 'Please provide the first authorized person\'s mobile number'
            },
            digits: {
                message: 'The first authorized person\'s mobile number should only contain digits'
            },
            stringLength: {
              min: 6,
              max: 10,
              message: 'The first authorized person\'s mobile number should be between 6 and 10 digits'
            }
          }
        },
        ap2_fname: {
          validators: {
            notEmpty: {
              message: 'Please provide the second authorized person\'s first name'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The second authorized person\'s first name should be between 2 and 255 characters length'
            }
          }
        },
        ap2_lname: {
          validators: {
            notEmpty: {
              message: 'Please provide the second authorized person\'s last name'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The second authorized person\'s last name should be between 2 and 255 characters length'
            }
          }
        },
        ap2_relationship: {
          validators: {
            notEmpty: {
              message: 'Please provide the relationship of the second authorized person with the child'
            },
            stringLength: {
                min: 6,
                max: 255,
                message: 'The second authorized person\'s relationship with the child should be between 6 characters and 255 characters'
            }
          }
        },
        ap2_mobile: {
          validators: {
            notEmpty: {
              message: 'Please provide the second authorized person\'s mobile number'
            },
            digits: {
                message: 'The second authorized person\'s mobile number should only contain digits'
            },
            stringLength: {
              min: 6,
              max: 10,
              message: 'The second authorized person\'s mobile number should be between 6 and 10 digits'
            }
          }
        },
      },
      plugins: {
        excluded: new FormValidation.plugins.Excluded({
            excluded: function (field, ele, eles) {
                const ap2Fname                = wizardValidationForm.querySelector('[name="ap2_fname"]');
                const ap2FnameVal             = ap2Fname ? ap2Fname.value : '';

                const ap2Lname                = wizardValidationForm.querySelector('[name="ap2_lname"]');
                const ap2LnameVal             = ap2Lname ? ap2Lname.value : '';

                const ap2Relationship         = wizardValidationForm.querySelector('[name="ap2_relationship"]');
                const ap2RelationshipVal      = ap2Relationship ? ap2Relationship.value : '';

                const ap2Mobile               = wizardValidationForm.querySelector('[name="ap2_mobile"]');
                const ap2MobileVal            = ap2Mobile ? ap2Mobile.value : '';

                return ((field === 'ap2_lname' && ap2FnameVal === '') 
                          || (field === 'ap2_relationship' && ap2FnameVal === '')
                          || (field === 'ap2_mobile' && ap2FnameVal === '')
                          || (field === 'ap2_fname' && ap2FnameVal === ''));
            },
        }),
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-sm-12'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      // Jump to the next step when all fields in the current step are valid
      validationStepper.next();
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
          rowSelector: '.col-sm-12'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        //submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      // Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    // Service Data Info
    const FormValidationService = FormValidation.formValidation(stepServiceDataValidation, {
      fields: {
        /*lunch_terms: {
            validators: {
                notEmpty: {
                    message: 'Please select a term'
                }
            }
        },*/
        'lunch_terms[]': {
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

                const lunchService               = wizardValidationForm.querySelector('[name="lunch_service"]:checked');
                const lunchServiceVal            = lunchService ? lunchService.value : '';

                const transportEffectiveStarting     = wizardValidationForm.querySelector('[name="transport_effective_starting"]');
                const transportEffectiveStartingVal  = transportEffectiveStarting ? transportEffectiveStarting.value : '';

                const transportService           = wizardValidationForm.querySelector('[name="transport_service"]:checked');
                const transportServiceVal        = transportService ? transportService.value : '';

                /*return ((field === 'lunch_terms[]' && lunchEffectiveStartingVal === '') 
                          || (field === 'lunch_days[]' && lunchEffectiveStartingVal === '')
                          || (field === 'lunch_effective_starting' && lunchEffectiveStartingVal !== '')
                          || (field === 'transport_type' && transportEffectiveStartingVal === '') 
                          || (field === 'transport_area' && transportEffectiveStartingVal === '')
                          || (field === 'transport_street_name' && transportEffectiveStartingVal === '')
                          || (field === 'transport_building_name' && transportEffectiveStartingVal === '')
                          || (field === 'transport_effective_starting' && transportEffectiveStartingVal !== ''));*/
                return ((field === 'lunch_terms[]' && (lunchServiceVal === '' || lunchServiceVal === 'n')) 
                          || (field === 'lunch_days[]' && (lunchServiceVal === '' || lunchServiceVal === 'n'))
                          || (field === 'transport_type' && (transportServiceVal === '' || transportServiceVal === 'n')) 
                          || (field === 'transport_area' && (transportServiceVal === '' || transportServiceVal === 'n'))
                          || (field === 'transport_street_name' && (transportServiceVal === '' || transportServiceVal === 'n'))
                          || (field === 'transport_building_name' && (transportServiceVal === '' || transportServiceVal === 'n')));

            },
        }),
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-sm-12'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      // Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    // Medical Data Info
    const FormValidationMedical = FormValidation.formValidation(stepMedicalDataValidation, {
      fields: {
        family_physician_name: {
            validators: {
                stringLength: {
                  min: 2,
                  max: 2000,
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
                    message: 'The physician\'s contact number should only contain digits'
                },
                stringLength: {
                  min: 6,
                  max: 10,
                  message: 'The physician\'s contact number should be between 6 and 10 digits'
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
                const familyPhysicianName     = wizardValidationForm.querySelector('[name="family_physician_name"]');
                const familyPhysicianNameVal  = familyPhysicianName ? familyPhysicianName.value : '';

                const allergy                 = wizardValidationForm.querySelector('[name="allergy"]:checked');
                const allergyVal              = allergy ? allergy.value : '';

                const visionHearingProblem    = wizardValidationForm.querySelector('[name="vision_hearing_problem"]:checked');
                const visionHearingProblemVal = visionHearingProblem ? visionHearingProblem.value : '';

                const specialDisability    = wizardValidationForm.querySelector('[name="special_disability"]:checked');
                const specialDisabilityVal = specialDisability ? specialDisability.value : '';

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
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-sm-12'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
      // Jump to the next step when all fields in the current step are valid
      validationStepper.next();
    });

    // General Data Info
    const FormValidationGeneralInfoData = FormValidation.formValidation(stepGeneralInfoDataDataValidation, {
      fields: {
        heard_about_us_from: {
            validators: {
                notEmpty: {
                    message: 'Please select an option to let us know where did you hear about us.'
                }
            }
        },
        heard_about_us_other: {
          validators: {
            notEmpty: {
                message: 'Please provide a brief info regarding how did you hear about us.'
            },
            stringLength: {
              min: 2,
              max: 255,
              message: 'The brief info should be between 2 and 255 characters length'
            }
          }
        },
        authorization_photo: {
            validators: {
                notEmpty: {
                    message: 'Please select whether authorization photo would be provided or not.'
                }
            }
        },
        status: {
            validators: {
                notEmpty: {
                    message: 'Please select a status.'
                }
            }
        },
      },
      plugins: {
        excluded: new FormValidation.plugins.Excluded({
            excluded: function (field, ele, eles) {
                const selectedHearingOption    = wizardValidationForm.querySelector('select[name="heard_about_us_from"] option:checked');
                const selectedHearing          = selectedHearingOption ? selectedHearingOption.text.toLowerCase() : '';
                return ((field === 'heard_about_us_other' && (selectedHearing.indexOf('other') === -1 && selectedHearing.indexOf('autre') === -1)) 
                          || (field === 'heard_about_us_from' && (selectedHearing.indexOf('other') >= 0 || selectedHearing.indexOf('autre') >= 0)));
            },
        }),
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: '.col-sm-12'
        }),
        autoFocus: new FormValidation.plugins.AutoFocus(),
        submitButton: new FormValidation.plugins.SubmitButton()
      }
    }).on('core.form.valid', function () {
        // You can submit the form
        if(validationStepper._currentIndex === 7) {
          //$(document).on('submit', '#' + $dynamicFormId, function(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            var imageSelected = false;
            if((document.getElementById('image').files !== undefined && document.getElementById('image').files.length > 0)
                || (document.getElementById('father_image').files !== undefined && document.getElementById('father_image').files.length > 0)
                || (document.getElementById('mother_image').files !== undefined && document.getElementById('mother_image').files.length > 0)
                || (document.getElementById('ap1_image').files !== undefined && document.getElementById('ap1_image').files.length > 0)
                || (document.getElementById('ap2_image').files !== undefined && document.getElementById('ap2_image').files.length > 0)) {
              imageSelected = true;
            }
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
                  if(imageSelected === true) {
                    $('.loader-with-image').show();
                  } else if(imageSelected === false) {
                    $('.loader-without-image').show();
                  }
                  $('.invalid-feedback').html('');
                },
                success     : function (data) {
                    var status        = data.status;
                    var message       = data.message;
                    var responseData  = data.data;
                    window.location.href = $baseURL + 'console/' + $entity + '?status=' + encodeURIComponent(status) + '&message=' + encodeURIComponent(message);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                  var data = jqXHR.responseJSON;console.log(data);
                  if($.isEmptyObject(data.errors) == false) {
                      $.each(data.errors, function (key, value) {
                          $('#' + key).closest('.col-sm-12').find('.invalid-feedback').html('<span class="help-block">' + value + '</span>');
                      });
                  }
                  var firstErrorElement = null;
                  $('.invalid-feedback').each(function(){
                    if ($(this).children().length) {
                        firstErrorElement = $(this);
                        return false;
                    }
                  })
                  var firstErrorElementId = firstErrorElement.prev().closest('.content').attr('id');
                  var sectionWithError    = $('[data-target="#' + firstErrorElementId +'"]');
                  var firstStepWithError  = (parseInt(sectionWithError.children('.step-trigger').children('.bs-stepper-circle').text()) - 1);
                  var currentStep         = validationStepper._currentIndex;
                  if(currentStep > firstStepWithError) {
                    for(var st = currentStep; st > firstStepWithError; st--) {
                        validationStepper.previous();
                    }
                  }
                  if(imageSelected === true) {
                    $('.loader-with-image').hide();
                  } else if(imageSelected === false) {
                    $('.loader-without-image').hide();
                  }
                }
            });
          //});
        };
        //wizardValidationForm.submit()
        // or send the form data to server via an Ajax request
        // To make the demo simple, I just placed an alert
        //alert('Submitted..!!');
    });

    wizardValidationNext.forEach(item => {
      item.addEventListener('click', event => {
        // When click the Next button, we will validate the current step
        switch (validationStepper._currentIndex) {
          case 0:
            FormValidationStudent.validate();
            //validationStepper.next();
            break;

          case 1:
            FormValidationParent.validate();
            //validationStepper.next();
            break;

          case 2:
            FormValidationEmergencyContact.validate();
            //validationStepper.next();
            break;

          case 3:
            FormValidationAuthorizedPerson.validate();
            //validationStepper.next();
            break;

          case 4:
            FormValidationEnrolment.validate();
            //validationStepper.next();
            break;

          /*case 5:
            FormValidationCurrent.validate();
            validationStepper.next();
            break;*/

          case 5:
            FormValidationService.validate();
            //validationStepper.next();
            break;

          case 6:
            FormValidationMedical.validate();
            //validationStepper.next();
            break;

          case 7:
            FormValidationGeneralInfoData.validate();
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
          case 7:
            validationStepper.previous();
            break;

          case 6:
            validationStepper.previous();
            break;

          case 5:
            validationStepper.previous();
            break;

          case 4:
            validationStepper.previous();
            break;

          case 3:
            validationStepper.previous();
            break;

          case 2:
            validationStepper.previous();
            break;

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