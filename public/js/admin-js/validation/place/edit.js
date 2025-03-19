CKEDITOR.replace( 'description', editorOptions);

$(document).ready(function(){
	$('#' + $dynamicFormId).validate({
		ignore: "",
		rules: {
			title: {
				required	: true,
				minlength	: 2,
				maxlength	: 30
			},
            description: {
				required	: true,
				minlength	: 3
			},
            latitude: {
				required 	: true,
				number		: true,
				range		: [-90,90]
			},
            longitude: {
				required 	: true,
				number		: true,
				range		: [-180,180]
			},
			category_id: {
				required 	: true
			},
            'tag_id[]': {
				required 	: true
			},
            postal_address: {
				required 	: true
			},
            google_address: {
				required 	: true
			},
            state_code: {
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
				maxlength	: "The title should not exceed 30 characters"
			},
            description: {
				required	: "Please, provide a description",
				minlength	: "The description should be at least 3 characters long"
			},
            latitude: {
				required 	: "Please, provide a latitude",
				number		: "Latitude should be numeric",
				range		: "Latitude value will be between -90 to +90"
			},
            longitude: {
				required 	: "Please, provide a longitude",
				number		: "Longitude should be numeric",
				range		: "Longitude value will be between -180 to +180"
			},
			category_id: {
				required 	: "Please, select a category"
			},
            'tag_id[]': {
				required 	: "Please, select a tag"
			},
            postal_address: {
				required 	: "Please, provide a postal address"
			},
            google_address: {
				required 	: "Please, provide a google address"
			},
            state_code: {
				required 	: "Please, select a state"
			},
			image: {
				required 	: "Please, provide an image"
			}
		},
		errorPlacement: function (error, element) {		
			if($(element).prop('type') == 'select-multiple')
			{
				error.insertAfter($('#' + $(element).prop('id') + '_validation_message'));
			}
			else if($(element).prop('type') == 'textarea')
			{
				if($(element).prop('name') == 'description')
				{
					error.insertAfter($('#cke_description'));
				}
				else
				{
					error.insertAfter($(element));
				}
			}
			else{
				error.insertAfter($(element));
			}
		},
		submitHandler : function(form){
			form.submit();
		}
	})

	// For Reset Button
	$("#resetBtn").click(function(){
		$('#title').val(null);
		$('#description').val(null);
		$('#latitude').val(null);
		$('#longitude').val(null);
		$('#category_id').prop('selectedIndex',0);
		$('#tag_id').prop('selected', false);
		$('#postal_address').val(null);
		$('#google_address').val(null);
		$('#state_code').prop('selectedIndex',0);
		$('#image').val(null);
		$('#preview_image').attr('src', $baseURL + 'images/general_images/pre_img2.png');	
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
}