<?php snippet('head') ?>

	<section class="landing about">
		<header>
	    	<div>
	    	 	<a href="<?php $site->url() ?>" class="logo"><img src="<?php echo url('/assets/images/logo.png') ?>" alt="oui will"></a>
	    	 	<?php snippet('menu') ?>
	    	</div>
	    </header>
		<div class="vertical-center project-infos">
			<a href="#" class="play-btn"></a>
		</div>
	</section>


	<main class="main" id="about">
		

		<?php snippet('carreers'); ?>
	</main>

<?php snippet('footer-big') ?>
<?php snippet('footer') ?>
