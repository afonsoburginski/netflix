(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(7),c=n.n(s),i=n(3),o=n.n(i),l=n(4),u=n(5),d=(n(21),"2f2bbfbdd5f1d85d3dce50e91b567e76"),j=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/discover/tv?with_network=213&language=pt-BR&api_key=".concat(d));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",items:e.t0},e.next=6,j("/trending/all/week?language=pt-BR&api_key=".concat(d));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",items:e.t2},e.next=10,j("/movie/top_rated?language=pt-BR&api_key=".concat(d));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em alta",items:e.t4},e.next=14,j("/discover/movie?with_genres=28&language=pt-BR&api_key=".concat(d));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,j("/discover/movie?with_genres=35&language=pt-BR&api_key=".concat(d));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,j("/discover/movie?with_genres=27&language=pt-BR&api_key=".concat(d));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,j("/discover/movie?with_genres=10749&language=pt-BR&api_key=".concat(d));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,j("/discover/movie?with_genres=99&language=pt-BR&api_key=".concat(d));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rios",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!t){e.next=15;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,j("/movie/".concat(t,"?language=pt-BR&api_key=").concat(d));case 7:case 11:return r=e.sent,e.abrupt("break",15);case 9:return e.next=11,j("/tv/".concat(t,"?language=pt-BR&api_key=").concat(d));case 13:return r=null,e.abrupt("break",15);case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},b=n(12),h=n.n(b),f=n(14),g=n.n(f),p=(n(22),n(1)),v=function(e){var t=e.title,n=e.items,a=Object(r.useState)(0),s=Object(u.a)(a,2),c=s[0],i=s[1];return Object(p.jsxs)("div",{className:"movieRow",children:[Object(p.jsx)("h2",{children:t}),Object(p.jsx)("div",{className:"movieRow--left",onClick:function(){var e=c+Math.round(window.innerWidth/2);e>0&&(e=0),i(e)},children:Object(p.jsx)(h.a,{style:{fontSize:50}})}),Object(p.jsx)("div",{className:"movieRow--right",onClick:function(){var e=c-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),i(e)},children:Object(p.jsx)(g.a,{style:{fontSize:50}})}),Object(p.jsx)("div",{className:"movieRow--listarea",children:Object(p.jsx)("div",{className:"movieRow--list",style:{marginLeft:c,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(p.jsx)("div",{className:"movieRow--item",children:Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title})},t)}))})})]})},x=(n(29),function(e){var t=e.item,n=new Date(t.first_air_date),r=[];for(var a in t.genres)r.push(t.genres[a].name);var s=t.overview;return s.length>200&&(s=s.substring(0,200)+"..."),Object(p.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(p.jsx)("div",{className:"featured--vertical",children:Object(p.jsxs)("div",{className:"featured--horizontal",children:[Object(p.jsx)("div",{className:"featured--name",children:t.original_name}),Object(p.jsxs)("div",{className:"featured--info",children:[Object(p.jsxs)("div",{className:"featured--points",children:[t.vote_average," pontos"]}),Object(p.jsx)("div",{className:"featured--year",children:n.getFullYear()}),Object(p.jsxs)("div",{className:"featured--seasons",children:[t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":""]})]}),Object(p.jsx)("div",{className:"featured--description",children:s}),Object(p.jsxs)("div",{className:"featured--buttons",children:[Object(p.jsx)("a",{href:"/watch/".concat(t.id),className:"featured--watchbutton",children:"\u25ba Assistir"}),Object(p.jsx)("a",{href:"/list/add/".concat(t.id),className:"featured--mylistbutton",children:"+ Minha Lista"})]}),Object(p.jsx)("div",{className:"featured--genres",children:Object(p.jsxs)("strong",{children:["G\xeaneros: ",r.join(", ")]})})]})})})}),O=(n(30),function(e){var t=e.black;return Object(p.jsxs)("header",{className:t?"black":"",children:[Object(p.jsx)("div",{className:"header--logo",children:Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("img",{src:"https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png",alt:"NetFlix"})})}),Object(p.jsx)("div",{className:"header--user",children:Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:"usuario"})})})]})}),w=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(null),c=Object(u.a)(s,2),i=c[0],d=c[1],j=Object(r.useState)(!1),b=Object(u.a)(j,2),h=b[0],f=b[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getHomeList();case 2:return t=e.sent,a(t),n=t.filter((function(e){return"originals"===e.slug})),r=Math.floor(Math.random()*(n[0].items.results.length-1)),s=n[0].items.results[r],e.next=9,m.getMovieInfo(s.id,"tv");case 9:c=e.sent,d(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(r.useEffect)((function(){var e=function(){window.scrollY>10?f(!0):f(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)(O,{black:h}),i&&Object(p.jsx)(x,{item:i}),Object(p.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(p.jsx)(v,{title:e.title,items:e.items},t)}))}),Object(p.jsxs)("footer",{children:["Desenvolvido por ",Object(p.jsx)("a",{href:"https://www.afonsodev.com",children:"Afonso.Dev"}),Object(p.jsx)("br",{}),"Professor: ",Object(p.jsx)("a",{href:"https://www.youtube.com/watch?v=tBweoUiMsDg",children:"Bonieky Lacerda"}),Object(p.jsx)("br",{}),"Direitos de imagem \xe0 ",Object(p.jsx)("a",{href:"https://www.netflix.com.br",children:"Netflix"}),Object(p.jsx)("br",{})]}),n.length<=1&&Object(p.jsx)("div",{className:"loading",children:Object(p.jsx)("img",{src:"https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif",alt:"Carregando"})})]})};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.cd01fcdd.chunk.js.map