(this.webpackJsonpzoominfo=this.webpackJsonpzoominfo||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),o=n.n(a),r=n(5),c=n.n(r),i=(n(15),n(2)),u=n.n(i),p=n(4),l=n(6),f=n(7),h=n(9),d=n(8),j=(n(17),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={title:"loading...",fileResponse:""},e.fetchFileResp=function(){var t=Object(p.a)(u.a.mark((function t(n){var s,a,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(s=new FormData).append("file",n),t.next=4,fetch("https://zoom-data-back.herokuapp.com/upload",{method:"POST",body:s});case 4:return a=t.sent,t.next=7,a.json();case 7:o=t.sent,e.setState({fileResponse:o});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onChangeHandler=function(t){console.log(t.target.files[0]),e.fetchFileResp(t.target.files[0])},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos/1");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({title:n.title});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"This is a sample app to test github pages"}),Object(s.jsxs)("h2",{children:["Some loaded stuff: ",this.state.title]}),Object(s.jsx)("input",{type:"file",name:"file",onChange:this.onChangeHandler}),Object(s.jsxs)("p",{children:["File Response: ",JSON.stringify(this.state.fileResponse)]})]})}}]),n}(o.a.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),o(e),r(e)}))};c.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root")),b()}},[[18,1,2]]]);
//# sourceMappingURL=main.8c88d2de.chunk.js.map