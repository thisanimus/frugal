<?php
/**
 * Template Name: Instagram
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


$instagram_args = array(
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => -1,
    'meta_key' => 'featured_on_instagram',
    'order'=>'DESC',
    'orderby'=>'publish_date',
);
$context['instagram_posts'] = Timber::get_posts($instagram_args);

Timber::render( array( 'page-instagram.twig', 'page.twig' ), $context );

