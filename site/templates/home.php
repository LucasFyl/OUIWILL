<?php snippet('head') ?>
	<div id="super-loader">
		<video autoplay="autoplay" poster="<?php echo url('/assets/images/placeholder-loader.jpg') ?>" width="640" height="360">
		    <source src="<?php echo url('/assets/images/loader.mp4') ?>" type="video/mp4" />
		</video>
	</div>
	<div class="abs-wrap">
		<div class="baseline"><p>precisely what you imagined your brand could be, only more so. ™</p></div>
		<?php snippet('header') ?>
	</div>
	
	<section class="landing home">
		<?php snippet('home-slider') ?>

		<div class="cta-band">
			<div class="row">
				<div class="caret-down"></div>
				<p>Scroll to discover more</p>
			</div>
		</div>
	</section>

	<main class="main" id="home">
		<section class="intro">
			<div>
				<h2>oui will is a full-service, integrated creative agency.</h2>
				<p>we combine the european esthetic and the american yes we can. we create experiences in a digital world, helping people in their decisions for a brand, products and services.</p>
			</div>
		</section>

		<section class="showreel">
			<img src="<?php echo url('/assets/images/background-showreel@2x.jpg'); ?>" class="hide-mobile" alt="#" />
			<img src="<?php echo url('/assets/images/background-showreel-mobile.jpg'); ?>" class="hide-desktop" alt="#" />
			<div>
				<h2>showreel 2015</h2>
				<div class="modal-trigger play-btn"></div>
			</div>
		</section>

		<section class="clients">
			<h3>clients.</h3>

			<!-- <div class="row"> -->
				<div><img src="<?php echo url('/assets/images/asset-logoclient-audi.png'); ?>" alt="Audi"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-beaming.png'); ?>" alt="Beaming"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-nixon.png'); ?>" alt="Nixon"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-ralphlauren.png'); ?>" alt="Ralph Lauren"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-duchateau.png'); ?>" alt="DuChâteau"></div>
			<!-- </div> -->
			<!-- <div class="row"> -->
				<div><img src="<?php echo url('/assets/images/asset-logoclient-fendly.png'); ?>" alt="fendly"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-360zebra.png'); ?>" alt="360 Zebra"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-lincoln.png'); ?>" alt="Lincoln"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-diptyque.png'); ?>" alt="diptyque Paris"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-onlywatch.png'); ?>" alt="Only Watch"></div>
			<!-- </div> -->
		</section>

		<section class="work">
			<h3>work.</h3>

			<div class="row">
				<?php foreach(page('work')->find('beaming', 'only-watch', 'open-eye-global', 'tulip') as $project): ?>
				<div class="single-work">
					<a href="<?php echo $project->url() ?>"></a>
					<?php if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
					<img src="<?php echo $image->url() ?>" alt="#">
					<?php endif ?>

					<div class="hover">
						<div class="vert-cent">
							<h5><?php echo $project->title()->html() ?></h5>
							
				            <?php if (!$project->tag1()->isEmpty()): ?>
				            <p><?php echo $project->tag1()->html() ?> / <?php echo $project->tag2()->html() ?></p>
				            <?php endif ?>
				            <?php if (!$project->h1()->isEmpty()): ?>
				            <p><?php echo $project->h1()->html() ?></p>
				            <?php endif ?>
						</div>
					</div>
				</div>
      			<?php endforeach ?>
			</div>
		</section>

		<section class="news">
			<h3>news.</h3>

			<div>
				<?php foreach(page('news')->children()->visible()->limit(4) as $news): ?>
		    	<div class="single-news">
		    		<a href="<?php echo $news->url() ?>">
		    			<div class="date">
		    				<time datetime="<?php echo $news->date('c') ?>">
							  <?php echo $news->date('d/m/Y') ?>
							</time>
		    			</div>
		    			<div class="title"><?php echo $news->title()->html() ?><span class="chevron-right"></span></div>
		    		</a>
		    	</div>
		    	<?php endforeach ?>
			</div>
		</section>

		<?php snippet('careers'); ?>
	</main>

	<div class="modal">
		<div class="modal-fade-screen">
			<div class="closeModal"><span class="cross"></span>close video</div>
			<div class="modal-inner">
				<iframe src="https://player.vimeo.com/video/106642566?autoplay=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
		</div>
	</div>

<?php snippet('footer-big') ?>
<?= js('assets/js/onscroll/HomeScroll.js') ?>
<?= js('assets/js/components/HomeSlider.js') ?>
<?= js('assets/js/vendor/ScrollToPlugin.js') ?>
<?php snippet('footer') ?>
