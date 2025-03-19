CKEDITOR.replace( 'description', editorOptions);

$(document).ready(function(){
    $('#' + $dynamicFormId).validate({
        rules: {
            title: {
                required    : true,
                minlength   : 2,
                maxlength   : 20
            }
        },
        messages: {
            title: {
                required    : 'Please, provide the title',
                minlength   : 'The title should be at least 2 characters long',
                maxlength   : 'The title should not exceed 20 characters'
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

function submitForm(){
	for(var instanceName in CKEDITOR.instances)
	{
	  var editorId  = CKEDITOR.instances[instanceName].element.getAttribute('id');      // gives id of textarea
	  var content   = CKEDITOR.instances[instanceName].getData();                       // gets correct updated data
	  $('#' + editorId).val(content);                              // using jquery to set content works, but is hacky
	}
	$('#' + $dynamicFormId).submit();
}