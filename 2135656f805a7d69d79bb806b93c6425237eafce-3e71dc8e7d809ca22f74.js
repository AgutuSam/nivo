(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[8311],{22543:function(n,e,t){"use strict";t.d(e,{T:function(){return jn}});var o,i,r,a,c=t(34981),s=t.n(c),d=t(27378),l=t(95546),u=t(24632),p=t(37802),h=t(24916),g=t.n(h),f=t(40861),m=t.n(f),x=t(19785),b=t.n(x),v=t(47206),w=t.n(v),y=t(78581),C=t.n(y),k=t(3819),_=t.n(k),j=t(64131),N=t.n(j),W=function(n,e){return void 0===e&&(e=8),n.split("\n").map((function(n,t){return 0===t?n:""+" ".repeat(e)+n})).join("\n")},I=function(n){var e=JSON.stringify(n,null,4).replace(/^(\s+)"([a-z]{1}[a-z]*)"\: /gim,(function(n,e,t){return""+e+t+": "})).replace(/"/gm,"'");return e.length<120?e.replace(/\n/gm," ").replace(/\s{2,}/g," "):W(e)},L=t(67231),z=t(79892),A=t(22795),H=t(91285),S=t(91542),F=t(51302),B=t(80398),M=t(1914),T=t(24246);function Z(n,e){return e||(e=n.slice(0)),n.raw=e,n}var R,D,K=["chart","code","data"],E=function(n){var e,t=n.chartClass,o=n.data,i=n.dataKey,r=void 0===i?"data":i,a=n.code,c=n.children,s=n.diceRoll,l=n.nodeCount,u=n.nodeCountWording,h=void 0===u?"nodes":u,g=(0,p.F)(),f=(0,d.useState)("chart"),m=f[0],x=f[1],b=(0,d.useState)(null),v=b[0],w=b[1],y=K;return void 0===o&&(y=y.filter((function(n){return"data"!==n}))),"chart"===m?e=(0,T.jsx)(G,{id:"chart",role:"tabpanel",children:c}):"code"===m?e=(0,T.jsx)(V,{role:"tabpanel",children:(0,T.jsx)(B.y,{code:a,language:"jsx"})}):y.includes("data")&&"data"===m&&(e=(0,T.jsx)(V,{children:(0,T.jsx)(M.d,{children:JSON.stringify(o,null,"  ")})})),(0,T.jsxs)(O,{className:"chart-tabs--"+m,children:[(0,T.jsxs)(J,{role:"tablist",children:[y.map((function(n,e){var o=n===m,i="chart"===n?t:n,a=o||v===n?"colored":"neutral";return(0,T.jsxs)(P,{role:"tab",tabIndex:0,"aria-setsize":y.length,"aria-posinset":e+1,"aria-selected":o,className:"no-select",isCurrent:o,onClick:function(){return x(n)},onMouseEnter:function(){return w(n)},onMouseLeave:function(){return w(null)},children:[(0,T.jsx)(U,{className:"sprite-icons-"+i+"-"+g.id+"-"+a}),"data"===n?r:n]},n)})),s&&(0,T.jsx)(q,{className:"no-select",onClick:s,role:"button",tabIndex:0,children:"roll the dice"})]}),e,"chart"===m&&void 0!==l&&(0,T.jsxs)(Q,{children:[(0,T.jsx)("strong",{children:l})," ",h]})]})},O=S.default.div.withConfig({displayName:"ComponentTabs__Wrapper",componentId:"sc-1osb733-0"})(["position:fixed;top:","px;right:0;--innerWidth:calc(100% - ","px);width:calc(var(--innerWidth) * 0.55);--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.6);z-index:10;overflow:hidden;background:",";border-bottom:1px solid ",";"," ",""],(function(n){return n.theme.dimensions.headerHeight}),(function(n){return n.theme.dimensions.miniNavWidth}),(function(n){return n.theme.dimensions.headerHeight}),(function(n){return n.theme.colors.cardBackground}),(function(n){return n.theme.colors.border}),F.Z.tablet(o||(o=Z(["\n        & {\n            top: ","px;\n            right: 0;\n            width: 55%;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.6);\n        }\n    "])),(function(n){return n.theme.dimensions.headerHeight}),(function(n){return n.theme.dimensions.headerHeight})),F.Z.mobile(i||(i=Z(["\n        & {\n            position: relative;\n            top: auto;\n            right: auto;\n            width: auto;\n            height: 460px;\n            z-index: 0;\n            border-top: 1px solid ",";\n        }\n    "])),(function(n){return n.theme.colors.border}))),J=S.default.nav.withConfig({displayName:"ComponentTabs__Nav",componentId:"sc-1osb733-1"})(["height:46px;background:",";font-size:15px;color:#aaa;position:relative;display:flex;",""],(function(n){return n.theme.colors.background}),F.Z.mobile(r||(r=Z(["\n        & {\n            display: grid;\n            grid-template-columns: repeat(4, 1fr);\n        }\n    "])))),P=S.default.span.withConfig({displayName:"ComponentTabs__NavItem",componentId:"sc-1osb733-2"})(["cursor:pointer;height:46px;display:block;position:relative;padding-left:46px;padding-right:14px;padding-top:11px;background:",";&:hover{color:",";}"],(function(n){var e=n.isCurrent,t=n.theme;return e?t.colors.cardBackground:"transparent"}),(function(n){return n.theme.colors.text})),U=S.default.span.withConfig({displayName:"ComponentTabs__Icon",componentId:"sc-1osb733-3"})(["position:absolute;top:0;left:0;display:block;transform:scale(0.44);transform-origin:top left;margin:12px 0 0 12px;"]),G=S.default.div.withConfig({displayName:"ComponentTabs__Content",componentId:"sc-1osb733-4"})(["position:absolute;top:46px;bottom:0;width:100%;"]),q=S.default.span.withConfig({displayName:"ComponentTabs__DiceRollButton",componentId:"sc-1osb733-5"})(["position:absolute;top:7px;right:16px;display:block;padding:8px 10px;height:32px;line-height:1em;border-radius:2px;background:",";color:",";border:1px solid ",";cursor:pointer;font-weight:500;font-size:0.9rem;white-space:pre;&:hover{background:",";color:",";}",""],(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.background}),F.Z.mobile(a||(a=Z(["\n        & {\n            grid-column-start: 4;\n            justify-self: end;\n            right: 8px;\n            padding: 8px 8px;\n        }\n    "])))),Q=S.default.span.withConfig({displayName:"ComponentTabs__NodeCount",componentId:"sc-1osb733-6"})(["position:absolute;left:0;bottom:0;display:block;background-color:",";border-top:1px solid ",";border-right:1px solid ",";font-size:13px;padding:5px 11px;.isCapturing &{display:none;}"],(function(n){return n.theme.colors.cardAltBackground}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.border})),V=S.default.div.withConfig({displayName:"ComponentTabs__Code",componentId:"sc-1osb733-7"})(["position:absolute;top:46px;bottom:0;width:100%;overflow:auto;"]),X=t(47566),Y=function(n){var e=n.action,t=(0,d.useState)(!1),o=t[0],i=t[1],r=(0,d.useCallback)((function(){return i((function(n){return!n}))}),[i]);return(0,T.jsxs)($,{children:[(0,T.jsxs)(nn,{onClick:r,children:[(0,T.jsx)(en,{children:e.type}),(0,T.jsx)(tn,{children:e.color&&(0,T.jsx)(on,{style:{background:e.color||"transparent"}})}),(0,T.jsx)(rn,{children:e.label}),(0,T.jsx)(cn,{children:o?"-":"{ … }"})]}),o&&(0,T.jsx)(an,{children:JSON.stringify(e.data,null,"  ")})]})},$=S.default.div.withConfig({displayName:"ActionsLoggerLog__ActionContainer",componentId:"sc-x3106p-0"})(["font-size:13px;"]),nn=S.default.div.withConfig({displayName:"ActionsLoggerLog__ActionHeader",componentId:"sc-x3106p-1"})(["background:",";border-bottom:1px solid ",";display:grid;grid-template-columns:60px 8px auto 60px;align-items:center;cursor:pointer;&:hover{background:",";}"],(function(n){return n.theme.colors.cardBackground}),(function(n){return n.theme.colors.borderLight}),(function(n){return n.theme.colors.cardAltBackground})),en=S.default.span.withConfig({displayName:"ActionsLoggerLog__ActionType",componentId:"sc-x3106p-2"})(["padding:7px 12px;opacity:0.5;"]),tn=S.default.span.withConfig({displayName:"ActionsLoggerLog__Color",componentId:"sc-x3106p-3"})(["height:100%;display:flex;align-items:center;justify-content:center;"]),on=S.default.span.withConfig({displayName:"ActionsLoggerLog__ColorChip",componentId:"sc-x3106p-4"})(["width:8px;height:8px;display:block;border-radius:6px;"]),rn=S.default.span.withConfig({displayName:"ActionsLoggerLog__ActionLabel",componentId:"sc-x3106p-5"})(["font-weight:600;padding:7px 12px;"]),an=S.default.pre.withConfig({displayName:"ActionsLoggerLog__ActionData",componentId:"sc-x3106p-6"})(["font-size:12px;padding:7px 12px;line-height:18px;font-family:'SFMono-Regular',Consolas,'Liberation Mono',Menlo,Courier,monospace;border-bottom:1px solid ",";margin:0;"],(function(n){return n.theme.colors.borderLight})),cn=S.default.span.withConfig({displayName:"ActionsLoggerLog__Toggle",componentId:"sc-x3106p-7"})(["padding:7px 12px;text-align:right;"]);function sn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var dn,ln,un=function(n){var e=n.actions,t=n.isFullWidth,o=void 0!==t&&t;return(0,T.jsxs)(pn,{isFullWidth:o,children:[(0,T.jsx)(hn,{children:"Actions Logs"}),0===e.length&&(0,T.jsxs)(gn,{children:[(0,T.jsx)(mn,{size:28}),(0,T.jsx)(fn,{children:"Start interacting with the chart to log actions"})]}),e.map((function(n,e){return(0,T.jsx)(Y,{action:n},e+"."+n.type+"."+n.label)}))]})},pn=S.default.div.withConfig({displayName:"ActionsLogger__Wrapper",componentId:"sc-1c0se32-0"})(["position:fixed;right:0;bottom:0;--innerWidth:calc(100% - ","px);--partialWidth:calc(var(--innerWidth) * 0.55);"," background:",";--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.4);z-index:10;overflow-x:hidden;overflow-y:auto;"," ",""],(function(n){return n.theme.dimensions.miniNavWidth}),(function(n){var e=n.isFullWidth,t=n.theme;return e?"\n                width: var(--partialWidth);\n            ":"\n            border-left: 1px solid "+t.colors.border+";\n            width: calc(var(--partialWidth) / 2);\n        "}),(function(n){return n.theme.colors.cardAltBackground}),(function(n){return n.theme.dimensions.headerHeight}),F.Z.tablet(R||(R=sn(["\n        & {\n            right: 0;\n            bottom: 0;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.4);\n            ","\n        }\n    "])),(function(n){return n.theme.dimensions.headerHeight}),(function(n){var e=n.isFullWidth,t=n.theme;return e?"width: 55%;":"\n                    border-left: 1px solid "+t.colors.border+";\n                    width: calc(55% * 0.5);\n                "})),F.Z.mobile(D||(D=sn(["\n        & {\n            position: relative;\n            right: auto;\n            bottom: auto;\n            width: auto;\n            height: auto;\n            border-left-width: 0;\n            z-index: 0;\n        }\n    "])))),hn=S.default.div.withConfig({displayName:"ActionsLogger__Header",componentId:"sc-1c0se32-1"})(["top:0;left:0;padding:7px 12px;background:",";border-bottom:1px solid ",";font-size:12px;text-transform:uppercase;font-weight:600;"],(function(n){return n.theme.colors.cardBackground}),(function(n){return n.theme.colors.border})),gn=S.default.div.withConfig({displayName:"ActionsLogger__EmptyContainer",componentId:"sc-1c0se32-2"})(["display:flex;width:100%;height:100%;align-items:center;justify-content:center;flex-direction:column;opacity:0.4;padding:20px;"]),fn=S.default.div.withConfig({displayName:"ActionsLogger__EmptyMessage",componentId:"sc-1c0se32-3"})(["text-align:center;margin-top:16px;"]),mn=(0,S.default)(X.Gh).withConfig({displayName:"ActionsLogger__EmptyIcon",componentId:"sc-1c0se32-4"})([""]),xn=t(53806),bn=t(16872),vn=t(76955);function wn(n,e){return e||(e=n.slice(0)),n.raw=e,n}var yn=function(n){var e=n.isFullWidth,t=void 0!==e&&e,o=n.stories;return(0,T.jsxs)(Cn,{isFullWidth:t,children:[(0,T.jsx)(kn,{children:"Recipes"}),o.map((function(n,e){return(0,T.jsxs)(_n,{href:(t=n.link,vn.Z.storybookUrl+"?path=/story/"+encodeURIComponent(t.toLowerCase())),target:"_blank",rel:"noopener noreferrer",children:[n.label,(0,T.jsx)(bn.AeI,{size:20,color:"#bbbbbb"})]},e);var t}))]})},Cn=S.default.div.withConfig({displayName:"Stories__Wrapper",componentId:"sc-r1zzda-0"})(["position:fixed;bottom:0;--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.4);background:",";"," z-index:10;overflow-x:hidden;overflow-y:auto;"," ",""],(function(n){return n.theme.dimensions.headerHeight}),(function(n){return n.theme.colors.cardAltBackground}),(function(n){var e=n.isFullWidth,t=n.theme;return e?"\n                --innerWidth: calc(100% - "+t.dimensions.miniNavWidth+"px);\n                width: calc(var(--innerWidth) * 0.55);\n                right: 0;\n            ":"\n            --innerWidth: calc(100% - "+t.dimensions.miniNavWidth+"px);\n            --partialWidth: calc(var(--innerWidth) * 0.55);\n            width: calc(var(--partialWidth) / 2);\n            right: calc(var(--partialWidth) / 2);\n        "}),F.Z.tablet(dn||(dn=wn(["\n        & {\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.4);\n            left: 45%;\n            bottom: 0;\n            ","\n        }\n    "])),(function(n){return n.theme.dimensions.headerHeight}),(function(n){return n.isFullWidth?"\n                        width: calc(100% * 0.55);\n                    ":"\n                    --halfWidth: calc(100% * 0.55);\n                    --computedWidth: calc(var(--halfWidth) / 2);\n                    width: var(--computedWidth);\n                "})),F.Z.mobile(ln||(ln=wn(["\n        & {\n            position: relative;\n            bottom: auto;\n            right: auto;\n            width: auto;\n            height: auto;\n            border-left: none;\n            border-top: 1px solid ",";\n        }\n    "])),(function(n){return n.theme.colors.border}))),kn=S.default.div.withConfig({displayName:"Stories__Header",componentId:"sc-r1zzda-1"})(["top:0;left:0;padding:7px 12px;background:",";border-bottom:1px solid ",";font-size:12px;text-transform:uppercase;font-weight:600;"],(function(n){return n.theme.colors.cardBackground}),(function(n){return n.theme.colors.border})),_n=S.default.a.withConfig({displayName:"Stories__StoriesItem",componentId:"sc-r1zzda-2"})(["color:inherit;padding:9px 24px;background:",";border-bottom:1px solid ",";font-size:14px;line-height:1.6em;cursor:pointer;text-decoration:none;display:flex;align-items:center;justify-content:space-between;font-weight:500;&:hover{background:",";}"],(function(n){return n.theme.colors.cardBackground}),(function(n){return n.theme.colors.borderLight}),(function(n){return n.theme.colors.cardAltBackground})),jn=function(n){var e=n.name,t=n.meta,o=n.icon,i=n.flavors,r=n.currentFlavor,a=n.properties,c=n.initialProperties,h=n.defaultProperties,f=void 0===h?{}:h,x=n.propertiesMapper,v=n.codePropertiesMapper,y=n.hasData,k=void 0===y||y,j=n.generateData,S=void 0===j?function(){}:j,F=n.dataKey,B=n.getDataSize,M=n.getTabData,Z=void 0===M?function(n){return n}:M,R=n.image,D=n.children,K=(0,p.F)(),O=(0,d.useState)(c),J=O[0],P=O[1],U=(0,d.useMemo)((function(){return k?S():null}),[]),G=(0,d.useState)(U),q=G[0],Q=G[1],V=(0,d.useCallback)((function(){Q((function(n){return S(n)}))}),[Q]),X=function(){var n=(0,d.useState)([]),e=n[0],t=n[1],o=(0,d.useCallback)((function(n){t((function(e){return[n].concat(e)}))}),[t]);return[e,o]}(),Y=X[0],$=X[1],nn=J;void 0!==x&&(nn=x(J,q));var en=nn;void 0!==v&&(en=v(nn,q));var tn=function(n,e,t){var o=void 0===t?{}:t,i=o.dataKey,r=void 0===i?"data":i,a=o.children,c=void 0===a?[]:a,s=o.defaults,d=void 0===s?{}:s,l=o.pkg,u=void 0===l?"nivo":l,p=[],h="";null!==r&&(p.push(r+"={"+r+"}"),h="{ "+r+" /* see "+r+" tab */ }"),g()(e,(function(n,e){var t;void 0!==n&&(d&&d[e]===n||"theme"!==e&&(t=m()(n)||b()(n)?"{"+I(n)+"}":w()(n)?'"'+n+'"':_()(n)?"{"+(n?"true":"false")+"}":C()(n)?"{"+n+"}":"function"==typeof n?"{"+W(N()(n.toString()),8)+"}":null===n?"{null}":n,p.push(e+"="+t)))}));var f="// yarn add @nivo/core "+u,x=[n].concat(c.map((function(n){return n[0]}))).map((function(n){return"import { "+n+" } from '"+u+"'"})),v="";return 0===n.indexOf("Responsive")&&(v=["","// make sure parent container have a defined height when using","// responsive component, otherwise height will be 0 and","// no chart will be rendered.","// website examples showcase many properties,","// you'll often use just a few of them."].join("\n")),"// install (please make sure versions match peerDependencies)\n"+f+"\n"+x.join("\n")+"\n"+v+"\nconst My"+n+" = ("+h+") => (\n    <"+n+"\n        "+p.join("\n        ")+"\n    />\n)"}("Responsive"+e,en,{pkg:t.package,defaults:f,dataKey:k?F:void 0}),on=void 0!==t.stories&&t.stories.length>0,rn=s()(e)+" chart",an=t.package+" package "+s()(e)+" chart.",cn=(0,d.useMemo)((function(){return[t.package].concat(t.tags)}),[t]),sn=(0,d.useMemo)((function(){return i.map((function(n){return n.flavor}))}),[i]);return(0,T.jsx)(u.Z,{children:(0,T.jsxs)(L.L,{children:[(0,T.jsx)(l.p,{title:rn,description:an,image:R,keywords:cn}),(0,T.jsx)(z.y,{chartClass:e,tags:cn}),(0,T.jsx)(A.f,{flavors:i,current:r}),(0,T.jsx)(H.l,{description:t.description}),(0,T.jsx)(E,{chartClass:o,code:tn,data:k?Z(q):void 0,dataKey:F,nodeCount:k&&void 0!==B?B(q):void 0,diceRoll:k?V:void 0,children:D(nn,q,K.nivo,$)}),(0,T.jsx)(un,{actions:Y,isFullWidth:!on}),(0,T.jsx)(xn._,{settings:J,onChange:P,groups:a,flavors:sn,currentFlavor:r}),on&&(0,T.jsx)(yn,{stories:t.stories})]})})}},62079:function(n,e,t){var o=t(31137);n.exports=function(n){return"function"==typeof n?n:o}},24916:function(n,e,t){var o=t(26194),i=t(62079);n.exports=function(n,e){return n&&o(n,i(e))}},34981:function(n,e,t){var o=t(68267),i=t(76744),r=o((function(n,e,t){return n+(t?" ":"")+i(e)}));n.exports=r}}]);
//# sourceMappingURL=2135656f805a7d69d79bb806b93c6425237eafce-3e71dc8e7d809ca22f74.js.map