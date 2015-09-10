<div id="trigger"><i class="fa fa-bars"></i></div>
<div class="navigation" id="menu">
  <div class="brand-wrap">
    <div class="brand">
      <h1><img src="<?php echo url('assets/images/logo-black.png') ?>" alt="<?php echo $site->title()->html() ?>" draggable="false"/></h1>
      <h2 class="baseline">precisely what you imagined your brand could be only more so. ™</h2>
      <div class="social">
        <ul>
          <li><a href="#" class="fa fa-vimeo"></a></li>
          <li><a href="#" class="fa fa-behance"></a></li>
          <li><a href="#" class="fa fa-facebook"></a></li>
          <li><a href="#" class="fa fa-instagram"></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="menu">
    <nav>
      <ul class="cf no-bullet">
        <!-- <li><a href="<?php echo $site->url() ?>">Home</a></li> -->
        <li class="hide-desktop"><a href="#"></a></li>
        <?php foreach($pages->visible() as $p): ?>
        <li><a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><span><?php echo $p->title()->html() ?></span></a></li>
        <?php endforeach ?>
      </ul>
    </nav>
  </div>
</div>
  