<footer class="big">
	<div class="brand">
		<h1><img src="<?php echo url('assets/images/logo.png') ?>" alt="<?php echo $site->title()->html() ?>" draggable="false"/></h1>
		<h2 class="baseline">precisely what you imagined your brand could be only more so. ™</h2>
		<div class="social">
			<ul>
				<li><a href="#" class="fa fa-vimeo"></a></li>
				<li><a href="#" class="fa fa-behance"></a></li>
				<li><a href="#" class="fa fa-facebook"></a></li>
				<li><a href="#" class="fa fa-instagram"></a></li>
			</ul>
		</div>
	</div>
	<div class="outer-container">
		<hr>
		<div>
			<div>© Oui Will - All right reserved</div>
			<nav>
				<ul class="cf no-bullet">
					<?php foreach($pages->visible() as $p): ?>
					<li>
						<a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><?php echo $p->title()->html() ?></a>
					</li>
					<?php endforeach ?>
				</ul>
			</nav>
		</div>
	</div>
</footer>

<?= js('assets/js/vendor/jquery.min.js') ?>
<?= js('assets/js/vendor/TweenMax.min.js') ?>
<?= js('assets/js/vendor/scrollMagic.js') ?>
