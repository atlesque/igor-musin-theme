<?php

function load_custom_styles() {
  wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'imageviewer', get_stylesheet_directory_uri() . '/css/vendor/imageviewer.css' );
	wp_enqueue_style( 'fancybox', get_stylesheet_directory_uri() . '/css/vendor/jquery.fancybox.min.css' );
}
add_action( 'wp_enqueue_scripts', 'load_custom_styles' );

function load_custom_scripts() {
	wp_enqueue_script( 'imageviewer', get_stylesheet_directory_uri() . '/js/vendor/imageviewer.min.js', array( 'jquery' ), true );
	wp_enqueue_script( 'fancybox', get_stylesheet_directory_uri() . '/js/vendor/jquery.fancybox.min.js', array( 'jquery' ), true );
	wp_enqueue_script( 'custom', get_stylesheet_directory_uri() . '/js/custom.js', array( 'jquery' ), true );
}
add_action( 'wp_enqueue_scripts', 'load_custom_scripts' );
