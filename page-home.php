<?php
/**
 * Template Name: Home
 * Description: Template for the home page.
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();

$timber_post = new Timber\Post();
$context['post'] = $timber_post;
$context['sidebar'] = Timber::get_widgets('sidebar');
$context['navbar'] = Timber::get_widgets('navbar');
$context['footer'] = Timber::get_widgets('footer');

$lego_books_args = array(
    'post_type' => 'page',
    'name' => 'lego-books',
    'post_status' => 'publish',
    'posts_per_page'=>1,
);
$context['lego_books'] = Timber::get_post($lego_books_args);

$recent_args = array(
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page'=>1,
    'order'=>'DESC',
    'orderby'=>'publish_date',
);
$context['recent'] = Timber::get_post($recent_args);

if($timber_post->featured_category_1){
	$f1_args = array(
    'numberposts' => 2,
    'post_type' => 'post',
    'cat' => $timber_post->featured_category_1
	);
	$context['featured']['featured_category_1'] = Timber::get_posts($f1_args);
}

if($timber_post->featured_category_2){
	$f2_args = array(
    'numberposts' => 2,
    'post_type' => 'post',
    'cat' => $timber_post->featured_category_2
	);
	$context['featured']['featured_category_2'] = Timber::get_posts($f2_args);
}

if($timber_post->featured_category_3){
	$f3_args = array(
    'numberposts' => 2,
    'post_type' => 'post',
    'cat' => $timber_post->featured_category_3
	);
	$context['featured']['featured_category_3'] = Timber::get_posts($f3_args);
}

if($timber_post->featured_category_4){
	$f4_args = array(
    'numberposts' => 2,
    'post_type' => 'post',
    'cat' => $timber_post->featured_category_4
	);
	$context['featured']['featured_category_4'] = Timber::get_posts($f4_args);
}




//echo '<pre>';
//print_r($context['post']);
//echo '</pre>';

Timber::render( array( 'page-' . $timber_post->post_name . '.twig', 'page.twig' ), $context );

