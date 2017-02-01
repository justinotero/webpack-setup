!function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(1)},function(t,n,e){(function(t){"use strict";"production"!==t.env.NODE_ENV&&e(4),e(2)}).call(n,e(3))},function(t,n){},function(t,n){function e(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(t){if(u===setTimeout)return setTimeout(t,0);if((u===e||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(n){try{return u.call(null,t,0)}catch(n){return u.call(this,t,0)}}}function s(t){if(p===clearTimeout)return clearTimeout(t);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(n){try{return p.call(null,t)}catch(n){return p.call(this,t)}}}function o(){d&&f&&(d=!1,f.length?h=f.concat(h):g=-1,h.length&&a())}function a(){if(!d){var t=i(o);d=!0;for(var n=h.length;n;){for(f=h,h=[];++g<n;)f&&f[g].run();g=-1,n=h.length}f=null,d=!1,s(t)}}function c(t,n){this.fun=t,this.array=n}function l(){}var u,p,m=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:e}catch(t){u=e}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(t){p=r}}();var f,h=[],d=!1,g=-1;m.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];h.push(new c(t,n)),1!==h.length||d||i(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=l,m.addListener=l,m.once=l,m.off=l,m.removeListener=l,m.removeAllListeners=l,m.emit=l,m.binding=function(t){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(t){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},function(t,n){t.exports='<!doctype html>\n<html lang="en-US" xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml">\n<head>\n\t<meta charset="UTF-8">\n\t<title>Webpack setup</title>\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n\t<meta name="viewport" content="width=device-width, initial-scale=1">\n</head>\n<body>\n\n\t<main class="main py4" role="main">\n\n\t\t<div class="center">\n\t\t\t<h1>Webpack setup <img class="logo" src="images/webpack-logo.svg"></h1>\n\t\t\t<div class="buttons">\n\t\t\t\t<iframe src="https://ghbtns.com/github-btn.html?user=urre&repo=webpack-setup&type=star&count=true&size=small" frameborder="0" scrolling="0" width="80px" height="20px"></iframe>\n\t\t\t\t<a class="buttons-travis" href="https://travis-ci.org/urre/webpack-setup"><img src="https://travis-ci.org/urre/webpack-setup.svg?branch=master" alt="Travis build"> </a>\n\t\t\t\t<a class="twitter-share-button"\n\t\t\t\t\thref="https://twitter.com/intent/tweet">\n\t\t\t\tTweet</a>\n\t\t\t</div>\n\t\t\t<pre>\n\t\t\t <span class="comment">// Install</span> <span class="system">$</span> npm i\n\t\t\t <span class="comment">// Develop on http://localhost:8080/</span> <span class="system">$</span> npm start\n\t\t\t <span class="comment">// Production build</span> <span class="system">$</span> npm run build\n\t\t\t</pre>\n\t\t</div>\n\n\t\t<ul class="features">\n\t\t\t<li>Simple Webpack setup to get things started.</li>\n\t\t\t<li>Write ES6 JavaScript</li>\n\t\t\t<li>Development and production configuration files.</li>\n\t\t\t<li>Hot Module Replacement (HMR) (Including html changes)</li>\n\t\t\t<li>Stylelint (.stylelintrc)</li>\n\t\t\t<li>Eslint (.eslintrc)</li>\n\t\t\t<li>Travis</li>\n\t\t\t<li>Editorconfig</li>\n\t\t\t<li>Loaders for css, fonts and images</li>\n\t\t\t<li>Separate css bundle</li>\n\t\t\t<li>Babel presets via .babelrc</li>\n\t\t\t<li>Minified production build</li>\n\t\t\t<li>Postcss with plugin setup via postcss.config.js</li>\n\t\t</ul>\n\n\t</div>\n\n</main>\n\n<footer class="footer center">\n\t\t<p><a href="https://twitter.com/urre">by Urban Sandén</a>. Also checkout <a href="https://urre.github.io/gulpsetup/">Gulpsetup</a></p>\n</footer>\n\n<script>\n\t(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n\t(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n\tm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n\t})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n\n\tga(\'create\', \'UA-5407647-70\', \'auto\');\n\tga(\'send\', \'pageview\');\n\n</script>\n\n<script>window.twttr = (function(d, s, id) {\n\tvar js, fjs = d.getElementsByTagName(s)[0],\n\t\tt = window.twttr || {};\n\tif (d.getElementById(id)) return t;\n\tjs = d.createElement(s);\n\tjs.id = id;\n\tjs.src = "https://platform.twitter.com/widgets.js";\n\tfjs.parentNode.insertBefore(js, fjs);\n\n\tt._e = [];\n\tt.ready = function(f) {\n\t\tt._e.push(f);\n\t};\n\n\treturn t;\n}(document, "script", "twitter-wjs"));</script>\n\n</body>\n</html>\n'}]);
//# sourceMappingURL=bundle.js.map