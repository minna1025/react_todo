(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(8),r=a.n(i),l=(a(14),a(6)),s=a(1),c=a(2),d=a(4),h=a(3),u=a(5),m=function(t){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("header",null,this.props.name)}}]),e}(n.Component),p=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={doSomething:""},a.handleChange=function(t){a.setState({doSomething:t.target.value})},a.handleSubmit=function(t){t.preventDefault();var e=document.getElementById("textBox");if(""===e.value||void 0===e.value)return alert("\ubb50\ub77c\ub3c4 \uc880 \uc4f0\uc2dc\uc9c0?!"),!1;a.props.onCreate(a.state),a.setState({doSomething:""})},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{id:"textBox",type:"text",placeholder:"\ubb50\ud560\uaec0\ub370?!?!?",onChange:this.handleChange,value:this.state.doSomething}),o.a.createElement("button",{id:"btn_add",type:"submit"},"ADD"))}}]),e}(n.Component),f=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(d.a)(this,Object(h.a)(e).call(this,t))).handleRemove=function(){var t=a.props,e=t.todo;(0,t.onRemove)(e.id)},a.handleComplete=function(){a.props.todo.state=!a.props.todo.state,(0,a.props.onComplete)(a.props.todo.id,a.props.todo)},a.handleChange=function(t){a.setState({doSomething:t.target.value})},a.showEdit=function(){a.setState({edit:!a.state.edit})},a.handleEdit=function(t){t.preventDefault();var e=a.props.onEdit;a.setState({doSomething:"",edit:!a.state.edit}),e(a.props.todo.id,a.state)},a.state={edit:!1,doSomething:"",state:!1},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.todo.doSomething;return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:this.props.todo.state&&!this.state.edit?"todo_item complete":"todo_item",onClick:this.handleComplete},!1!==this.state.edit?o.a.createElement("form",{onSubmit:this.handleEdit},o.a.createElement("input",{type:"text",placeholder:"\ubb50\ub77c\uace0\ubc14\uafc0\uaf30\ub370?!?!?",onChange:this.handleChange,value:this.state.doSomething}),o.a.createElement("button",{id:"btn_add",type:"submit"},"EDIT")):t),!this.props.todo.state&&o.a.createElement("div",{onClick:this.showEdit,className:"edit"}),o.a.createElement("div",{onClick:this.handleRemove,className:"trash"}))}}]),e}(n.Component);f.defaultProps={todo:{name:"\ubb50\ud560\uac74\ub385?",id:0,state:!1}};var v=f,w=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(d.a)(this,Object(h.a)(e).call(this,t))).filterShow=function(t){a.setState({showWhat:t}),a.props.onFilter(t)},a.state={showList:a.props.data},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props,e=t.onRemove,a=t.onComplete,n=t.onEdit,i=this.props.listItem.map(function(t){return o.a.createElement(v,{key:t.id,todo:t,onRemove:e,onComplete:a,onEdit:n})});return o.a.createElement("div",{className:"todoList_wrap"},i)}}]),e}(n.Component);w.defaultProps={data:[],onComplete:function(){return console.warn("onComplete not definde")}};var b=w,E=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).showAll=function(){(0,a.props.onFilter)("all")},a.filterdoit=function(){(0,a.props.onFilter)("doit")},a.filterComplete=function(){(0,a.props.onFilter)("complete")},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.active;return o.a.createElement("ul",{className:"filterList",id:"filterList"},"all"===t?o.a.createElement("li",{onClick:this.showAll,className:"active"},"\ub2e4\ubcf4\uc2dc\uc624"):o.a.createElement("li",{onClick:this.showAll},"\ub2e4\ubcf4\uc2dc\uc624"),"doit"===t?o.a.createElement("li",{onClick:this.filterdoit,className:"active"},"\ud574\ub77c!!!!!"):o.a.createElement("li",{onClick:this.filterdoit},"\ud574\ub77c!!!!!"),"complete"===t?o.a.createElement("li",{onClick:this.filterComplete,className:"active"},"\ub2e4\ud568?!?!!"):o.a.createElement("li",{onClick:this.filterComplete},"\ub2e4\ud568?!?!!"))}}]),e}(n.Component);E.defaultProps={filter:{showList:[],showWhat:"all"}};var C=E,O=(a(16),function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).id=3,a.state={showWhat:"all",whatUdo:[{id:0,doSomething:"test",state:!1},{id:1,doSomething:"complete test",state:!0},{id:2,doSomething:"list test",state:!1}]},a.handleCreate=function(t){var e=a.state.whatUdo;a.setState({whatUdo:e.concat(Object.assign({},t,{id:a.id++}))})},a.handleRemove=function(t){var e=a.state.whatUdo;a.setState({whatUdo:e.filter(function(e){return e.id!==t})})},a.handleComplete=function(t,e){var n=a.state.whatUdo;a.setState({whatUdo:n.map(function(a){return a.id===t?Object(l.a)({},a,e):a})})},a.handleEdit=function(t,e){var n=a.state.whatUdo;a.setState({whatUdo:n.map(function(a){return a.id===t?Object(l.a)({},a,e):a})})},a.filterShow=function(t){a.setState({showWhat:t})},a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.state.whatUdo,e=this.state.showWhat,a=this.state.whatUdo.filter(function(t){return!0===t.state}),n=this.state.whatUdo.filter(function(t){return!1===t.state});return o.a.createElement("div",{className:"App"},o.a.createElement(m,{name:"TO DO"}),o.a.createElement(p,{onCreate:this.handleCreate}),o.a.createElement(b,{data:this.state.whatUdo,onRemove:this.handleRemove,onComplete:this.handleComplete,onEdit:this.handleEdit,listItem:"all"===e?t:"doit"===e?n:"complete"===e?a:void 0}),o.a.createElement(C,{onFilter:this.filterShow,active:this.state.showWhat}))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){t.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.56e538cc.chunk.js.map