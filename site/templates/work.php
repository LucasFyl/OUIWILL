<?php snippet('head') ?>
<?php snippet('header-black') ?>

  <main class="main" id="work">

    <div class="filterpart">
      <div id="filters">
        <p>Filter by: 
          <a href="#" class="jsLink active filter" data-filter="all">all project</a>
          <a href="#" class="jsLink filter" data-filter="digital">digital</a>
          <a href="#" class="jsLink filter" data-filter="video">video</a>
          <a href="#" class="jsLink filter" data-filter="photography">photography</a></p>
      </div>
      <div>
        <?php $nbr = $page->children()->visible()->count();
              $target = rand(0, $nbr);
              $randomWork = $page->children()->nth($target)->url(); ?>
        <a href="<?php echo $randomWork ?>">try random <span></span></a>
      </div>
    </div>

    <section class="showcase">
    
    <!-- Add limit 11 when time -->
      <?php foreach(page('work')->children()->visible() as $project): ?>
      <div class="single-work <?php echo $project->categories() ?>">
        <a href="<?php echo $project->url() ?>"></a>
        <?php if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
        <img src="<?php echo $image->url() ?>" alt="<?php echo $project->title() ?>">
        <?php endif ?>

        <div class="hover"> 
          <div class="vert-cent">
            <h5><?php echo $project->title()->html() ?></h5>
            
            <?php if (!$project->tag1()->isEmpty()): ?>
            <p><?php echo $project->tag1()->html() ?> / <?php echo $project->tag2()->html() ?></p>
            <?php endif ?>

            <?php if (!$project->h1()->isEmpty()): ?>
            <p><?php echo $project->h1()->html() ?></p>
            <?php endif ?>
          </div>
        </div>
      </div>
      <?php endforeach ?>
      <div class="single-work last">
        <p>we can show you more work, <br/>just stop by!</p>
      </div>
    </section>
    <div class="clearfix"></div>
    
    <?php snippet('careers'); ?>

  </main>

<?php snippet('footer-big') ?>
<?= js('assets/js/components/WorkFilter.js') ?>
<?= js('assets/js/onscroll/WorkScroll.js') ?>
<?php snippet('footer') ?>