(this.webpackJsonpzoominfo=this.webpackJsonpzoominfo||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),r=n.n(o),c=n(112),s=n.n(c),i=(n(123),n(35)),l=n(17),u=n(18),d=n(20),h=n(19),j=(n(124),n(5)),p=n(44),b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Hello"}),Object(a.jsx)("h3",{children:Object(a.jsx)(p.b,{to:"/zoominfo/upload/zoom",children:"Upload your Zoom .csv"})}),Object(a.jsx)("h3",{children:Object(a.jsx)(p.b,{to:"/zoominfo/upload/engagement",children:"Upload your Engagement .csv"})})]})}}]),n}(r.a.Component),m=n(46),g=n.n(m),f=n(63),O=function(){var e=Object(f.a)(g.a.mark((function e(t){var n,a,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("postZoom api called"),console.log("in postZoom, file: ",t),(n=new FormData).append("file",t),e.next=6,fetch("https://zoom-data-back.herokuapp.com/upload",{method:"POST",body:n});case 6:return a=e.sent,e.next=9,a.json();case 9:return o=e.sent,console.log(o),e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=n(114),y=n.n(v),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).processData=function(){console.log(e.props.displayData);var t=e.props.displayData,n={Monday:t[0],Tuesday:t[1],Wednesday:t[2],Thursday:t[3],Friday:t[4]},a=[];for(var o in n)a.push({day:o,visitors:n[o]});return a},e}return Object(u.a)(n,[{key:"render",value:function(){var e={data:this.processData(),size:[500,500],type:"bar",oAccessor:"day",rAccessor:"visitors",style:{fill:"#ac58e5",stroke:"white"},title:"Average VOH Clients per Day of Week",oLabel:!0,axes:[{orient:"left",label:Object(a.jsx)("text",{textAnchor:"middle",children:Object(a.jsx)("tspan",{fill:"#ac58e5",children:"Number of Clients"})})}]};return Object(a.jsx)("div",{children:Object(a.jsx)(y.a,Object(i.a)({},e))})}}]),n}(r.a.Component),z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={displayData:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Show.js mounted"),t="",this.props.zoomFile?t=this.props.zoomFile:this.props.engagementFile&&(t=this.props.engagementFile),e.next=5,O(t);case 5:n=e.sent,console.log(typeof n),this.setState({displayData:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[" ",this.state.displayData&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:["In Show: ",JSON.stringify(this.state.displayData)]}),Object(a.jsx)(x,{displayData:this.state.displayData})]})]})}}]),n}(r.a.Component),C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).zoomOrEngagement=function(){var t=e.props.match.params.label;return console.log("label: ",t),"zoom"===t?Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Upload your Zoom .csv file here: "}),Object(a.jsx)("input",{type:"file",name:"zoom",onChange:e.props.onChangeHandlerZoom})]}):"engagement"===t?Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Upload your Engagement .csv file here: "}),Object(a.jsx)("input",{type:"file",name:"zoom",onChange:e.props.onChangeHandlerEngagement})]}):void 0},e}return Object(u.a)(n,[{key:"render",value:function(){console.log(this.props);var e=this.zoomOrEngagement();return Object(a.jsx)("h1",{children:e})}}]),n}(r.a.Component),F=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={redirect:!1,zoomFile:"",engagementFile:""},e.onChangeHandlerZoom=function(t){console.log("zoom");var n=t.target.files[0];e.setState({zoomFile:n,redirect:!0})},e.onChangeHandlerEngagement=function(t){var n=t.target.files[0];e.setState({engagementFile:n,redirect:!0})},e.renderRedirect=function(){var t="";if(e.state.zoomFile&&(t="zoom"),e.state.engagementFile&&(t="engagement"),e.state.redirect)return Object(a.jsx)(j.a,{to:"".concat("/zoominfo","/show/").concat(t)})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[this.renderRedirect(),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{path:"/zoominfo/",component:b,exact:!0}),Object(a.jsx)(j.b,{path:"/zoominfo/upload/:label",render:function(t){return Object(a.jsx)(C,Object(i.a)(Object(i.a)({},t),{},{onChangeHandlerZoom:e.onChangeHandlerZoom,onChangeHandlerEngagement:e.onChangeHandlerEngagement}))},exact:!0}),Object(a.jsx)(j.b,{path:"/zoominfo/show/:label",render:function(t){return Object(a.jsx)(z,Object(i.a)(Object(i.a)({},t),{},{zoomFile:e.state.zoomFile,engagementFile:e.state.engagementFile}))}})]})]})}}]),n}(r.a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,225)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p.a,{children:Object(a.jsx)(F,{})})}),document.getElementById("root")),w()}},[[217,1,2]]]);
//# sourceMappingURL=main.97e2f6ac.chunk.js.map