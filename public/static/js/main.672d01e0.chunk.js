(this.webpackJsonpstagewood_app=this.webpackJsonpstagewood_app||[]).push([[0],{101:function(e,s,t){"use strict";t.r(s);var c=t(73),r=t.n(c),n=t(1),a=t(3),i=t(14),l=t(84),o=t(12),d=t(45),j=t(24),b={user:null},h=Object(a.createContext)({user:null,login:function(e){},logout:function(){}});function u(e,s){switch(s.type){case"login":return Object(i.a)(Object(i.a)({},e),{},{user:s.payload});case"logout":return Object(i.a)(Object(i.a)({},e),{},{user:null});default:return e}}function x(e){var s=Object(a.useReducer)(u,b),t=Object(j.a)(s,2),c=t[0],r=t[1];return Object(n.jsx)(h.Provider,Object(i.a)({value:{user:c.user,login:function(e){r({type:"login",payload:e})},logout:function(){r({type:"logout"})}}},e))}var m=function(e){var s=Object(a.useContext)(h),t=s.user,c=s.logout;return null==t&&e.history.push("/login"),Object(n.jsxs)("body",{id:"page-top",children:[Object(n.jsxs)("head",{children:[Object(n.jsx)("title",{children:"Dashboard"}),Object(n.jsx)("link",{href:"vendor/fontawesome-free/css/all.min.css",rel:"stylesheet",type:"text/css"}),Object(n.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i",rel:"stylesheet"}),Object(n.jsx)("link",{href:"css/sb-admin-2.min.css",rel:"stylesheet"})]}),Object(n.jsxs)("div",{id:"wrapper",children:[Object(n.jsxs)("ul",{class:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar",children:[Object(n.jsxs)("div",{class:"sidebar-brand d-flex align-items-center justify-content-center",children:[Object(n.jsx)("div",{class:"sidebar-brand-icon rotate-n-15",children:Object(n.jsx)("i",{class:"fas fa-laugh-wink"})}),Object(n.jsxs)("div",{class:"sidebar-brand-text mx-3",children:["Welcome ",Object(n.jsx)("sup",{})]})]}),Object(n.jsx)("hr",{class:"sidebar-divider my-0"}),Object(n.jsx)("li",{class:"nav-item active",children:Object(n.jsxs)("a",{class:"nav-link",children:[Object(n.jsx)("i",{class:"fas fa-fw fa-tachometer-alt"}),Object(n.jsx)("span",{children:"Dashboard"})]})}),Object(n.jsx)("hr",{class:"sidebar-divider"})]}),Object(n.jsx)("div",{id:"content-wrapper",class:"d-flex flex-column",children:Object(n.jsxs)("div",{id:"content",children:[Object(n.jsx)("nav",{class:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",children:Object(n.jsxs)("ul",{class:"navbar-nav ml-auto",children:[Object(n.jsx)("div",{class:"topbar-divider d-none d-sm-block"}),Object(n.jsx)("li",{class:"nav-item dropdown no-arrow",children:Object(n.jsxs)("a",{class:"nav-link dropdown-toggle",href:"/login",id:"userDropdown",onClick:c,role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(n.jsx)("span",{class:"mr-2 d-none d-lg-inline text-gray-600 small",children:"Logout"}),Object(n.jsx)("img",{class:"img-profile rounded-circle",src:"img/undraw_profile.svg"})]})})]})}),Object(n.jsxs)("div",{class:"container-fluid",children:[Object(n.jsx)("div",{class:"d-sm-flex align-items-center justify-content-between mb-4",children:Object(n.jsx)("h1",{class:"h3 mb-0 text-gray-800",children:"Dashboard"})}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-xl-3 col-md-6 mb-4",children:Object(n.jsx)("div",{class:"card border-left-primary shadow h-100 py-2",children:Object(n.jsx)("div",{class:"card-body",children:Object(n.jsx)("div",{class:"row no-gutters align-items-center",children:Object(n.jsxs)("div",{class:"col mr-2",children:[Object(n.jsx)("div",{class:"text-xs font-weight-bold text-primary text-uppercase mb-1",children:"Name"}),Object(n.jsx)("div",{class:"h5 mb-0 font-weight-bold text-gray-800",children:t?t.name:"Please login"})]})})})})}),Object(n.jsx)("div",{class:"col-xl-3 col-md-6 mb-4",children:Object(n.jsx)("div",{class:"card border-left-success shadow h-100 py-2",children:Object(n.jsx)("div",{class:"card-body",children:Object(n.jsx)("div",{class:"row no-gutters align-items-center",children:Object(n.jsxs)("div",{class:"col mr-2",children:[Object(n.jsx)("div",{class:"text-xs font-weight-bold text-success text-uppercase mb-1",children:"Username"}),Object(n.jsx)("div",{class:"h5 mb-0 font-weight-bold text-gray-800",children:t?t.username:"Please login"})]})})})})}),Object(n.jsx)("div",{class:"col-xl-3 col-md-6 mb-4",children:Object(n.jsx)("div",{class:"card border-left-info shadow h-100 py-2",children:Object(n.jsx)("div",{class:"card-body",children:Object(n.jsx)("div",{class:"row no-gutters align-items-center",children:Object(n.jsxs)("div",{class:"col mr-2",children:[Object(n.jsx)("div",{class:"text-xs font-weight-bold text-info text-uppercase mb-1",children:"Email"}),Object(n.jsxs)("div",{class:"row no-gutters align-items-center",children:[Object(n.jsx)("div",{class:"col-auto",children:Object(n.jsx)("div",{class:"h5 mb-0 mr-3 font-weight-bold text-gray-800",children:t?t.email:"Please login"})}),Object(n.jsx)("div",{class:"col",children:Object(n.jsx)("div",{class:"progress progress-sm mr-2",children:Object(n.jsx)("div",{class:"progress-bar bg-info",role:"progressbar",style:{width:"50%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})})})]})]})})})})}),Object(n.jsx)("div",{class:"col-xl-3 col-md-6 mb-4",children:Object(n.jsx)("div",{class:"card border-left-warning shadow h-100 py-2",children:Object(n.jsx)("div",{class:"card-body",children:Object(n.jsx)("div",{class:"row no-gutters align-items-center",children:Object(n.jsxs)("div",{class:"col mr-2",children:[Object(n.jsx)("div",{class:"text-xs font-weight-bold text-warning text-uppercase mb-1",children:"Internal Id.. shh.. keep it a secret"}),Object(n.jsx)("div",{class:"h5 mb-0 font-weight-bold text-gray-800",children:t?t.id:"Please login"})]})})})})}),Object(n.jsx)("div",{class:"col-xl-3 col-md-6 mb-4",children:Object(n.jsx)("div",{class:"card border-left-warning shadow h-100 py-2",children:Object(n.jsx)("div",{class:"card-body",children:Object(n.jsx)("div",{class:"row no-gutters align-items-center",children:Object(n.jsxs)("div",{class:"col mr-2",children:[Object(n.jsx)("div",{class:"text-xs font-weight-bold text-warning text-uppercase mb-1",children:"Your hashed password"}),Object(n.jsx)("div",{class:"h5 mb-0 font-weight-bold text-gray-800",children:t?t.password:"Please login"})]})})})})})]})]})]})})]}),Object(n.jsx)("footer",{class:"sticky-footer bg-white",children:Object(n.jsx)("div",{class:"container my-auto",children:Object(n.jsx)("div",{class:"copyright text-center my-auto",children:Object(n.jsx)("span",{children:"Copyright \xa9 Sid 2020"})})})}),Object(n.jsx)("a",{class:"scroll-to-top rounded",href:"#page-top",children:Object(n.jsx)("i",{class:"fas fa-angle-up"})}),Object(n.jsx)("script",{src:"vendor/jquery/jquery.js"}),Object(n.jsx)("script",{src:"vendor/bootstrap/js/bootstrap.js"}),Object(n.jsx)("script",{src:"js/sb-admin-2.js"})]})},O=(t(90),t(103)),p=t(21),g=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(a.useState)(s),c=Object(j.a)(t,2),r=c[0],n=c[1],l=function(e){r.password!==r.repassword?(alert("Password and Confirm Password do not match"),r.error_validation=!0,r.error_message="Password and Confirm Password are not same",e.preventDefault()):r.error_validation=!1,r.username||r.email||(e.preventDefault(),alert("Provide a unique Username or email at least"))},o=function(e){r.password.length<6||r.password.length>20?(r.error_validation=!0,r.error_message="Password minimum length 6 and Maximum 20"):r.error_validation=!1,n(Object(i.a)(Object(i.a)({},r),{},Object(p.a)({},e.target.name,e.target.value)))},d=function(s){if(r.password.length<6||r.password.length>20)return alert("Password length not right"),s.preventDefault(),!1;s.preventDefault(),e()};return{onChange:o,onSubmit:d,onClick:l,values:r}},v=t(36),f=t(20),w=t.n(f);function y(){var e=Object(v.a)(["\n  mutation register(\n    $name: String!\n    $username: String!\n    $email: String!\n    $password: String!\n    $profile_picture: String\n  ) {\n    register(\n        userData: {\n        name: $name\n        username: $username\n        email: $email\n        password: $password\n        profile_picture: $profile_picture\n      }\n    ) {\n      id\n      name\n      email\n      username\n      password\n      profile_picture\n    }\n  }\n"]);return y=function(){return e},e}function k(){var e=Object(v.a)(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      id\n      name\n      email\n      username\n      password\n      profile_picture\n    }\n  }\n"]);return k=function(){return e},e}var C=w()(k()),_=w()(y());var P=function(e){var s=Object(a.useContext)(h),t=Object(a.useState)({}),c=Object(j.a)(t,2),r=c[0],i=c[1],l=g((function(){m()}),{username:"",password:""}),o=l.onChange,d=l.onSubmit,b=(l.onClick,l.values),u=Object(O.useMutation)(C,{update:function(t,c){var r=c.data.login;s.login(r),e.history.push("/")},onError:function(e,s){i(e.message)},variables:b}),x=Object(j.a)(u,2),m=x[0];return x[1].loading,Object(n.jsxs)("section",{class:"bg-gradient-primary",children:[Object(n.jsxs)("head",{children:[Object(n.jsx)("title",{children:"Login"}),Object(n.jsx)("link",{href:"vendor/fontawesome-free/css/all.min.css",rel:"stylesheet",type:"text/css"}),Object(n.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i",rel:"stylesheet"}),Object(n.jsx)("link",{href:"css/sb-admin-2.min.css",rel:"stylesheet"})]}),Object(n.jsxs)("div",{class:"container",children:[Object(n.jsx)("div",{class:"row justify-content-center"}),Object(n.jsx)("div",{class:"col-xl-10 col-lg-12 col-md-9",children:Object(n.jsx)("div",{class:"card o-hidden border-0 shadow-lg my-5",children:Object(n.jsx)("div",{class:"card-body p-0",children:Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-xl-10 col-lg-12 col-md-9",children:"string"==typeof r?Object(n.jsx)("div",{class:"col-lg-6 mb-4",children:Object(n.jsx)("div",{class:"card bg-danger text-white shadow",children:Object(n.jsx)("div",{class:"card-body",children:"Something wrong with credentials"})})}):Object(n.jsx)("div",{})}),Object(n.jsx)("div",{class:"col-lg-6 d-none d-lg-block bg-login-image"}),Object(n.jsx)("div",{class:"col-lg-6",children:Object(n.jsxs)("div",{class:"p-5",children:[Object(n.jsx)("div",{class:"text-center",children:Object(n.jsx)("h1",{class:"h4 text-gray-900 mb-4",children:"Welcome Back!"})}),Object(n.jsxs)("form",{class:"user",onSubmit:d,children:[Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",{class:"form-control form-control-user",id:"username",value:b.username,label:"Username",placeholder:"Username..",name:"username",type:"text",required:!0,onChange:o})}),Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",{class:"form-control form-control-user",id:"password",placeholder:"Password",label:"Password",name:"password",type:"password",value:b.password,onChange:o})}),Object(n.jsx)("div",{class:"form-group",children:Object(n.jsxs)("div",{class:"custom-control custom-checkbox small",children:[Object(n.jsx)("input",{type:"checkbox",class:"custom-control-input",id:"customCheck"}),Object(n.jsx)("label",{class:"custom-control-label",for:"customCheck",children:"Remember Me"})]})}),Object(n.jsx)("button",{type:"submit",class:"btn btn-primary btn-user btn-block",children:"Login"})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{class:"text-center",children:Object(n.jsx)("a",{class:"small",href:"/register",children:"Create an Account!"})})]})})]})})})})]}),Object(n.jsx)("script",{src:"vendor/jquery/jquery.js"}),Object(n.jsx)("script",{src:"vendor/bootstrap/js/bootstrap.js"}),Object(n.jsx)("script",{src:"js/sb-admin-2.js"})]})};t(95),t(81);function S(){var e=Object(v.a)(["\n  {\n    files\n  }\n"]);return S=function(){return e},e}w()(S());function q(){var e=Object(v.a)(["\n  mutation UploadFile($file: Upload!) {\n    uploadFile(file: $file)\n  }\n"]);return q=function(){return e},e}w()(q());var $=function(e){var s,t,c=Object(a.useContext)(h),r=Object(a.useState)({}),i=Object(j.a)(r,2),l=i[0],o=i[1],d=g((function(){w()}),{name:"",username:"",password:"",repassword:"",email:"",profile_picture:"",error_message:"",error_validation:"",is_name_available:!1}),b=d.onChange,u=d.onSubmit,x=d.onClick,m=d.values,v=Object(O.useMutation)(_,{update:function(s,t){var r=t.data.register;c.login(r),e.history.push("/")},onError:function(e,s){o(e.message)},variables:m}),f=Object(j.a)(v,2),w=f[0];return f[1].loading,Object(n.jsxs)("section",{className:"bg-gradient-primary",children:[Object(n.jsxs)("head",{children:[Object(n.jsx)("title",{children:"Register"}),Object(n.jsx)("link",{href:"vendor/fontawesome-free/css/all.min.css",rel:"stylesheet",type:"text/css"}),Object(n.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i",rel:"stylesheet"}),Object(n.jsx)("link",{href:"css/sb-admin-2.min.css",rel:"stylesheet"})]}),Object(n.jsxs)("div",{class:"container",children:[Object(n.jsx)("div",{class:"row justify-content-center"}),Object(n.jsx)("div",{class:"card o-hidden border-0 shadow-lg my-5",children:Object(n.jsxs)("div",{class:"card-body p-0",children:[Object(n.jsxs)("div",{class:"row",children:[m.error_validation?Object(n.jsx)("div",{class:"col-lg-6 mb-4",children:Object(n.jsx)("div",{class:"card bg-danger text-white shadow",children:Object(n.jsx)("div",{class:"card-body",children:m.error_message})})}):Object(n.jsx)("div",{}),"string"==typeof l?Object(n.jsx)("div",{class:"col-lg-6 mb-4",children:Object(n.jsx)("div",{class:"card bg-danger text-white shadow",children:Object(n.jsxs)("div",{class:"card-body",children:["Are you sure if the username is unique?",l]})})}):Object(n.jsx)("div",{})]}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-lg-5 d-none d-lg-block bg-register-image"}),Object(n.jsx)("div",{class:"col-lg-7",children:Object(n.jsxs)("div",{class:"p-5",children:[Object(n.jsx)("div",{class:"text-center",children:Object(n.jsx)("h1",{class:"h4 text-gray-900 mb-4",children:"Create an Account!"})}),Object(n.jsxs)("form",{class:"user",onSubmit:u,children:[Object(n.jsxs)("div",{class:"form-group row",children:[Object(n.jsx)("div",{class:"col-sm-6 mb-3 mb-sm-0",children:Object(n.jsx)("input",(s={class:"form-control form-control-user",id:"name",placeholder:"Name",value:m.name,name:"name",required:!0,type:"text"},Object(p.a)(s,"placeholder","Enter Name"),Object(p.a)(s,"onChange",b),s))}),Object(n.jsx)("div",{class:"col-sm-6",children:Object(n.jsx)("input",(t={class:"form-control form-control-user",id:"username",placeholder:"Username"},Object(p.a)(t,"placeholder","UserName"),Object(p.a)(t,"value",m.username),Object(p.a)(t,"name","username"),Object(p.a)(t,"required",!0),Object(p.a)(t,"type","text"),Object(p.a)(t,"placeholder","Enter UserName"),Object(p.a)(t,"onChange",b),t))})]}),Object(n.jsx)("div",{class:"form-group",children:Object(n.jsx)("input",{class:"form-control form-control-user",id:"email",value:m.email,name:"email",type:"email",required:!0,onChange:b,placeholder:"Email Address"})}),Object(n.jsxs)("div",{class:"form-group row",children:[Object(n.jsx)("div",{class:"col-sm-6 mb-3 mb-sm-0",children:Object(n.jsx)("input",{class:"form-control form-control-user",value:m.password,name:"password",type:"password",onChange:b,id:"password",placeholder:"Password",required:!0})}),Object(n.jsx)("div",{class:"col-sm-6",children:Object(n.jsx)("input",{class:"form-control form-control-user",name:"repassword",type:"text",id:"repassword",placeholder:"Repeat Password",value:m.repassword,onChange:b})})]}),Object(n.jsx)("button",{type:"submit",onClick:x,class:"btn btn-primary btn-user btn-block",children:"Register Account"})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{class:"text-center",children:Object(n.jsx)("a",{class:"small",href:"/login",children:"Already have an account? Login!"})})]})})]})]})})]}),Object(n.jsx)("script",{src:"vendor/jquery/jquery.js",type:"text/javascript"}),Object(n.jsx)("script",{src:"vendor/bootstrap/js/bootstrap.js",type:"text/javascript"}),Object(n.jsx)("script",{src:"vendor/jquery-easing/jquery.js",type:"text/javascript"}),Object(n.jsx)("script",{src:"public/js/sb-admin-2.js",type:"text/javascript"})]})};function D(e){var s=e.component,t=Object(l.a)(e,["component"]),c=Object(a.useContext)(h).user;return Object(n.jsx)(o.b,Object(i.a)(Object(i.a)({},t),{},{render:function(e){return c?Object(n.jsx)(o.a,{to:"/"}):Object(n.jsx)(s,Object(i.a)({},e))}}))}var N=function(){return Object(n.jsx)(x,{children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(o.b,{exact:!0,path:"/",component:m}),Object(n.jsx)(D,{exact:!0,path:"/login",component:P}),Object(n.jsx)(D,{exact:!0,path:"/register",component:$})]})})},U=t(78),A=t(82),E=t(83),F=Object(E.a)({uri:"http://localhost:4000/graphql"}),L=new U.a({link:F,cache:new A.a}),R=Object(n.jsx)(O.ApolloProvider,{client:L,children:Object(n.jsx)(N,{})}),I=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,104)).then((function(s){var t=s.getCLS,c=s.getFID,r=s.getFCP,n=s.getLCP,a=s.getTTFB;t(e),c(e),r(e),n(e),a(e)}))};r.a.render(R,document.getElementById("root")),I()},90:function(e,s,t){},95:function(e,s,t){}},[[101,1,2]]]);
//# sourceMappingURL=main.672d01e0.chunk.js.map