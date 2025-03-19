/* Add validator methods */

$.validator.addMethod("noSpace", function(value, element) { 
  return value.indexOf(" ") < 0 && value != ""; 
}, "No space please and don't leave it empty");

$.validator.addMethod(
	"floorArea",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^[ABCDEF]$/);
	}
);

$.validator.addMethod(
	"areaSection",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^[WXYZ]$/);
	}
);

$.validator.addMethod(
	"onlyAlphabets",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^[a-zA-Z]*$/);
	}
);

$.validator.addMethod(
	"alphaNumeric",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^[a-zA-Z0-9]*$/);
	}
);

$.validator.addMethod(
	"alphabetAndSpace",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^[a-zA-Z ]*$/);
	}
);

$.validator.addMethod(
	"alphabetDotAndSpace",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^[a-zA-Z. ]*$/);
	}
);

$.validator.addMethod(
	"alphabetNumberDotHyphenAtTheRateUnderscore",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^[a-zA-Z0-9.-@_]*$/);
	}
);

$.validator.addMethod(
	"alphabetNumberDotHyphenUnderscoreSpaceAtTheRate",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^[a-zA-Z0-9.\-@_ ]*$/);
	}
);

$.validator.addMethod(
	"alphabetNumberCommaDotSlashHyphenAndSpace",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^[a-zA-Z0-9,&.\-/ ]*$/);
	}
);

$.validator.addMethod(
	"alphabetNumberCommaDotSlashHyphenBracketAndSpace",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^[a-zA-Z0-9,&.()\-/ ]*$/);
	}
);

$.validator.addMethod(
	"alphabetNumberCommaAtTheRateAmpersonDotSlashHyphenBracketAndSpace",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^[a-zA-Z0-9,@&.()\-/ ]*$/);
	}
);

$.validator.addMethod(
	"oneDigitOneUpperCaseOneLowerCaseOneSpecialCharMinimumSix",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-+,()\-/]).{6,}$/);
	}
);

$.validator.addMethod(
	"validTwitterUrl",
	function(value, element) 
	{
		//return this.optional(element) || value == value.match(/^(?:https?:\/\/)?(?:\w{3}\.)?twitter\.com\/(#!\/)?[a-z0-9_]+$/);
		return this.optional(element) || value == value.match(/^(?:https?:\/\/)?(?:\w{3}\.)?twitter\.com\/.*/);
	}
);

$.validator.addMethod(
	"validFacebookUrl",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^(?:https?:\/\/)?(?:\w{3}\.)?facebook\.com\/.*/);
	}
);

$.validator.addMethod(
	"validGoogleUrl",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^(?:https?:\/\/)?(?:\w{3}\.)?googleplus\.com\/.*/);
	}
);

$.validator.addMethod(
	"validLinkedInUrl",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^(?:https?:\/\/)?(?:\w{3}\.)?linkedin\.com\/.*/);
	}
);

$.validator.addMethod(
	"validYoutubeUrl",
	function(value, element) 
	{
		return this.optional(element) || value == value.match(/^(?:https?:\/\/)?(?:\w{3}\.)?youtube\.com\/.*/);
	}
);

$.validator.addMethod("notEqualTo", function(value, element, param){
    return this.optional(element) || value != param;
});

$.validator.addMethod(
    "checkvalidUrl", 
    function(value, element) {
    	var response = 0;
    	var value = $('#url').val();
		var config = 
				    {
				        'X-CSRF-Token': $('input[name="_token"]').val()
				    }
		$.ajax({
			type: "POST",
			url: $baseURL+'ajax/check-valid-url',
			data: {'url':value},
			dataType: "json",
			async:false,
			headers:config,
			beforeSend: function() {
				
			},
			success: function (data) {
				response = data.status;
			}
		});
		if(response == 1)
			return true;
    }
);

$.validator.addMethod(
    "uniqueRegistrationEmail", 
    function(value, element) {
    	var response 	= 0;
    	var value 		= $('#email').val();
		var config 		= {'X-CSRF-Token': $('input[name="_token"]').val()}
		$.ajax({
			type 		: "POST",
			url 		: $baseURL+'ajax/check-duplicate',
			data 		: {'value':value,'type':'e','action':'a','id':'0'},
			dataType 	: "json",
			async 		: false,
			headers 	: config,
			beforeSend 	: function() {
				
			},
			success 	: function (data) {
				response = data.status;
			}
		});
		if(response == 1)
			return true;
    }
);

$.validator.addMethod(
    "uniqueRegistrationMobile", 
    function(value, element) {
    	var response 	= 0;
    	var value 		= $('#mobile').val();
    	var phone_code  = $('#phone_code').val();
		var config 		= {'X-CSRF-Token': $('input[name="_token"]').val()}
		$.ajax({
			type 		: "POST",
			url 		: $baseURL+'ajax/check-duplicate',
			data 		: {'value':value, 'phone_code':phone_code, 'type':'m', 'action':'a', 'id':'0'},
			dataType 	: "json",
			async 		: false,
			headers 	: config,
			beforeSend 	: function() {
				
			},
			success 	: function (data) {
				response = data.status;
			}
		});
		if(response == 1)
			return true;
    }
);

$.validator.addMethod(
    "uniqueEditProfileEmail", 
    function(value, element) {
    	var response 	= 0;
    	var value 		= $('#email').val();
		var config 		= {'X-CSRF-Token': $('input[name="_token"]').val()}
		$.ajax({
			type 		: "POST",
			url 		: $baseURL+'ajax/check-duplicate',
			data 		: {'value':value,'type':'e','action':'e','id':$userId},
			dataType 	: "json",
			async 		: false,
			headers 	: config,
			beforeSend 	: function() {
				
			},
			success 	: function (data) {
				response = data.status;
			}
		});
		if(response == 1)
			return true;
    }
);

$.validator.addMethod(
    "uniqueEditProfileMobile", 
    function(value, element) {
    	var response 	= 0;
    	var value 		= $('#mobile').val();
    	var phone_code  = $('#phone_code').val();
		var config 		= {'X-CSRF-Token': $('input[name="_token"]').val()}
		$.ajax({
			type 		: "POST",
			url 		: $baseURL+'ajax/check-duplicate',
			data 		: {'value':value, 'phone_code':phone_code, 'type':'m', 'action':'e', 'id':$userId},
			dataType 	: "json",
			async 		: false,
			headers 	: config,
			beforeSend 	: function() {
				
			},
			success 	: function (data) {
				response = data.status;
			}
		});
		if(response == 1)
			return true;
    }
);

$.validator.addMethod(
    "uniqueAdminEmail", 
    function(value, element) {
    	var response 	= 'error';
    	var value 		= $('#email').val();
		var config 		= 
						    {
						        'X-CSRF-Token': $('input[name="_token"]').val()
						    }
		$.ajax({
			type: "POST",
			url: $baseURL+'ajax/check-duplicate',
			data: {'value':value,'type':'e','action':'e','id':$userId},
			dataType: "json",
			async:false,
			headers:config,
			beforeSend: function() {
				
			},
			success: function (data) {
				response = data.status;
			}
		});
		if(response == 'success')
			return true;
    }
);

$.validator.addMethod(
    "uniqueTitle", 
    function(value, element) {
    	var response 	= 'error';
    	var value 		= $('#' + $entityColumn).val();
		var config 		= 
						    {
						        'X-CSRF-Token': $('input[name="_token"]').val()
						    }
		var jqXHR		= $.ajax({
			type: "POST",
			url: $baseURL+'ajax/check-duplicate',
			data: {
				'action': $entityAction,
				'entity': $entity,
				'column_name': $entityColumn,
				'value':value,
				'id': $entityId
			},
			dataType: "json",
			async:false,
			headers:config,
			beforeSend: function() {
				
			},
			success: function (data) {
				response = data.status; 
			}
		});
		console.log(JSON.parse(jqXHR.responseText));
		if(JSON.parse(jqXHR.responseText).status == 'success')
			return true;
    }
);


// User Email
$.validator.addMethod(
    "uniqueUserEmail", 
    function(value, element) {
    	var response 	= 'error';
    	var value 		= $('#email').val();
		var config 		= 
						    {
						        'X-CSRF-Token': $('input[name="_token"]').val()
						    }
		var jqXHR		= $.ajax({
			type: "POST",
			url: $baseURL+'ajax/check-duplicate',
			data: {
				'action': $entityAction,
				'entity': $entity,
				'column_name': $entityColumn,
				'value':value,
				'id': $entityId,
				'email': $entityEmail
			},
			dataType: "json",
			async:false,
			headers:config,
			beforeSend: function() {
				
			},
			success: function (data) {
				response = data.status; 
			}
		});
		console.log(JSON.parse(jqXHR.responseText));
		if(JSON.parse(jqXHR.responseText).status == 'success')
			return true;
    }
);

// User Mobile
$.validator.addMethod(
    "uniqueUserMobile", 
    function(value, element) {
    	var response 	= 'error';
    	var value 		= $('#mobile').val();
		var config 		= 
						    {
						        'X-CSRF-Token': $('input[name="_token"]').val()
						    }
		var jqXHR		= $.ajax({
			type: "POST",
			url: $baseURL+'ajax/check-duplicate',
			data: {
				'action': $entityAction,
				'entity': $entity,
				'column_name': $entityColumn,
				'value':value,
				'id': $entityId,
				'mobile': $entityMobile
			},
			dataType: "json",
			async:false,
			headers:config,
			beforeSend: function() {
				
			},
			success: function (data) {
				response = data.status; 
			}
		});
		console.log(JSON.parse(jqXHR.responseText));
		if(JSON.parse(jqXHR.responseText).status == 'success')
			return true;
    }
);