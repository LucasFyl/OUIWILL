<?php snippet('head') ?>

	<section class="landing home">
		<header>
			<a href="<?php $site->url() ?>" class="logo">oui will</a>
			<p>precisely what you imagined your brand could be, only more so. ™</p>
		</header>
		
		<div class="vertical-center">
			<h1 class="hide-text">Oui Will</h1>
			<p><span>Oui Will</span> third biggest world watch events <br/>raising money to fight muscular dystrophy partnered <br/>with oui will for their new branding and website</p>
			<a href="#" class="arrow-down"></a>
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
			<img src="<?php echo url('/assets/images/placeholder-showreel.jpg'); ?>" alt="#">
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

		<section class="carreers">
			<h3>carreers.</h3>

			<p>Ready to deliver excellence? That’s excellent!</p>
			<a href="#" class='light-btn'>drop us a line</a>
		</section>
	</main>

<?php snippet('footer-home') ?>
<?php snippet('footer') ?>
