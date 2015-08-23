<?php if(!defined('KIRBY')) exit ?>

title: Single News
pages: false
files:
  sortable: true
fields:
  info:
    label: Information
    type: info
    text: >
      You should make sure to feel in the fields correctly. 

      To add images inside an article make sure to name them accordingly:
      ** first.jpg ** , ** second.jpg ** , and ** third.jpg **.

      Empty fields won't be displayed on the website
  title:
    label: Title
    type:  text
  shorttitle:
    label: Short Title (for home page etc)
    type:  text
  date:
    label: Date
    type:  date
    format: MM/DD/YYYY
  line1:
    type: line
  sidetitle1:
    label: Sidebar Title 1
    type:  text
  sidecontent1:
    label: Sidebar Content 1
    type:  textarea
  sidetitle2:
    label: Sidebar Title 2
    type:  text
  sidecontent2:
    label: Sidebar Content 2
    type:  textarea
  line2:
    type: line
  subtitle:
    label: Subtitle
    type:  text
  text1:
    label: Text - first part (mandatory)
    type:  textarea
  info1:
    label: The image first.jpg will be displayed here
    type: info
  text2:
    label: Text - second part (optional)
    type:  textarea
  info2:
    label: The image second.jpg will be displayed here
    type: info
  text3:
    label: Text - third part (optional)
    type:  textarea
  info4:
    label: The image third.jpg will be displayed here
    type: info
  text4:
    label: Text - fourth part (optional)
    type:  textarea
  info5:
    label: All other images will be displayed here
    type: info