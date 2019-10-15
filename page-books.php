<?php
/**
 * Template Name: Books
 * Description: Template for the books page.
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







//echo '<pre>';
//print_r($context['post']);
//echo '</pre>';

Timber::render( array( 'page-books.twig', 'page.twig' ), $context );

