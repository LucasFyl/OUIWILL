<?php if(!defined('KIRBY')) exit ?>

title: Work detail
pages: false
files:
  sortable: true
fields:
  title:
    label: Project Title
    type:  text
  tag1:
    label: Tag 1
    type:  text
  tag2:
    label: Tag 2
    type:  text
  subtitle:
    label: Subtitle
    type:  text
  text:
    label: Text
    type:  textarea
  client:
    label: Client
    type:  text
  services:
    label: Services
    type:  tags
  website:
    label: Website url
    type:  url