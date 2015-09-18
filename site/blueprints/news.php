<?php if(!defined('KIRBY')) exit ?>

title: News
pages:
  template: single-news
files: false
deletable: false
paginate: true
fields:
  title:
    label: Title
    type:  text
  readmoretext:
  	label: Read more link content
  	type:  text
  	default: Read our lastest news...