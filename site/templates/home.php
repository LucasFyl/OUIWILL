<?php snippet('head') ?>

	<section class="landing home">
		<header>
			<a href="<?php $site->url() ?>" class="logo"><img src="<?php echo url('/assets/images/logo.png') ?>" alt="oui will"></a>
		    <?php snippet('menu') ?>
		</header>
		
		<div class="vertical-center project-infos">
			<h2>Only Watch</h2>
			<p>THE WORLD FINEST WATCHMAKERS UNITED FOR RESEARCH ON DUCHENNE MUSCULAR DYSTROPHY.</p>
			<span class="clearfix"></span>
			<a href="#" class="light-btn grey">see case study</a>
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
			<h2>showreel 2015</h2>
			<a href="#" class="play-btn"></a>
			<img src="<?php echo url('/assets/images/background-showreel@2x.jpg'); ?>" alt="#">
			<!-- showreel -->
		</section>

		<section class="clients">
			<h3>clients.</h3>

			<div class="row">
				<div><img src="<?php echo url('/assets/images/asset-logoclient-audi.png'); ?>" alt="Audi"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-beaming.png'); ?>" alt="Beaming"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-nixon.png'); ?>" alt="Nixon"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-ralphlauren.png'); ?>" alt="Ralph Lauren"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-duchateau.png'); ?>" alt="DuChâteau"></div>
			</div>
			<hr>
			<div class="row">
				<div><img src="<?php echo url('/assets/images/asset-logoclient-fendly.png'); ?>" alt="fendly"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-360zebra.png'); ?>" alt="360 Zebra"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-lincoln.png'); ?>" alt="Lincoln"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-diptyque.png'); ?>" alt="diptyque Paris"></div>
				<div><img src="<?php echo url('/assets/images/asset-logoclient-onlywatch.png'); ?>" alt="Only Watch"></div>
			</div>
		</section>

		<section class="work">
			<h3>work.</h3>

			<div class="row">
				<?php foreach(page('work')->children()->visible()->limit(4) as $project): ?>
				<div class="single-work">
					<a href="<?php echo $project->url() ?>"></a>
					<?php if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
					<img src="<?php echo $image->url() ?>" alt="#">
					<?php endif ?>

					<div class="hover">
						<div class="vert-cent">
							<p><?php echo $project->tag1()->html() ?> / <?php echo $project->tag2()->html() ?></p>
							<h5><?php echo $project->title()->html() ?></h5>
						</div>
					</div>
				</div>
      			<?php endforeach ?>
			</div>
		</section>

		<section class="news">
			<h3>news.</h3>

			<div>
				<div class="single-news">
					<a href="#">
						<div class="date">December 12, 2014</div>
						<div class="title">"A Model to Follow" : New Forrester Research Report on Oui Will<span class="chevron-right"></span></div>
					</a>
				</div>
				<div class="single-news">
					<div class="date">December 12, 2014</div>
					<div class="title">"A Model to Follow" : New Forrester Research Report on Oui Will<span class="chevron-right"></span></div>
				</div>
				<div class="single-news">
					<div class="date">December 12, 2014</div>
					<div class="title">"A Model to Follow" : New Forrester Research Report on Oui Will<span class="chevron-right"></span></div>
				</div>
				<div class="single-news">
					<div class="date">December 12, 2014</div>
					<div class="title">"A Model to Follow" : New Forrester Research Report on Oui Will<span class="chevron-right"></span></div>
				</div>
			</div>
		</section>

		<?php snippet('carreers'); ?>
	</main>

<?php snippet('footer-big') ?>
<?php snippet('footer') ?>
