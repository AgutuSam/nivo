(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[6301],{18957:function(n,t,e){"use strict";e.d(t,{a:function(){return a}});var r=e(61904),o=e(15050),i=(0,r.Z)((function(n){n.setHours(0,0,0,0)}),(function(n,t){n.setDate(n.getDate()+t)}),(function(n,t){return(t-n-(t.getTimezoneOffset()-n.getTimezoneOffset())*o.yB)/o.UD}),(function(n){return n.getDate()-1}));t.Z=i;var a=i.range},38681:function(n,t,e){"use strict";e.d(t,{j2:function(){return v},wQ:function(){return m},aw:function(){return I},x$:function(){return D},ak:function(){return P},UE:function(){return V},$j:function(){return g},BO:function(){return y},Tz:function(){return O},O$:function(){return b},B7:function(){return N},gq:function(){return G},zn:function(){return z},FQ:function(){return T}});var r=e(4215),o=e.n(r),i=e(91311),a=e.n(i),u=e(19193),c=e.n(u),d=e(18957),s=e(6164),l=function(){return"hsl("+Math.round(360*Math.random())+", 70%, 50%)"},f=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],h=["John","Raoul","Jane","Marcel","Ibrahim","Junko","Lyu","André","Maki","Véronique","Thibeau","Josiane","Raphaël","Mathéo","Margot","Hugo","Christian","Louis","Ella","Alton","Jimmy","Guillaume","Sébastien","Alfred","Bon","Solange","Kendrick","Jared","Satoko","Tomoko","Line","Delphine","Leonard","Alphonse","Lisa","Bart","Benjamin","Homer","Jack"],p=["php","make","javascript","go","erlang","elixir","lisp","haskell","python","ruby","hack","scala","java","rust","c","css","sass","stylus"],v=(Object.freeze({__proto__:null,countryCodes:f,names:h,programmingLanguages:p}),function(n,t,e){var r=void 0===e?{}:e,i=r.title,u=r.subtitle,c=r.rangeCount,d=void 0===c?5:c,s=r.measureCount,l=void 0===s?1:s,f=r.markerCount,h=void 0===f?1:f,p=r.float,v=void 0!==p&&p;return{id:n,title:i,subtitle:u,ranges:o()(d-1).reduce((function(n){var e=t-n[0];return[a()(e,v)].concat(n)}),[t]),measures:o()(l).reduce((function(n){return 0===n.length?[a()(t,v)]:[a()(n[0],v)].concat(n)}),[]),markers:o()(h).map((function(){return.6*t+a()(.4*t)}))}}),m=function(n){var t=void 0===n?{}:n,e=t.keys,r=void 0===e?h:e,i=t.size,u=void 0===i?7:i,c=t.minValue,d=void 0===c?0:c,s=t.maxValue,l=void 0===s?2e3:s,f=Math.min(r.length,u),p=r.slice(0,f);return{matrix:o()(f).map((function(){return o()(f).map((function(){return Math.random()<.66?a()(d,l/4):a()(d,l)}))})),keys:p}},g=function(n){var t=void 0===n?{}:n,e=t.rootNodeRadius,r=void 0===e?12:e,o=t.minMidNodes,i=void 0===o?6:o,u=t.maxMidNodes,c=void 0===u?16:u,d=t.midNodeRadius,s=void 0===d?8:d,l=t.minLeaves,f=void 0===l?4:l,h=t.maxLeaves,p=void 0===h?16:h,v=t.leafRadius,m=void 0===v?4:v,g={id:"0",radius:r,depth:0,color:"rgb(244, 117, 96)"},M=Array.from({length:a()(i,c)},(function(n,t){return{id:""+(t+1),radius:s,depth:1,color:"rgb(97, 205, 187)"}})),y=[],k=[];return M.forEach((function(n){y.push({source:"0",target:n.id,distance:50}),M.forEach((function(t){Math.random()<.04&&y.push({source:n.id,target:t.id,distance:70})})),Array.from({length:a()(f,p)},(function(t,e){return k.push({id:n.id+"."+e,radius:m,depth:2,color:"rgb(232, 193, 160)"}),y.push({source:n.id,target:n.id+"."+e,distance:30}),null}))})),M.push(g),{nodes:M=M.concat(k),links:y}};function M(){return M=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},M.apply(this,arguments)}var y=function(n){var t=void 0===n?{}:n,e=t.size,r=void 0===e?26:e,i=t.keys,u=void 0===i?[{key:"temp",random:[-10,40]},{key:"cost",random:[200,4e5]},{key:"color",shuffle:["red","yellow","green"]},{key:"target",shuffle:["A","B","C","D","E"]},{key:"volume",random:[.2,7.6]}]:i;return o()(r).map((function(){return u.reduce((function(n,t){var e,r;return void 0!==t.random?r=a().apply(void 0,t.random):void 0!==t.shuffle&&(r=c()(t.shuffle)[0]),M({},n,((e={})[t.key]=r,e))}),{})}))},k=h.map((function(n){return{id:n}})),C=function n(t,e,r){var o=e.filter((function(n){return n.source===t})).map((function(n){var e=n.target;if(e===t)throw new Error("[sankey] a node cannot be linked on itself:\n  link: "+t+" —> "+t);if(null!=r&&r.includes(e))throw new Error("[sankey] found cyclic dependency:\n  link: "+r.join(" —> ")+" —> "+e);return e}));return o.reduce((function(o,i){return o.concat(n(i,e,r?[].concat(r,[i]):[t,i]))}),o)},S=function(n){return n.reduce((function(t,e){return t[e.source]||(t[e.source]=C(e.source,n)),t}),{})},b=function(n){var t=void 0===n?{}:n,e=t.nodeCount,r=t.maxIterations,i=void 0===r?3:r,u=k.slice(0,e).map((function(n){return Object.assign({},n,{nodeColor:l()})})),d=[];return c()(u).forEach((function(n){var t=n.id;o()(a()(1,i)).forEach((function(){var n=S(d),e=c()(u.filter((function(n){return n.id!==t})).map((function(n){return n.id})))[0];n[e]&&n[e].includes(t)||n[t]&&n[t].includes(e)||d.push({source:t,target:e,value:a()(5,200)})}))})),{nodes:u,links:d}},B=function(){return a()(0,500)},A=function(){return a()(4,20)},x=function(){return a()(3,17)},G=function(n,t){var e=t.min,r=void 0===e?60:e,i=t.max,u=void 0===i?100:i,c=t.categoryCount,d=void 0===c?0:c;return{groups:n,data:n.reduce((function(n,t,e){return[].concat(n,o()(a()(r,u)).map((function(){return B()})).map((function(n,r){var i={id:e+"."+r,group:t,price:n,volume:A()};return d>0&&(i.categories=o()(d).map(x)),i})))}),[])}},T=function(n){return{groups:n.groups,data:n.data.map((function(t){var e=M({},t,{group:c()(n.groups)[0],price:B(),volume:A()});return void 0!==t.categories&&(e.categories=o()(3).map(x)),e}))}},E=l,O=function(n,t){void 0===n&&(n=!0),void 0===t&&(t=-1);var e=p;return n&&(e=c()(e)),t<1&&(t=1+Math.round(Math.random()*(p.length-1))),e.slice(0,t).map((function(n){return{label:n,value:Math.round(600*Math.random()),color:E()}}))},R=function(n){var t=[];return function(){var e;do{e=n.apply(void 0,arguments)}while(t.includes(e));return t.push(e),e}},L=function(){return c()(f)[0]},P=function(n){void 0===n&&(n=16);var t=["whisky","rhum","gin","vodka","cognac"],e=R(L),r=t.map((function(n){return{id:n,color:E(),data:[]}}));return o()(n).forEach((function(){var n=e();t.forEach((function(t){var e;null==(e=r.find((function(n){return n.id===t})))||e.data.push({color:E(),x:n,y:a()(0,60)})}))})),r},N=function(n,t){return n.map((function(n){return{id:n,color:E(),data:t.map((function(n){return{x:n,y:Math.round(300*Math.random())}}))}}))},D=function(n,t,e){void 0===e&&(e=.9);var r=function(n,t){var e=(0,d.a)(n,t),r=(0,s.i$)("%Y-%m-%d");return e.map((function(n){return{value:Math.round(400*Math.random()),day:r(n)}}))}(n,t),o=Math.round(r.length*(.4*e))+Math.round(Math.random()*(r.length*(.6*e)));return c()(r).slice(0,o)},I=function(n,t){var e=void 0===t?{}:t,r=e.size,o=void 0===r?12:r,i=e.min,u=void 0===i?0:i,c=e.max,d=void 0===c?200:c,s=e.withColors,l=void 0===s||s;return f.slice(0,o).map((function(t){var e={country:t};return n.forEach((function(n){e[n]=a()(u,d),!0===l&&(e[n+"Color"]=E())})),e}))},w=[["viz",[["stack",[["cchart"],["xAxis"],["yAxis"],["layers"]]],["ppie",[["chart",[["pie",[["outline"],["slices"],["bbox"]]],["donut"],["gauge"]]],["legends"]]]]],["colors",[["rgb"],["hsl"]]],["utils",[["randomize"],["resetClock"],["noop"],["tick"],["forceGC"],["stackTrace"],["dbg"]]],["generators",[["address"],["city"],["animal"],["movie"],["user"]]],["set",[["clone"],["intersect"],["merge"],["reverse"],["toArray"],["toObject"],["fromCSV"],["slice"],["append"],["prepend"],["shuffle"],["pick"],["plouc"]]],["text",[["trim"],["slugify"],["snakeCase"],["camelCase"],["repeat"],["padLeft"],["padRight"],["sanitize"],["ploucify"]]],["misc",[["greetings",[["hey"],["HOWDY"],["aloha"],["AHOY"]]],["other"],["path",[["pathA"],["pathB",[["pathB1"],["pathB2"],["pathB3"],["pathB4"]]],["pathC",[["pathC1"],["pathC2"],["pathC3"],["pathC4"],["pathC5"],["pathC6"],["pathC7"],["pathC8"],["pathC9"]]]]]]]],V=function n(t,e,r){var i;void 0===t&&(t="nivo"),void 0===r&&(r=w),(e=e||r.length)>r.length&&(e=r.length);var a={name:t,color:E()};return(null==(i=r)?void 0:i.length)>0?a.children=o()(e).map((function(t,e){var o,i=r[e];return n(i[0],null,null!=(o=i[1])?o:[])})):a.loc=Math.round(2e5*Math.random()),a},K=["chardonay","carmenere","syrah"],H=["fruity","bitter","heavy","strong","sunny"],z=function(n){var t=void 0===n?{}:n,e=t.randMin,r=void 0===e?20:e,o=t.randMax,i=void 0===o?120:o;return{data:H.map((function(n){var t={taste:n};return K.forEach((function(n){t[n]=a()(r,i)})),t})),keys:K}}},86097:function(n,t,e){"use strict";e.r(t);e(27378);var r=e(48159),o=e.n(r),i=e(4014),a=e(22543),u=e(12967),c=e(85232),d=e(92956),s=e(68446),l=e(17542),f=e(25414),h=e(24246);function p(){return p=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},p.apply(this,arguments)}var v=[0,20,40,60,80,100,120],m=[0,500,1e3,1500,2e3,2500],g=p({},o()(s.Z,["width","height"]),{useMesh:!0,debugMesh:!1,curve:"monotoneX",pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,margin:{top:50,right:160,bottom:50,left:60},enableArea:!1,colors:{scheme:"spectral"},lineWidth:1,xScale:{type:"linear"},yScale:{type:"linear",stacked:!0,min:0,max:2500},pointSize:4,pointBorderWidth:1,enableGridX:!1,gridXValues:v,gridYValues:m,axisTop:{enable:!1,tickValues:v,tickSize:5,tickPadding:5,tickRotation:0,format:".2f",legend:"",legendOffset:36},axisRight:{enable:!0,tickValues:m,tickSize:5,tickPadding:5,tickRotation:0,format:".2s",legend:"",legendOffset:0},axisBottom:{enable:!0,tickValues:v,tickSize:5,tickPadding:5,tickRotation:0,format:".2f",legend:"price",legendOffset:36,legendPosition:"middle"},axisLeft:{enable:!0,tickValues:m,tickSize:5,tickPadding:5,tickRotation:0,format:".2s",legend:"volume",legendOffset:-40,legendPosition:"middle"},legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:140,translateY:0,itemsSpacing:2,itemDirection:"left-to-right",itemWidth:80,itemHeight:12,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)",onClick:function(n){alert(JSON.stringify(n,null,"    "))},effects:[{on:"hover",style:{itemBackground:"rgba(0, 0, 0, .03)",itemOpacity:1}}]}]});t.default=function(){var n=(0,f.useStaticQuery)("205167517").image.childImageSharp.gatsbyImageData;return(0,h.jsx)(a.T,{name:"Line",meta:u.Gi,icon:"line",flavors:u.Kk,currentFlavor:"canvas",properties:d.X,initialProperties:g,defaultProperties:i.t_,propertiesMapper:c.Z,generateData:l.g,getDataSize:function(n){return n.length*n[0].data.length},image:n,children:function(n,t,e,r){return(0,h.jsx)(i.Y4,p({data:t},n,{theme:e,onClick:function(n){r({type:"click",label:"[point] serie: "+n.serieId+", x: "+n.data.x+", y: "+n.data.y,color:n.color,data:n})}}))}})}},91573:function(n,t,e){var r=e(37561),o=e(74305);n.exports=function(n){return o(r(n))}},76418:function(n){var t=Math.floor,e=Math.random;n.exports=function(n,r){return n+t(e()*(r-n+1))}},16326:function(n,t,e){var r=e(74305),o=e(58185);n.exports=function(n){return r(o(n))}},42231:function(n,t,e){var r=e(66070);n.exports=function(n,t){return r(t,(function(t){return n[t]}))}},74305:function(n,t,e){var r=e(76418);n.exports=function(n,t){var e=-1,o=n.length,i=o-1;for(t=void 0===t?o:t;++e<t;){var a=r(e,i),u=n[a];n[a]=n[e],n[e]=u}return n.length=t,n}},91311:function(n,t,e){var r=e(76418),o=e(57535),i=e(94919),a=parseFloat,u=Math.min,c=Math.random;n.exports=function(n,t,e){if(e&&"boolean"!=typeof e&&o(n,t,e)&&(t=e=void 0),void 0===e&&("boolean"==typeof t?(e=t,t=void 0):"boolean"==typeof n&&(e=n,n=void 0)),void 0===n&&void 0===t?(n=0,t=1):(n=i(n),void 0===t?(t=n,n=0):t=i(t)),n>t){var d=n;n=t,t=d}if(e||n%1||t%1){var s=c();return u(n+s*(t-n+a("1e-"+((s+"").length-1))),t)}return r(n,t)}},19193:function(n,t,e){var r=e(91573),o=e(16326),i=e(19785);n.exports=function(n){return(i(n)?r:o)(n)}},58185:function(n,t,e){var r=e(42231),o=e(50098);n.exports=function(n){return null==n?[]:r(n,o(n))}}}]);
//# sourceMappingURL=component---src-pages-line-canvas-js-a2e9e8e82d8f7aad44b4.js.map