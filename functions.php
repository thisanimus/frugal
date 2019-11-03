<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block. 
 */
/*$composer_autoload = dirname($_SERVER['DOCUMENT_ROOT']).'/vendor/autoload.php';
if ( file_exists($composer_autoload) ) {
	require_once( $composer_autoload );
	$timber = new Timber\Timber();
}
*/
/**
 * This ensures that Timber is loaded and available as a PHP class.
 * If not, it gives an error message to help direct developers on where to activate
 */
if ( ! class_exists( 'Timber' ) ) {

	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
	});

	add_filter('template_include', function( $template ) {
		return get_stylesheet_directory() . '/static/no-timber.html';
	});
	return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array( 'templates', 'views' );

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;


/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */
class Frugal extends Timber\Site {
	/** Add timber support. */
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
		add_filter( 'timber/context', array( $this, 'add_to_context' ) );
		add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		add_action( 'init', array( $this, 'unbloat' ) );
		add_action( 'widgets_init', array( $this, 'frugal_widgets_init' ) );
		add_action( 'init', array( $this, 'custom_post_type') );
		add_filter( 'get_search_form', array( $this, 'frugal_search_form') );
        add_filter('upload_mimes', array( $this, 'cc_mime_types') );
        add_filter( 'wpseo_sitemap_entries_per_page', array( $this, 'max_entries_per_sitemap' ) );
        add_filter( 'post_thumbnail_html', array( $this, 'remove_width_attribute'));
        add_filter( 'image_send_to_editor', array( $this, 'remove_width_attribute') );
        add_filter( 'post_thumbnail_html', array( $this, 'remove_thumbnail_dimensions') );
		//add_action( 'wp_enqueue_scripts', array( $this, 'scripts') ); 
		parent::__construct();
	}
	/** This is where you can register custom post types. */
	public function register_post_types() {

	}
	/** This is where you can register custom taxonomies. */
	public function register_taxonomies() {
		

	}
	
	public function unbloat() {
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 ); 
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' ); 
		remove_action( 'wp_print_styles', 'print_emoji_styles' ); 
		remove_action( 'admin_print_styles', 'print_emoji_styles' );
	}

	/**
	 * Register our sidebars and widgetized areas.
	 *
	 */
	public function frugal_widgets_init() {


		register_sidebar( 
			array(
				'name'          => 'Sidebar',
				'id'            => 'sidebar',
				'before_title'  => '<h2>',
				'after_title'   => '</h2>',
			) 
		);
		register_sidebar( 
			array(
				'name'          => 'Navbar',
				'id'            => 'navbar',
			) 
		);
		register_sidebar( 
			array(
				'name'          => 'All Posts Page',
				'id'            => 'allpostspage',
			) 
		);
		register_sidebar( 
			array(
				'name'          => 'Footer',
				'id'            => 'footer',
			) 
		);

	}

	public function frugal_search_form( $form ) {
		$form = '<form role="search" method="get" id="searchform" class="frugal-search" action="' . home_url( '/' ) . '" >
		<input type="search" class="search-input" aria-label="Search" placeholder="Search" value="' . get_search_query() . '" name="s" id="s" />
		<button type="submit" class="search-submit" id="searchsubmit"><ion-icon name="search"></ion-icon></button>
		</form>';

		return $form;
    }

    public function remove_width_attribute( $html ) {
        $html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
        return $html;
    }

    public function remove_thumbnail_dimensions( $html, $post_id, $post_image_id ) {
        $html = preg_replace( '/(width|height)=\"\d*\"\s/', "", $html );
        return $html;
    }


   

	/** This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {
		$context['foo'] = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::context();';
		$context['menu'] = new Timber\Menu();
		$context['site'] = $this;
		return $context;
	}

	public function theme_supports() {
		// Add default posts and comments RSS feed links to head.
		//add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5', array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		add_theme_support(
			'post-formats', array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'audio',
			)
		);

		add_theme_support( 'menus' );
	}

	public function cc_mime_types($mimes) {
		$mimes['svg'] = 'image/svg+xml';
		return $mimes;
    }
    
    
    public function max_entries_per_sitemap() {
        return 10000;
    }
	  

		  
		

	/** This Would return 'foo bar!'.
	 *
	 * @param string $text being 'foo', then returned 'foo bar!'.
	 */
	public function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	/** This is where you can add your own functions to twig.
	 *
	 * @param string $twig get extension.
	 */
	public function add_to_twig( $twig ) {
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter( new Twig_SimpleFilter( 'myfoo', array( $this, 'myfoo' ) ) );

		return $twig;
	}

}

new Frugal();
