  <header>
  	<div class="wrapper">
  		<a class="logo" href="<?php echo url() ?>">
		 	<img src="<?php echo url('assets/images/logo.png') ?>" alt="<?php echo $site->title()->html() ?>" />
		</a>
		<?php snippet('menu') ?>
  	</div>
  </header>

  <header class='black hidden'>
  	<div class="wrapper">
  		<a class="logo" href="<?php echo url() ?>">
		 	<img src="<?php echo url('assets/images/logo.png') ?>" alt="<?php echo $site->title()->html() ?>" />
		</a>
      	<div id="trigger"><i class="fa fa-bars"></i></div>
  	</div>
  </header>