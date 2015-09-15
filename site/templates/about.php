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
					<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh <br/>vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.</p>
				</div>
				<div>
					<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis. Proin condimentum.</p>
					<p class="quote">«Ma volonté est de <br/> faire découvrir et redécourvir <br/> les saveurs du caviars.»</p>
					<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis. Proin condimentum.</p>
				</div>
				<div>
					<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh <br/>vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.</p>
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
					<p>we create interactive and connected digital products that achieve simplicity through a constant focus on the user’s overall experience. pixel perfect is our religion.</p>
				</div>
				<div>
					<h2>Chelsea Flaming</h2>
					<h3>Founder / Creative Director</h3>
					<p>we create interactive and connected digital products that achieve simplicity through a constant focus on the user’s overall experience. pixel perfect is our religion.</p>
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
				<div class="row">
					<div>
						<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh <br/>vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.</p>
					</div>
					<div>
						<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis. Proin condimentum.</p>
						<p class="quote">«Ma volonté est de <br/> faire découvrir et redécourvir <br/> les saveurs du caviars.»</p>
						<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis. Proin condimentum.</p>
					</div>
					<div>
						<p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh <br/>vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.</p>
					</div>
				</div>
			</section>
		</section>

		<section class="slider">
			<div class="outer-wrap">
				<div id="slider">
					<a href="#" class="control_next"></a>
					<a href="#" class="control_prev"></a>
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
			<div class="modal-inner">
				<iframe src="<?php echo $page->aboutVideo() ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
			</div>
		</div>
	</div>

<?php snippet('footer-big') ?>
<?= js('assets/js/components/SimpleSlider.js') ?>
<?= js('assets/js/onscroll/AboutScroll.js') ?>
<?php snippet('footer') ?>
