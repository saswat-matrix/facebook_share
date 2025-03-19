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
              message: $('#js_validation_fname_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_fname_stringLength').val()
            }
          }
        },
        mname: {
          validators: {
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_mname_stringLength').val()
            }
          }
        },
        lname: {
          validators: {
            notEmpty: {
              message: $('#js_validation_lname_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_lname_stringLength').val()
            }
          }
        },
        pname: {
          validators: {
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_pname_stringLength').val()
            }
          }
        },
        phone_code_country_code: {
          validators: {
            notEmpty: {
              message: $('#js_validation_phone_code_country_code_notEmpty').val()
            }
          }
        },
        phone: {
          validators: {
            /*notEmpty: {
              message: $('#js_validation_phone_notEmpty').val()
            },*/
            digits: {
                message: $('#js_validation_phone_digits').val()
            },
            stringLength: {
              min: 6,
              max: 10,
              message: $('#js_validation_phone_stringLength').val()
            }
          }
        },
        address: {
          validators: {
            /*notEmpty: {
              message: $('#js_validation_address_notEmpty').val()
            },*/
            stringLength: {
              min: 2,
              max: 2000,
              message: $('#js_validation_address_stringLength').val()
            }
          }
        },
        dob: {
          validators: {
            notEmpty: {
              message: $('#js_validation_dob_notEmpty').val()
            }
          }
        },
        pob: {
          validators: {
            notEmpty: {
              message: $('#js_validation_pob_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_pob_stringLength').val()
            }
          }
        },
        gender: {
          validators: {
            notEmpty: {
              message: $('#js_validation_gender_notEmpty').val()
            }
          }
        },
        nationality: {
          validators: {
            notEmpty: {
              message: $('#js_validation_nationality_notEmpty').val()
            }
          }
        },
        religion: {
          validators: {
            notEmpty: {
              message: $('#js_validation_religion_notEmpty').val()
            }
          }
        },
        has_sibling: {
          validators: {
            notEmpty: {
              message: $('#js_validation_has_sibling_notEmpty').val()
            }
          }
        },
        sibling_count: {
          validators: {
            notEmpty: {
              message: $('#js_validation_sibling_count_notEmpty').val()
            },
            digits: {
                message: $('#js_validation_sibling_count_digits').val()
            },
            stringLength: {
              min: 1,
              max: 1,
              message: $('#js_validation_sibling_count_stringLength').val()
            }
          }
        },
        first_language_id: {
          validators: {
            notEmpty: {
              message: $('#js_validation_first_language_id_notEmpty').val()
            }
          }
        },
        first_language_specify: {
          validators: {
            notEmpty: {
              message: $('#js_validation_first_language_specify_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_first_language_specify_stringLength').val()
            }
          }
        },
        second_language_specify: {
          validators: {
            notEmpty: {
              message: $('#js_validation_second_language_specify_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_second_language_specify_stringLength').val()
            }
          }
        },
        citizenship_id: {
          validators: {
            /*notEmpty: {
              message: $('#js_validation_citizenship_id_notEmpty').val()
            },*/
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_citizenship_id_stringLength').val()
            }
          }
        }
      },
      plugins: {
        excluded: new FormValidation.plugins.Excluded({
            excluded: function (field, ele, eles) {
                const phone    = wizardValidationForm.querySelector('[name="phone"]');
                const phoneVal = phone ? phone.value : '';

                const firstLanguage         = wizardValidationForm.querySelector('[name="first_language_id"]');
                const firstLanguageIsOther  = firstLanguage 
                                                ? (firstLanguage.selectedOptions[0].hasAttribute('is_other')
                                                    ? firstLanguage.selectedOptions[0].getAttribute('is_other')
                                                    : '') 
                                                : '';

                const secondLanguage        = wizardValidationForm.querySelector('[name="second_language_id"]');
                const secondLanguageIsOther = secondLanguage 
                                                ? (secondLanguage.selectedOptions[0].hasAttribute('is_other')
                                                    ? secondLanguage.selectedOptions[0].getAttribute('is_other')
                                                    : '') 
                                                : '';

                const hasSibling            = wizardValidationForm.querySelector('[name="has_sibling"]');
                const hasSiblingValue       = hasSibling ? hasSibling.selectedOptions[0].value : '';                                

                return ((field === 'phone_code_country_code' && phoneVal === '')
                          || (field === 'first_language_specify' && (firstLanguageIsOther === 'n' || firstLanguageIsOther === ''))
                          || (field === 'second_language_specify' && (secondLanguageIsOther === 'n' || secondLanguageIsOther === ''))
                          || (field === 'sibling_count' && (hasSiblingValue === 'n' || hasSiblingValue === ''))
                          );
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
                const ec2Fname                = wizardValidationForm.querySelector('[name="ec2_fname"]');
                const ec2FnameVal             = ec2Fname ? ec2Fname.value : '';

                const ec2Lname                = wizardValidationForm.querySelector('[name="ec2_lname"]');
                const ec2LnameVal             = ec2Lname ? ec2Lname.value : '';

                const ec2Relationship         = wizardValidationForm.querySelector('[name="ec2_relationship"]');
                const ec2RelationshipVal      = ec2Relationship ? ec2Relationship.value : '';

                const ec2RelationshipWithParents      = wizardValidationForm.querySelector('[name="ec2_relationship_with_parents"]');
                const ec2RelationshipWithParentsVal   = ec2RelationshipWithParents ? ec2RelationshipWithParents.value : '';

                const ec2Mobile               = wizardValidationForm.querySelector('[name="ec2_mobile"]');
                const ec2MobileVal            = ec2Mobile ? ec2Mobile.value : '';

                return ((field === 'ec2_lname' && ec2FnameVal === '') 
                          || (field === 'ec2_relationship' && ec2FnameVal === '')
                          || (field === 'ec2_relationship_with_parents' && ec2FnameVal === '')
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
              message: $('#js_validation_ap1_fname_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_ap1_fname_stringLength').val()
            }
          }
        },
        ap1_lname: {
          validators: {
            notEmpty: {
              message: $('#js_validation_ap1_lname_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_ap1_lname_stringLength').val()
            }
          }
        },
        ap1_relationship: {
          validators: {
            notEmpty: {
              message: $('#js_validation_ap1_relationship_notEmpty').val()
            },
            stringLength: {
              min: 6,
              max: 255,
              message: $('#js_validation_ap1_relationship_stringLength').val()
            }
          }
        },
        ap1_phone_code_country_code: {
          validators: {
            notEmpty: {
              message: $('#js_validation_ap1_phone_code_country_code_notEmpty').val()
            }
          }
        },
        ap1_mobile: {
          validators: {
            notEmpty: {
              message: $('#js_validation_ap1_mobile_notEmpty').val()
            },
            digits: {
              message: $('#js_validation_ap1_mobile_digits').val()
            },
            stringLength: {
              min: 6,
              max: 10,
              message: $('#js_validation_ap1_mobile_stringLength').val()
            }
          }
        },
        ap1_phone: {
          validators: {
            digits: {
              message: $('#js_validation_ap1_phone_digits').val()
            },
            stringLength: {
              min: 6,
              max: 10,
              message: $('#js_validation_ap1_phone_stringLength').val()
            }
          }
        },
        ap1_citizenship_id: {
          validators: {
            notEmpty: {
              message: $('#js_validation_ap1_citizenship_id_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_ap1_citizenship_id_stringLength').val()
            }
          }
        },
        ap2_fname: {
          validators: {
            notEmpty: {
              message: $('#js_validation_ap2_fname_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_ap2_fname_stringLength').val()
            }
          }
        },
        ap2_lname: {
          validators: {
            notEmpty: {
              message: $('#js_validation_ap2_lname_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_ap2_lname_stringLength').val()
            }
          }
        },
        ap2_relationship: {
          validators: {
            notEmpty: {
              message: $('#js_validation_ap2_relationship_notEmpty').val()
            },
            stringLength: {
              min: 6,
              max: 255,
              message: $('#js_validation_ap2_relationship_stringLength').val()
            }
          }
        },
        ap2_phone_code_country_code: {
          validators: {
            notEmpty: {
              message: $('#js_validation_ap2_phone_code_country_code_notEmpty').val()
            }
          }
        },
        ap2_mobile: {
          validators: {
            notEmpty: {
              message: $('#js_validation_ap2_mobile_notEmpty').val()
            },
            digits: {
              message: $('#js_validation_ap2_mobile_digits').val()
            },
            stringLength: {
              min: 6,
              max: 10,
              message: $('#js_validation_ap2_mobile_stringLength').val()
            }
          }
        },
        ap2_phone: {
          validators: {
            digits: {
              message: $('#js_validation_ap2_phone_digits').val()
            },
            stringLength: {
              min: 6,
              max: 10,
              message: $('#js_validation_ap2_phone_stringLength').val()
            }
          }
        },
        ap2_citizenship_id: {
          validators: {
            notEmpty: {
              message: $('#js_validation_ap2_citizenship_id_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_ap2_citizenship_id_stringLength').val()
            }
          }
        }
      },
      plugins: {
        excluded: new FormValidation.plugins.Excluded({
            excluded: function (field, ele, eles) {
                const ap1Fname                = wizardValidationForm.querySelector('[name="ap1_fname"]');
                const ap1FnameVal             = ap1Fname ? ap1Fname.value : '';

                const ap1Lname                = wizardValidationForm.querySelector('[name="ap1_lname"]');
                const ap1LnameVal             = ap1Lname ? ap1Lname.value : '';

                const ap1Relationship         = wizardValidationForm.querySelector('[name="ap1_relationship"]');
                const ap1RelationshipVal      = ap1Relationship ? ap1Relationship.value : '';

                const ap1PhoneCodeCountryCode       = wizardValidationForm.querySelector('[name="ap1_phone_code_country_code"]');
                const ap1PhoneCodeCountryCodeVal    = ap1PhoneCodeCountryCode ? ap1PhoneCodeCountryCode.value : '';

                const ap1Mobile               = wizardValidationForm.querySelector('[name="ap1_mobile"]');
                const ap1MobileVal            = ap1Mobile ? ap1Mobile.value : '';

                const ap1CitizenshipId        = wizardValidationForm.querySelector('[name="ap1_citizenship_id"]');
                const ap1CitizenshipIdVal     = ap1CitizenshipId ? ap1CitizenshipId.value : '';

                const ap2Fname                = wizardValidationForm.querySelector('[name="ap2_fname"]');
                const ap2FnameVal             = ap2Fname ? ap2Fname.value : '';

                const ap2Lname                = wizardValidationForm.querySelector('[name="ap2_lname"]');
                const ap2LnameVal             = ap2Lname ? ap2Lname.value : '';

                const ap2Relationship         = wizardValidationForm.querySelector('[name="ap2_relationship"]');
                const ap2RelationshipVal      = ap2Relationship ? ap2Relationship.value : '';

                const ap2PhoneCodeCountryCode       = wizardValidationForm.querySelector('[name="ap2_phone_code_country_code"]');
                const ap2PhoneCodeCountryCodeVal    = ap2PhoneCodeCountryCode ? ap2PhoneCodeCountryCode.value : '';

                const ap2Mobile               = wizardValidationForm.querySelector('[name="ap2_mobile"]');
                const ap2MobileVal            = ap2Mobile ? ap2Mobile.value : '';

                const ap2CitizenshipId        = wizardValidationForm.querySelector('[name="ap2_citizenship_id"]');
                const ap2CitizenshipIdVal     = ap2CitizenshipId ? ap2CitizenshipId.value : '';

                return ((field === 'ap1_lname' && ap1FnameVal === '') 
                          || (field === 'ap1_relationship' && ap1FnameVal === '')
                          || (field === 'ap1_phone_code_country_code' && ap1FnameVal === '' && ap1MobileVal === '')
                          || (field === 'ap1_mobile' && ap1FnameVal === '')
                          || (field === 'ap1_citizenship_id' && ap1FnameVal === '')
                          || (field === 'ap1_fname' && ap1FnameVal === '')

                          || (field === 'ap2_lname' && ap2FnameVal === '') 
                          || (field === 'ap2_relationship' && ap2FnameVal === '')
                          || (field === 'ap2_phone_code_country_code' && ap2FnameVal === '' && ap2MobileVal === '')
                          || (field === 'ap2_mobile' && ap2FnameVal === '')
                          || (field === 'ap2_citizenship_id' && ap2FnameVal === '')
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
                    message: $('#js_validation_enrolment_days_notEmpty').val()
                }
            }
        },
        enrolment_timing: {
            validators: {
                notEmpty: {
                    message: $('#js_validation_enrolment_timing_notEmpty').val()
                }
            }
        },
        'enrolment_curriculums[]': {
            validators: {
                notEmpty: {
                    message: $('#js_validation_enrolment_curriculums_notEmpty').val()
                }
            }
        },
        enrolment_class: {
            validators: {
                notEmpty: {
                    message: $('#js_validation_enrolment_class_notEmpty').val()
                }
            }
        },
        enrolment_year: {
            validators: {
                notEmpty: {
                    message: $('#js_validation_enrolment_year_notEmpty').val()
                }
            }
        },
        enrolment_term: {
            validators: {
                notEmpty: {
                    message: $('#js_validation_enrolment_term_notEmpty').val()
                }
            }
        },
        enrolment_date: {
            validators: {
                notEmpty: {
                    message: $('#js_validation_enrolment_date_notEmpty').val()
                }
            }
        },
        joining_date: {
            validators: {
                notEmpty: {
                    message: $('#js_validation_joining_date_notEmpty').val()
                }
            }
        },
        enrolment_id: {
            validators: {
                notEmpty: {
                    message: $('#js_validation_enrolment_id_notEmpty').val()
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
                    message: $('#js_validation_lunch_terms_notEmpty').val()
                }
            }
        },
        'lunch_days[]': {
            validators: {
                notEmpty: {
                    message:  $('#js_validation_lunch_days_notEmpty').val()
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
        transport_area: {
            validators: {
                notEmpty: {
                    message: $('#js_validation_transport_area_notEmpty').val()
                },
                stringLength: {
                  min: 2,
                  max: 2000,
                  message: $('#js_validation_transport_area_stringLength').val()
                }
            }
        },
        transport_street_name: {
            validators: {
                notEmpty: {
                    message: $('#js_validation_transport_street_name_notEmpty').val()
                },
                stringLength: {
                  min: 2,
                  max: 2000,
                  message: $('#js_validation_transport_street_name_stringLength').val()
                }
            }
        },
        transport_building_name: {
            validators: {
                notEmpty: {
                    message: $('#js_validation_transport_building_name_notEmpty').val()
                },
                stringLength: {
                  min: 2,
                  max: 2000,
                  message: $('#js_validation_transport_building_name_stringLength').val()
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
            notEmpty: {
              message: $('#js_validation_family_physician_name_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_family_physician_name_stringLength').val()
            }
          }
        },
        family_physician_clinic: {
          validators: {
            notEmpty: {
              message: $('#js_validation_family_physician_clinic_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_family_physician_clinic_stringLength').val()
            }
          }
        },
        family_physician_contact_number: {
          validators: {
            /*notEmpty: {
              message: $('#js_validation_family_physician_contact_number_notEmpty').val()
            },*/
            digits: {
              message: $('#js_validation_family_physician_contact_number_digits').val()
            },
            stringLength: {
              min: 6,
              max: 10,
              message: $('#js_validation_family_physician_contact_number_stringLength').val()
            }
          }
        },
        allergy_comment: {
          validators: {
            notEmpty: {
              message: $('#js_validation_allergy_comment_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 2000,
              message: $('#js_validation_allergy_comment_stringLength').val()
            }
          }
        },
        vision_hearing_problem_comment: {
          validators: {
            notEmpty: {
              message: $('#js_validation_vision_hearing_problem_comment_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 2000,
              message: $('#js_validation_vision_hearing_problem_comment_stringLength').val()
            }
          }
        },
        special_disability_comment: {
          validators: {
            notEmpty: {
              message: $('#js_validation_special_disability_comment_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 2000,
              message: $('#js_validation_special_disability_comment_stringLength').val()
            }
          }
        }/*,
        blood_type: {
          validators: {
            notEmpty: {
              message: $('#js_validation_blood_type_notEmpty').val()
            }
          }
        }*/
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
                          //|| (field === 'family_physician_contact_number' && familyPhysicianNameVal === '')
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
                    message: $('#js_validation_heard_about_us_from_notEmpty').val()
                }
            }
        },
        heard_about_us_other: {
          validators: {
            notEmpty: {
                message: $('#js_validation_heard_about_us_other_notEmpty').val()
            },
            stringLength: {
              min: 2,
              max: 255,
              message: $('#js_validation_heard_about_us_other_stringLength').val()
            }
          }
        },
        authorization_photo: {
            validators: {
                notEmpty: {
                    message: $('#js_validation_authorization_photo_notEmpty').val()
                }
            }
        },
        status: {
            validators: {
                notEmpty: {
                    message: $('#js_validation_status_notEmpty').val()
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