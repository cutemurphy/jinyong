(function(e){function t(t){for(var n,s,a=t[0],c=t[1],u=t[2],l=0,p=[];l<a.length;l++)s=a[l],i[s]&&p.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},i={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/jinyong/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var f=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("c21b"),i=r.n(n);i.a},"0441":function(e,t,r){e.exports=r.p+"img/img7.974cae10.jpg"},"11ad":function(e,t,r){e.exports=r.p+"media/tie.07be5762.mp3"},"15cb":function(e,t,r){e.exports=r.p+"img/img10.85c6b821.jpg"},2625:function(e,t,r){e.exports=r.p+"img/img14.d3654dd6.jpg"},"277d":function(e,t,r){e.exports=r.p+"img/img6.ce2a3823.jpg"},"4d97":function(e,t,r){e.exports=r.p+"img/fei.bd05a0e4.jpeg"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),i=r("8c4f"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view"),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("audio",{staticStyle:{display:"none"},attrs:{controls:"controls",id:"mp3"}},[n("source",{attrs:{src:r("11ad"),type:"audio/mp3"}})])}],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",{staticClass:"movie-items"},e._l(e.movieFilterItems,function(t,n){return r("li",{class:{active:1==t.show},attrs:{"data-index":n,"data-id":t.rank}},[r("div",[r("p",[e._v(e._s(t.rank))]),r("p",[e._v("\n\t\t\t\t\t"+e._s(t.title)+"\n\t\t\t\t")]),r("p",[r("img",{staticStyle:{width:"200px"},attrs:{src:t.imgSrc,alt:""}})]),r("p",[r("span",{on:{click:function(r){e.seeBefore(1,n,t.rank)}}},[e._v("看过")]),r("span",{on:{click:function(r){e.seeBefore(0,n,t.rank)}}},[e._v("没看过")])])])])}))])},c=[],u=(r("ac6a"),r("5ea3")),f=r.n(u),l=r("cdd8"),p=r.n(l),m=r("e041"),d=r.n(m),g=r("6cb7"),h=r.n(g),v=r("8e57"),b=r.n(v),_=r("277d"),k=r.n(_),B=r("0441"),j=r.n(B),x=r("c510"),y=r.n(x),S=r("9645"),N=r.n(S),w=r("15cb"),O=r.n(w),Y=r("b2e4"),C=r.n(Y),M=r("7078"),$=r.n(M),F=r("7289"),I=r.n(F),A=r("2625"),E=r.n(A),T=[{rank:"1",title:"飞狐外传",director:"弗兰克·德拉邦特 Frank Darabont",imgSrc:f.a},{rank:"2",title:"雪山飞狐",director:"陈凯歌",imgSrc:p.a},{rank:"3",title:"连城诀",director:"吕克·贝松 Luc Besson",imgSrc:d.a},{rank:"4",title:"天龙八部",director:"Robert Zemeckis",imgSrc:h.a},{rank:"5",title:"射雕英雄传",director:"罗伯托·贝尼尼 Roberto Benigni",imgSrc:b.a},{rank:"6",title:"白马啸西风",director:"詹姆斯·卡梅隆 James Cameron",imgSrc:k.a},{rank:"7",title:"鹿鼎记",director:"宫崎骏 Hayao Miyazaki",imgSrc:j.a},{rank:"8",title:"笑傲江湖",director:"史蒂文·斯皮尔伯格 Steven Spielberg",imgSrc:y.a},{rank:"9",title:"书剑恩仇录",director:"克里斯托弗·诺兰 Christopher Nolan",imgSrc:N.a},{rank:"10",title:"神雕侠侣",director:"安德鲁·斯坦顿 Andrew Stanton",imgSrc:O.a},{rank:"11",title:"侠客行",director:"莱塞·霍尔斯道姆 Lasse Hallström",imgSrc:C.a},{rank:"12",title:"倚天屠龙记",director:"拉库马·希拉尼 Rajkumar Hirani",imgSrc:$.a},{rank:"13",title:"碧血剑",director:"朱塞佩·托纳多雷 Giuseppe Tornatore",imgSrc:I.a},{rank:"14",title:"鸳鸯刀",director:"克里斯托夫·巴拉蒂 Christophe Barratier",imgSrc:E.a}],P={data:function(){return{nickname:"cutemurphy",jpg:null,seeBeforeYes:[],seeBeforeNo:[],movieFilterItems:null,filterNum:16}},methods:{seeBefore:function(e,t,r){var n=this.movieFilterItems.length;1==e?this.seeBeforeYes.push(r):this.seeBeforeNo.push(r),t!==n-1&&(this.movieFilterItems[t].show=0,this.movieFilterItems[t+1].show=1),this.seeBeforeYes.length+this.seeBeforeNo.length===n&&this.$router.push({name:"result",params:{filterNum:this.filterNum,seeBeforeYes:this.seeBeforeYes,seeBeforeNo:this.seeBeforeNo}})},getArrItem:function(e,t){var r=new Array;for(var n in e)r.push(e[n]);for(var i=new Array,o=0;o<t;o++){if(!(r.length>0))break;var s=Math.floor(Math.random()*r.length);i[o]=r[s],r.splice(s,1)}return i}},created:function(){var e=T;e.forEach(function(e,t){e.show=0==t?1:0}),this.movieFilterItems=e}},R=P,D=(r("b75b"),r("2877")),H=Object(D["a"])(R,a,c,!1,null,"3dec1643",null);H.options.__file="ChooseMovie.vue";var J=H.exports,L={name:"app",components:{ChooseMoive:J}},z=L,G=(r("034f"),Object(D["a"])(z,o,s,!1,null,null,null));G.options.__file="App.vue";var Z=G.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("span",{staticClass:"goTest",on:{click:e.goTest}},[e._v("开始测试")]),n("img",{attrs:{src:r("4d97"),alt:""}})])},K=[],Q={methods:{goTest:function(){var e=document.getElementById("mp3");e.play(),this.$router.push({name:"test",params:{filterNum:this.filterNum,seeBeforeYes:this.seeBeforeYes,seeBeforeNo:this.seeBeforeNo}})}}},U=Q,V=(r("a90d"),Object(D["a"])(U,q,K,!1,null,null,null));V.options.__file="Start.vue";var W=V.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v(e._s(e.resultRank))])])},ee=[],te={created:function(){var e=this.$route.params;this.filterNum=e.filterNum,this.seeBeforeYes=e.seeBeforeYes,this.seeBeforeNo=e.seeBeforeNo},data:function(){return{filterNum:"",seeBeforeYes:[],seeBeforeNo:[],nickName:"cutemurphy",age:""}},computed:{resultRank:function(){var e=this.filterNum,t=this.seeBeforeYes.length;this.seeBeforeNo.length;console.log(this.seeBeforeYes,this.seeBeforeNo);var r={A:"你是个大文青噢，崇拜崇拜～想摘下星星给你～",B:"你是个资深文艺青年噢～想摘下星星给你～",C:"你是个普通文艺青年～",D:"你是个伪文艺青年～该补补书籍电影了"},n=(t/e).toFixed(1);return 1==n?r["A"]:n>=.8&&n<1?r["B"]:n>=.6&&n<.8?r["C"]:r["D"]}}},re=te,ne=(r("ba67"),Object(D["a"])(re,X,ee,!1,null,null,null));ne.options.__file="CheckResult.vue";var ie=ne.exports;n["a"].use(i["a"]);var oe=new i["a"]({routes:[{path:"/",component:W},{path:"/test",name:"test",component:J},{path:"/result",name:"result",component:ie}]}),se=oe;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(Z)},router:se}).$mount("#app")},"5ea3":function(e,t,r){e.exports=r.p+"img/img1.f45d2570.jpg"},"6cb7":function(e,t,r){e.exports=r.p+"img/img4.b3bf49c4.jpg"},7078:function(e,t,r){e.exports=r.p+"img/img12.5da97bee.jpg"},7289:function(e,t,r){e.exports=r.p+"img/img13.dc07837c.jpg"},"7a35":function(e,t,r){},"8e57":function(e,t,r){e.exports=r.p+"img/img5.2200701e.jpg"},9645:function(e,t,r){e.exports=r.p+"img/img9.f933b4f1.jpg"},a90d:function(e,t,r){"use strict";var n=r("7a35"),i=r.n(n);i.a},b2e4:function(e,t,r){e.exports=r.p+"img/img11.18e6f872.jpg"},b75b:function(e,t,r){"use strict";var n=r("f2d1"),i=r.n(n);i.a},ba67:function(e,t,r){"use strict";var n=r("ff69"),i=r.n(n);i.a},c21b:function(e,t,r){},c510:function(e,t,r){e.exports=r.p+"img/img8.4040e9bd.jpg"},cdd8:function(e,t,r){e.exports=r.p+"img/img2.4c745bdf.jpg"},e041:function(e,t,r){e.exports=r.p+"img/img3.207f05e9.jpg"},f2d1:function(e,t,r){},ff69:function(e,t,r){}});
//# sourceMappingURL=app.3d9025f6.js.map