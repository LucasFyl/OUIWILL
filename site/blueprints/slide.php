<?php if(!defined('KIRBY')) exit ?>

title: Slide
pages: false
files:
  sortable: true
fields:
  generalinfo:
    label: Slide Information
    type: headline
  title:
    label: Slide Title
    type:  text
  quote:
    label: Slide quote
    type:  text
  cslink:
    label: Case Study link
    type:  text
    width: 1/2
  titleColor:
    label: Title color
    type:  text
    help:  Just the hex of the color, do not write '#'
    width: 1/2
  fontColor:
    label: Font color?
    type:  text
    help:  write 'black' or nothing. This is used for the first slide color
    width: 1/2