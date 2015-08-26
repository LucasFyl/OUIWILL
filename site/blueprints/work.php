<?php if(!defined('KIRBY')) exit ?>

title: Work
pages:
  template: 
  	- work-web
  	- work-photo
  	- work-video
files: false
fields:
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  textarea