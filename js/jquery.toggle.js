var $j = jQuery.noConflict();

$j(function($){
    $j(document).ready(function(){ 
    	$j(".toggle_container").hide();
     	$j("h4.toggle").click(function(){
    		$j(this).toggleClass("active").next().slideToggle("normal");
    		return false; 
		});
	}); 
}); 