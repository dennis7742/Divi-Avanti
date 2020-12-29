<?php if( file_exists( get_stylesheet_directory().'/jedi-apprentice/jedi-apprentice-import.php' ) && !defined('JEDI_APPRENTICE_PATH') ) {include_once( get_stylesheet_directory().'/jedi-apprentice/jedi-apprentice-import.php' );} ?><?php 

add_action( 'wp_enqueue_scripts', 'my_avanti_assets' ); 

function my_avanti_assets() { 

    wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' ); 
	wp_enqueue_script( 'theme-scripts', get_stylesheet_directory_uri() . '/js/avanti-custom-scripts.js', array( 'jquery' ), '1.0', true );
	wp_enqueue_style('font-awesome', '//use.fontawesome.com/releases/v5.0.13/css/all.css');

} 

// Begin remove Divi Portfolio and Filterable Portfolio featured image crop
function mh_portfolio_image_width($width) {
	return '9999';
}
function mh_portfolio_image_height($height) {
	return '9999';
}
add_filter( 'et_pb_portfolio_image_width', 'mh_portfolio_image_width' );
add_filter( 'et_pb_portfolio_image_height', 'mh_portfolio_image_height' );
// End remove Divi Portfolio and Filterable Portfolio featured image crop
