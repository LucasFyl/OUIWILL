<?php snippet('head') ?>
  
  <div class="landing work">  
    <?php snippet('header') ?>
    <?php if($file = $page->file('02-landing.jpg')): ?>
    <img src="<?php echo $file->url() ?>" alt="#" draggable="false" />
    <?php endif ?>
    <h2 class="h1"><?php echo $page->title()->html() ?></h2>
    <h1 class="h2"><?php echo $page->h1()->html() ?></h1>

  </div>
  
  <main class="main case-study photography" id="work-detail">

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
    </nav>
  </main>
<?php snippet('work-next') ?>

<?php snippet('footer-big') ?>
<?= js('assets/js/scrollControl-WorkDetail.js') ?>
<?php snippet('footer') ?>