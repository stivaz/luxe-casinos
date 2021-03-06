<?php
/**
 * Noindex Manager Module
 *
 * @since 0.1
 */

if ( class_exists( 'SU_Module' ) ) {

	function su_noindex_export_filter( $all_settings ) {
		unset( $all_settings['meta']['taxonomy_meta_robots_noindex'] );
		unset( $all_settings['meta']['taxonomy_meta_robots_nofollow'] );
		unset( $all_settings['meta']['taxonomy_meta_robots_noarchive'] );
		unset( $all_settings['meta']['taxonomy_meta_robots_nosnippet'] );

		return $all_settings;
	}

	add_filter( 'su_settings_export_array', 'su_noindex_export_filter' );

	class SU_Noindex extends SU_Module {

		static function get_module_title() {
			return __( 'Noindex Manager', 'seo-ultimate-pro' );
		}

		function get_module_subtitle() {
			return __( 'Noindex', 'seo-ultimate-pro' );
		}

		static function get_parent_module() {
			return 'meta-robots';
		}

		function get_settings_key() {
			return 'noindex';
		}

		static function is_independent_module() {
			return false;
		}

		function init() {

			//Hook into our wp_head() action
			add_action( 'su_meta_robots', array( &$this, 'wphead_meta_robots' ), 1 );

			//Now we'll hook into places where wp_head() is not called

			//Hook into comment feed headers
			if ( $this->get_setting( 'noindex_comments_feed' ) ) {
				add_action( 'commentsrss2_head', array( &$this, 'rss2_noindex_tag' ) );
			}

			//Hook into the admin header
			if ( $this->get_setting( 'noindex_admin' ) ) {
				add_action( 'admin_head', array( &$this, 'xhtml_noindex_tag' ) );
			}

			//Hook into the login header
			if ( $this->get_setting( 'noindex_login' ) ) {
				add_action( 'login_head', array( &$this, 'xhtml_noindex_tag' ) );
			}
		}

		function get_admin_page_tabs() {

			return array_merge(
				array(
					array(
						'title'    => __( 'Default Values', 'seo-ultimate-pro' ),
						'id'       => 'su-default-values',
						'callback' => 'defaults_tab'
					)
				)
				, $this->get_postmeta_edit_tabs( array(
				array(
					'type'  => 'checkbox'
				,
					'name'  => 'meta_robots_noindex'
				,
					'label' => __( '<input type="checkbox" class="check noindex-check" /> Noindex', 'seo-ultimate-pro' )
				)
			,
				array(
					'type'  => 'checkbox'
				,
					'name'  => 'meta_robots_nofollow'
				,
					'label' => __( '<input type="checkbox" class="check nofollow-check" /> Nofollow', 'seo-ultimate-pro' )
				)
			,
				array(
					'type'  => 'checkbox'
				,
					'name'  => 'meta_robots_noarchive'
				,
					'label' => __( '<input type="checkbox" class="check noarchive-check" /> Noarchive', 'seo-ultimate-pro' )
				)
			,
				array(
					'type'  => 'checkbox'
				,
					'name'  => 'meta_robots_nosnippet'
				,
					'label' => __( '<input type="checkbox" class="check nosnippet-check" /> Nosnippet', 'seo-ultimate-pro' )
				)
			) )
				, $this->get_taxmeta_edit_tabs( array(
				array(
					'type'              => 'dropdown'
				,
					'name'              => 'meta_robots_noindex'
				,
					'options'           => array(
						0   => __( 'Use default', 'seo-ultimate-pro' )
					,
						1   => __( 'noindex', 'seo-ultimate-pro' )
					,
						- 1 => __( 'index', 'seo-ultimate-pro' )
					)
				,
					'term_settings_key' => 'taxonomy_meta_robots_noindex'
				,
					'label'             => __( 'Noindex', 'seo-ultimate-pro' )
				)
			,
				array(
					'type'              => 'dropdown'
				,
					'name'              => 'meta_robots_nofollow'
				,
					'options'           => array(
						0   => __( 'Use default', 'seo-ultimate-pro' )
					,
						1   => __( 'nofollow', 'seo-ultimate-pro' )
					,
						- 1 => __( 'follow', 'seo-ultimate-pro' )
					)
				,
					'term_settings_key' => 'taxonomy_meta_robots_nofollow'
				,
					'label'             => __( 'Nofollow', 'seo-ultimate-pro' )
				)
			,
				array(
					'type'              => 'dropdown'
				,
					'name'              => 'meta_robots_noarchive'
				,
					'options'           => array(
						0   => __( 'Use default', 'seo-ultimate-pro' )
					,
						1   => __( 'noarchive', 'seo-ultimate-pro' )
					,
						- 1 => __( 'archive', 'seo-ultimate-pro' )
					)
				,
					'term_settings_key' => 'taxonomy_meta_robots_noarchive'
				,
					'label'             => __( 'Noarchive', 'seo-ultimate-pro' )
				)
			,
				array(
					'type'              => 'dropdown'
				,
					'name'              => 'meta_robots_nosnippet'
				,
					'options'           => array(
						0   => __( 'Use default', 'seo-ultimate-pro' )
					,
						1   => __( 'nosnippet', 'seo-ultimate-pro' )
					,
						- 1 => __( 'snippet', 'seo-ultimate-pro' )
					)
				,
					'term_settings_key' => 'taxonomy_meta_robots_nosnippet'
				,
					'label'             => __( 'Nosnippet', 'seo-ultimate-pro' )
				)
			) )
			);
		}

		function defaults_tab() {

			//If global noindex tags are enabled, these settings will be moot, so notify the user.
			if ( ! get_option( 'blog_public' ) ) {
				$this->queue_message( 'error',
					__( 'Note: The <a href="options-reading.php">&#8220;discourage search engines&#8221; checkbox</a> will block indexing of the entire site, regardless of which options are set below.', 'seo-ultimate-pro' ) );
			}

			$this->admin_form_table_start();
			$this->admin_form_subheader( __( 'Prevent indexing of...', 'seo-ultimate-pro' ) );
			$this->checkboxes( array(
				'noindex_admin'         => __( 'Administration back-end pages', 'seo-ultimate-pro' )
			,
				'noindex_author'        => __( 'Author archives', 'seo-ultimate-pro' )
			,
				'noindex_search'        => __( 'Blog search pages', 'seo-ultimate-pro' )
			,
				'noindex_category'      => __( 'Category archives', 'seo-ultimate-pro' )
			,
				'noindex_comments_feed' => __( 'Comment feeds', 'seo-ultimate-pro' )
			,
				'noindex_cpage'         => __( 'Comment subpages', 'seo-ultimate-pro' )
			,
				'noindex_date'          => __( 'Date-based archives', 'seo-ultimate-pro' )
			,
				'noindex_home_paged'    => __( 'Subpages of the homepage', 'seo-ultimate-pro' )
			,
				'noindex_tag'           => __( 'Tag archives', 'seo-ultimate-pro' )
			,
				'noindex_login'         => __( 'User login/registration pages', 'seo-ultimate-pro' )
			) );
			$this->admin_form_table_end();
		}

		function wphead_meta_robots( $commands ) {
			global $seo_ultimate_plus;
			$new = array(
				$this->should_noindex() ? 'noindex' : 'index'
			,
				$this->should_nofollow() ? 'nofollow' : 'follow'
			,
				$this->should_noarchive() ? 'noarchive' : 'archive'
			,
				$this->should_nosnippet() ? 'nosnippet' : 'snippet'
			);

			if ( $new != array( 'index', 'follow', 'archive', 'snippet' ) ) {
				$commands = array_merge( $commands, $new );
			}

			return $commands;
		}

		function should_noindex() {
			if ( $this->get_postmeta( 'meta_robots_noindex' ) ) {
				return true;
			}

			switch ( $this->get_termmeta( 'meta_robots_noindex', false, 'meta' ) ) {
				case 1:
					return true;
					break;
				case - 1:
					return false;
					break;
			}

			$checks = array( 'author', 'search', 'category', 'date', 'tag' );

			foreach ( $checks as $setting ) {
				if ( call_user_func( "is_$setting" ) ) {
					return $this->get_setting( "noindex_$setting" );
				}
			}

			//Homepage subpages
			if ( $this->get_setting( 'noindex_home_paged' ) && is_home() && is_paged() ) {
				return true;
			}

			//Comment subpages
			global $wp_query;
			if ( $this->get_setting( 'noindex_cpage' ) && isset( $wp_query->query_vars['cpage'] ) ) {
				return true;
			}

			return false;
		}

		function should_nofollow() {
			if ( $this->get_postmeta( 'meta_robots_nofollow' ) ) {
				return true;
			}

			switch ( $this->get_termmeta( 'meta_robots_nofollow', false, 'meta' ) ) {
				case 1:
					return true;
					break;
				case 0:
				case - 1:
					return false;
					break;
			}

			return false;
		}

		function should_noarchive() {
			if ( $this->get_postmeta( 'meta_robots_noarchive' ) ) {
				return true;
			}

			switch ( $this->get_termmeta( 'meta_robots_noarchive', false, 'meta' ) ) {
				case 1:
					return true;
					break;
				case 0:
				case - 1:
					return false;
					break;
			}

			return false;
		}

		function should_nosnippet() {
			if ( $this->get_postmeta( 'meta_robots_nosnippet' ) ) {
				return true;
			}

			switch ( $this->get_termmeta( 'meta_robots_nosnippet', false, 'meta' ) ) {
				case 1:
					return true;
					break;
				case 0:
				case - 1:
					return false;
					break;
			}

			return false;
		}

		function rss2_noindex_tag() {
			echo "<xhtml:meta xmlns:xhtml=\"http://www.w3.org/1999/xhtml\" name=\"robots\" content=\"noindex\" />\n";
		}

		function xhtml_noindex_tag() {
			echo "\t<meta name=\"robots\" content=\"noindex\" />\n";
		}

		function postmeta_fields( $fields, $screen ) {
			$fields['advanced'][25]['meta_robots_noindex|meta_robots_nofollow|meta_robots_noarchive|meta_robots_nosnippet'] = $this->get_postmeta_checkboxes( array(
				'meta_robots_noindex'   => __( 'Noindex: Tell search engines not to index this webpage.', 'seo-ultimate-pro' )
			,
				'meta_robots_nofollow'  => __( 'Nofollow: Tell search engines not to spider links on this webpage.', 'seo-ultimate-pro' )
			,
				'meta_robots_noarchive' => __( 'Noarchive: Tell search engines not to archive this page.', 'seo-ultimate-pro' )
			,
				'meta_robots_nosnippet' => __( 'Nosnippet: Tell search engines not to display a snippet or cache this page.', 'seo-ultimate-pro' )
			), __( 'Meta Robots Tag:', 'seo-ultimate-pro' ) );

			return $fields;
		}
	}
}
?>