(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{JLuJ:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class i{}var o=t("pMnS"),e=t("oBZk"),r=t("ZZ/e"),s=t("iInd"),c=t("SVse"),b=t("s7LF"),a=t("OlR4");class h{constructor(l,n){this.navController=l,this.common=n,this.slideOpts={speed:400,autoplay:{delay:2e3},loop:!0},this.focuslist=[],this.config={},this.listSlides=[],this.hotlist=[],this.hotlistwidth=100,this.plist=[],this.config=this.common.config,console.log(this.config)}ngOnInit(){this.getFocusData(),this.getHotData(),this.getProductlist()}SlideTouchEnd(){this.slide.startAutoplay()}goSearch(){this.navController.navigateForward("search")}getFocusData(){this.common.ajaxGet("api/focus").then(l=>{console.log(l),this.focuslist=l.result,console.log(this.focuslist)})}getHotData(){this.common.ajaxGet("api/plist?is_hot=1").then(l=>{console.log(l),this.hotlist=l.result,console.log(this.hotlist),this.hotlistwidth=9*this.hotlist.length+"rem"})}getProductlist(){this.common.ajaxGet("api/plist?is_best=1").then(l=>{console.log(l),this.plist=l.result,console.log(this.plist)})}}var d=u.pb({encapsulation:0,styles:[['ion-slide[_ngcontent-%COMP%]{width:100%;height:150px;overflow:hidden}ion-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.h-title[_ngcontent-%COMP%]{padding:10px 5px;font-size:1.4rem;border-bottom:.05rem solid #eee}.h-title[_ngcontent-%COMP%]::before{display:inline-block;border-left:3px solid red;width:4px;height:14px;content:"";position:relative;top:2px}.hotlist[_ngcontent-%COMP%]{width:100%;height:8rem;overflow-x:auto;overflow-y:hidden;border-bottom:.05rem solid #eee;padding-top:.5rem}.hotlist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:8rem;height:8rem;float:left;margin-left:1rem}.hotlist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:7rem;height:7rem}.hotlist[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:.4rem;text-align:center}.plist[_ngcontent-%COMP%]   .plist_inner[_ngcontent-%COMP%]{padding:.5rem;border:1px solid #eee}.plist[_ngcontent-%COMP%]   .plist_title[_ngcontent-%COMP%]{height:3rem;overflow:hidden;line-height:1.6rem}']],data:{}});function g(l){return u.Jb(0,[(l()(),u.rb(0,0,null,null,2,"ion-slide",[],null,null,null,e.lb,e.B)),u.qb(1,49152,null,0,r.sb,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,2,0,n.component.config.domain+n.context.$implicit.pic)}))}function p(l){return u.Jb(0,[(l()(),u.rb(0,0,null,null,5,"li",[],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==u.Cb(l,1).onClick()&&i),"click"===n&&(i=!1!==u.Cb(l,4).onClick(t)&&i),i}),null,null)),u.qb(1,16384,null,0,s.n,[s.m,s.a,[8,null],u.B,u.k],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),u.Eb(2,{id:0}),u.Db(3,1),u.qb(4,737280,null,0,r.Nb,[c.g,r.Jb,u.k,s.m,[2,s.n]],null,null),(l()(),u.rb(5,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],(function(l,n){var t=l(n,2,0,n.context.$implicit._id),u=l(n,3,0,"/pcontent");l(n,1,0,t,u),l(n,4,0)}),(function(l,n){l(n,5,0,n.component.config.domain+n.context.$implicit.s_pic)}))}function m(l){return u.Jb(0,[(l()(),u.rb(0,0,null,null,11,"ion-col",[["size","6"]],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==u.Cb(l,2).onClick()&&i),"click"===n&&(i=!1!==u.Cb(l,5).onClick(t)&&i),i}),e.R,e.h)),u.qb(1,49152,null,0,r.v,[u.h,u.k,u.x],{size:[0,"size"]},null),u.qb(2,16384,null,0,s.n,[s.m,s.a,[8,null],u.B,u.k],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),u.Eb(3,{id:0}),u.Db(4,1),u.qb(5,737280,null,0,r.Nb,[c.g,r.Jb,u.k,s.m,[2,s.n]],null,null),(l()(),u.rb(6,0,null,0,5,"div",[["class","plist_inner"]],null,null,null,null,null)),(l()(),u.rb(7,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),u.rb(8,0,null,null,1,"div",[["class","plist_title"]],null,null,null,null,null)),(l()(),u.Ib(9,null,["",""])),(l()(),u.rb(10,0,null,null,1,"p",[["class","price"]],null,null,null,null,null)),(l()(),u.Ib(11,null,["$ ",""]))],(function(l,n){l(n,1,0,"6");var t=l(n,3,0,n.context.$implicit._id),u=l(n,4,0,"/pcontent");l(n,2,0,t,u),l(n,5,0)}),(function(l,n){l(n,7,0,n.component.config.domain+n.context.$implicit.s_pic),l(n,9,0,n.context.$implicit.title),l(n,11,0,n.context.$implicit.price)}))}function f(l){return u.Jb(0,[u.Gb(402653184,1,{slide:0}),(l()(),u.rb(1,0,null,null,16,"ion-header",[],null,null,null,e.W,e.m)),u.qb(2,49152,null,0,r.D,[u.h,u.k,u.x],null,null),(l()(),u.rb(3,0,null,0,14,"ion-toolbar",[],null,null,null,e.tb,e.J)),u.qb(4,49152,null,0,r.Eb,[u.h,u.k,u.x],null,null),(l()(),u.rb(5,0,null,0,2,"ion-buttons",[["slot","start"]],null,null,null,e.P,e.f)),u.qb(6,49152,null,0,r.n,[u.h,u.k,u.x],null,null),(l()(),u.rb(7,0,null,0,0,"img",[["src","/assets/qrcode.png"]],null,null,null,null,null)),(l()(),u.rb(8,0,null,0,3,"ion-searchbar",[["animated",""],["placeholder","Search"]],null,[[null,"tap"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==u.Cb(l,11)._handleBlurEvent(t.target)&&i),"ionChange"===n&&(i=!1!==u.Cb(l,11)._handleInputEvent(t.target)&&i),"tap"===n&&(i=!1!==o.goSearch()&&i),i}),e.ib,e.y)),u.Fb(5120,null,b.d,(function(l){return[l]}),[r.Pb]),u.qb(10,49152,null,0,r.mb,[u.h,u.k,u.x],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),u.qb(11,16384,null,0,r.Pb,[u.k],null,null),(l()(),u.rb(12,0,null,0,5,"ion-buttons",[["class","message"],["slot","end"]],null,null,null,e.P,e.f)),u.qb(13,49152,null,0,r.n,[u.h,u.k,u.x],null,null),(l()(),u.rb(14,0,null,0,0,"img",[["src","/assets/message.png"]],null,null,null,null,null)),(l()(),u.rb(15,0,null,0,2,"ion-badge",[["class","badge"],["color","danger"]],null,null,null,e.N,e.d)),u.qb(16,49152,null,0,r.l,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Ib(-1,0,["8"])),(l()(),u.rb(18,0,null,null,23,"ion-content",[],null,null,null,e.S,e.i)),u.qb(19,49152,null,0,r.w,[u.h,u.k,u.x],null,null),(l()(),u.rb(20,0,null,0,3,"ion-slides",[["pager","true"]],null,[[null,"ionSlideTouchEnd"]],(function(l,n,t){var u=!0;return"ionSlideTouchEnd"===n&&(u=!1!==l.component.SlideTouchEnd()&&u),u}),e.mb,e.C)),u.qb(21,49152,[[1,4],["slide",4]],0,r.tb,[u.h,u.k,u.x],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),u.gb(16777216,null,0,1,null,g)),u.qb(23,278528,null,0,c.i,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.rb(24,0,null,0,1,"div",[["class","h-title"]],null,null,null,null,null)),(l()(),u.Ib(-1,null,[" What you like "])),(l()(),u.rb(26,0,null,0,6,"div",[["class","hotlist"]],null,null,null,null,null)),(l()(),u.rb(27,0,null,null,5,"ul",[["class","clearfix"]],null,null,null,null,null)),u.Fb(512,null,c.v,c.w,[u.k,u.r,u.B]),u.qb(29,278528,null,0,c.m,[c.v],{ngStyle:[0,"ngStyle"]},null),u.Eb(30,{width:0}),(l()(),u.gb(16777216,null,null,1,null,p)),u.qb(32,278528,null,0,c.i,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.rb(33,0,null,0,1,"div",[["class","h-title"]],null,null,null,null,null)),(l()(),u.Ib(-1,null,[" Product List "])),(l()(),u.rb(35,0,null,0,6,"div",[["class","plist"]],null,null,null,null,null)),(l()(),u.rb(36,0,null,null,5,"ion-grid",[["fixed",""]],null,null,null,e.V,e.l)),u.qb(37,49152,null,0,r.C,[u.h,u.k,u.x],{fixed:[0,"fixed"]},null),(l()(),u.rb(38,0,null,0,3,"ion-row",[],null,null,null,e.hb,e.x)),u.qb(39,49152,null,0,r.lb,[u.h,u.k,u.x],null,null),(l()(),u.gb(16777216,null,0,1,null,m)),u.qb(41,278528,null,0,c.i,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,10,0,"","Search"),l(n,16,0,"danger"),l(n,21,0,t.slideOpts,"true"),l(n,23,0,t.focuslist);var u=l(n,30,0,t.hotlistwidth);l(n,29,0,u),l(n,32,0,t.hotlist),l(n,37,0,""),l(n,41,0,t.plist)}),null)}function k(l){return u.Jb(0,[(l()(),u.rb(0,0,null,null,1,"app-tab1",[],null,null,null,f,d)),u.qb(1,114688,null,0,h,[r.Jb,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=u.nb("app-tab1",h,k,{},{},[]);t.d(n,"Tab1PageModuleNgFactory",(function(){return C}));var C=u.ob(i,[],(function(l){return u.zb([u.Ab(512,u.j,u.Z,[[8,[o.a,x]],[3,u.j],u.v]),u.Ab(4608,c.l,c.k,[u.s,[2,c.y]]),u.Ab(4608,r.c,r.c,[u.x,u.g]),u.Ab(4608,r.Ib,r.Ib,[r.c,u.j,u.p]),u.Ab(4608,r.Lb,r.Lb,[r.c,u.j,u.p]),u.Ab(4608,b.i,b.i,[]),u.Ab(1073742336,c.b,c.b,[]),u.Ab(1073742336,r.Gb,r.Gb,[]),u.Ab(1073742336,b.h,b.h,[]),u.Ab(1073742336,b.c,b.c,[]),u.Ab(1073742336,s.o,s.o,[[2,s.t],[2,s.m]]),u.Ab(1073742336,i,i,[]),u.Ab(1024,s.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);