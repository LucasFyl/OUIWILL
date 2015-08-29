<nav class="nextprev cf" role="navigation">
  <?php if( $prev = $page->prevVisible() && $next = $page->nextVisible() ): ?>
  <div class="nextprev">
  	
  	<div class="half prev">
  		<div class="txt-wrap">
			<a href="<?php echo $page->prev()->url() ?>"><span class="arrow prev"></span></a>
			<p><a href="<?php echo $page->prev()->url() ?>">Previous project</a></p>
			<h4><a href="<?php echo $page->prev()->url() ?>"><?php echo $page->prev()->title() ?></a></h4>
  		</div>
  		<div>
			<a href="<?php echo $page->prev()->url() ?>"></a>
			<div class="overlay"></div>
  			<img src="<?php echo $page->prev()->image('01-thumb.jpg')->url() ?>" alt="<?php echo $page->prev()->title() ?>">
  		</div>
  	</div>

  	<div class="half next">
  		<div class="txt-wrap">
			<a href="<?php echo $page->next()->url() ?>"><span class="arrow next"></span></a>
			<p><a href="<?php echo $page->next()->url() ?>">Next project</a></p>
			<h4><a href="<?php echo $page->next()->url() ?>"><?php echo $page->next()->title() ?></a></h4>
  		</div>
  		<div>
			<a href="<?php echo $page->next()->url() ?>"></a>
			<div class="overlay"></div>
  			<img src="<?php echo $page->next()->image('01-thumb.jpg')->url() ?>" alt="<?php echo $page->next()->title() ?>">
  		</div>
  	</div>
  </div>
  <?php endif ?>
</nav>