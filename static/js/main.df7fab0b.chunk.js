(this["webpackJsonptimeline-game"]=this["webpackJsonptimeline-game"]||[]).push([[0],{14:function(e,t,i){e.exports=i(31)},19:function(e,t,i){},20:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var r=i(1),a=i.n(r),n=i(10),o=i.n(n),d=(i(19),i(20),i(4)),s=i(0);function h(e){var t={};return t.code=e,t.isDown=!1,t.isUp=!0,t.press=void 0,t.release=void 0,t.downHandler=function(e){e.keyCode===t.code&&(t.isUp&&t.press&&t.press(),t.isDown=!0,t.isUp=!1),e.preventDefault()},t.upHandler=function(e){e.keyCode===t.code&&(t.isDown&&t.release&&t.release(),t.isDown=!1,t.isUp=!0),e.preventDefault()},window.addEventListener("keydown",t.downHandler.bind(t),!1),window.addEventListener("keyup",t.upHandler.bind(t),!1),t}var f=i(12),l=i(13),c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;if(Object(f.a)(this,e),void 0===t)throw new Error("Please assign a rendering engine in the constructor before using bump.js");this.renderer="pixi"}return Object(l.a)(e,[{key:"addCollisionProperties",value:function(e){"pixi"===this.renderer&&(void 0===e.gx&&Object.defineProperty(e,"gx",{get:function(){return e.getGlobalPosition().x},enumerable:!0,configurable:!0}),void 0===e.gy&&Object.defineProperty(e,"gy",{get:function(){return e.getGlobalPosition().y},enumerable:!0,configurable:!0}),void 0===e.centerX&&Object.defineProperty(e,"centerX",{get:function(){return e.x+e.width/2},enumerable:!0,configurable:!0}),void 0===e.centerY&&Object.defineProperty(e,"centerY",{get:function(){return e.y+e.height/2},enumerable:!0,configurable:!0}),void 0===e.halfWidth&&Object.defineProperty(e,"halfWidth",{get:function(){return e.width/2},enumerable:!0,configurable:!0}),void 0===e.halfHeight&&Object.defineProperty(e,"halfHeight",{get:function(){return e.height/2},enumerable:!0,configurable:!0}),void 0===e.xAnchorOffset&&Object.defineProperty(e,"xAnchorOffset",{get:function(){return void 0!==e.anchor?e.width*e.anchor.x:0},enumerable:!0,configurable:!0}),void 0===e.yAnchorOffset&&Object.defineProperty(e,"yAnchorOffset",{get:function(){return void 0!==e.anchor?e.height*e.anchor.y:0},enumerable:!0,configurable:!0}),e.circular&&void 0===e.radius&&Object.defineProperty(e,"radius",{get:function(){return e.width/2},enumerable:!0,configurable:!0})),e._bumpPropertiesAdded=!0}},{key:"hitTestPoint",value:function(e,t){var i,r,a,n,o,d;if(t._bumpPropertiesAdded||this.addCollisionProperties(t),"rectangle"===(i=t.radius?"circle":"rectangle")&&(r=t.x-t.xAnchorOffset,a=t.x+t.width-t.xAnchorOffset,n=t.y-t.yAnchorOffset,o=t.y+t.height-t.yAnchorOffset,d=e.x>r&&e.x<a&&e.y>n&&e.y<o),"circle"===i){var s=e.x-t.x-t.width/2+t.xAnchorOffset,h=e.y-t.y-t.height/2+t.yAnchorOffset;d=Math.sqrt(s*s+h*h)<t.radius}return d}},{key:"hitTestCircle",value:function(e,t){var i,r,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e._bumpPropertiesAdded||this.addCollisionProperties(e),t._bumpPropertiesAdded||this.addCollisionProperties(t),a?(i=t.gx+t.width/2-t.xAnchorOffset-(e.gx+e.width/2-e.xAnchorOffset),r=t.gy+t.width/2-t.yAnchorOffset-(e.gy+e.width/2-e.yAnchorOffset)):(i=t.x+t.width/2-t.xAnchorOffset-(e.x+e.width/2-e.xAnchorOffset),r=t.y+t.width/2-t.yAnchorOffset-(e.y+e.width/2-e.yAnchorOffset)),Math.sqrt(i*i+r*r)<e.radius+t.radius}},{key:"circleCollision",value:function(e,t){var i,r,a,n,o,d,s,h=arguments.length>2&&void 0!==arguments[2]&&arguments[2],f=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e._bumpPropertiesAdded||this.addCollisionProperties(e),t._bumpPropertiesAdded||this.addCollisionProperties(t);var l={},c=!1;if(f?(n=t.gx+t.width/2-t.xAnchorOffset-(e.gx+e.width/2-e.xAnchorOffset),o=t.gy+t.width/2-t.yAnchorOffset-(e.gy+e.width/2-e.yAnchorOffset)):(n=t.x+t.width/2-t.xAnchorOffset-(e.x+e.width/2-e.xAnchorOffset),o=t.y+t.width/2-t.yAnchorOffset-(e.y+e.width/2-e.yAnchorOffset)),(i=Math.sqrt(n*n+o*o))<(r=e.radius+t.radius)){c=!0,a=r-i;var x=.3;a+=x,d=n/i,s=o/i,e.x-=a*d,e.y-=a*s,h&&(l.x=o,l.y=-n,this.bounceOffSurface(e,l))}return c}},{key:"movingCircleCollision",value:function(e,t){var i,r,a,n,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e._bumpPropertiesAdded||this.addCollisionProperties(e),t._bumpPropertiesAdded||this.addCollisionProperties(t);var d={},s={},h={},f={},l={},c=!1;if(e.mass=e.mass||1,t.mass=t.mass||1,o?(d.vx=t.gx+t.radius-t.xAnchorOffset-(e.gx+e.radius-e.xAnchorOffset),d.vy=t.gy+t.radius-t.yAnchorOffset-(e.gy+e.radius-e.yAnchorOffset)):(d.vx=t.x+t.radius-t.xAnchorOffset-(e.x+e.radius-e.xAnchorOffset),d.vy=t.y+t.radius-t.yAnchorOffset-(e.y+e.radius-e.yAnchorOffset)),d.magnitude=Math.sqrt(d.vx*d.vx+d.vy*d.vy),i=e.radius+t.radius,d.magnitude<i){c=!0,r=i-d.magnitude,r+=.3,d.dx=d.vx/d.magnitude,d.dy=d.vy/d.magnitude,d.vxHalf=Math.abs(d.dx*r/2),d.vyHalf=Math.abs(d.dy*r/2),a=e.x>t.x?1:-1,n=e.y>t.y?1:-1,e.x=e.x+d.vxHalf*a,e.y=e.y+d.vyHalf*n,t.x=t.x+d.vxHalf*-a,t.y=t.y+d.vyHalf*-n,d.lx=d.vy,d.ly=-d.vx;var x=e.vx*d.dx+e.vy*d.dy;s.x=x*d.dx,s.y=x*d.dy;var u=e.vx*(d.lx/d.magnitude)+e.vy*(d.ly/d.magnitude);h.x=u*(d.lx/d.magnitude),h.y=u*(d.ly/d.magnitude);var g=t.vx*d.dx+t.vy*d.dy;f.x=g*d.dx,f.y=g*d.dy;var y=t.vx*(d.lx/d.magnitude)+t.vy*(d.ly/d.magnitude);l.x=y*(d.lx/d.magnitude),l.y=y*(d.ly/d.magnitude),e.bounce={},e.bounce.x=h.x+f.x,e.bounce.y=h.y+f.y,t.bounce={},t.bounce.x=s.x+l.x,t.bounce.y=s.y+l.y,e.vx=e.bounce.x/e.mass,e.vy=e.bounce.y/e.mass,t.vx=t.bounce.x/t.mass,t.vy=t.bounce.y/t.mass}return c}},{key:"multipleCircleCollision",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=0;i<e.length;i++)for(var r=e[i],a=i+1;a<e.length;a++){var n=e[a];this.movingCircleCollision(r,n,t)}}},{key:"rectangleCollision",value:function(e,t){var i,r,a,n,o,d,s,h=arguments.length>2&&void 0!==arguments[2]&&arguments[2],f=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return e._bumpPropertiesAdded||this.addCollisionProperties(e),t._bumpPropertiesAdded||this.addCollisionProperties(t),f?(d=e.gx+Math.abs(e.halfWidth)-e.xAnchorOffset-(t.gx+Math.abs(t.halfWidth)-t.xAnchorOffset),s=e.gy+Math.abs(e.halfHeight)-e.yAnchorOffset-(t.gy+Math.abs(t.halfHeight)-t.yAnchorOffset)):(d=e.x+Math.abs(e.halfWidth)-e.xAnchorOffset-(t.x+Math.abs(t.halfWidth)-t.xAnchorOffset),s=e.y+Math.abs(e.halfHeight)-e.yAnchorOffset-(t.y+Math.abs(t.halfHeight)-t.yAnchorOffset)),r=Math.abs(e.halfWidth)+Math.abs(t.halfWidth),a=Math.abs(e.halfHeight)+Math.abs(t.halfHeight),Math.abs(d)<r&&Math.abs(s)<a&&((n=r-Math.abs(d))>=(o=a-Math.abs(s))?(s>0?(i="top",e.y=e.y+o):(i="bottom",e.y=e.y-o),h&&(e.vy*=-1)):(d>0?(i="left",e.x=e.x+n):(i="right",e.x=e.x-n),h&&(e.vx*=-1))),i}},{key:"hitTestRectangle",value:function(e,t){var i,r,a,n,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e._bumpPropertiesAdded||this.addCollisionProperties(e),t._bumpPropertiesAdded||this.addCollisionProperties(t),!1,o?(a=e.gx+Math.abs(e.halfWidth)-e.xAnchorOffset-(t.gx+Math.abs(t.halfWidth)-t.xAnchorOffset),n=e.gy+Math.abs(e.halfHeight)-e.yAnchorOffset-(t.gy+Math.abs(t.halfHeight)-t.yAnchorOffset)):(a=e.x+Math.abs(e.halfWidth)-e.xAnchorOffset-(t.x+Math.abs(t.halfWidth)-t.xAnchorOffset),n=e.y+Math.abs(e.halfHeight)-e.yAnchorOffset-(t.y+Math.abs(t.halfHeight)-t.yAnchorOffset)),i=Math.abs(e.halfWidth)+Math.abs(t.halfWidth),r=Math.abs(e.halfHeight)+Math.abs(t.halfHeight),Math.abs(a)<i&&Math.abs(n)<r}},{key:"hitTestCircleRectangle",value:function(e,t){var i,r,a,n,o,d,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t._bumpPropertiesAdded||this.addCollisionProperties(t),e._bumpPropertiesAdded||this.addCollisionProperties(e),s?(a=e.gx,n=e.gy,o=t.gx,d=t.gy):(a=e.x,n=e.y,o=t.x,d=t.y),"topMiddle"===(i=n-e.yAnchorOffset<d-Math.abs(t.halfHeight)-t.yAnchorOffset?a-e.xAnchorOffset<o-1-Math.abs(t.halfWidth)-t.xAnchorOffset?"topLeft":a-e.xAnchorOffset>o+1+Math.abs(t.halfWidth)-t.xAnchorOffset?"topRight":"topMiddle":n-e.yAnchorOffset>d+Math.abs(t.halfHeight)-t.yAnchorOffset?a-e.xAnchorOffset<o-1-Math.abs(t.halfWidth)-t.xAnchorOffset?"bottomLeft":a-e.xAnchorOffset>o+1+Math.abs(t.halfWidth)-t.xAnchorOffset?"bottomRight":"bottomMiddle":a-e.xAnchorOffset<o-Math.abs(t.halfWidth)-t.xAnchorOffset?"leftMiddle":"rightMiddle")||"bottomMiddle"===i||"leftMiddle"===i||"rightMiddle"===i)r=this.hitTestRectangle(e,t,s);else{var h={};switch(i){case"topLeft":h.x=o-t.xAnchorOffset,h.y=d-t.yAnchorOffset;break;case"topRight":h.x=o+t.width-t.xAnchorOffset,h.y=d-t.yAnchorOffset;break;case"bottomLeft":h.x=o-t.xAnchorOffset,h.y=d+t.height-t.yAnchorOffset;break;case"bottomRight":h.x=o+t.width-t.xAnchorOffset,h.y=d+t.height-t.yAnchorOffset}r=this.hitTestCirclePoint(e,h,s)}return r?i:r}},{key:"hitTestCirclePoint",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e._bumpPropertiesAdded||this.addCollisionProperties(e),t.diameter=1,t.width=t.diameter,t.radius=.5,t.centerX=t.x,t.centerY=t.y,t.gx=t.x,t.gy=t.y,t.xAnchorOffset=0,t.yAnchorOffset=0,t._bumpPropertiesAdded=!0,this.hitTestCircle(e,t,i)}},{key:"circleRectangleCollision",value:function(e,t){var i,r,a,n,o,d,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],h=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(t._bumpPropertiesAdded||this.addCollisionProperties(t),e._bumpPropertiesAdded||this.addCollisionProperties(e),h?(a=e.gx,n=e.gy,o=t.gx,d=t.gy):(a=e.x,n=e.y,o=t.x,d=t.y),"topMiddle"===(i=n-e.yAnchorOffset<d-Math.abs(t.halfHeight)-t.yAnchorOffset?a-e.xAnchorOffset<o-1-Math.abs(t.halfWidth)-t.xAnchorOffset?"topLeft":a-e.xAnchorOffset>o+1+Math.abs(t.halfWidth)-t.xAnchorOffset?"topRight":"topMiddle":n-e.yAnchorOffset>d+Math.abs(t.halfHeight)-t.yAnchorOffset?a-e.xAnchorOffset<o-1-Math.abs(t.halfWidth)-t.xAnchorOffset?"bottomLeft":a-e.xAnchorOffset>o+1+Math.abs(t.halfWidth)-t.xAnchorOffset?"bottomRight":"bottomMiddle":a-e.xAnchorOffset<o-Math.abs(t.halfWidth)-t.xAnchorOffset?"leftMiddle":"rightMiddle")||"bottomMiddle"===i||"leftMiddle"===i||"rightMiddle"===i)r=this.rectangleCollision(e,t,s,h);else{var f={};switch(i){case"topLeft":f.x=o-t.xAnchorOffset,f.y=d-t.yAnchorOffset;break;case"topRight":f.x=o+t.width-t.xAnchorOffset,f.y=d-t.yAnchorOffset;break;case"bottomLeft":f.x=o-t.xAnchorOffset,f.y=d+t.height-t.yAnchorOffset;break;case"bottomRight":f.x=o+t.width-t.xAnchorOffset,f.y=d+t.height-t.yAnchorOffset}r=this.circlePointCollision(e,f,s,h)}return r?i:r}},{key:"circlePointCollision",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e._bumpPropertiesAdded||this.addCollisionProperties(e),t.diameter=1,t.width=t.diameter,t.radius=.5,t.centerX=t.x,t.centerY=t.y,t.gx=t.x,t.gy=t.y,t.xAnchorOffset=0,t.yAnchorOffset=0,t._bumpPropertiesAdded=!0,this.circleCollision(e,t,i,r)}},{key:"bounceOffSurface",value:function(e,t){var i,r;e._bumpPropertiesAdded||this.addCollisionProperties(e);var a={},n={},o={},d=e.mass||1;t.lx=t.y,t.ly=-t.x,t.magnitude=Math.sqrt(t.x*t.x+t.y*t.y),t.dx=t.x/t.magnitude,t.dy=t.y/t.magnitude,i=e.vx*t.dx+e.vy*t.dy,a.vx=i*t.dx,a.vy=i*t.dy,r=e.vx*(t.lx/t.magnitude)+e.vy*(t.ly/t.magnitude),n.vx=r*(t.lx/t.magnitude),n.vy=r*(t.ly/t.magnitude),n.vx*=-1,n.vy*=-1,o.x=a.vx+n.vx,o.y=a.vy+n.vy,e.vx=o.x/d,e.vy=o.y/d}},{key:"contain",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;e._bumpPropertiesAdded||this.addCollisionProperties(e),void 0===t.xAnchorOffset&&(t.xAnchorOffset=0),void 0===t.yAnchorOffset&&(t.yAnchorOffset=0),void 0===e.parent.gx&&(e.parent.gx=0),void 0===e.parent.gy&&(e.parent.gy=0);var a=new Set;return e.x-e.xAnchorOffset<t.x-e.parent.gx-t.xAnchorOffset&&(i&&(e.vx*=-1),e.mass&&(e.vx/=e.mass),e.x=t.x-e.parent.gx-t.xAnchorOffset+e.xAnchorOffset,a.add("left")),e.y-e.yAnchorOffset<t.y-e.parent.gy-t.yAnchorOffset&&(i&&(e.vy*=-1),e.mass&&(e.vy/=e.mass),e.y=t.y-e.parent.gy-t.yAnchorOffset+e.yAnchorOffset,a.add("top")),e.x-e.xAnchorOffset+e.width>t.width-t.xAnchorOffset&&(i&&(e.vx*=-1),e.mass&&(e.vx/=e.mass),e.x=t.width-e.width-t.xAnchorOffset+e.xAnchorOffset,a.add("right")),e.y-e.yAnchorOffset+e.height>t.height-t.yAnchorOffset&&(i&&(e.vy*=-1),e.mass&&(e.vy/=e.mass),e.y=t.height-e.height-t.yAnchorOffset+e.yAnchorOffset,a.add("bottom")),0===a.size&&(a=void 0),a&&r&&r(a),a}},{key:"outsideBounds",value:function(e,t,i){var r=t.x,a=t.y,n=t.width,o=t.height,d=new Set;return e.x<r-e.width&&d.add("left"),e.y<a-e.height&&d.add("top"),e.x>n+e.width&&d.add("right"),e.y>o+e.height&&d.add("bottom"),0===d.size&&(d=void 0),d&&i&&i(d),d}},{key:"_getCenter",value:function(e,t,i){return void 0!==e.anchor?0!==e.anchor[i]?0:t/2:t}},{key:"hit",value:function(e,t){var i,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0,d=this.hitTestPoint.bind(this),s=this.hitTestRectangle.bind(this),h=this.hitTestCircle.bind(this),f=this.movingCircleCollision.bind(this),l=this.circleCollision.bind(this),c=this.hitTestCircleRectangle.bind(this),x=this.rectangleCollision.bind(this),u=this.circleRectangleCollision.bind(this),g=void 0!==e.parent,y=void 0!==t.parent;return g&&t instanceof Array||y&&e instanceof Array?p():(i=v(e,t))&&o&&o(i),i;function v(e,t){var i=void 0!==e.parent,r=void 0!==t.parent;if(i&&r)return e.diameter&&t.diameter?m(e,t):e.diameter&&!t.diameter?A(e,t):b(e,t);if(r&&void 0!==e.x&&void 0!==e.y)return d(e,t);throw new Error("I'm sorry, ".concat(e," and ").concat(t," cannot be use together in a collision test.'"))}function p(){if(e instanceof Array);for(var r=t.length-1;r>=0;r--){var a=t[r];(i=v(e,a))&&o&&o(i,a)}}function m(e,t){return r?e.vx+e.vy!==0&&t.vx+t.vy!==0?f(e,t,n):l(e,t,a,n):h(e,t)}function b(e,t){return r?x(e,t,a,n):s(e,t,n)}function A(e,t){return r?u(e,t,a,n):c(e,t,n)}}}]),e}();var x=function(e){var t,i,n,o=Object(r.useState)({backwoodsColor:"0x061639",width:1286,height:640}),f=Object(d.a)(o,1)[0],l=Object(r.useState)({name:"\u5c0f\u65b0",run_images:["images/xiaoxin_go_0001.png","images/xiaoxin_go_0002.png","images/xiaoxin_go_0003.png","images/xiaoxin_go_0004.png","images/xiaoxin_go_0005.png","images/xiaoxin_go_0006.png"],animationSpeed:.1,y:484,x:50,leftSet:{scale:{x:-1,y:1},pivot:{x:83,y:0}},rightSet:{scale:{x:1,y:1},pivot:{x:0,y:0}}}),x=Object(d.a)(l,1)[0],u=Object(r.useState)([{img_url:"images/ground2.png",width:1286,height:66,vx:3},{img_url:"images/background.png",width:1286,height:640,vx:1.5}]),g=Object(d.a)(u,1)[0],y=Object(r.useState)([{id:1,date:1999,title:"\u4e07\u5723\u8282\u51cc\u6668\uff01\u5c0f\u9b3c\u964d\u4e16\uff01",detail:"\u544a\u522b\u725b\u5934\u9a6c\u9762\uff0c\u793c\u8ba9\u9ed1\u767d\u65e0\u5e38\uff0c\u72ec\u81ea\u60a0\u54c9\u5728\u5948\u4f55\u6865\u8fb9\uff0c\u4e00\u7897\u5b5f\u5a46\u6c64\uff0c\u4e00\u76cf\u5357\u74dc\u706f\uff0c\u5929\u65f6\uff0c\u5730\u5229\uff0c\u4eba\u548c\uff0c\u8e0f\u8fdb\u91cd\u751f\u4e4b\u95e8\uff0c\u72ec\u95ef\u4e07\u5723\u6708\u591c\u3002\u96e8\u591c\u6f6e\u6697\uff0c\u98ce\u9e23\u7535\u95ea\uff0c\u51cc\u6668\u949f\u58f0\uff0c\u5c0f\u9b3c\u964d\u4e16\u4eba\u95f4\u3002\u6bdb\u5b69\u9a87\u4eba\uff0c\u540d\u66f0\u4e00\u6052\uff0c\u7236\u6bcd\u6148\u7231\uff0c\u6f5c\u5fc3\u629a\u5b89\uff0c\u6b32\u77e5\u540e\u4e8b\uff0c\u5f85\u541b\u4e14\u770b\u2026\u2026",img_url:"images/hospital.png",scale:.7,x:200,y:284},{id:2,date:2014,title:"\u4e2d\u5b66\uff1a\u53ea\u60f3\u505a\u4e00\u4e2a\u5b89\u9759\u7684\u7f8e\u7537\u5b50\uff01",detail:"\u5728\u4e2d\u5b66\uff0c\u6027\u683c\u8f83\u4e3a\u817c\u8146\uff0c\u957f\u5f97\u6bd4\u8f83\u5e05\ud83d\ude01\uff0c\u6df1\u53d7\u5927\u4f17\u559c\u7231",img_url:"images/middle-school.png",scale:1.2,x:800,y:199},{id:3,date:2017,title:"\u8fdb\u5165\u5927\u5b66",detail:"\u7ec8\u4e8e\u544a\u522b\u4e86\u82e6\u903c\u7684\u9ad8\u4e2d\u751f\u6d3b\uff0c\u8d85\u7ea7\u5174\u594b\n\u7b2c\u4e00\u6b21\u8003\u8bd5\u4e0d\u53ca\u683c\uff0c\u5f00\u5b66\u4ee5\u6765\u7b2c\u4e00\u6b21\u671f\u4e2d\u8003\u8bd5\uff0c\u6570\u5b66\u5206\u6790\uff0c\u53ea\u8003\u4e8652\uff0c\ud83d\ude2d\uff0c\u4e0d\u8fc7\u8fd8\u597d\u671f\u672b\u8003\u8bd5\u8003\u5f97\u597d",img_url:"images/c.png",scale:2,x:1900,y:464},{id:4,date:2018,title:"\u5927\u4e00\u7684\u65f6\u5019",detail:"\u4e0a\u5b66\u671f\u7531\u4e8e\u5404\u79cd\u8d2a\u73a9\uff0c\u6210\u7ee9\u4e0d\u662f\u5f88\u597d\uff0c\u8fd8\u597d\u4e0b\u5b66\u671f\u594b\u53d1\u56fe\u5f3a\uff0c\u9760\u7efc\u6d4b\u52c9\u5f3a\u591f\u5230\u5956\u5b66\u91d1",img_url:"images/university.png",scale:.3,x:2200,y:314},{id:5,date:2018,title:"\u79d1\u521b\u90e8\u90e8\u957f",detail:"\u6709\u5e78\u5f97\u5230\u8d4f\u8bc6\uff0c\u88ab\u63d0\u62d4\u4e3a\u5b66\u9662\u79d1\u521b\u90e8\u90e8\u957f\u3002\u4efb\u804c\u671f\u95f4\uff0c\u51e0\u4e4e\u4ec0\u4e48\u4e5f\u6ca1\u5e72\u3002\u3002\u3002\u53d7\u5236\u4e8e\u60f3\u8c61\u529b\uff0c\u592a\u83dc\u4e86\uff0c\u592a\u83dc\u4e86",img_url:"images/groupLeader.png",scale:.5,x:4400,y:384},{id:6,date:2018,title:"\u5927\u4e8c\u7684\u9006\u88ad\u4e4b\u8def",detail:"\u672c\u6765\u8981\u653e\u5f03\u4fdd\u7814\u7684\u6211\uff0c\u7ecf\u8fc7\u5b66\u59d0\u7684\u6df3\u6df3\u6559\u5bfc\u540e\uff0c\u7ec8\u4e8e\u71c3\u8d77\u4fdd\u7814\u7684\u4fe1\u5fc3\uff0c\u52aa\u529b\u5b66\u4e60\uff0c\u594b\u53d1\u56fe\u5f3a\uff0c\u867d\u7136\u6700\u540e\u4ecd\u65e7\u6ca1\u80fd\u4fdd\u7814\ud83d\ude02",img_url:"images/inLove.png",scale:.4,x:2700,y:369},{id:7,date:2019,title:"\u81ea\u8d1f",detail:"\u5728\u5927\u4e8c\u53d6\u5f97\u4e86\u597d\u6210\u7ee9\u7684\u6211\uff0c\u5728\u5927\u4e09\uff0c\u7a0d\u5fae\u6709\u70b9\u81ea\u8d1f\uff0c\u4e0a\u8bfe\u73a9\u6e38\u620f\uff0c\u4e0b\u8bfe\u73a9\u6e38\u620f\uff0c\u6700\u540e\u6210\u7ee9\u964d\u5230\u4e86\u7b2c10\uff0c\u4fdd\u7814\u65e0\u671b\ud83d\ude2d\uff0c\u597d\u540e\u6094\uff01\uff01",img_url:"images/joinGroup.png",scale:1,x:3200,y:362},{id:8,date:2019,title:"\u521d\u5c1d\u4ee3\u7801\u7684\u8da3\u5473",detail:"\u5728\u8fd9\u65f6\u5df2\u7ecf\u505a\u8fc7\u4e86\u4e00\u4e9b\u8bfe\u7a0b\u8bbe\u8ba1\uff0c\u53d1\u73b0\u7801\u4ee3\u7801\u8d3c\u6709\u610f\u601d\uff0c\u771f\u7684\u662fcode\u4e00\u65f6\u723d\uff0c\u4e00\u76f4code\u4e00\u76f4\u723d",img_url:"images/definedGoal.png",scale:1,x:3850,y:304},{id:9,date:2020,title:"\u52b3\u8d44\u8981\u8003\u7814\uff01",detail:"\u771f\u7684\u662f\u4ed6\u884c\u6211\u4e5f\u884c\uff0c\u770b\u5230\u5b66\u957f\u5927\u90e8\u5206\u90fd\u80fd\u8003\u5230\u597d\u5b66\u6821\uff0c\u771f\u7684\u5fc3\u52a8\u4e86\uff0c\u4e0b\u5b9a\u51b3\u5fc3\u8003ZJU\uff0c\u5c31\u5934\u94c1\u4e00\u56de\uff01",img_url:"images/production_hujiaxing.png",scale:.3,x:5e3,y:489},{id:10,date:2021,title:"\u672a\u6765\u53ef\u671f",detail:"\u5728ZJU\u7684\u6821\u56ed\u91cc\uff0c\u6f2b\u6b65\uff0c\u5e0c\u671b\u518d\u627e\u4e2a\u5973\u670b\u53cb\uff0cBeautiful\uff0c\u597d\u5427\uff0c\u5973\u670b\u53cb\u53ef\u80fd\u662f\u6211\u60f3\ud83c\udf51\u3002",img_url:"images/succeed.png",scale:.5,x:6780,y:174}]),v=Object(d.a)(y,1)[0],p=s.Application,m=s.Loader.shared,b=s.Loader.shared.resources,A=s.Sprite,O=s.TilingSprite,w=s.Container,M=s.TextStyle,P=s.Graphics,C=s.Text,_=s.AnimatedSprite,S=s.Texture,k=s.Ticker,H="none";function W(e){t.tilePosition.x-=g[0].vx,i.tilePosition.x-=g[1].vx,n.x-=g[0].vx}function T(e){t.tilePosition.x+=g[0].vx,i.tilePosition.x+=g[1].vx,n.x+=g[0].vx}return Object(r.useEffect)((function(){var r=new p(f);document.getElementById("gamePine").appendChild(r.view),console.log("props",e),document.querySelector("#gamePine canvas").style="zoom:".concat(e.width/f.width);var a=new c(s),o=new w;o.zIndex=1e3;var d=new P;d.beginFill(0),d.drawRect(0,0,f.width,f.height),d.endFill(),o.addChild(d);var l=new M({fontFamily:"Arial",fontSize:36,fill:"white",stroke:"#ff3300",strokeThickness:4,dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:4,dropShadowAngle:Math.PI/6,dropShadowDistance:6}),u=new C("0%",l);u.y=f.height/2,u.x=f.width/2,u.anchor.set(.5),o.addChild(u),r.stage.sortableChildren=!0,r.stage.addChild(o);var y=new w;y.zIndex=1001,y.x=30;var j=new M({dropShadow:!0,dropShadowAlpha:.9,dropShadowBlur:3,dropShadowColor:"#aeaeae",fontFamily:'"Lucida Sans Unicode", "Lucida Grande", sans-serif',fontSize:80}),L=new C("\ud83c\udfae",j);y.addChild(L);var E=new M({dropShadow:!0,dropShadowAlpha:.9,dropShadowBlur:3,dropShadowColor:"#aeaeae",fontFamily:'"Lucida Sans Unicode", "Lucida Grande", sans-serif',fontSize:55}),R=new C("\u6e38\u620f\u8bf4\u660e",E);R.x=310,R.y=10,y.addChild(R);var z=new M({dropShadow:!0,dropShadowAlpha:.9,dropShadowBlur:3,dropShadowColor:"#aeaeae",fontFamily:'"Lucida Sans Unicode", "Lucida Grande", sans-serif',fontSize:27,wordWrap:!0,wordWrapWidth:900,breakWords:!0}),U=new C("\u901a\u8fc7\u952e\u76d8\u5de6\u53f3\u952e\u63a7\u5236\u8721\u7b14\u5c0f\u65b0\u79fb\u52a8\uff0c\u6309\u538b\u4ee3\u8868\u884c\u52a8\uff0c\u677e\u5f00\u5373\u53ef\u6682\u505c\uff0c\u6765\u77a7\u77a7\u6211\u7684\u4eba\u751f\u8f68\u8ff9\u3002",z);U.x=310,U.y=80,y.addChild(U);var B={yearsText:L,detailsText:U,titleText:R,detailsPine:y};r.stage.addChild(y);var G=[];v.forEach((function(e){G.push(e.img_url)})),g.forEach((function(e){G.push(e.img_url)})),G.forEach((function(e){m.add(e)})),m.on("progress",(function(e,t){var i=e.progress.toFixed(2);u.text=i+"%",i>=100&&setTimeout((function(){o.visible=!1}),500)})).load((function(){n=new w,v.forEach((function(e){var t=new A(b[e.img_url].texture);t.scale.x=e.scale,t.scale.y=e.scale,t.x=e.x,t.y=e.y,n.addChild(t)}));var e=g[0];t=new O(b[e.img_url].texture,e.width,e.height);var a=g[1];i=new O(b[a.img_url].texture,a.width,a.height),t.y=a.height-e.height;var o=k.shared,d=h(39);d.press=function(){o.add(W),o.add(J),q.scale=x.rightSet.scale,q.pivot=x.rightSet.pivot,q.play()},d.release=function(){o.remove(W),o.remove(J),q.stop()};var s=h(37);s.press=function(){o.add(T),o.add(J),q.scale=x.leftSet.scale,q.pivot=x.leftSet.pivot,q.play()},s.release=function(){o.remove(T),o.remove(J),q.stop()},r.stage.addChild(i,n,t,q)}));for(var D=[],F=0;F<6;F++){var I=S.from(x.run_images[F]);D.push(I)}var q=new _(D);function J(e){!function(e,t,i,r,a){var n=a.yearsText,o=a.detailsText,d=a.titleText;r.children.forEach((function(e){var r=e.texture.textureCacheIds[0];H!==r&&t.hit(e,i,!1,!1,!0)&&(H=r,v.forEach((function(e){e.img_url===r&&(o.text="\u2800\u2800"+e.detail,d.text=e.title,n.text=e.date)})))}))}(0,a,q,n,B)}q.animationSpeed=.1,q.y=484,q.x=50}),[]),a.a.createElement("div",{id:"gamePine",style:{width:e.width,display:"inline-block"}})};var u=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(x,{width:1e3}))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.df7fab0b.chunk.js.map