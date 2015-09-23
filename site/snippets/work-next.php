<nav class="nextprev cf" role="navigation">
	
	<?php 

		  ini_set('display_errors', 'On');
		  error_reporting(E_ALL);

		  $nbr = $page->parent()->children()->visible()->count();

	   //    $target1 = mt_rand(0, $nbr);
	   //    $target2 = mt_rand(0, $nbr);
	      
	   //    // echo 'target1:' . $target1 . '  /n';

	   //    // echo 'target2:' . $target2 . '  /n';

	   //    // echo 'pagenum:' . $page->num() . '  /n';


	   //    if ( $target1 === $page->num() ) {
		  //     $target1 = mt_rand(0, $nbr);
	   //    } elseif ( $target2 === $page->num() ) {
		  //     $target2 = mt_rand(0, $nbr);
	   //    } elseif ( $target1 === $target2 ) {
	   //        $target1 = mt_rand(0, $nbr);
	   //    	  $target2 = mt_rand(0, $nbr);
	   //    }

	      $randomWork1 = $pages->find('work')->children()->visible()->nth(mt_rand(0, $nbr)); 
	      $randomWork2 = $pages->find('work')->children()->visible()->nth(mt_rand(0, $nbr)); 
	?>

	<div class="blockprevnext">
	  	<div class="half prev">
	  		<div class="txt-wrap">
				<p><a href="<?php echo $randomWork1->url(); ?>">Previous project</a></p>
				<h4><span class="arrow prevArrow"></span> <a href="<?php echo $randomWork1->url(); ?>"><?php echo $randomWork1->title(); ?></a></h4>
	  		</div>
	  		<div>
				<a href="<?php echo $randomWork1->url(); ?>" class="hoverTrigger prev"></a>
				<div class="overlay"></div>
				<?php if($image1 = $randomWork1->image('01-thumb.jpg')): ?>
	  			<img src="<?php echo $image1->url(); ?>" alt="<?php echo $randomWork1->title(); ?>">
	  			<?php endif ?>
	  		</div>
	  	</div>

	  	<div class="half next">
	  		<div class="txt-wrap">
				<p><a href="<?php echo $randomWork2->url(); ?>">Next project</a></p>
				<h4><span class="arrow nextArrow"></span> <a href="<?php echo $randomWork2->url(); ?>"><?php echo $randomWork2->title(); ?></a></h4>
	  		</div>
	  		<div>
				<a href="<?php echo $randomWork2->url(); ?>" class="hoverTrigger next"></a>
				<div class="overlay"></div>
	  			<?php if($image2 = $randomWork2->image('01-thumb.jpg')): ?>
	  			<img src="<?php echo $image2->url(); ?>" alt="<?php echo $randomWork2->title(); ?>">
	  			<?php endif ?>
	  		</div>
	  	</div>
	</div>
</nav>