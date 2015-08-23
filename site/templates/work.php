<?php snippet('head') ?>
<?php snippet('header-black') ?>

  <main class="main" id="work">

    <div class="filterpart">
      <p>Filter by: <a href="#" class="active">all project</a><a href="#">digital</a><a href="#">video</a><a href="#">photography</a></p>
      <p><a href="#">try random <span></span></a></p>
    </div>

    <section class="showcase">
    <!-- Add limit 11 when time -->
      <?php foreach(page('work')->children()->visible()->limit(3) as $project): ?>
      <div class="single-work">
        <a href="<?php echo $project->url() ?>"></a>
        <?php if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
        <img src="<?php echo $image->url() ?>" alt="#">
        <?php endif ?>

        <div class="hover">
          <div class="vert-cent">
            <p><?php echo $project->tag1()->html() ?> / <?php echo $project->tag2()->html() ?></p>
            <h5><?php echo $project->title()->html() ?></h5>
          </div>
        </div>
      </div>
      <?php endforeach ?>
      <div class="single-work last">
        <p>we can show you more work, <br/>Just stop by!</p>
      </div>
    </section>
    
    <?php snippet('carreers'); ?>

  </main>

<?php snippet('footer-big') ?>
<?php snippet('footer') ?>