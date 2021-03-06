<?php
/*
 * Plugin References:
 *  Custom Taxonomy Sort - Zack Tollman
 *	http://www.zackdev.com
 *  Custom Taxonomy Sort allows you to explicitly control the sort order of all taxonomy terms.
 * 
 *  Simple Term Meta - Murray Consulting 
 *	http://www.cmurrayconsulting.com
 *  Adds meta data and associated functions for saving / reading to terms in any taxonomy.
 * 
 */

class WPUS_Category_Order
{
    //Constructor
    public function __construct() 
    {
		add_action( 'init', array(&$this, 'wpu_category_init') );
		add_action('category_add_form_fields', array(&$this,'category_metabox_add'), 10, 1);
		add_action('category_edit_form_fields', array(&$this,'category_metabox_edit'), 10, 1);
		add_action('created_category', array(&$this,'save_category_meta_data'), 10, 1);	
		add_action('edited_category', array(&$this,'save_category_meta_data'), 10, 1);
		add_filter('get_terms', array(&$this,'custom_term_sort'), 10, 3);
	} 
	function wpu_category_init() {

			global $wpdb;
			
		$table_name = $wpdb->prefix . 'termmeta';
		
		if( $wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name ) :
		
			$sql = "CREATE TABLE $table_name (
			  meta_id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
			  term_id bigint(20) unsigned NOT NULL DEFAULT '0',
			  meta_key varchar(255) DEFAULT NULL,
			  meta_value longtext,
			  PRIMARY KEY  (meta_id),
			  KEY term_id (term_id),
			  KEY meta_key (meta_key)	  
			);";
			
			require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
			dbDelta($sql);
			
		endif;
		
		update_option( "simple_term_meta_db_version", '0.9' );
		$wpdb->termmeta = $wpdb->prefix . 'termmeta';
		

	} 
	
	function category_metabox_add($tag) 
{
?>
	<div class="form-field">
		<label for="tax-order"><?php _e('Order') ?></label>
		<input name="tax-order" id="tax-order" type="text" value="" size="40" aria-required="true" />
		<p class="description"><?php _e('Determines the order in which the term is displayed.'); ?></p>
	</div>
<?php
} 	

function category_metabox_edit($tag) 
{
?>
	<tr class="form-field">
		<th scope="row" valign="top">
			<label for="tax-order"><?php _e('Order'); ?></label>
		</th>
		<td>
			<input name="tax-order" id="tax-order" type="text" value="<?php echo $this->get_term_meta($tag->term_id, 'tax-order', true); ?>" size="40" aria-required="true" />
			<p class="description"><?php _e('Determines the order in which the term is displayed.'); ?></p>
		</td>
	</tr>
<?php
}

function save_category_meta_data($term_id)
{
    if (isset($_POST['tax-order'])) 
		$this->update_term_meta( $term_id, 'tax-order', $_POST['tax-order']);       
}



function custom_term_sort($terms, $taxonomies, $args)
{		
	// Controls behavior when get_terms is called at unusual times resulting in a terms array without objects
	$empty = false;
	
	// Create collector arrays
	$ordered_terms = array();
	$unordered_terms = array();

	// Add taxonomy order to terms
	foreach($terms as $term)
	{
		// Only set tax_order if value is an object
		if(is_object($term))
		{
			if($taxonomy_sort = $this->get_term_meta($term->term_id, 'tax-order', true))
			{
				$term->tax_order = (int) $taxonomy_sort;
				$ordered_terms[] = $term;
			}
			else
			{
				// $term->tax_order = (int) 0;DBB
				$unordered_terms[] = $term;
			}
		}
		// elseDBB
			// $empty = true;DBB
	}
	
	// Only sort by tax_order if there are items to sort, otherwise return the original array

	if(!$empty && count($ordered_terms) > 0)
		$this->quickSort($ordered_terms);
	else
		return $terms;

	// Combine the newly ordered items with the unordered items and return
	return array_merge($ordered_terms, $unordered_terms);	
}

function quickSort(&$array)
{
	$cur = 1;
	$stack[1]['l'] = 0;
	$stack[1]['r'] = count($array)-1;
	
	do
	{
		$l = $stack[$cur]['l'];
		$r = $stack[$cur]['r'];
		$cur--;
	
		do
		{
			$i = $l;
			$j = $r;
			$tmp = $array[(int)( ($l+$r)/2 )];
		
			// partion the array in two parts.
			// left from $tmp are with smaller values,
			// right from $tmp are with bigger ones
			do
			{
				while( $array[$i]->tax_order < $tmp->tax_order )
				$i++;
			
				while( $tmp->tax_order < $array[$j]->tax_order )
			 	$j--;
			
				// swap elements from the two sides
				if( $i <= $j)
				{
					 $w = $array[$i];
					 $array[$i] = $array[$j];
					 $array[$j] = $w;
			
			 		$i++;
			 		$j--;
				}
			
			}while( $i <= $j );
			
			if( $i < $r )
			{
				$cur++;
				$stack[$cur]['l'] = $i;
				$stack[$cur]['r'] = $r;
			}
			$r = $j;
			
		}while( $l < $r );
			
	}while( $cur != 0 );
}
	/**
 * Updates metadata cache for list of term IDs.
 *
 * Performs SQL query to retrieve the metadata for the term IDs and updates the
 * metadata cache for the terms. Therefore, the functions, which call this
 * function, do not need to perform SQL queries on their own.
 *
 * @param array $term_ids List of post IDs.
 * @return bool|array Returns false if there is nothing to update or an array of metadata.
 */
function update_termmeta_cache($term_ids) {
	return update_meta_cache('term', $term_ids);
}

/**
 * Add meta data field to a term.
 *
 * @param int $term_id Term ID.
 * @param string $key Metadata name.
 * @param mixed $value Metadata value.
 * @param bool $unique Optional, default is false. Whether the same key should not be added.
 * @return bool False for failure. True for success.
 */
function add_term_meta( $term_id, $meta_key, $meta_value, $unique = false ) {
	return add_metadata('term', $term_id, $meta_key, $meta_value, $unique);
}

/**
 * Remove metadata matching criteria from a term.
 *
 * You can match based on the key, or key and value. Removing based on key and
 * value, will keep from removing duplicate metadata with the same key. It also
 * allows removing all metadata matching key, if needed.
 *
 * @param int $term_id Term ID
 * @param string $meta_key Metadata name.
 * @param mixed $meta_value Optional. Metadata value.
 * @return bool False for failure. True for success.
 */
function delete_term_meta( $term_id, $meta_key, $meta_value = '' ) {
	return delete_metadata('term', $term_id, $meta_key, $meta_value);
}

/**
 * Retrieve term meta field for a term.
 *
 * @param int $term_id Term ID.
 * @param string $key The meta key to retrieve.
 * @param bool $single Whether to return a single value.
 * @return mixed Will be an array if $single is false. Will be value of meta data field if $single
 *  is true.
 */
function get_term_meta( $term_id, $key, $single = false ) {
	return get_metadata('term', $term_id, $key, $single);
}

/**
 * Update term meta field based on term ID.
 *
 * Use the $prev_value parameter to differentiate between meta fields with the
 * same key and term ID.
 *
 * If the meta field for the term does not exist, it will be added.
 *
 * @param int $term_id Term ID.
 * @param string $key Metadata key.
 * @param mixed $value Metadata value.
 * @param mixed $prev_value Optional. Previous value to check before removing.
 * @return bool False on failure, true if success.
 */
function update_term_meta( $term_id, $meta_key, $meta_value, $prev_value = '' ) {
	return update_metadata('term', $term_id, $meta_key, $meta_value, $prev_value);
}

/**
 * Delete everything from term meta matching meta key.
 *
 * @param string $term_meta_key Key to search for when deleting.
 * @return bool Whether the term meta key was deleted from the database
 */
function delete_term_meta_by_key($term_meta_key) {
	if ( !$term_meta_key )
		return false;

	global $wpdb;
	$term_ids = $wpdb->get_col($wpdb->prepare("SELECT DISTINCT term_id FROM $wpdb->termmeta WHERE meta_key = %s", $term_meta_key));
	if ( $term_ids ) {
		$termmetaids = $wpdb->get_col( $wpdb->prepare( "SELECT meta_id FROM $wpdb->termmeta WHERE meta_key = %s", $term_meta_key ) );
		$in = implode( ',', array_fill(1, count($termmetaids), '%d'));
		do_action( 'delete_termmeta', $termmetaids );
		$wpdb->query( $wpdb->prepare("DELETE FROM $wpdb->termmeta WHERE meta_id IN($in)", $termmetaids ));
		do_action( 'deleted_termmeta', $termmetaids );
		foreach ( $term_ids as $term_id )
			wp_cache_delete($term_id, 'term_meta');
		return true;
	}
	return false;
}

/**
 * Retrieve term meta fields, based on term ID.
 *
 * The term meta fields are retrieved from the cache, so the function is
 * optimized to be called more than once. It also applies to the functions, that
 * use this function.
 *
 * @param int $term_id term ID
 * @return array
 */
function get_term_custom( $term_id ) {
	$term_id = (int) $term_id;

	if ( ! wp_cache_get($term_id, 'term_meta') )
		$this->update_termmeta_cache($term_id);

	return wp_cache_get($term_id, 'term_meta');
}

/**
 * Retrieve meta field names for a term.
 *
 * If there are no meta fields, then nothing (null) will be returned.
 *
 * @param int $term_id term ID
 * @return array|null Either array of the keys, or null if keys could not be retrieved.
 */
function get_term_custom_keys( $term_id ) {
	$custom = $this->get_term_custom( $term_id );

	if ( !is_array($custom) )
		return;

	if ( $keys = array_keys($custom) )
		return $keys;
}

/**
 * Retrieve values for a custom term field.
 *
 * The parameters must not be considered optional. All of the term meta fields
 * will be retrieved and only the meta field key values returned.
 *
 * @param string $key Meta field key.
 * @param int $term_id Term ID
 * @return array Meta field values.
 */
function get_term_custom_values( $key = '', $term_id ) {
	if ( !$key )
		return null;

	$custom = $this->get_term_custom($term_id);

	return isset($custom[$key]) ? $custom[$key] : null;
}

} // end ULTPosts
?>