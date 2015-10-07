<nav class="nextprev cf" role="navigation">
	<div class="blockprevnext">

		<?php if( $prev = $page->prevVisible() && $next = $page->nextVisible() ): ?>
	  	<div class="half prev">
	  		<div class="txt-wrap">
				<p><a href="<?php echo $page->prev()->url() ?>">Previous project</a></p>
				<h4><span class="arrow prevArrow"></span> <a href="<?php echo $page->prev()->url() ?>"><?php echo $page->prev()->title() ?></a></h4>
	  		</div>
	  		<div>
				<a href="<?php echo $page->prev()->url() ?>" class="hoverTrigger prev"></a>
				<div class="overlay"></div>
	  			<img src="<?php echo $page->prev()->image('01-thumb.jpg')->url() ?>" alt="<?php echo $page->prev()->title() ?>">
	  		</div>
	  	</div>
	  	<div class="half next">
	  		<div class="txt-wrap">
				<p><a href="<?php echo $page->next()->url() ?>">Next project</a></p>
				<h4><span class="arrow nextArrow"></span> <a href="<?php echo $page->next()->url() ?>"><?php echo $page->next()->title() ?></a></h4>
	  		</div>
	  		<div>
				<a href="<?php echo $page->next()->url() ?>" class="hoverTrigger next"></a>
				<div class="overlay"></div>
	  			<img src="<?php echo $page->next()->image('01-thumb.jpg')->url() ?>" alt="<?php echo $page->next()->title() ?>">
	  		</div>
	  	</div>

	 	<?php elseif( $prev = !$page->prevVisible() ):  ?>
		<div class="full next">
			<div class="txt-wrap">
				<p><a href="<?php echo $page->next()->url() ?>">Next project</a></p>
				<h4><span class="arrow nextArrow"></span> <a href="<?php echo $page->next()->url() ?>"><?php echo $page->next()->title() ?></a></h4>
	  		</div>
	  		<div>
				<a href="<?php echo $page->next()->url() ?>" class="hoverTrigger next"></a>
				<div class="overlay"></div>
	  			<img src="<?php echo $page->next()->image('02-landing.jpg')->url() ?>" alt="<?php echo $page->next()->title() ?>" class="hide-mobile" />
	  			<img src="<?php echo $page->next()->image('01-thumb.jpg')->url() ?>" alt="<?php echo $page->next()->title() ?>" class="hide-desktop" />
	  		</div>
		</div>

		<?php elseif( $next = !$page->nextVisible() ): ?>
		<div class="full prev">
			<div class="txt-wrap">
				<p><a href="<?php echo $page->prev()->url() ?>">Previous project</a></p>
				<h4><span class="arrow prevArrow"></span> <a href="<?php echo $page->prev()->url() ?>"><?php echo $page->prev()->title() ?></a></h4>
	  		</div>
	  		<div>
				<a href="<?php echo $page->prev()->url() ?>" class="hoverTrigger prev"></a>
				<div class="overlay"></div>
	  			<img src="<?php echo $page->prev()->image('02-landing.jpg')->url() ?>" alt="<?php echo $page->prev()->title() ?>" class="hide-mobile" />
	  			<img src="<?php echo $page->prev()->image('01-thumb.jpg')->url() ?>" alt="<?php echo $page->prev()->title() ?>" class="hide-desktop" />
	  		</div>
		</div>
		<?php endif ?>
	</div>
</nav>