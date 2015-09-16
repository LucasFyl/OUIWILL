<?php snippet('head') ?>

  <?php snippet('header') ?>
  <div class="landing news allnews">  

    <div class="hide-mobile">
      <?php if( $file = $page->children()->flip()->first()->file('02-landing.jpg') ): ?>
      <img src="<?php echo $file->url() ?>" alt="#" draggable="false" />
      <?php endif ?>
      <h1 class="h1"><?php echo $page->children()->first()->title()->excerpt(55); ?></h1>
      <a href="<?php echo $page->children()->first()->url(); ?>" class="more light-btn white"><?php echo $page->readmoretext(); ?></a>
    </div>

    <div class="hide-desktop">
      <h1 class="h1"><?php echo $page->children()->first()->title()->excerpt(35) ?></h1>
      <a href="<?php echo $page->children()->first()->url(); ?>" class="more light-btn white"><?php echo $page->readmoretext(); ?></a>
      <!-- <div class="overlay"></div> -->
      <?php if($file = $page->children()->first()->file('01-thumb.jpg')): ?>
      <img src="<?php echo $file->url() ?>" alt="#" draggable="false" />
      <?php endif ?>
    </div>

  </div>

  <main class="main" id="news">
    <h3>All News.</h3>

    <section class="list">
      <?php $articles = $page->children()->visible()->paginate(4); ?>

      <?php foreach($articles as $article): ?>
      <div class="single-news">
      	<a href="<?php echo $article->url() ?>">
      		<div class="date">
              <time datetime="<?php echo $article->date('c') ?>">
                <?php echo $article->date('d/m/Y') ?>
              </time>
          </div>
      		<div class="title"><?php echo html($article->title()) ?><span class="chevron-right"></span></div>
      	</a>
      </div>
      <?php endforeach ?>

      <?php if( $articles->pagination()->hasPages() ): ?>
      <nav class="pagination">

        <?php if( $articles->pagination()->hasNextPage() ): ?>
        <a class="prev" href="<?php echo $articles->pagination()->nextPageURL() ?>">older news&nbsp;&nbsp;&rsaquo;</a>
        <?php endif ?>

        <?php if( $articles->pagination()->hasPrevPage() ): ?>
        <a class="next" href="<?php echo $articles->pagination()->prevPageURL() ?>">&lsaquo;&nbsp;&nbsp;newer news</a>
        <?php endif ?>

      </nav>
      <?php endif ?>

    </section>
    
    <?php snippet('careers'); ?>

  </main>

<?php snippet('footer-big') ?>
<?php snippet('footer') ?>