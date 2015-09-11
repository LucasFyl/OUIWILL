<nav class="nextprev newsnav" role="navigation">
	<div class="blockprevnext">

		<?php if( $prev = $page->prevVisible() && $next = $page->nextVisible() ): ?>
	  	<div class="half prev">
	  		<div class="txt-wrap">
				<p><a href="<?php echo $page->prev()->url() ?>">Previous news</a></p>
				<h4><a href="<?php echo $page->prev()->url() ?>"><span class="arrow prevArrow"></span> <?php echo $page->prev()->title()->excerpt(35) ?></a></h4>
	  		</div>
	  		<div>
				<a href="<?php echo $page->prev()->url() ?>" class="hoverTrigger prev"></a>
				<div class="overlay"></div>
	  			<img src="<?php echo $page->prev()->image('01-thumb.jpg')->url() ?>" alt="<?php echo $page->prev()->title()->excerpt(35) ?>">
	  		</div>
	  	</div>
	  	<div class="half next">
	  		<div class="txt-wrap">
				<p><a href="<?php echo $page->next()->url() ?>">Next news</a></p>
				<h4><a href="<?php echo $page->next()->url() ?>"><span class="arrow nextArrow"></span> <?php echo $page->next()->title()->excerpt(35) ?></a></h4>
	  		</div>
	  		<div>
				<a href="<?php echo $page->next()->url() ?>" class="hoverTrigger next"></a>
				<div class="overlay"></div>
	  			<img src="<?php echo $page->next()->image('01-thumb.jpg')->url() ?>" alt="<?php echo $page->next()->title()->excerpt(35) ?>">
	  		</div>
	  	</div>

	 	<?php elseif( $prev = !$page->prevVisible() ):  ?>
		<div class="full next">
			<div class="txt-wrap">
				<p><a href="<?php echo $page->next()->url() ?>">Next news</a></p>
				<h4><a href="<?php echo $page->next()->url() ?>"><span class="arrow nextArrow"></span> <?php echo $page->next()->title()->excerpt(35) ?></a></h4>
	  		</div>
	  		<div>
				<a href="<?php echo $page->next()->url() ?>" class="hoverTrigger next"></a>
				<div class="overlay"></div>
	  			<img src="<?php echo $page->next()->image('02-landing.jpg')->url() ?>" alt="<?php echo $page->next()->title()->excerpt(35) ?>" class="hide-mobile" />
	  			<img src="<?php echo $page->next()->image('01-thumb.jpg')->url() ?>" alt="<?php echo $page->next()->title()->excerpt(35) ?>" class="hide-desktop" />
	  		</div>
		</div>

		<?php elseif( $next = !$page->nextVisible() ): ?>
		<div class="full prev">
			<div class="txt-wrap">
				<p><a href="<?php echo $page->prev()->url() ?>">Previous news</a></p>
				<h4><a href="<?php echo $page->prev()->url() ?>"><span class="arrow prevArrow"></span> <?php echo $page->prev()->title()->excerpt(35) ?></a></h4>
	  		</div>
	  		<div>
				<a href="<?php echo $page->prev()->url() ?>" class="hoverTrigger prev"></a>
				<div class="overlay"></div>
	  			<img src="<?php echo $page->prev()->image('02-landing.jpg')->url() ?>" alt="<?php echo $page->prev()->title()->excerpt(35) ?>" class="hide-mobile" />
	  			<img src="<?php echo $page->prev()->image('01-thumb.jpg')->url() ?>" alt="<?php echo $page->prev()->title()->excerpt(35) ?>" class="hide-desktop" />
	  		</div>
		</div>
		<?php endif ?>
	</div>
</nav>