var $j = jQuery.noConflict();

$j(document).ready(function(){ 
 
    /*$j(window).scroll(function(){
        if ($j(this).scrollTop() > 100) {
            $j('#toTop').fadeIn();
        } else {
            $j('#toTop').fadeOut();
        }
    }); */

    $j('#toTop').click(function(){
        $j("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});