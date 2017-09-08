/// <reference path="../node_modules/@types/default/default.d.ts"/>

// Import Vue
import * as Vue from './vue'

var Framework7 = require("framework7");

// Import F7 Vue Plugin
var Framework7Vue = require("framework7-vue")
var AppStyles = require("./assets/sass/main.scss")
// Import F7 Material Theme Styles
var Framework7ThemeColors = require("framework7/dist/css/framework7.material.colors.min.css")
var Framework7Theme = require("framework7/dist/css/framework7.material.min.css")

// Import Routes
var Routes = require('./routes.js')

// Import App Component
var App = require('./main.vue')

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  data:function(){
    return{
      msg:'food is a good thing'
    }
  },
  framework7:{
    // Init Framework7 by passing parameters here
    root: '#app',
    material: true,
    routes: Routes
  },
  mounted:function(){
    console.log("Vue js is done loading...");
  },
  // Register App Component
  components: {
    app: App
  }
});
