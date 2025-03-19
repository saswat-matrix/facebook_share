$(document).ready(function(){
	$('#' + $dynamicFormId).validate({
		rules: {
			title: {
				required	: true,
				minlength	: 2,
				maxlength	: 20
			},
			parent_id: {
				required 	: true
			},
			image: {
				required 	: true
			}
		},
		messages: {
			title: {
				required	: "Please, provide a title",
				minlength	: "The title should be at least 2 characters long",
				maxlength	: "The title should not exceed 20 characters"
			},
			parent_id: {
				required 	: "Please, select a category"
			},
			image: {
				required 	: "Please, provide an image"
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
		$('#parent_id').prop('selectedIndex',0);
		$('#image').val(null);
		$('#preview_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');	
	});
});