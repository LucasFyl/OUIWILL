<?php snippet('head') ?>
  
  <div class="landing work">  
    <header>
      <div>
        <a href="<?php $site->url() ?>" class="logo"><img src="<?php echo url('/assets/images/logo.png') ?>" alt="oui will"></a>
        <?php snippet('menu') ?>
      </div>
    </header>
    <?php if($file = $page->file('2-landing.jpg')): ?>
    <img src="<?php echo $file->url() ?>" alt="#" draggable="false" />
    <?php endif ?>
    <h2 class="h1"><?php echo $page->tag1()->html() ?> & <?php echo $page->tag2()->html() ?></h2>
    <h1 class="h2"><?php echo $page->title()->html() ?></h1>

  </div>
  
  <main class="main case-study" id="work-detail">

    <aside class="meta">
      <ul>
        <li>Client:</li>  
        <li><?php echo $page->client() ?></li>
      </ul>
      <ul>
        <li>Services:</li>  
        <li><?php echo $page->services() ?></li>
      </ul>
      <ul>
        <li>Website:</li>  
        <li><a href="<?php echo $page->website() ?>" target='blank'><?php echo $page->website() ?></a></li>
      </ul>
    </aside>

    <div class="content">
      <h3><?php echo $page->subtitle()->html() ?></h3>
      <?php echo $page->text()->kirbytext() ?>

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