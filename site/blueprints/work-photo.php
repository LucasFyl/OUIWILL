<?php if(!defined('KIRBY')) exit ?>

title: Work - Photography
pages: false
files:
  sortable: true
fields:
  generalinfo:
    label: General Information
    type: headline
  title:
    label: Project Title (homepage work page and landing subtitle)
    type:  text
  h1:
    label: Landing title
    type:  text
    default: Photography
  sidebarcontent:
    label: Sidebar Content
    type: headline
  client:
    label: Client
    type:  text
  services:
    label: Services
    type:  tags
  website:
    label: Website url
    type:  url
  casestudycontent:
    label: Case Study Content
    type: headline
  subtitle:
    label: Case Study title
    type:  text
  text:
    label: Case Study text
    type:  textarea
  info3:
    label: Assets
    type: headline
  photo:
    label: Photography
    type: info
    text: >
      To add pictures click on the 'add' button on the sidebar.

      For the page images, you can name them as you want.
      

      To add a **thumbnail image**, you must name it **01-thumb.jpg**.
      
      To add a **landing image**, you must name it **02-landing.jpg**.
      

      Be sure to delete or rename the picture you have replaced.
  video:
    label: Video
    type: info
    text: >
      To add a video you must create a video page.

      Go back one step and create a new **work page** using a **work video** template.