<?php if(!defined('KIRBY')) exit ?>

title: Work - Photography
pages: false
files:
  sortable: true
fields:
  title:
    label: Project Title
    type:  text
  h1:
    label: Titre landing
    type:  text
    default: Photography
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