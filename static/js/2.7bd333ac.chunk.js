(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{76:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return o});var r={type:"GET_PEOPLE_REQUEST"},a=function(e){return{type:"GET_DETAIL_PEOPLE",url:e}},o=function(e){return{type:"GET_FILMS",url:e}}},77:function(e,t,n){"use strict";var r=n(2),a=n.n(r),o=n(3),l=n.n(o),i=n(8),c=n.n(i),s=n(28),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return n=r=u(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!f(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},u(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,l="string"===typeof t?Object(s.b)(t,null,null,o.location):t,i=o.createHref(l);return a.a.createElement("a",p({},r,{onClick:this.handleClick,href:i,ref:n}))},t}(a.a.Component);h.propTypes={onClick:l.a.func,target:l.a.string,replace:l.a.bool,to:l.a.oneOfType([l.a.string,l.a.object]).isRequired,innerRef:l.a.oneOfType([l.a.string,l.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:l.a.shape({history:l.a.shape({push:l.a.func.isRequired,replace:l.a.func.isRequired,createHref:l.a.func.isRequired}).isRequired}).isRequired},t.a=h},80:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n(22),o=n(23),l=n(25),i=n(24),c=n(26),s=n(2),p=n.n(s),u=n(77),f=n(27),h=n(14),m=n(76),y=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.url;this.props.people_detail(e)}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("p",null,"Name : ",this.props.list.name),p.a.createElement("p",null,"Height : ",this.props.list.height),p.a.createElement("p",null,"Mass : ",this.props.list.mass),p.a.createElement("p",null,"Skin Color : ",this.props.list.skin_color),p.a.createElement("p",null,"Eye Color : ",this.props.list.eye_color),p.a.createElement("p",null,"Birthyear : ",this.props.list.birth_year),p.a.createElement("p",null,"Gender : ",this.props.list.gender),p.a.createElement("p",null,"Films :"),p.a.createElement("ul",null,this.props.films.map(function(e){return p.a.createElement(u.a,{key:e.title,to:"/films/".concat(encodeURIComponent(e.url))},p.a.createElement("li",null,e.title))})),p.a.createElement("p",null,"Species :"),p.a.createElement("ul",null,this.props.species.map(function(e){return p.a.createElement(u.a,{key:e.name,to:"/species/".concat(encodeURIComponent(e.url))},p.a.createElement("li",null,e.name))})),p.a.createElement("p",null,"Vehicles :"),p.a.createElement("ul",null,this.props.vehicles.map(function(e){return p.a.createElement(u.a,{key:e.name,to:"/vehicles/".concat(encodeURIComponent(e.url))},p.a.createElement("li",null,e.name))})),p.a.createElement("p",null,"Starships :"),p.a.createElement("ul",null,this.props.starships.map(function(e){return p.a.createElement(u.a,{key:e.name,to:"/starships/".concat(encodeURIComponent(e.url))},p.a.createElement("li",null,e.name))})))}}]),t}(p.a.Component),E=Object(f.b)(function(e){var t=Object(r.a)({},e.detail_people.payload);return{list:Object(r.a)({},e.detail_people.list),films:Object.assign([],t.films),species:Object.assign([],t.species),vehicles:Object.assign([],t.vehicles),starships:Object.assign([],t.starships)}},function(e){return Object(h.b)({people_detail:m.c},e)})(y);t.default=E}}]);
//# sourceMappingURL=2.7bd333ac.chunk.js.map