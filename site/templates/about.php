<?php snippet('head') ?>

	<?php snippet('header') ?>
	<section class="landing about">
		<div class="modal-trigger play-btn"></div>
	</section>


	<main class="main" id="about">

		<section class="text-block">
			<h3>The best of nothing</h3>

			<div class="row">
				<div>
					<p>The name Oui Will was inspired by the American “get it done” spirit and a European aesthetic. With an offices in San Diego and Paris, we are the international agency that never sleeps, meeting tighter deadlines without compromising on quality.</p>
					<p>We have carefully curated our dream-team of passionate strategists, designers, and developers whose ideas are all influenced by a diverse cultural landscape. This offers broader insight when solving some of the most challenging communication problems, and a focused approach to creating brand experiences that inspire true connections.</p></div>
				<div>
					<p>We understand that the exchange and interaction between brand and consumer is ever changing.</p>
					<p class="quote">«ouiwill becomes an extension <br/> of your team.»</p>
					<p>We strive to be an integral part of this evolution, while continuing to diligently serve the long-term vision of the brands we partner with.</p>
				</div>
				<div>
					<p>These partnerships transcend conversations, meetings and production schedules. Oui Will becomes an extension of your team, achieving a balance between our methodology and yours. We want to get to know you, to really know you. And when we clearly understand what makes your brand exceptional, we will magnify those unique attributes and bring them to life through strategy, design, and digital communications.</p>
				</div>
			</div>
		</section>		
		
		<section class="founder">
			<?php if($founder = $page->file('1-founder.jpg')): ?>
		    <img src="<?php echo $founder->url() ?>" alt="Guillaume Hamon and Chelsea Flaming" />
		    <?php endif ?>
			<div class="row">
				<div>
					<h2>Guillaume Hamon</h2>
					<h3>Founder / Creative Director</h3>
					<p>"It's not just about defining client goals and creating a strategy to fulfill, it's also about innovating technology so that we can help our clients set higher goals."</p>
				</div>
				<div>
					<h2>Chelsea Flaming</h2>
					<h3>Founder / Creative Director</h3>
					<p>"It all starts and ends with desire -  but in order to win the hearts of todays consumer, brands must be transparent,  authentic, and consistent. It’s how you build a relationship on a solid foundation."</p>
				</div>
			</div> 
		</section>

		<section class="paris-sandiego">
			<div class="row">
				<?php if($paris = $page->file('2-paris.jpg')): ?>
			    <div class="half"><img src="<?php echo $paris->url() ?>" alt="Paris" /></div>
			    <?php endif ?>
			    <?php if($sandiego = $page->file('3-sandiego.jpg')): ?>
			    <div class="half"><img src="<?php echo $sandiego->url() ?>" alt="San Diego" /></div>
			    <?php endif ?>
			</div>

			<section class="text-block">
				<h3>Paris / San Diego</h3>
			</section>
		</section>

		<section class="slider">
			<div class="outer-wrap">
				<div id="slider">
					<a href="#" class="control_next jsLink"></a>
					<a href="#" class="control_prev jsLink"></a>
					<ul>
						<?php foreach($page->images()->sortBy('sort', 'asc')->slice(3) as $slide): ?>
						<li>
							<img src="<?php echo $slide->url() ?>" alt="<?php echo $slide->title()->html() ?>">
						</li>
						<?php endforeach ?>
					</ul>  
				</div>
			</div>
		</section>
		<?php snippet('careers'); ?>
	</main>

	<div class="modal">
		<div class="modal-fade-screen">
			<div class="closeModal"><span class="cross"></span></div>
			<div class="modal-inner">
				<iframe src="<?php echo $page->aboutVideo() ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
		</div>
	</div>

<?php snippet('footer-big') ?>
<?= js('assets/js/onscroll/AboutScroll.js') ?>
<?= js('assets/js/components/SimpleSlider.js') ?>
<?php snippet('footer') ?>
