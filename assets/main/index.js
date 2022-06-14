System.register("chunks:///_virtual/AppLauncher.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var e,t,r,a,i,o,c,u,l,s;return{setters:[function(n){e=n.applyDecoratedDescriptor,t=n.inheritsLoose,r=n.initializerDefineProperty,a=n.assertThisInitialized},function(n){i=n.cclegacy,o=n._decorator,c=n.Node,u=n.Prefab,l=n.instantiate,s=n.Component}],execute:function(){var p,h,f,d,v,y,L,b;i._RF.push({},"d7486lnywVE4pSoVeqoQdn3","AppLauncher",void 0);var g=o.ccclass,m=o.property;n("AppLauncher",(p=g("AppLauncher"),h=m(c),f=m(u),p(((b=function(n){function e(){for(var e,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return e=n.call.apply(n,[this].concat(i))||this,r(e,"Canvas",y,a(e)),r(e,"UiGame",L,a(e)),e}t(e,n);var i=e.prototype;return i.onLoad=function(){if(console.log("onlLoad AppLauncher"),null!=e.Instance)return console.log("已经存在 AppLauncher"),void this.destroy();e.Instance=this;var n=l(this.UiGame);this.Canvas.addChild(n)},i.start=function(){},i.update=function(n){},e}(s)).Instance=null,y=e((v=b).prototype,"Canvas",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=e(v.prototype,"UiGame",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=v))||d));i._RF.pop()}}}));

System.register("chunks:///_virtual/CubeControl.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,n,o,i,l,a,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){i=e.cclegacy,l=e._decorator,a=e.Label,u=e.Component}],execute:function(){var c,s,p,b,f;i._RF.push({},"d1da81PI6VNBZ4+TJlTUgl7","CubeControl",void 0);var y=l.ccclass,C=l.property;e("CubeControl",(c=y("CubeControl"),s=C(a),c((f=t((b=function(e){function t(){for(var t,r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return t=e.call.apply(e,[this].concat(i))||this,n(t,"label",f,o(t)),t.cubetype="1",t}r(t,e);var i=t.prototype;return i.start=function(){},i.update=function(e){},t}(u)).prototype,"label",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=b))||p));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./AppLauncher.ts","./CubeControl.ts","./UiGamecontrol.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/UiGamecontrol.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AppLauncher.ts","./CubeControl.ts"],(function(t){"use strict";var e,r,n,o,i,a,c,s,u,l,p,h,f,b,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Prefab,s=t.input,u=t.Input,l=t.instantiate,p=t.Vec3,h=t.KeyCode,f=t.Component},function(t){b=t.AppLauncher},function(t){y=t.CubeControl}],execute:function(){var v,_,d,m,C;i._RF.push({},"e2196bfgOJMoIHC+G0lGVZV","UiGamecontrol",void 0);var g=a.ccclass,w=a.property;t("UiGamecontrol",(v=g("UiGamecontrol"),_=w(c),v((C=e((m=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"cube",C,o(e)),e.dt=0,e.arr_cube=[[],[],[]],e.arr_type=["a","b","c"],e}r(e,t);var i=e.prototype;return i.onLoad=function(){s.on(u.EventType.KEY_DOWN,this.onKeyDown,this)},i.start=function(){},i.update=function(t){this.dt+=t;if(this.dt>1){this.dt=0;var e=l(this.cube),r=Math.floor(3*Math.random())+0;e.getComponent(y).label.string=this.arr_type[r],e.getComponent(y).cubetype=this.arr_type[r];var n=-590+Math.floor(1230*Math.random());e.setPosition(new p(n,335,0)),b.Instance.Canvas.addChild(e),this.arr_cube[r].push(e)}for(var o=0;o<this.arr_cube.length;o++)for(var i=0;i<this.arr_cube[o].length;i++){var a=this.arr_cube[o][i];if(null!=a)if(a.position.y>-335){var c=new p(a.position.x,a.position.y);c.y-=4,a.position=c}else a.removeFromParent(),this.arr_cube[o].splice(i,1)}},i.lastupdate=function(){},i.onKeyDown=function(t){var e=0;switch(t.keyCode){case h.KEY_A:e=0;break;case h.KEY_B:e=1;break;case h.KEY_C:e=2}for(var r=0;r<this.arr_cube[e].length;r++){var n=this.arr_cube[e][r];if(null==n)return;n.removeFromParent()}this.arr_cube[e]=[]},e}(f)).prototype,"cube",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=m))||d));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});