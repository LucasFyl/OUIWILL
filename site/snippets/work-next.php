<nav class="nextprev cf" role="navigation">
	<div class="blockprevnext">
		
		<?php $nbr = $page->siblings()->visible()->count();
		      $target1 = rand(0, $nbr);
		      $target2 = rand(0, $nbr);
		      $randomWork1 = $page->siblings()->nth($target1); 
		      $randomWork2 = $page->siblings()->nth($target2); ?>
		
	  	<div class="half prev">
	  		<div class="txt-wrap">
				<p><a href="<?php echo $randomWork1->url() ?>">Previous project</a></p>
				<h4><span class="arrow prevArrow"></span> <a href="<?php echo $randomWork1->url() ?>"><?php echo $randomWork1->title() ?></a></h4>
	  		</div>
	  		<div>
				<a href="<?php echo $randomWork1->url() ?>" class="hoverTrigger prev"></a>
				<div class="overlay"></div>
	  			<img src="<?php echo $randomWork1->image('01-thumb.jpg')->url() ?>" alt="<?php echo $randomWork1->title() ?>">
	  		</div>
	  	</div>
	  	<div class="half next">
	  		<div class="txt-wrap">
				<p><a href="<?php echo $randomWork2->url() ?>">Next project</a></p>
				<h4><span class="arrow nextArrow"></span> <a href="<?php echo $randomWork2->url() ?>"><?php echo $randomWork2->title() ?></a></h4>
	  		</div>
	  		<div>
				<a href="<?php echo $randomWork2->url() ?>" class="hoverTrigger next"></a>
				<div class="overlay"></div>
	  			<img src="<?php echo $randomWork2->image('01-thumb.jpg')->url() ?>" alt="<?php echo $randomWork2->title() ?>">
	  		</div>
	  	</div>

	</div>
</nav>