$(function(){
	$("#new_adopter").formwizard({ 
	 	focusFirstInput : true,
	 	historyEnabled : true,
	 	validationEnabled: true,
	 	disableUIStyles : true,
		inDuration : 200,
		outDuration: 200,
		validationOptions : {
			highlight: function(element, errorClass, validClass) {
	    		$(element).parents("div[class='clearfix']").addClass('error').removeClass(validClass);
	  		},
      		unhighlight: function (element, errorClass, validClass) { 
       			$(element).parents(".error").removeClass('error'); 
      		},
      		errorElement: 'span',
      		errorClass: 'error',
      		rules: {
      			"adopter[name]" : {
      				required: true,
      				maxlength: 50
      			},
      			"adopter[email]" : {
      				required: true,
      				email: true
      			},
      			"adopter[state]" : {
      				maxlength: 2
      			},
      			"adopter[zip]" : {
      				digits: true,
      				minlength: 5,
      				maxlength: 5
      			}
      		},
      		messages : {
      			// "adopter[pre_q_age]" : {required: "Have a parent fill out this form, or get an adult to co-sign."}
      		}
	 	}
	 });
});