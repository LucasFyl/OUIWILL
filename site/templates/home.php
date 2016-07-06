<?php snippet('head') ?>

	<div id="super-loader">
		<video autoplay="autoplay" poster="<?php echo url('/assets/images/placeholder-loader.jpg') ?>" width="640" height="360">
		    <source src="<?php echo url('/assets/images/loader.mp4') ?>" type="video/mp4" />
		</video>
		<div class="hide-desktop">
	    	<div class="vertical-center">
				<div class="spinnerDad"><div class="spinner"></div></div>
	    	</div>
		</div>
	</div>

	<div class="abs-wrap">
		<!-- <div class="baseline"><p>precisely what you imagined your brand could be, only more so. ™</p></div> -->
		<?php snippet('header') ?>
	</div>
	
	<section class="landing home">
		<div class="overlay"></div>
		<div class="container">
			<div>
				<h2>Precisely what you imagined your brand could be,</h2>
				<h2>only more so.</h2>
				<h3>brand strategy / web design / video / photography</h3>
				<div class="modal-trigger light-btn white">Play reel</div>
				<div class="caret-down"></div>
			</div>
		</div>
			
		<video loop poster="assets/images/transparent-video-cover.png" id="bgvid">
			<source src="assets/images/landing-video.webm" type="video/webm">
			<source src="assets/images/landing-video.mp4" type="video/mp4">
			<source src="assets/images/landing-video.ogv" type="video/ogv">
		</video>
	</section>

	<main class="main" id="home">
		<section class="intro">
			<div>
				<div>
					<p class="big">we create</p>
				</div>
				<div>
					<p>brand experiences that tell a story and inspire true connections at every customer touch point</p>
				</div>
			</div>
		</section>

		<section class="work">
			<h3>our work.</h3>

			<div class="row">
				<?php foreach(page('work')->find('only-watch', 'histoires-de-parfums', 'open-eye-global', 'logo') as $project): ?>
				<div class="single-work">
					<a href="<?php echo $project->url() ?>"></a>
					<?php if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
					<img src="<?php echo $image->url() ?>" alt="#">
					<?php endif ?>

					<div class="hover">
						<div class="vert-cent">
							<h5><?php echo $project->title()->html() ?></h5>
							
				            <?php if (!$project->tags()->isEmpty()): ?>
				            <p><?php echo $project->tags()->html() ?></p>
				            <?php endif ?>
						</div>
					</div>
				</div>
      			<?php endforeach ?>
			</div>
		</section>

		<section class="clients">
			<h3>our clients.</h3>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-audi.png'); ?>" alt="Audi"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-beaming.png'); ?>" alt="Beaming"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-ucsd.png'); ?>" alt="UCSD"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-ralphlauren.png'); ?>" alt="Ralph Lauren"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-duchateau.png'); ?>" alt="DuChâteau"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-fendly.png'); ?>" alt="fendly"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-blancpain.png'); ?>" alt="Blancpain"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-lincoln.png'); ?>" alt="Lincoln"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-diptyque.png'); ?>" alt="diptyque Paris"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-onlywatch.png'); ?>" alt="Only Watch"></div>
		</section>

		<!-- <section class="showreel">
			<img src="<?php echo url('/assets/images/background-showreel@2x.jpg'); ?>" class="hide-mobile" alt="#" />
			<img src="<?php echo url('/assets/images/background-showreel-mobile.jpg'); ?>" class="hide-desktop" alt="#" />
			<div>
				<h2>showreel 2015</h2>
				<div class="modal-trigger light-btn white">Play</div>
			</div>
		</section> -->

		<section class="slider">
			<h3>our team.</h3>
			<a href="#" class="control_next jsLink"></a>
			<a href="#" class="control_prev jsLink"></a>
			<div id="slider">
				<ul>
					<?php 
						ini_set('display_errors', 'On');
						error_reporting(E_ALL); 
						$subpage = $pages->find('about');
						foreach($subpage->images()->sortBy('sort', 'asc')->slice(3) as $slide): ?>
					<li>
						<img src="<?php echo $slide->url() ?>" alt="<?php echo $slide->title()->html() ?>">
					</li>
					<?php endforeach ?>
				</ul>  
			</div>
		</section>

		<?php snippet('careers'); ?>
	</main>

	<div class="modal">
		<div class="modal-fade-screen">
			<div class="closeModal"><span class="cross"></span></div>
			<div class="modal-inner">
				<iframe src="https://player.vimeo.com/video/140043413?autoplay=0?api=1&player_id=vimeoplayer&controls=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
		</div>
	</div>

<?php snippet('footer-big') ?>
<?= js('assets/js/onscroll/HomeScroll.js') ?>
<?= js('assets/js/components/SimpleSlider.js') ?>
<?= js('assets/js/vendor/ScrollToPlugin.js') ?>
<?php snippet('footer') ?>
