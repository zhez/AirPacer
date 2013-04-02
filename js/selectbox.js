var $j = jQuery.noConflict();

$j('.menu').find('li:has(ul)').addClass('has-menu');

// Create default option "Go to..."

$j('#mselect').change(function(){					
	window.location = $j(this).val();
});

$j("<option />", {
	"selected": "selected",
	"value"   : "",
	"text"    : "Select Page"
}).appendTo("#mselect");

$j('.menu').find('li').each(function(){										
	cur_link = $j(this).children("a");

	if (!$j(this).parent('ul').hasClass('sub-menu')) {
		$j('#mselect').append('<option value='+cur_link.attr("href")+' >'+cur_link.text()+'</option>');		
	}else if (!$j(this).parent('ul.sub-menu li ul').hasClass('sub-menu')) {
		$j('#mselect').append('<option value='+cur_link.attr("href") +' > &nbsp; | - '+cur_link.text()+'</option>');
	}else {
		$j('#mselect').append('<option value='+cur_link.attr("href") +' > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp | - - '+cur_link.text()+'</option>');
	}

});