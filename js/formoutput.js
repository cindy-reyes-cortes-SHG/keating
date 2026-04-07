jQuery("document").ready(function (){
			jQuery("form").submit(function (e) {
				BuildFormOutput(this);

			return true;

			});
		});

        function BuildFormOutput(passForm) {

			if(!$(passForm).attr("action").includes("/inventory")){
            var arrFields = $(passForm).find('select, textarea, input:not([type="hidden"])').serializeArray();
            var formHTML = "";

            for (var i = 0; i < arrFields.length; i++) {

                var field = jQuery('[name="' + arrFields[i].name + '"]');
                
				if (field.attr('name') == "CaptchaAnswer")
				{
					i++;
					continue;
				}			
				
				var fieldType = field.prop("tagName");
                var fieldDisplayName = arrFields[i].name.replace(/\_/g,' ');

                switch (fieldType) {
                    case "INPUT":
                    case "SELECT":
					case "TEXTAREA":
						if (arrFields[i].value.length < 20)
						{
							formHTML += "<div><strong>" + fieldDisplayName + ": </strong>" + arrFields[i].value + "</div>";	
						}
						else
						{
							formHTML += "<p><strong>" + fieldDisplayName + ": </strong>" + arrFields[i].value + "</p>";	
						}
                        

                        break;
                }

            }

            if (jQuery("[name='form_output']").length == 0) {
                jQuery('<input>', { type: 'hidden', name: 'form_output', value: formHTML }).appendTo('form');
            }
            else {

                jQuery("[name='form_output']").val(formHTML);
            }
       
            return false;
}
        }