(this.webpackJsonpzoominfo=this.webpackJsonpzoominfo||[]).push([[0],{29:function(e,n,t){},30:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t(0),r=t.n(a),c=t(22),i=t.n(c),s=(t(29),t(15)),l=t(7),u=t(8),h=t(10),j=t(9),p=(t(30),t(2)),g=t(12),d=function(e){Object(h.a)(t,e);var n=Object(j.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Hello"}),Object(o.jsx)("h3",{children:Object(o.jsx)(g.b,{to:"/upload/zoom",children:"Upload your Zoom .csv"})}),Object(o.jsx)("h3",{children:Object(o.jsx)(g.b,{to:"/upload/engagement",children:"Upload your Engagement .csv"})})]})}}]),t}(r.a.Component),b=t(13),m=t.n(b),O=t(16),f=function(){var e=Object(O.a)(m.a.mark((function e(n){var t,o,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in postZoom, file: ",n),(t=new FormData).append("file",n),e.next=5,fetch("https://zoom-data-back.herokuapp.com/upload",{method:"POST",body:t});case 5:return o=e.sent,e.next=8,o.json();case 8:return a=e.sent,console.log(a),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(e){Object(h.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={displayData:null},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(m.a.mark((function e(){var n,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",this.props.zoomFile?n=this.props.zoomFile:this.props.engagementFile&&(n=this.props.engagementFile),e.next=4,f(n);case 4:t=e.sent,this.setState({displayData:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("in Show: ",this.props),Object(o.jsxs)("h1",{children:["In Show: ",JSON.stringify(this.state.displayData)]})}}]),t}(r.a.Component),x=function(e){Object(h.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).zoomOrEngagement=function(){var n=e.props.match.params.label;return console.log("label: ",n),"zoom"===n?Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Upload your Zoom .csv file here: "}),Object(o.jsx)("input",{type:"file",name:"zoom",onChange:e.props.onChangeHandlerZoom})]}):"engagement"===n?Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Upload your Engagement .csv file here: "}),Object(o.jsx)("input",{type:"file",name:"zoom",onChange:e.props.onChangeHandlerEngagement})]}):void 0},e}return Object(u.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.zoomOrEngagement();return Object(o.jsx)("h1",{children:e})}}]),t}(r.a.Component),y=function(e){Object(h.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={redirect:!1,zoomFile:"",engagementFile:""},e.onChangeHandlerZoom=function(n){console.log("zoom");var t=n.target.files[0];console.log(t),e.setState({zoomFile:t,redirect:!0})},e.onChangeHandlerEngagement=function(n){console.log("engagement");var t=n.target.files[0];console.log(t),e.setState({engagementFile:t,redirect:!0})},e.renderRedirect=function(){if(e.state.zoomFile&&"zoom",e.state.engagementFile&&"engagement",e.state.redirect)return Object(o.jsx)(p.a,{to:"/show/{label}"})},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(o.jsxs)("div",{children:[this.renderRedirect(),Object(o.jsxs)(p.d,{children:[Object(o.jsx)(p.b,{path:"/",component:d,exact:!0}),Object(o.jsx)(p.b,{path:"/upload/:label",render:function(n){return Object(o.jsx)(x,Object(s.a)(Object(s.a)({},n),{},{onChangeHandlerZoom:e.onChangeHandlerZoom,onChangeHandlerEngagement:e.onChangeHandlerEngagement}))},exact:!0}),Object(o.jsx)(p.b,{path:"/show/:label",render:function(n){return Object(o.jsx)(v,Object(s.a)(Object(s.a)({},n),{},{zoomFile:e.state.zoomFile,engagementFile:e.state.engagementFile}))}})]})]})}}]),t}(r.a.Component),F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),o(e),a(e),r(e),c(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(g.a,{children:Object(o.jsx)(y,{})})}),document.getElementById("root")),F()}},[[37,1,2]]]);
//# sourceMappingURL=main.ff18f99b.chunk.js.map