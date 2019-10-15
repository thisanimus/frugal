<?php
/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context = Timber::context();
$context['sidebar'] = Timber::get_widgets('sidebar');
$context['navbar'] = Timber::get_widgets('navbar');
$context['footer'] = Timber::get_widgets('footer');
$context['allpostspage'] = Timber::get_widgets('allpostspage');

$context['posts'] = new Timber\PostQuery();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

$context['foo'] = 'bar';


$templates = array( 'index.twig' );
if ( is_home() ) {
	array_unshift( $templates, 'page-all.twig', 'page-home.twig' );
}
Timber::render( $templates, $context );

