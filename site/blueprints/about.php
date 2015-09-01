<?php if(!defined('KIRBY')) exit ?>

title: About
pages: false
files: true
deletable: false
fields:
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  textarea
  aboutVideo:
    label: Vimeo link for the video
    type:  url