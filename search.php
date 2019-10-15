<?php
/**
 * Search results page
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$templates = array( 'search.twig', 'archive.twig', 'index.twig' );

$context          = Timber::context();
$context['title'] = get_search_query();
$context['posts'] = new Timber\PostQuery();

$context['sidebar'] = Timber::get_widgets('sidebar');
$context['navbar'] = Timber::get_widgets('navbar');
$context['footer'] = Timber::get_widgets('footer');

Timber::render( $templates, $context );
