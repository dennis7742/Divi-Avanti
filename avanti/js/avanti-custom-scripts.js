// Slide-in

jQuery(document).ready(function(){
    jQuery(".slide_in_2").click(function(){
        jQuery(".slide_in_2_section").toggleClass("show_form_2");
    });
});
	
	
jQuery(document).ready(function(){
    jQuery(".close_icon_2").click(function(){
        jQuery(".slide_in_2_section").removeClass("show_form_2");
    });
});

jQuery(document).ready(function(){
    jQuery(".slide_in_2").click(function(){
        jQuery(".slide_in_2_label_section").toggleClass("hide_label_slide_in_2");
    });
});

jQuery(document).ready(function(){
    jQuery(".close_icon_2").click(function(){
        jQuery(".slide_in_2_label_section").removeClass("hide_label_slide_in_2");
    });
});

jQuery(document).ready(function(){
    jQuery(".label_close_icon").click(function(){
        jQuery(".slide_in_2_label_section").toggleClass("hide_label_and_slide_in_2");
    });
});



//Colapsing mobile menu

(function($) {
       
function setup_collapsible_submenus() {
     
var FirstLevel = $('.et_mobile_menu .first-level > a');
   
FirstLevel.off('click').click(function() {
$(this).attr('href', '#open');  
$(this).parent().children().children().toggleClass('reveal-items');
$(this).toggleClass('icon-switch');
});
 
var ThirdLevel = $('.et_mobile_menu .third-level > a');
   
ThirdLevel.off('click').click(function() {
$(this).attr('href', '#open');  
$(this).parent().children().children().toggleClass('reveal-items');
$(this).toggleClass('icon-switch');
});	
 
}

       
$(window).load(function() {
setTimeout(function() {
setup_collapsible_submenus();
}, 700);
});
  
})(jQuery);