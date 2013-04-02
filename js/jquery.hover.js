var $j = jQuery.noConflict();

$j(window).load(function() {

	/*BLOG LIST*/

	$j(".hblog-list a").hover(function(){
		$j("img", this).stop().animate({opacity: 0.1},{queue:false,duration:400});
		$j(".hover-style", this).css("display","block");	
		$j(".hover-style", this).animate({opacity: 1},{queue:false,duration:900});
		$j(".hover-style-video", this).css("display","block");	
		$j(".hover-style-video", this).animate({opacity: 1},{queue:false,duration:900});
	}, function() {
		$j("img", this).stop().animate({opacity: 1},{queue:false,duration:400});
		$j(".hover-style", this).css("display","none");	
		$j(".hover-style", this).animate({opacity: 0},{queue:false,duration:400});	
		$j(".hover-style-video", this).css("display","none");	
		$j(".hover-style-video", this).animate({opacity: 0},{queue:false,duration:400});
	});

	/*PORTFOLIO LIST HOMEPAGE*/

	$j(".es-carousel ul li a").hover(function(){
		$j("img", this).stop().animate({opacity: 0.1},{queue:false,duration:400});
		$j(".hover-portfolio", this).css("display","block");	
		$j(".hover-portfolio", this).animate({opacity: 1},{queue:false,duration:900});		
	}, function() {
		$j("img", this).stop().animate({opacity: 1},{queue:false,duration:400});
		$j(".hover-portfolio", this).css("display","none");	
		$j(".hover-portfolio", this).animate({opacity: 0},{queue:false,duration:400});
	});

	/*PORTFOLIO LIST*/

	$j(".portfolio-list").hover(function(){
		$j("img", this).stop().animate({opacity: 0.1},{queue:false,duration:400});
		$j(".hover-style", this).css("display","block");	
		$j(".hover-style", this).animate({opacity: 1},{queue:false,duration:900});	
		$j("h2", this).css("display","block");	
		$j("h2", this).animate({opacity: 1},{queue:false,duration:900});	
		$j(".pcat", this).css("display","block");	
		$j(".pcat", this).animate({opacity: 1},{queue:false,duration:900});		
		$j("a.port-link", this).css("display","block");	
		$j("a.port-link", this).animate({opacity: 1},{queue:false,duration:900});	
	}, function() {
		$j("img", this).stop().animate({opacity: 1},{queue:false,duration:400});
		$j(".hover-style", this).css("display","none");	
		$j(".hover-style", this).animate({opacity: 0},{queue:false,duration:400});
		$j("h2", this).css("display","none");	
		$j("h2", this).animate({opacity: 0},{queue:false,duration:400});
		$j(".pcat", this).css("display","none");	
		$j(".pcat", this).animate({opacity: 0},{queue:false,duration:400});
		$j("a.port-link", this).css("display","none");	
		$j("a.port-link", this).animate({opacity: 0},{queue:false,duration:400});
	});


	/*FLICKR LIST*/

	$j("#fbox li").hover(function(){
		$j("img", this).stop().animate({opacity: 0.5},{queue:false,duration:400});		
	}, function() {
		$j("img", this).stop().animate({opacity: 1},{queue:false,duration:400});
	});

	/*MEMBERS LIST*/

	$j(".thumbs-animate").hover(function(){
		$j("img", this).stop().animate({opacity: 0.1},{queue:false,duration:400});
		$j(".team-social img", this).animate({opacity: 0.7},{queue:false,duration:400});
		$j(".team-social", this).css("display","block");		
	}, function() {
		$j("img", this).stop().animate({opacity: 1},{queue:false,duration:400});
		$j(".team-social", this).css("display","none");
	});
});