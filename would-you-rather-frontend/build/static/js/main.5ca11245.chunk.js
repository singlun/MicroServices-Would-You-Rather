(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),c=a.n(s),o=(a(32),a(3)),l=a(4),i=a(6),m=a(5),u=a(7),d=a(8),h=a(13),p=a.n(h),v=a(43),E="SET_AUTHED_USER",b="LOGOUT_AUTHED_USER";function f(){return function(e){e({type:b,autheduser:null})}}var O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={toHome:!1},a.handleSubmit=function(e){e.preventDefault(),(0,a.props.dispatch)(f()),sessionStorage.clear(),a.props.onLogOutChange()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=(e.autheduser,"nav navbar-nav align-items-center");return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-inverse"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("ul",{className:a},r.a.createElement("li",{className:"nav-item"},r.a.createElement("img",{src:t.avatarURL,className:"rounded-circle",width:"70px",alt:"Your Pic"}),"\xa0"),r.a.createElement("li",{className:"nav-item"},"\xa0"),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h5",null,r.a.createElement("i",null,"Welcome"))),r.a.createElement("li",{className:"nav-item"},"\xa0\xa0"),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h5",null,r.a.createElement("small",null,t.name))),r.a.createElement("li",{className:"nav-item"},"\xa0\xa0"),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h5",null,r.a.createElement("small",null,r.a.createElement(v.a,{to:"/"},"Home")))),r.a.createElement("li",{className:"nav-item"},"\xa0\xa0"),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h5",null,r.a.createElement("small",null,r.a.createElement(v.a,{to:"/Leaderboard"},"Leaderboard"))))),r.a.createElement("ul",{className:a},r.a.createElement("li",{className:"nav-item"},r.a.createElement("h3",null,r.a.createElement("i",null,"Would You Rather?")))),r.a.createElement("ul",{className:a},r.a.createElement("li",{className:"nav-item searchbar"},r.a.createElement("form",{className:"form-inline",onSubmit:this.handleSubmit},r.a.createElement("button",{className:"btn btn-success",type:"submit"},"Log-Out"))))))}}]),t}(n.Component);var g=Object(d.connect)(function(e,t){var a=e.users,n=e.autheduser,r=t.onLogOutChange;return{user:a[n],autheduser:n,onLogOutChange:r}})(O);function N(e){var t=new Date(e),a=t.toLocaleTimeString("en-US");return a.substr(0,5)+a.slice(-2)+" | "+t.toLocaleDateString()}var j=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.question,n=t.user,s=t.switchChecked,c=t.autheduser,o=t.question_id;return e=!0===s?"top selectedtitle":"top notselectedtitle",r.a.createElement("div",{className:"col-md-4"},r.a.createElement(v.a,{to:"/questions/".concat(o)},r.a.createElement("div",{className:"col-md-12 single-item noPadding"},r.a.createElement("div",{className:e},a.author),r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"poll"},"1. ",a.optionOne.text,".","optionOne"===c.answers[a.id]?r.a.createElement("span",{className:"typicons-tick small-selected"}):""),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"poll2"},"2. ",a.optionTwo.text,".","optionTwo"===c.answers[a.id]?r.a.createElement("span",{className:"typicons-tick small-selected"}):"")),r.a.createElement("div",{className:"poll-footer"},r.a.createElement("img",{src:n.avatarURL,width:"70px"}),r.a.createElement("span",{className:"submitInfo"},"Question Created on ",N(a.timestamp))))))}}]),t}(n.Component);var w=Object(d.connect)(function(e,t){var a=e.autheduser,n=e.users,r=e.questions,s=t.id,c=r[s],o=n[a],l=Object.keys(o.answers).filter(function(e){return e===s});return{question_id:s,question:c,user:n[c.author],autheduser:n[a],switchChecked:l.length>0}})(j),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-11"},r.a.createElement("div",{className:"switch-item noPadding"},r.a.createElement("div",{className:"onoffswitch"},r.a.createElement("input",{type:"checkbox",checked:this.props.switchChecked,name:"onoffswitch",onChange:this.props.onSwitchChange,className:"onoffswitch-checkbox",id:"myonoffswitch"}),r.a.createElement("label",{className:"onoffswitch-label",htmlFor:"myonoffswitch"},r.a.createElement("span",{className:"onoffswitch-inner"}),r.a.createElement("span",{className:"onoffswitch-switch"}))))),r.a.createElement("div",{className:"col-md-1"},r.a.createElement(v.a,{to:"/add"},r.a.createElement("span",{className:"iconicstroke-document-alt-stroke"})))),r.a.createElement("div",{className:"row"},this.props.questionIds.map(function(e,t){return r.a.createElement(w,{id:e,key:t})})))}}]),t}(n.Component);var k=Object(d.connect)(function(e,t){var a=e.autheduser,n=e.users,r=e.questions,s=t.switchChecked,c=t.onSwitchChange,o=s,l=n[a],i=[];return o?i=Object.keys(l.answers):Object.keys(r).sort(function(e,t){return r[t].timestamp-r[e].timestamp}).forEach(function(e){0===Object.keys(l.answers).filter(function(t){return t===e}).length&&i.push([e])}),{questionIds:i.sort(function(e,t){return r[t].timestamp-r[e].timestamp}),switchChecked:s,onSwitchChange:c,autheduser:a}})(y),C=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"leader-img col-md-2"},r.a.createElement("img",{src:this.props.user.avatarURL,className:"rounded",alt:"Your Pic",height:"80px",width:"80px"})),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"leader-name-id col-md-6"},"Name: ",this.props.user.name),r.a.createElement("div",{className:"leader-name-id  col-md-6"},"Login Id: ",this.props.user.id)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"leader-ans-ask col-md-6"},"Number of Votes the user Asked: ",this.props.user.questions.length),r.a.createElement("div",{className:"leader-ans-ask  col-md-6"},"Number of Votes the user Answered: ",Object.keys(this.props.user.answers).length))))))))))}}]),t}(n.Component);var x=Object(d.connect)(function(e,t){return{user:e.users[t.id]}})(C),S=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.keysSorted;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12  leader-item"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"leader-top col-md-12 leaderboardtitle"},"LeaderBoard")),e.map(function(e,t){return r.a.createElement(x,{id:e.id,key:t})}))))}}]),t}(n.Component);var q=Object(d.connect)(function(e){var t,a=e.users;t=Object.keys(a).map(function(e){return{id:e,Sum:a[e].questions.length+Object.keys(a[e].answers).length}});var n=Object.keys(t).sort(function(e,a){return t[a].Sum-t[e].Sum}).map(function(e){return t[e]});return{users:a,keysSorted:n}})(S),L=a(2),T=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"error-template"},r.a.createElement("h1",null,"Oops!"),r.a.createElement("h2",null,"404 Not Found"),r.a.createElement("div",{className:"error-details"},"Sorry, an error has occured, Requested page not found!"),r.a.createElement("div",{className:"error-actions"},r.a.createElement(v.a,{to:"/",className:"btn btn-primary btn-lg"},r.a.createElement("span",{className:"glyphicon glyphicon-home"}),"Take Me Home "),r.a.createElement(v.a,{to:"www.udacity.com",className:"btn btn-default btn-lg"},r.a.createElement("span",{className:"glyphicon glyphicon-envelope"})," Contact Support "))))))}}]),t}(n.Component),I=a(26),U=a(10),D={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}},R="http://localhost:4000",_=A();function A(){var e;return fetch("".concat(R,"/users"),{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e=t}),e}function Q(e){return new Promise(function(t,a){var n=e.author,r=function(e){var t=e.optionOneText,a=e.optionTwoText,n=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:a}}}(e);setTimeout(function(){D=Object(L.a)({},D,Object(U.a)({},r.id,r)),_=Object(L.a)({},_,Object(U.a)({},n,Object(L.a)({},_[n],{questions:_[n].questions.concat([r.id])}))),t(r)},1e3)})}function P(e){return function(e){var t=e.authedUser,a=e.qid,n=e.answer;return new Promise(function(e,r){setTimeout(function(){_=Object(L.a)({},_,Object(U.a)({},t,Object(L.a)({},_[t],{answers:Object(L.a)({},_[t].answers,Object(U.a)({},a,n))}))),D=Object(L.a)({},D,Object(U.a)({},a,Object(L.a)({},D[a],Object(U.a)({},n,Object(L.a)({},D[a][n],{votes:D[a][n].votes.concat([t])}))))),e()},500)})}(e)}var H="RECEIVE_QUESTIONS",z="ADD_QUESTION",V="ADD_USER_QUESTION",F="ADD_USER_RESULT",B="ADD_USER_ANS";function M(e,t,a){return function(n){return n(Object(h.showLoading)()),(r={optionOneText:e,optionTwoText:t,author:a},Q(r)).then(function(e){return n({type:z,questions:e})}).then(function(e){return n((t=a,r=e.questions.id,{type:V,users:t,questions:r}));var t,r}).then(function(){return n(Object(h.hideLoading)())});var r}}function W(e,t,a){return function(n){return n(Object(h.showLoading)()),P({authedUser:e,qid:t,answer:a}).then(function(r){return n(function(e,t,a){return{type:F,authedUser:e,qid:t,answer:a}}(e,t,a))}).then(function(r){return n(function(e,t,a){return{type:B,authedUser:e,qid:t,answer:a}}(e,t,a))}).then(function(){return n(Object(h.hideLoading)())}).catch(function(e){return console.log("Error ",e)})}}var Y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={toHome:!1},a.handleSubmit=function(e){var t;t="optionOne"===e.target.id?"optionOne":"optionTwo";var n=a.props,r=n.dispatch,s=n.autheduser,c=n.question_id;r(W(s.id,c,t))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a,n,s=this,c=this.props,o=(c.question_id,c.displayPage),l=c.user,i=c.question,m=c.autheduser,u="col-md-12 single-item noPadding";return"undefined"!==typeof i&&(e=i.optionOne.votes.length,t=i.optionTwo.votes.length,a=(parseInt(e)/(parseInt(e)+parseInt(t))*100).toFixed(2),n=(parseInt(t)/(parseInt(e)+parseInt(t))*100).toFixed(2),"NaN"!==a&&"NaN"!==n||(a=0,n=0)),""!==this.props.id?"undefined"===typeof i?r.a.createElement(T,null):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:u},("Question"===o||"Result"===o)&&r.a.createElement("div",{className:"optionOne"===m.answers[i.id]?"top selectedtitle":"top notselectedtitle"},"Choose Question One"),"Result"===o&&r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"poll"},i.optionOne.text,"optionOne"===m.answers[i.id]?r.a.createElement("span",{className:"typicons-tick selected"}," (Over all Votes ",e," / ",a,"%)"):r.a.createElement("span",null,"(Over all Votes ",e," / ",a,"%)")),r.a.createElement("br",null)),"Question"===o&&r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"poll"},r.a.createElement("span",null,i.optionOne.text,"(Over all Votes ",e," / ",a,"%)")),r.a.createElement("br",null)),r.a.createElement("div",{className:"poll-footer"},r.a.createElement("img",{src:l.avatarURL,width:"70px"}),r.a.createElement("span",{className:"submitInfo"},"Question Created on ",N(i.timestamp))),"Question"===o&&r.a.createElement("div",{className:"poll-base"},r.a.createElement("button",{id:"optionOne",className:"btn btn-success",onClick:function(e){return s.handleSubmit(e)}},"Click to Choose")))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:u},("Question"===o||"Result"===o)&&r.a.createElement("div",{className:"optionTwo"===m.answers[i.id]?"top selectedtitle":"top notselectedtitle"},"Choose Question Two"),"Result"===o&&r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"poll"},i.optionTwo.text,"optionTwo"===m.answers[i.id]?r.a.createElement("span",{className:"typicons-tick selected"}," (Over all Votes ",t," / ",n,"%)"):r.a.createElement("span",null,"(Over all Votes ",t," / ",n,"%)")),r.a.createElement("br",null)),"Question"===o&&r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"poll"},r.a.createElement("span",null,i.optionTwo.text,"(Over all Votes ",t," / ",n,"%)")),r.a.createElement("br",null)),r.a.createElement("div",{className:"poll-footer"},r.a.createElement("img",{src:l.avatarURL,width:"70px"}),r.a.createElement("span",{className:"submitInfo"},"Question Created on ",N(i.timestamp))),"Question"===o&&r.a.createElement("div",{className:"poll-base"},r.a.createElement("button",{id:"optionTwo",className:"btn btn-success",onClick:function(e){return s.handleSubmit(e)}},"Click to Choose")))))):r.a.createElement(T,null)}}]),t}(n.Component);var J=Object(d.connect)(function(e,t){var a,n,r=e.autheduser,s=e.users,c=e.questions,o=t.match.params.question_id;a=c[o],n=s[Object(L.a)({},c[o]).author],r=s[r];var l=Object(L.a)({},r),i=Object.keys(Object(L.a)({},l.answers)).filter(function(e){return e===o}).length>0?"Result":"Question";return{question_id:o,question:a,user:n,questions:c,users:s,autheduser:r,displayPage:i}})(Y),G=a(45),$=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={text1:"",text2:"",toHome:!1},a.handleChange=function(e){var t,n=e.target.id;t=e.target.value,"q1"===n?a.setState({text1:t}):a.setState({text2:t})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.text1,r=t.text2,s=a.props;(0,s.dispatch)(M(n,r,s.autheduser)),a.setState(function(){return{text1:"",text2:"",toHome:!0}})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.text1,n=t.text2;return!0===t.toHome?r.a.createElement(G.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"col-md-12 QuestionTitle"},"Please enter the Questions you want to Poll.")),r.a.createElement("div",{className:"col-md-2"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-md-12 control-label"},"Question 1."),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("textarea",{id:"q1",placeholder:"Question 1",onChange:function(t){return e.handleChange(t)},value:a,maxLength:75,className:"form-control",required:!0})),r.a.createElement("div",{className:"col-md-12"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-md-12 control-label"},"Question 2."),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("textarea",{id:"q2",placeholder:"Question 2",onChange:function(t){return e.handleChange(t)},value:n,maxLength:75,className:"form-control",required:!0})),r.a.createElement("div",{className:"col-md-12"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-md-12"}),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("button",{className:"btn btn-danger"},"Submit")),r.a.createElement("div",{className:"col-md-12"})))),r.a.createElement("div",{className:"col-md-2"}))))}}]),t}(n.Component);var K=Object(d.connect)(function(e){return{autheduser:e.autheduser}})($),X="RECEIVE_USERS",Z="HANDLE_USERS";function ee(){return function(e){return e(Object(h.showLoading)()),Promise.all([A(),new Promise(function(e,t){setTimeout(function(){return e(Object(L.a)({},D))},1e3)})]).then(function(e){return{users:e.users,questions:e.questions}}).then(function(t){var a,n=t.users,r=t.questions;e(function(e){return{type:X,users:e}}(n)),e((a=sessionStorage.getItem("AUTHED_ID"),{type:E,autheduser:a})),e(function(e){return{type:H,questions:e}}(r)),e(Object(h.hideLoading)())})}}var te=a(44),ae=a(47),ne=a(46),re=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,Object.assign({},this.props,{onhandleAddAnsQuestion:this.onhandleAddAnsQuestion})))}}]),t}(n.Component),se=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isSwitchChecked:!1},a.onSwitchChange=function(){return a.setState({isSwitchChecked:!a.state.isSwitchChecked})},a.onLogOutChange=function(){a.props.onLogOutChange()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(ee)}},{key:"render",value:function(){var e=this;return r.a.createElement(te.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement(p.a,null),!0===this.props.loading?null:r.a.createElement("div",null,r.a.createElement(g,{onLogOutChange:this.onLogOutChange}),r.a.createElement("div",null,r.a.createElement(ae.a,null,r.a.createElement(ne.a,{exact:!0,path:"/questions/:question_id",component:re}),r.a.createElement(ne.a,{exact:!0,path:"/add",component:K}),r.a.createElement(ne.a,{exact:!0,path:"/Leaderboard",component:q}),r.a.createElement(ne.a,{exact:!0,path:"/",render:function(){return r.a.createElement(k,{switchChecked:e.state.isSwitchChecked,onSwitchChange:e.onSwitchChange})}}),r.a.createElement(ne.a,{component:T})))))))}}]),t}(n.Component);var ce=Object(d.connect)(function(e,t){return{loading:null===e.autheduser,onLogOutChange:t.onLogOutChange}})(se),oe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onhandleChange=function(e){e.preventDefault();var t=document.getElementById("userName");sessionStorage.setItem("AUTHED_ID",t.value)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Welcome"),r.a.createElement("p",null,"Would You Rather?"))),r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"form-horizontal",onSubmit:this.onhandleChange},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-md-4 control-label"},"Please Select a User to Login:"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("select",{id:"userName"},Object.keys(this.props.users).map(function(t){return e.props.users[t]}).map(function(e){return r.a.createElement("option",{value:e.id},e.name)}))),r.a.createElement("div",{className:"col-md-4"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-md-4"}),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{className:"btn btn-danger"},"Login")),r.a.createElement("div",{className:"col-md-4"})))))}}]),t}(n.Component);var le=Object(d.connect)(function(e){return{users:e.users}})(oe),ie=(a(39),a(40),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedIn:!1,key:!1},a.onLogInChange=function(){return a.setState({isLoggedIn:!0,key:!a.state.key})},a.onLogOutChange=function(){return a.setState({isLoggedIn:!1,key:!a.state.key})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return sessionStorage.setItem("pagereload","true"),null!==sessionStorage.getItem("AUTHED_ID")?r.a.createElement(ce,{key:this.state.key,onLogOutChange:this.onLogOutChange}):r.a.createElement(le,{key:this.state.key,onLogInChange:this.onLogInChange})}}]),t}(n.Component)),me=a(14);var ue=Object(me.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:case Z:return Object(L.a)({},e,t.users);case V:var a=t.questions,n=t.users,r=Object(U.a)({},n,Object(L.a)({},e[n],{questions:e[n].questions.concat([a])}));return Object(L.a)({},e,r);case B:var s=t.authedUser,c=t.qid,o=t.answer,l=Object(L.a)({},e,Object(U.a)({},s,Object(L.a)({},e[s],{answers:Object(L.a)({},e[s].answers,Object(U.a)({},c,o))})));return Object(L.a)({},l);default:return e}},questions:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case H:return Object(L.a)({},t,a.questions);case z:return e=a.questions,Object(L.a)({},t,Object(U.a)({},e.id,e));case F:var n=a.authedUser,r=a.qid,s=a.answer;return e=Object(L.a)({},t,Object(U.a)({},r,Object(L.a)({},t[r],Object(U.a)({},s,Object(L.a)({},t[r][s],{votes:t[r][s].votes.concat([n])}))))),Object(L.a)({},e);default:return t}},autheduser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.autheduser;case b:return null;default:return e}},loadingBar:h.loadingBarReducer}),de=a(25),he=Object(me.a)(de.a,function(e){return function(t){return function(a){console.group(a.type),console.log("The action: ",a);var n=t(a);return console.log("The new state: ",e.getState()),console.groupEnd(),n}}}),pe=Object(me.d)(ue,he);pe.dispatch(function(){return function(e){return Promise.all([A()]).then(function(e){return{users:Object(I.a)(e,1)[0]}}).then(function(t){var a=t.users;e(function(e){return{type:Z,users:e}}(a))})}}),c.a.render(r.a.createElement(d.Provider,{store:pe},r.a.createElement(ie,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5ca11245.chunk.js.map