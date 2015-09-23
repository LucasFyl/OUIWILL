<div id="trigger"><i class="fa fa-bars"></i></div>

<div class="navigation" id="menu">
  <div class="closer closeMenu"><span class="cross"></span></div>
  <div class="overlay">
    <div class="menu">
      <h1 class="logo"><a href="<?php $site->url() ?>"><img src="<?php echo url('assets/images/logo-black.png') ?>" alt="<?php echo $site->title()->html() ?>" draggable="false"/></a></h1>        
      <nav>
        <ul class="cf no-bullet">
          <li class="hide-desktop"><a href="#" class="jsLink closeMenu"></a></li>
          <?php foreach($pages->visible() as $p): ?>
          <li><a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><span><?php echo $p->title()->html() ?></span></a></li>
          <?php endforeach ?>
        </ul>
      </nav>
      <div class="brand">
        <div class="social">
          <ul>
            <li><a href="https://vimeo.com/user20000853" target="_blank" class="jsLink fa fa-vimeo"></a></li>
            <li><a href="https://www.behance.net/ouiwill" target="_blank" class="jsLink fa fa-behance"></a></li>
            <li><a href="https://www.facebook.com/Oui-Will-521221991292035/" target="_blank" class="jsLink fa fa-facebook"></a></li>
            <li><a href="https://instagram.com/ouiwill/" target="_blank" class="jsLink fa fa-instagram"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>