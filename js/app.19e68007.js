(function(e){function t(t){for(var i,r,a=t[0],c=t[1],u=t[2],l=0,v=[];l<a.length;l++)r=a[l],o[r]&&v.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);f&&f(t);while(v.length)v.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,a=1;a<s.length;a++){var c=s[a];0!==o[c]&&(i=!1)}i&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var i={},o={app:0},n=[];function r(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=i,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(s,i,function(t){return e[t]}.bind(null,i));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/jinyong/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var f=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var i=s("c21b"),o=s.n(i);o.a},"0441":function(e,t,s){e.exports=s.p+"img/img7.974cae10.jpg"},"11ad":function(e,t,s){e.exports=s.p+"media/tie.07be5762.mp3"},"15cb":function(e,t,s){e.exports=s.p+"img/img10.85c6b821.jpg"},2625:function(e,t,s){e.exports=s.p+"img/img14.d3654dd6.jpg"},"277d":function(e,t,s){e.exports=s.p+"img/img6.ce2a3823.jpg"},"4d97":function(e,t,s){e.exports=s.p+"img/fei.bd05a0e4.jpeg"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var i=s("2b0e"),o=s("8c4f"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view"),e._m(0)],1)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("audio",{staticStyle:{display:"none"},attrs:{controls:"controls",id:"mp3"}},[i("source",{attrs:{src:s("11ad"),type:"audio/mp3"}})])}],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ul",{staticClass:"movie-items",staticStyle:{"padding-top":"30px"}},e._l(e.movieFilterItems,function(t,i){return s("li",{class:{active:1==t.show},attrs:{"data-index":i,"data-id":t.rank}},[s("div",[s("p",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v(e._s(t.rank))]),s("p",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v("\n\t\t\t\t\t"+e._s(t.title)+"\n\t\t\t\t")]),s("p",[s("img",{staticStyle:{width:"70%"},attrs:{src:t.imgSrc,alt:""}})]),s("p",{staticStyle:{padding:"10px 15px","font-size":"14px"}},[e._v(e._s(t.summary))]),s("p",{staticStyle:{height:"50px",position:"relative","padding-top":"20px"}},[s("span",{staticClass:"seeBeforeYes-btn",on:{click:function(s){e.seeBefore(1,i,t.rank)}}},[e._v("看过")]),s("span",{staticClass:"seeBeforeNo-btn",on:{click:function(s){e.seeBefore(0,i,t.rank)}}},[e._v("没看过")])])])])}))])},c=[],u=(s("ac6a"),s("5ea3")),f=s.n(u),l=s("cdd8"),v=s.n(l),m=s("e041"),p=s.n(m),h=s("6cb7"),d=s.n(h),w=s("8e57"),g=s.n(w),x=s("277d"),b=s.n(x),_=s("0441"),A=s.n(_),y=s("c510"),B=s.n(y),N=s("9645"),k=s.n(N),j=s("15cb"),S=s.n(j),O=s("b2e4"),C=s.n(O),Y=s("7078"),T=s.n(Y),M=s("7289"),$=s.n(M),I=s("2625"),E=s.n(I),F=[{rank:"1",title:"飞狐外传",director:"弗兰克·德拉邦特 Frank Darabont",imgSrc:f.a,summary:"“她慢慢站起身来，柔情无限的瞧着胡斐，从药囊中取出两种药粉，替他敷在手背，又取出一粒黄色药丸，塞在他口中，低低地道：我师父说中了这三种剧毒，无药可治，因为他知道世上没有一个医生，肯不要自己的性命来救活病人。大哥，他不知我……我会待你这样…”"},{rank:"2",title:"雪山飞狐",director:"陈凯歌",imgSrc:v.a,summary:"“好令后人发现宝藏之时，知道世上最宝贵之物，乃是两心相悦的真正情爱，决非价值连城的宝藏。”"},{rank:"3",title:"连城诀",director:"吕克·贝松 Luc Besson",imgSrc:p.a,summary:"“这天晚上，我悄悄捧了一盆蔷薇，放在凌小姐后楼的窗槛上，然后在楼下等着。第二天早晨，小姐打开窗子，见到了那盆花，惊呼了一声，随即又见到了我。我们一年多不见，都以为今生再无相见之日，此番久别重逢，真是说不出的欢喜。她向我瞧了好一会儿，才红着脸，轻轻掩上了窗子。第三天，她终于说话了，问：‘你生病了么？可瘦得多了。’“以后的日子，我不是做人，是在天上做神仙，其实就做神仙，一定也没我这般快活。每天半夜里，我到楼上去接凌小姐出来，在江陵各处荒山旷野漫游。我们从没半分不规矩的行为，然而是无话不说，比天下最要好朋友还知己。”"},{rank:"4",title:"天龙八部",director:"Robert Zemeckis",imgSrc:d.a,summary:"“红颜弹指老，刹那芳华，与其天涯思君，恋恋不舍，莫若相忘于江湖..”"},{rank:"5",title:"射雕英雄传",director:"罗伯托·贝尼尼 Roberto Benigni",imgSrc:g.a,summary:"“四张机，鸳鸯织就欲双飞，可怜未老头先白，春波碧草，晓寒深处，相对浴红衣。”"},{rank:"6",title:"白马啸西风",director:"詹姆斯·卡梅隆 James Cameron",imgSrc:b.a,summary:"“白马带着她一步一步地回到中原，白马已经老了，只能慢慢地走，但是终是能回到中原的，江南有杨柳，桃花，燕子，金鱼……汉人中有的是英俊勇武的少年，倜傥潇洒的少年……但这个美丽的姑娘，就像高昌国人那样固执，那些都是很好很好的，可是我偏不喜欢。”"},{rank:"7",title:"鹿鼎记",director:"宫崎骏 Hayao Miyazaki",imgSrc:A.a,summary:"“我今生娶不到你，我就是乌龟王八蛋！啊不，再多加一个蛋，乌龟王九蛋！”"},{rank:"8",title:"笑傲江湖",director:"史蒂文·斯皮尔伯格 Steven Spielberg",imgSrc:B.a,summary:"“只要有人的地方就有恩怨,有恩怨就会有江湖,人就是江湖。”"},{rank:"9",title:"书剑恩仇录",director:"克里斯托弗·诺兰 Christopher Nolan",imgSrc:k.a,summary:"“慧极必伤，情深不寿，强极则辱，谦谦君子，温润如玉。”"},{rank:"10",title:"神雕侠侣",director:"安德鲁·斯坦顿 Andrew Stanton",imgSrc:S.a,summary:"“你瞧这些白云聚了又散，散了又聚，人生离合，亦复如斯。”"},{rank:"11",title:"侠客行",director:"莱塞·霍尔斯道姆 Lasse Hallström",imgSrc:C.a,summary:"“小丐摇头道：“我不求人家的。”谢烟客心中一凛，忙问：“为什么不求人？”小丐道：“我妈妈常跟我说：‘狗杂种，你这一生一世，可别去求人家什么。人家心中想给你，你不用求，人家自然会给你；人家不肯的，你便苦苦哀求也是无用，反而惹得人家讨厌。””"},{rank:"12",title:"倚天屠龙记",director:"拉库马·希拉尼 Rajkumar Hirani",imgSrc:T.a,summary:"“他强由他强，清风拂山岗；他横任他横，明月照大江。他自狠来他自恶，我自一口真气足。”"},{rank:"13",title:"碧血剑",director:"朱塞佩·托纳多雷 Giuseppe Tornatore",imgSrc:$.a,summary:"“无官方是一身轻，伴君伴虎自古云，归家便是三生幸，鸟尽弓藏走狗烹！子胥功高吴王忌，文种灭吴身首分，可惜了淮阴命，空留下武穆名，大功谁及徐将军？神机妙算刘伯温，算不到：大明天子坐龙廷，文武功臣命归阴。因此上，急回头里逃生；因此上，急回头里逃生...... 君王下旨拿功臣，剑拥兵围，绳缠索绑，肉颤心惊。恨不能，得便处投河跳井；悔不及，起初时诈死埋名。今日的一缕英魂，昨日的万里长城。……””"},{rank:"14",title:"鸳鸯刀",director:"克里斯托夫·巴拉蒂 Christophe Barratier",imgSrc:E.a,summary:"“「鸳鸯刀」的大名，他早便听师父说过∶「鸳鸯刀一短一长，刀中藏著武林的大秘密，得之者无敌於天下。」「无敌於天下」这五个字，正是每个学武之人梦寐以求的最大愿望。”"}],P={data:function(){return{nickname:"cutemurphy",jpg:null,seeBeforeYes:[],seeBeforeNo:[],movieFilterItems:null,filterNum:16}},methods:{seeBefore:function(e,t,s){var i=this.movieFilterItems.length;1==e?this.seeBeforeYes.push(s):this.seeBeforeNo.push(s),t!==i-1&&(this.movieFilterItems[t].show=0,this.movieFilterItems[t+1].show=1),this.seeBeforeYes.length+this.seeBeforeNo.length===i&&this.$router.push({name:"result",params:{filterNum:this.filterNum,seeBeforeYes:this.seeBeforeYes,seeBeforeNo:this.seeBeforeNo}})},getArrItem:function(e,t){var s=new Array;for(var i in e)s.push(e[i]);for(var o=new Array,n=0;n<t;n++){if(!(s.length>0))break;var r=Math.floor(Math.random()*s.length);o[n]=s[r],s.splice(r,1)}return o}},created:function(){var e=F;e.forEach(function(e,t){e.show=0==t?1:0}),this.movieFilterItems=e}},R=P,H=(s("99d2"),s("2877")),J=Object(H["a"])(R,a,c,!1,null,"14b346ee",null);J.options.__file="ChooseMovie.vue";var z=J.exports,L={name:"app",components:{ChooseMoive:z}},D=L,G=(s("034f"),Object(H["a"])(D,n,r,!1,null,null,null));G.options.__file="App.vue";var Z=G.exports,q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("span",{staticClass:"goTest",on:{click:e.goTest}},[e._v("开始测试")]),i("img",{attrs:{src:s("4d97"),alt:""}})])},K=[],Q={methods:{goTest:function(){var e=document.getElementById("mp3");e.play(),this.$router.push({name:"test",params:{filterNum:this.filterNum,seeBeforeYes:this.seeBeforeYes,seeBeforeNo:this.seeBeforeNo}})}}},U=Q,V=(s("a90d"),Object(H["a"])(U,q,K,!1,null,null,null));V.options.__file="Start.vue";var W=V.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"fonts"},[s("div",{staticStyle:{"margin-bottom":"30px"}},[e._v("您看过的书，将标记为红色：")]),s("div",[s("span",{directives:[{name:"show",rawName:"v-show",value:e.show1,expression:"show1"}],class:{active:e.isActive1}},[e._v("飞")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.show2,expression:"show2"}],staticClass:"font2",class:{active:e.isActive2}},[e._v("雪")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.show3,expression:"show3"}],staticClass:"font3",class:{active:e.isActive3}},[e._v("连")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.show4,expression:"show4"}],staticClass:"font4",class:{active:e.isActive4}},[e._v("天")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.show5,expression:"show5"}],staticClass:"font5",class:{active:e.isActive5}},[e._v("射")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.show6,expression:"show6"}],staticClass:"font6",class:{active:e.isActive6}},[e._v("白")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.show7,expression:"show7"}],staticClass:"font7",class:{active:e.isActive7}},[e._v("鹿")])]),s("div",[s("span",{directives:[{name:"show",rawName:"v-show",value:e.show8,expression:"show8"}],staticClass:"font8",class:{active:e.isActive8}},[e._v("笑")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.show9,expression:"show9"}],staticClass:"font9",class:{active:e.isActive9}},[e._v("书")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.show10,expression:"show10"}],staticClass:"font10",class:{active:e.isActive10}},[e._v("神")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.show11,expression:"show11"}],staticClass:"font11",class:{active:e.isActive11}},[e._v("侠")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.show12,expression:"show12"}],staticClass:"font12",class:{active:e.isActive12}},[e._v("倚")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.show13,expression:"show13"}],staticClass:"font13",class:{active:e.isActive13}},[e._v("碧")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.show14,expression:"show14"}],staticClass:"font14",class:{active:e.isActive14}},[e._v("鸳")])])])])},ee=[],te={data:function(){return{seeBeforeYes:[],seeBeforeNo:[],show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,show6:!1,show7:!1,show8:!1,show9:!1,show10:!1,show11:!1,show12:!1,show13:!1,show14:!1,isActive1:!0,isActive2:!0,isActive3:!1,isActive4:!1,isActive5:!1,isActive6:!1,isActive7:!1,isActive8:!1,isActive9:!1,isActive10:!1,isActive11:!1,isActive12:!1,isActive13:!1,isActive14:!1}},created:function(){var e=this.$route.params||[];this.seeBeforeYes=e&&e.seeBeforeYes,this.seeBeforeNo=e&&e.seeBeforeNo,console.log(this.seeBeforeYes,this.seeBeforeNo);var t=this;new Promise(function(e,s){t.show1=!0,-1!==t.seeBeforeYes.indexOf("1")&&(t.isActive1=!0),e()}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("2")&&(t.isActive2=!0),t.show2=!0},500)}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("3")&&(t.isActive3=!0),t.show3=!0},1e3)}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("4")&&(t.isActive4=!0),t.show4=!0},1500)}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("5")&&(t.isActive5=!0),t.show5=!0},2e3)}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("6")&&(t.isActive6=!0),t.show6=!0},2500)}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("7")&&(t.isActive7=!0),t.show7=!0},3e3)}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("8")&&(t.isActive8=!0),t.show8=!0},3500)}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("9")&&(t.isActive9=!0),t.show9=!0},4e3)}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("10")&&(t.isActive10=!0),t.show10=!0},4500)}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("11")&&(t.isActive11=!0),t.show11=!0},5e3)}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("12")&&(t.isActive12=!0),t.show12=!0},5500)}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("13")&&(t.isActive13=!0),t.show13=!0},6e3)}).then(function(){setTimeout(function(){-1!==t.seeBeforeYes.indexOf("14")&&(t.isActive14=!0),t.show14=!0},6500)})}},se=te,ie=(s("ba67"),Object(H["a"])(se,X,ee,!1,null,null,null));ie.options.__file="CheckResult.vue";var oe=ie.exports;i["a"].use(o["a"]);var ne=new o["a"]({routes:[{path:"/",component:W},{path:"/test",name:"test",component:z},{path:"/result",name:"result",component:oe},{path:"*",component:W}]}),re=ne;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(Z)},router:re}).$mount("#app")},"5ea3":function(e,t,s){e.exports=s.p+"img/img1.f45d2570.jpg"},"6cb7":function(e,t,s){e.exports=s.p+"img/img4.63830d55.jpg"},7078:function(e,t,s){e.exports=s.p+"img/img12.5da97bee.jpg"},7289:function(e,t,s){e.exports=s.p+"img/img13.dc07837c.jpg"},"7a35":function(e,t,s){},"8e57":function(e,t,s){e.exports=s.p+"img/img5.2200701e.jpg"},9645:function(e,t,s){e.exports=s.p+"img/img9.f933b4f1.jpg"},"99d2":function(e,t,s){"use strict";var i=s("db36"),o=s.n(i);o.a},a90d:function(e,t,s){"use strict";var i=s("7a35"),o=s.n(i);o.a},b2e4:function(e,t,s){e.exports=s.p+"img/img11.18e6f872.jpg"},ba67:function(e,t,s){"use strict";var i=s("ff69"),o=s.n(i);o.a},c21b:function(e,t,s){},c510:function(e,t,s){e.exports=s.p+"img/img8.4040e9bd.jpg"},cdd8:function(e,t,s){e.exports=s.p+"img/img2.4c745bdf.jpg"},db36:function(e,t,s){},e041:function(e,t,s){e.exports=s.p+"img/img3.207f05e9.jpg"},ff69:function(e,t,s){}});
//# sourceMappingURL=app.19e68007.js.map