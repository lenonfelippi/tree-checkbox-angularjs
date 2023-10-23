import "../css/main.scss";

import angular from 'angular';

import "./controllers/treeCheckboxController"; 
import "./directives/treeCheckboxDirective"; 

angular.module('app', ['app.controllers', 'app.directives']);

