<section class="landing home">

	<div id="mySlider">
		<div class="slider-content project-infos">
			<ul>
				<?php foreach(page('slider')->children() as $slide): ?>
				<li>
					<h2><?php echo $slide->title() ?></h2>
					<p><?php echo $slide->quote() ?></p>
					<span class="clearfix"></span>
					<a href="<?php echo $slide->cslink() ?>" class="light-btn white">see case study</a>
				</li>
				<?php endforeach ?>
			</ul>
		</div>
		<div class="slider-bg">
			<?php foreach(page('slider')->children() as $slide): ?>
			<?php if($image = $slide->images()->sortBy('sort', 'asc')->first()): ?>
			<img src="<?php echo $image->url() ?>" alt="<?php echo $slide->title() ?>">
			<?php endif ?>
			<?php endforeach ?>
		</div>
		<div class="slider-nav">
			<div class="wrap">
				<div class=""><a href="#" class="nav-link"></a><span class="bar"></span></div>
				<div class=""><a href="#" class="nav-link"></a><span class="bar"></span></div>
				<div class=""><a href="#" class="nav-link"></a><span class="bar"></span></div>
				<div class=""><a href="#" class="nav-link"></a><span class="bar"></span></div>
			</div>
		</div>
	</div>
</section>