'use strict';
//路由文件批量导入

var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(module.filename);
var router = require('koa-router')();

var routers = {};


fs.readdirSync(__dirname)
.filter(function(file) {
  return (file.indexOf('.') !== 0) && (file !== basename);
})
.forEach(function(file) {
  var o= file.slice(0,-3);
  if (file.slice(-3) !== '.js' || file=='router.js')  return;
  var ctrl = require(path.join(__dirname, file));
  routers[o] = ctrl;
  router.use(`/${o}`,ctrl.routes(), ctrl.allowedMethods());
});
module.exports = router