(function(e){function t(t){for(var i,s,a=t[0],c=t[1],u=t[2],p=0,f=[];p<a.length;p++)s=a[p],o[s]&&f.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(f.length)f.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],i=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(i=!1)}i&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var i={},o={app:0},n=[];function s(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=i,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/jinyong/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var i=r("c21b"),o=r.n(i);o.a},"11ad":function(e,t,r){e.exports=r.p+"media/tie.07be5762.mp3"},4758:function(e,t,r){},"4d97":function(e,t,r){e.exports=r.p+"img/fei.bd05a0e4.jpeg"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var i=r("2b0e"),o=r("8c4f"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view"),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("audio",{staticStyle:{display:"none"},attrs:{controls:"controls",id:"mp3"}},[i("source",{attrs:{src:r("11ad"),type:"audio/mp3"}})])}],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",{staticClass:"movie-items"},e._l(e.movieFilterItems,function(t,i){return r("li",{class:{active:1==t.show},attrs:{"data-index":i,"data-id":t.rank}},[r("div",[r("p",[e._v(e._s(t.rank))]),r("p",[e._v("\n\t\t\t\t\t"+e._s(t.title)+"\n\t\t\t\t")]),r("p",[r("img",{staticStyle:{width:"200px"},attrs:{src:t.imgSrc,alt:""}})]),r("p",[r("span",{on:{click:function(r){e.seeBefore(1,i,t.rank)}}},[e._v("看过")]),r("span",{on:{click:function(r){e.seeBefore(0,i,t.rank)}}},[e._v("没看过")])])])])}))])},c=[],u=(r("ac6a"),[{rank:"1",title:"飞狐外传",director:"弗兰克·德拉邦特 Frank Darabont",imgSrc:"https://img3.doubanio.com/view/subject/l/public/s25981496.jpg"},{rank:"2",title:"雪山飞狐",director:"陈凯歌",imgSrc:"https://img3.doubanio.com/view/subject/l/public/s6195681.jpg"},{rank:"3",title:"连城诀",director:"吕克·贝松 Luc Besson",imgSrc:"https://img3.doubanio.com/view/subject/l/public/s26018273.jpg"},{rank:"4",title:"天龙八部",director:"Robert Zemeckis",imgSrc:"https://img1.doubanio.com/view/subject/l/public/s23632058.jpg"},{rank:"5",title:"射雕英雄传",director:"罗伯托·贝尼尼 Roberto Benigni",imgSrc:"https://img3.doubanio.com/view/subject/s/public/s6196005.jpg"},{rank:"6",title:"白马啸西风",director:"詹姆斯·卡梅隆 James Cameron",imgSrc:"https://img3.doubanio.com/view/subject/s/public/s2977692.jpg"},{rank:"7",title:"鹿鼎记",director:"宫崎骏 Hayao Miyazaki",imgSrc:"https://img1.doubanio.com/view/subject/s/public/s6196017.jpg"},{rank:"8",title:"笑傲江湖",director:"史蒂文·斯皮尔伯格 Steven Spielberg",imgSrc:"https://img3.doubanio.com/view/subject/s/public/s2157335.jpg"},{rank:"9",title:"书剑恩仇录",director:"克里斯托弗·诺兰 Christopher Nolan",imgSrc:"https://img1.doubanio.com/view/subject/s/public/s26018268.jpg"},{rank:"10",title:"神雕侠侣",director:"安德鲁·斯坦顿 Andrew Stanton",imgSrc:"https://img3.doubanio.com/view/subject/s/public/s6331476.jpg"},{rank:"11",title:"侠客行",director:"莱塞·霍尔斯道姆 Lasse Hallström",imgSrc:"https://img3.doubanio.com/view/subject/s/public/s24938374.jpg"},{rank:"12",title:"倚天屠龙记",director:"拉库马·希拉尼 Rajkumar Hirani",imgSrc:"https://img1.doubanio.com/view/subject/s/public/s5894778.jpg"},{rank:"13",title:"碧血剑",director:"朱塞佩·托纳多雷 Giuseppe Tornatore",imgSrc:"https://img3.doubanio.com/view/subject/s/public/s26011435.jpg"},{rank:"14",title:"鸳鸯刀",director:"克里斯托夫·巴拉蒂 Christophe Barratier",imgSrc:"https://img1.doubanio.com/view/subject/s/public/s29769988.jpg"}]),l=u,p={data:function(){return{nickname:"cutemurphy",jpg:null,seeBeforeYes:[],seeBeforeNo:[],movieFilterItems:null,filterNum:16}},methods:{seeBefore:function(e,t,r){var i=this.movieFilterItems.length;1==e?this.seeBeforeYes.push(r):this.seeBeforeNo.push(r),t!==i-1&&(this.movieFilterItems[t].show=0,this.movieFilterItems[t+1].show=1),this.seeBeforeYes.length+this.seeBeforeNo.length===i&&this.$router.push({name:"result",params:{filterNum:this.filterNum,seeBeforeYes:this.seeBeforeYes,seeBeforeNo:this.seeBeforeNo}})},getArrItem:function(e,t){var r=new Array;for(var i in e)r.push(e[i]);for(var o=new Array,n=0;n<t;n++){if(!(r.length>0))break;var s=Math.floor(Math.random()*r.length);o[n]=r[s],r.splice(s,1)}return o}},created:function(){var e=l;e.forEach(function(e,t){e.show=0==t?1:0}),this.movieFilterItems=e}},f=p,m=(r("5ecd"),r("2877")),h=Object(m["a"])(f,a,c,!1,null,"1b5b1276",null);h.options.__file="ChooseMovie.vue";var d=h.exports,v={name:"app",components:{ChooseMoive:d}},b=v,g=(r("034f"),Object(m["a"])(b,n,s,!1,null,null,null));g.options.__file="App.vue";var j=g.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("span",{staticClass:"goTest",on:{click:e.goTest}},[e._v("开始测试")]),i("img",{attrs:{src:r("4d97"),alt:""}})])},_=[],k={methods:{goTest:function(){var e=document.getElementById("mp3");e.play(),this.$router.push({name:"test",params:{filterNum:this.filterNum,seeBeforeYes:this.seeBeforeYes,seeBeforeNo:this.seeBeforeNo}})}}},B=k,y=(r("a90d"),Object(m["a"])(B,w,_,!1,null,null,null));y.options.__file="Start.vue";var S=y.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v(e._s(e.resultRank))])])},x=[],O={created:function(){var e=this.$route.params;this.filterNum=e.filterNum,this.seeBeforeYes=e.seeBeforeYes,this.seeBeforeNo=e.seeBeforeNo},data:function(){return{filterNum:"",seeBeforeYes:[],seeBeforeNo:[],nickName:"cutemurphy",age:""}},computed:{resultRank:function(){var e=this.filterNum,t=this.seeBeforeYes.length;this.seeBeforeNo.length;console.log(this.seeBeforeYes,this.seeBeforeNo);var r={A:"你是个大文青噢，崇拜崇拜～想摘下星星给你～",B:"你是个资深文艺青年噢～想摘下星星给你～",C:"你是个普通文艺青年～",D:"你是个伪文艺青年～该补补书籍电影了"},i=(t/e).toFixed(1);return 1==i?r["A"]:i>=.8&&i<1?r["B"]:i>=.6&&i<.8?r["C"]:r["D"]}}},Y=O,C=(r("ba67"),Object(m["a"])(Y,N,x,!1,null,null,null));C.options.__file="CheckResult.vue";var M=C.exports;i["a"].use(o["a"]);var $=new o["a"]({routes:[{path:"/",component:S},{path:"/test",name:"test",component:d},{path:"/result",name:"result",component:M}]}),F=$;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(j)},router:F}).$mount("#app")},"5ecd":function(e,t,r){"use strict";var i=r("4758"),o=r.n(i);o.a},"7a35":function(e,t,r){},a90d:function(e,t,r){"use strict";var i=r("7a35"),o=r.n(i);o.a},ba67:function(e,t,r){"use strict";var i=r("ff69"),o=r.n(i);o.a},c21b:function(e,t,r){},ff69:function(e,t,r){}});
//# sourceMappingURL=app.203f4fd7.js.map