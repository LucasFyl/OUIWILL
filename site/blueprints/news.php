<?php if(!defined('KIRBY')) exit ?>

title: News
pages:
  template: single-news
files: false
deletable: false
fields:
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  textarea