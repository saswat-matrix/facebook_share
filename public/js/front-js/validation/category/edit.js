$(document).ready(function(){
    $('#' + $dynamicFormId).validate({
        rules: {
            title: {
                required    : true,
                minlength   : 2,
                maxlength   : 20
            },
            parent_id: {
                required    : true
            }
        },
        messages: {
            title: {
                required    : 'Please, provide the title',
                minlength   : 'The title should be at least 2 characters long',
                maxlength   : 'The title should not exceed 20 characters'
            },
            parent_id: {
                required    : 'Please, provide the category'
            }
        },
        errorPlacement: function(error, element){
            error.insertAfter($(element));
        },
        submitHandler: function(form){
            form.submit();
        }
    })
});