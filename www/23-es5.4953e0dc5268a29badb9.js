(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{n3eE:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=function(){return function(){}}(),o=t("pMnS"),r=t("oBZk"),i=t("ZZ/e"),b=t("gIcY"),s=t("OlR4"),a=t("n90K"),c=function(){function n(n,l,t){this.navController=n,this.common=l,this.storage=t,this.tel=""}return n.prototype.ngOnInit=function(){},n.prototype.goRegisterStep2=function(){var n=this;/^\d{11}$/.test(this.tel)?this.common.ajaxPost("api/sendCode",{tel:this.tel}).then((function(l){console.log(l),console.log(n.tel),l.success?(n.navController.navigateForward("/registerstep2"),n.storage.set("tel",n.tel)):alert("fall to send Verification and "+l.message)})):alert("Phone nummber format error")},n}(),d=u.rb({encapsulation:0,styles:[[".register_input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:80%;height:3.2rem;line-height:3.2rem;border:1px solid #eee;margin:2rem auto;display:block}"]],data:{}});function g(n){return u.Lb(0,[(n()(),u.tb(0,0,null,null,11,"ion-header",[],null,null,null,r.W,r.m)),u.sb(1,49152,null,0,i.D,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,9,"ion-toolbar",[],null,null,null,r.tb,r.J)),u.sb(3,49152,null,0,i.Eb,[u.h,u.k,u.z],null,null),(n()(),u.tb(4,0,null,0,2,"ion-title",[],null,null,null,r.sb,r.I)),u.sb(5,49152,null,0,i.Cb,[u.h,u.k,u.z],null,null),(n()(),u.Kb(-1,0,["Phone Register"])),(n()(),u.tb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.P,r.f)),u.sb(8,49152,null,0,i.n,[u.h,u.k,u.z],null,null),(n()(),u.tb(9,0,null,0,2,"ion-back-button",[["color","dark"],["defaultHref","tabs/tab1"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Eb(n,11).onClick(t)&&e),e}),r.M,r.c)),u.sb(10,49152,null,0,i.i,[u.h,u.k,u.z],{color:[0,"color"],defaultHref:[1,"defaultHref"]},null),u.sb(11,16384,null,0,i.j,[[2,i.kb],i.Jb],{defaultHref:[0,"defaultHref"]},null),(n()(),u.tb(12,0,null,null,11,"ion-content",[],null,null,null,r.S,r.i)),u.sb(13,49152,null,0,i.w,[u.h,u.k,u.z],null,null),(n()(),u.tb(14,0,null,0,6,"div",[["class","register_input"]],null,null,null,null,null)),(n()(),u.tb(15,0,null,null,5,"input",[["placeholder","enter your phone number (11 numbers)"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0,o=n.component;return"input"===l&&(e=!1!==u.Eb(n,16)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.Eb(n,16).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.Eb(n,16)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.Eb(n,16)._compositionEnd(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.tel=t)&&e),e}),null,null)),u.sb(16,16384,null,0,b.b,[u.D,u.k,[2,b.a]],null,null),u.Hb(1024,null,b.d,(function(n){return[n]}),[b.b]),u.sb(18,671744,null,0,b.g,[[8,null],[8,null],[8,null],[6,b.d]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,b.e,null,[b.g]),u.sb(20,16384,null,0,b.f,[[4,b.e]],null,null),(n()(),u.tb(21,0,null,0,2,"ion-button",[["class","jd_btn"],["color","danger"],["expand","block"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.goRegisterStep2()&&u),u}),r.O,r.e)),u.sb(22,49152,null,0,i.m,[u.h,u.k,u.z],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),u.Kb(-1,0,[" Next "]))],(function(n,l){var t=l.component;n(l,10,0,"dark","tabs/tab1"),n(l,11,0,"tabs/tab1"),n(l,18,0,t.tel),n(l,22,0,"danger","block")}),(function(n,l){n(l,15,0,u.Eb(l,20).ngClassUntouched,u.Eb(l,20).ngClassTouched,u.Eb(l,20).ngClassPristine,u.Eb(l,20).ngClassDirty,u.Eb(l,20).ngClassValid,u.Eb(l,20).ngClassInvalid,u.Eb(l,20).ngClassPending)}))}function p(n){return u.Lb(0,[(n()(),u.tb(0,0,null,null,1,"app-registerstep1",[],null,null,null,g,d)),u.sb(1,114688,null,0,c,[i.Jb,s.a,a.a],null,null)],(function(n,l){n(l,1,0)}),null)}var h=u.pb("app-registerstep1",c,p,{},{},[]),f=t("Ip0R"),C=t("ZYCi"),m=function(){return function(){}}();t.d(l,"Registerstep1PageModuleNgFactory",(function(){return k}));var k=u.qb(e,[],(function(n){return u.Bb([u.Cb(512,u.j,u.bb,[[8,[o.a,h]],[3,u.j],u.x]),u.Cb(4608,f.l,f.k,[u.u,[2,f.y]]),u.Cb(4608,b.i,b.i,[]),u.Cb(4608,i.c,i.c,[u.z,u.g]),u.Cb(4608,i.Ib,i.Ib,[i.c,u.j,u.q]),u.Cb(4608,i.Lb,i.Lb,[i.c,u.j,u.q]),u.Cb(1073742336,f.b,f.b,[]),u.Cb(1073742336,b.h,b.h,[]),u.Cb(1073742336,b.c,b.c,[]),u.Cb(1073742336,i.Gb,i.Gb,[]),u.Cb(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),u.Cb(1073742336,m,m,[]),u.Cb(1073742336,e,e,[]),u.Cb(1024,C.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);