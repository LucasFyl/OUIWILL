<?php snippet('head') ?>
<?php snippet('header') ?>

  <main class="main" id="news">

    <section class="list">
      <?php foreach(page('news')->children()->visible()->limit(4) as $news): ?>
      <div class="single-news">
      	<a href="<?php echo $news->url() ?>">
      		<div class="date"><?php echo $news->date() ?></div>
      		<div class="title"><?php echo $news->title()->html() ?><span class="chevron-right"></span></div>
      	</a>
      </div>
      <?php endforeach ?>
    </section>
    
    <?php snippet('carreers'); ?>

  </main>

<?php snippet('footer-big') ?>
<?php snippet('footer') ?>