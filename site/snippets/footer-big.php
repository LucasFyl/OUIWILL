<footer class="mobile hide-desktop">
	<p>© 2015 - OUIWILL</p>
</footer>
<footer class="big">
	<div class="brand">
		<h1><a href="<?php echo $site->url(); ?>"><img src="<?php echo url('assets/images/logo.png') ?>" alt="<?php echo $site->title()->html() ?>" draggable="false"/></a></h1>
		<h2 class="baseline">precisely what you imagined your brand could be only more so. ™</h2>
		<div class="social">
			<ul>
				<li><a href="https://vimeo.com/user20000853" target="_blank" class="jsLink fa fa-vimeo"></a></li>
				<li><a href="https://www.behance.net/ouiwill" target="_blank" class="jsLink fa fa-behance"></a></li>
				<li><a href="https://www.facebook.com/Oui-Will-521221991292035/" target="_blank" class="jsLink fa fa-facebook"></a></li>
				<li><a href="https://instagram.com/ouiwill/" target="_blank" class="jsLink fa fa-instagram"></a></li>
			</ul>
		</div>
	</div>
	<div class="outer-container">
		<hr>
		<div>
			<div>© oui will - all right reserved</div>
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
<?= js('assets/js/vendor/modernizr.js') ?>
<?= js('assets/js/vendor/TweenMax.min.js') ?>
<?= js('assets/js/vendor/scrollMagic.js') ?>
<?= js('assets/js/vendor/animation.gsap.js') ?>
<?= js('assets/js/app.js') ?>
