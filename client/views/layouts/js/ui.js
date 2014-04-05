/*Crowd-Train Front-End Handler*/ 

(function(Crowd_t, $, undefined){

	crowd_t = {

		Calert:function(msg){
			alert(msg);
		},
		select:function(id){

			$(id).chosen();

		}


	};


})(window.crowd_t = window.crowd_t || {}, jQuery);


$("#selectstart").chosen({width: "65%"});
$("#selectdestination").chosen({width: "65%"});
