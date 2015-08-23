<?php snippet('head') ?>
  
  <div class="landing news">  
    <header>
      <div>
        <a href="<?php $site->url() ?>" class="logo"><img src="<?php echo url('/assets/images/logo.png') ?>" alt="oui will"></a>
        <?php snippet('menu') ?>
      </div>
    </header>
    <?php if($file = $page->file('1-landing.jpg')): ?>
    <img src="<?php echo $file->url() ?>" alt="#" draggable="false" />
    <?php endif ?>
    <h1 class="h2"><?php echo $page->title()->html() ?></h1>
  </div>
  
  <main class="main case-study" id="single-news">

    <aside class="meta">
      <ul>
        <li><?php echo $page->sidetitle1()->html() ?></li>  
        <li><?php echo $page->sidecontent1()->html() ?></li>  
      </ul>
      <ul>
        <li><?php echo $page->sidetitle2()->html() ?></li>  
        <li><?php echo $page->sidecontent2()->html() ?></li>  
      </ul>
    </aside>

    <div class="content">
      <h3><?php echo $page->subtitle()->html() ?></h3>
      <?php echo $page->text1()->kirbytext() ?>

      <?php if($first = $page->file('first.jpg')): ?>
      <img src="<?php echo $first->url() ?>" alt="#" draggable="false" />
      <?php endif ?>

      <?php if (!$page->text2()->isEmpty()): ?>
      <?php echo $page->text2()->kirbytext() ?>
      <?php endif ?>

      <?php if($second = $page->file('second.jpg')): ?>
      <img src="<?php echo $second->url() ?>" alt="#" draggable="false" />
      <?php endif ?>

      <?php if (!$page->text3()->isEmpty()): ?>
      <?php echo $page->text3()->kirbytext() ?>
      <?php endif ?>

      <?php if($third = $page->file('third.jpg')): ?>
      <img src="<?php echo $third->url() ?>" alt="#" draggable="false" />
      <?php endif ?>

      <?php if (!$page->text4()->isEmpty()): ?>
      <?php echo $page->text4()->kirbytext() ?>
      <?php endif ?>
      
      <?php if($fourth = $page->file('fourth.jpg')): ?>
      <img src="<?php echo $fourth->url() ?>" alt="#" draggable="false" />
      <?php endif ?>

      <?php if (!$page->text5()->isEmpty()): ?>
      <?php echo $page->text5()->kirbytext() ?>
      <?php endif ?>



      <?php foreach($page->images()->sortBy('sort', 'asc')->slice(2) as $image): ?>
      <figure>
        <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title()->html() ?>">
      </figure>
      <?php endforeach ?>
    </div>

    <nav class="nextprev cf" role="navigation">
      <?php if($prev = $page->prevVisible()): ?>
      <a class="prev" href="<?php echo $prev->url() ?>">&larr; previous</a>
      <?php endif ?>
      <?php if($next = $page->nextVisible()): ?>
      <a class="next" href="<?php echo $next->url() ?>">next &rarr;</a>
      <?php endif ?>
    </nav>

  </main>

<?php snippet('footer-big') ?>
<?php snippet('footer') ?>