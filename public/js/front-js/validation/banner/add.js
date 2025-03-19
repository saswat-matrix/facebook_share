CKEDITOR.replace( 'description', editorOptions);

$(document).ready(function(){
	$('#' + $dynamicFormId).validate({
		rules: {
			title: {
				required	: true,
				minlength	: 2,
				maxlength	: 20
			},
			image: {
				required 	: true
			},
			icon: {
				required 	: true
			}
		},
		messages: {
			title: {
				required	: "Please, provide a title",
				minlength	: "The title should be at least 2 characters long",
				maxlength	: "The title should not exceed 20 characters"
			},
			image: {
				required 	: "Please, provide an image"
			},
			icon: {
				required 	: "Please, provide an icon"
			}
		},
		errorPlacement: function (error, element) {
			error.insertAfter($(element));
		},
		submitHandler : function(form){
			form.submit();
		}
	})

	// For Reset Button
	$("#resetBtn").click(function(){
		$('#title').val(null);
		$('#description').val(null);
		$('#image').val(null);
		$('#preview_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');
		$('#icon').val(null);
		$('#preview_icon').attr('src', $baseURL + 'images/general_images/no_img.png');
	});
	
});

function submitForm(){
	for(var instanceName in CKEDITOR.instances)
	{
	  var editorId  = CKEDITOR.instances[instanceName].element.getAttribute('id');      // gives id of textarea
	  var content   = CKEDITOR.instances[instanceName].getData();                       // gets correct updated data
	  $('#' + editorId).val(content);                              // using jquery to set content works, but is hacky
	}
	$('#' + $dynamicFormId).submit();
	// alert('hi');
}