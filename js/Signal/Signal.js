/*
  Is responsible for manipulating jQuery DOM Element Objects (jQDEO) to indicate something.
 */
 // dependency jQuery
 Signal = {};

 Signal.ajaxRequest = function (el) {
  var el = jQuery(el);
  return {
    "on": el.css.bind(el, 'display', 'none'),
    "off": el.css.bind(el, 'display', 'block')
  }
 }

 Signal.save = function (el) {
  var el = jQuery(el);
  return {
    "on": el.css.bind(el, 'display', 'none'),
    "off": el.css.bind(el, 'display', 'block')
  }
 }

 Signal.pageLoad = function (el) {
  var el = jQuery(el);
  return {
    "on": el.css.bind(el, 'background-color', 'black'),
    "off": el.css.bind(el, 'background-color', 'white')
  }
 }

 Signal.reading = function (el) {
  var el = jQuery(el);
  return {
    "on": el.css.bind(el, 'background-color', 'black'),
    "off": el.css.bind(el, 'background-color', 'white')
  }
 }

  Signal.writing = function (el) {
  var el = jQuery(el);
  return {
    "on": el.css.bind(el, 'background-color', 'black'),
    "off": el.css.bind(el, 'background-color', 'white')
  }
 }