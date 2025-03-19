$(document).ready(function(){
	$('#' + $dynamicFormId).validate({
		rules: {
			title: {
				required	: true,
				minlength	: 2,
				maxlength	: 30
			},
			code: {
				required 	: true
			}
		},
		messages: {
			title: {
				required	: "Please, provide a title",
				minlength	: "The title should be at least 2 characters long",
				maxlength	: "The title should not exceed 30 characters"
			},
			code: {
				required 	: "Please, select a state"
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
		$('#code').prop('selectedIndex',0);
	});

});