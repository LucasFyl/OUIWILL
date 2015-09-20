<?php snippet('head') ?>

  <?php snippet('header') ?>
  
  <div class="landing work">  

    <div class="hide-mobile">
      <?php if($file = $page->file('02-landing.jpg')): ?>
      <img src="<?php echo $file->url() ?>" alt="#" draggable="false" />
      <?php endif ?>
      <h1 class="h1"><?php echo $page->title()->html() ?></h1>
      <h2 class="h2"><?php echo $page->h1()->html() ?></h2>
    </div>

    <div class="hide-desktop">
      <h1 class="h1"><?php echo $page->title()->html() ?></h1>
      <h2 class="h2"><?php echo $page->h1()->html() ?></h2>
      <div class="overlay"></div>
      <?php if($file = $page->file('01-thumb.jpg')): ?>
      <img src="<?php echo $file->url() ?>" alt="#" draggable="false" />
      <?php endif ?>
    </div>
  </div>

  <div class="modal">
    <div class="modal-fade-screen">
      <div class="closeModal"><span class="cross"></span>close video</div>
      <div class="modal-inner">
        <?php if (!$page->vimeo1()->isEmpty()): ?>
        <div class="video-modal <?php echo video1 ?>" >
          <iframe src="<?php echo $page->vimeo1() ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <?php endif ?>
        <?php if (!$page->vimeo2()->isEmpty()): ?>
        <div class="video-modal <?php echo video2 ?>" >
          <iframe src="<?php echo $page->vimeo2() ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <?php endif ?>
        <?php if (!$page->vimeo3()->isEmpty()): ?>
        <div class="video-modal <?php echo video3 ?>" >
          <iframe src="<?php echo $page->vimeo3() ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <?php endif ?>
        <?php if (!$page->vimeo4()->isEmpty()): ?>
        <div class="video-modal <?php echo video4 ?>" >
          <iframe src="<?php echo $page->vimeo4() ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <?php endif ?>
        <?php if (!$page->vimeo5()->isEmpty()): ?>
        <div class="video-modal <?php echo video5 ?>" >
          <iframe src="<?php echo $page->vimeo5() ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <?php endif ?>
        <?php if (!$page->vimeo6()->isEmpty()): ?>
        <div class="video-modal <?php echo video6 ?>" >
          <iframe src="<?php echo $page->vimeo6() ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <?php endif ?>
      </div>
    </div>
  </div>

  <main class="main case-study photography video" id="work-detail">
    <aside class="meta" id="sidebar">
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
        <li><a href="<?php echo $page->website() ?>" class="jsLink" target='blank'><?php echo $page->website() ?></a></li>
      </ul>
    </aside>

    <div class="content">
      <h3><?php echo $page->subtitle()->html() ?></h3>
      <?php echo $page->text()->kirbytext() ?>

      <?php foreach($page->images()->sortBy('sort', 'asc')->slice(2) as $image): ?>

      <?php if ( $image->fileName() !== 'cover.jpg' ): ?>
      <?php $i = 1; ?>
      <figure>
        <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title()->html() ?>">
        <div class="modal-trigger play-btn" data-video="video<?php echo $i ?>"></div>
      </figure>
      <?php $i++ ?>
      <?php endif ?>
      <?php endforeach ?>

      <?php foreach($page->images()->sortBy('sort', 'asc')->slice(2) as $image): ?>
        <?php if ( $image->fileName() == 'cover.jpg' ): ?>
          <figure>
            <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title()->html() ?>">
          </figure>
        <?php endif ?>
      <?php endforeach ?>
    </div>
    
  </main>
<?php snippet('work-next') ?>

<?php snippet('footer-big') ?>
<?= js('assets/js/onscroll/SingleWorkScroll.js') ?>
<?php snippet('footer') ?>