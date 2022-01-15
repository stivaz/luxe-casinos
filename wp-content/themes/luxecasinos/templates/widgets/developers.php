<?php
$count = get_field( 'sidebar_dev_count', 'options' ) ? get_field( 'sidebar_dev_count', 'options' ) : - 1;
$title = get_field( 'sidebar_dev_title', 'options' );
$terms = get_terms( [
	'taxonomy' => 'developer'
] );
if ( $terms ) : ?>
	<div class="custom-widget custom-widget__dev">
		<p class="custom-widget__title">
			<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M25.5499 15.8492L23.0958 13.9804C23.1269 13.6923 23.1536 13.3554 23.1536 12.9989C23.1536 12.6425 23.128 12.3056 23.0958 12.0174L25.5522 10.1476C26.0083 9.79662 26.1329 9.17368 25.8425 8.6548L23.2904 4.355C23.0179 3.86968 22.4205 3.6205 21.8142 3.83825L18.9183 4.97032C18.3632 4.58032 17.7814 4.251 17.1795 3.98775L16.739 0.996684C16.6666 0.429 16.1593 0 15.5597 0H10.4423C9.84264 0 9.33648 0.429 9.26525 0.988L8.82361 3.98993C8.24064 4.24562 7.66774 4.57062 7.08812 4.9725L4.18451 3.83718C3.64045 3.63243 2.98964 3.86207 2.7193 4.34525L0.16394 8.65043C-0.137529 9.14662 -0.0129467 9.79118 0.453206 10.1509L2.90735 12.0196C2.86839 12.3847 2.84952 12.7021 2.84952 13.0001C2.84952 13.298 2.86845 13.6154 2.90735 13.9816L0.450963 15.8514C-0.00517664 16.2034 -0.128663 16.8264 0.161697 17.3442L2.71378 21.6439C2.98635 22.1282 3.57818 22.3795 4.19004 22.1607L7.08588 21.0286C7.6399 21.4176 8.22171 21.7469 8.82361 22.0112L9.26416 25.0012C9.33643 25.571 9.84264 26 10.4434 26H15.5608C16.1605 26 16.6678 25.571 16.739 25.012L17.1806 22.0112C17.7636 21.7544 18.3354 21.4305 18.9161 21.0275L21.8197 22.1628C21.9599 22.2159 22.1056 22.243 22.2558 22.243C22.6875 22.243 23.0846 22.0133 23.2849 21.6558L25.848 17.3333C26.1329 16.8263 26.0082 16.2034 25.5499 15.8492ZM13.001 17.3333C10.5468 17.3333 8.55103 15.3898 8.55103 13C8.55103 10.6102 10.5468 8.66668 13.001 8.66668C15.4551 8.66668 17.4509 10.6102 17.4509 13C17.4509 15.3898 15.4551 17.3333 13.001 17.3333Z" fill="#375A9E"/>
			</svg>
			<span><?= $title; ?></span>
		</p>

		<ul class="custom-widget__list custom-widget__dev-list">
			<?php foreach ( $terms as $term ) :
				$term_logo = get_field( 'logo', $term );
				$term_logo_bg = get_field( 'logo_bg', $term );
				$term_link = get_term_link( $term->term_id, 'developer' );
				?>
				<li class="custom-widget__dev-item-wrap">
					<a href="<?php echo get_term_link( $term->term_id ); ?>" class="custom-widget__dev-item">
						<span class="custom-widget__dev-img" style="background-color: <?= $term_logo_bg; ?>;">
							<img src="<?= kama_thumb_src( 'w=230 &nocrop=true', $term_logo['ID'] ); ?>" title="<?= $term_logo['title']; ?>" alt="<?= $term_logo['alt']; ?>">
						</span>
					</a>
				</li>
			<?php endforeach; ?>
		</ul>
	</div>
<?php endif; ?>
