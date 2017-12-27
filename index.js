var angular = require('angular');//引入angular
var ngModule = angular.module('app',[]);//定义一个angular模块
 require('./directives/hello-world/hello-world.js')(ngModule);//引入指令(directive)文件
require('./directives/header/header.js')(ngModule);
require('./directives/sidernav/sidernav.js')(ngModule);
require('./css/mystyle.css');//引入样式文件
require('./css/bootstrap-v3.3.7/bootstrap.min.css');