<div class="menu-trigger hide-mobile"><i class="fa fa-bars"></i></div>

<div class="navigation" id="menu">
  <div class="closer closeMenu"><span class="cross"></span></div>
  <div class="overlay">
    <div class="brand">
      <h1><a href="<?php echo $site->url(); ?>"><img src="<?php echo url('assets/images/logo-black.png') ?>" alt="<?php echo $site->title()->html() ?>" draggable="false"/></a></h1>
      <h2 class="baseline">precisely what you imagined your brand could be only more so. ™</h2>
      <div class="social">
        <ul>
          <li><a href="https://vimeo.com/user20000853" target="_blank" class="jsLink fa fa-vimeo"></a></li>
          <li><a href="https://www.behance.net/ouiwill" target="_blank" class="jsLink fa fa-behance"></a></li>
          <li><a href="https://www.facebook.com/Oui-Will-521221991292035/" target="_blank" class="jsLink fa fa-facebook"></a></li>
          <li><a href="https://instagram.com/ouiwill/" target="_blank" class="jsLink fa fa-instagram"></a></li>
          <li><a href="https://dribbble.com/oui_will" target="_blank" class="jsLink fa fa-dribbble"></a></li>
        </ul>
      </div>
    </div>
    <div class="menu">
      <nav>
        <ul class="no-bullet">
          <?php foreach($pages->visible() as $p): ?>
          <li><a <?php e($p->isOpen(), ' class="active"') ?> href="<?php echo $p->url() ?>"><span><?php echo $p->title()->html() ?></span></a></li>
          <?php endforeach ?>
        </ul>
      </nav>
      <div class="social hide-desktop">
        <ul>
          <li><a href="https://vimeo.com/user20000853" target="_blank" class="jsLink fa fa-vimeo"></a></li>
          <li><a href="https://www.behance.net/ouiwill" target="_blank" class="jsLink fa fa-behance"></a></li>
          <li><a href="https://www.facebook.com/Oui-Will-521221991292035/" target="_blank" class="jsLink fa fa-facebook"></a></li>
          <li><a href="https://instagram.com/ouiwill/" target="_blank" class="jsLink fa fa-instagram"></a></li>
          <li><a href="https://dribbble.com/oui_will" target="_blank" class="jsLink fa fa-dribbble"></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>