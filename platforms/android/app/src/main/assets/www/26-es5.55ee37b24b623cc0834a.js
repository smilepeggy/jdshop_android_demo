(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{k0NY:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),o=function(){return function(){}}(),e=t("pMnS"),i=t("Ip0R"),s=t("oBZk"),r=t("ZZ/e"),c=t("gIcY"),a=t("mrSG"),b=t("OlR4"),h=t("n90K"),g=function(){function l(l,n,t,u){this.navController=l,this.common=n,this.storage=t,this.alertController=u,this.flag=!0,this.productlist=[],this.keywords="",this.page=1,this.subHeaderList=[],this.subHeadSelected=1,this.sort="",this.config={},this.hasInfiniteData=!0,this.historyList=[],this.config=this.common.config,this.subHeaderList=[{id:1,title:"All",fileds:"all",sort:-1},{id:2,title:"Sale Count",fileds:"salecount",sort:-1},{id:3,title:"Price",fileds:"price",sort:-1}]}return l.prototype.ngOnInit=function(){console.log(this.historyList),console.log(this.historyList.length),this.getHistory()},l.prototype.goBack=function(){this.navController.back()},l.prototype.goSearch=function(l){console.log(l),console.log(this.keywords),this.keywords=l,console.log(this.keywords),this.doSearch()},l.prototype.doSearch=function(){var l=this;this.saveHistory(),this.flag=!1,this.page=1,this.subHeadSelected=1,this.hasInfiniteData=!0;var n="api/plist?search="+this.keywords+"&page="+this.page;console.log(n),this.common.ajaxGet(n).then((function(n){console.log(n),l.productlist=n.result,console.log(l.productlist),console.log(l.page),l.page++,console.log(l.page)}))},l.prototype.getProductlsit=function(l){var n=this;if(this.sort){var t="api/plist?search="+this.keywords+"&page="+this.page+"&sort="+this.sort;console.log(t)}else t="api/plist?search="+this.keywords+"&page="+this.page,console.log(t);this.common.ajaxGet(t).then((function(t){console.log(t),n.productlist=n.productlist.concat(t.result),console.log(n.productlist),console.log(n.page),n.page++,console.log(n.page),l&&l.target.complete(),t.result.length<10&&(n.hasInfiniteData=!1)}))},l.prototype.subHeaderChange=function(l){this.subHeadSelected=l,this.sort=this.subHeaderList[l-1].fileds+"_"+this.subHeaderList[l-1].sort,console.log(this.sort),console.log(this.subHeaderList),this.page=1,this.productlist=[],this.hasInfiniteData=!0,this.subHeaderList[l-1].sort=-1*this.subHeaderList[l-1].sort,console.log(this.subHeaderList[l-1].sort),this.getProductlsit(null)},l.prototype.saveHistory=function(){var l=this.storage.get("historyList");console.log(l),console.log(this.historyList),console.log(this.historyList.length),l?(console.log(l),-1==l.indexOf(this.keywords)&&l.push(this.keywords),this.storage.set("historyList",l)):(l=[],console.log(l),l.push(this.keywords),console.log(l),this.storage.set("historyList",l))},l.prototype.getHistory=function(){var l=this.storage.get("historyList");l&&(console.log(l),console.log(this.historyList),this.historyList=l,console.log(this.historyList),console.log(this.historyList.length))},l.prototype.removeHistory=function(l){return a.b(this,void 0,void 0,(function(){var n=this;return a.e(this,(function(t){switch(t.label){case 0:return[4,this.alertController.create({backdropDismiss:!1,header:"Confirm!",message:"Message <strong>text</strong>!!!",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(l){console.log("Confirm Cancel: blah")}},{text:"Okay",handler:function(){console.log("Confirm Okay"+l),console.log(n.historyList),n.historyList.splice(l,1),console.log(n.historyList),n.storage.set("historyList",n.historyList)}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}}))}))},l}(),d=u.rb({encapsulation:0,styles:[[".search_content[_ngcontent-%COMP%]   .search_title[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;padding:.5rem}.search_content[_ngcontent-%COMP%]   .hotlist[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:.5rem}.search_content[_ngcontent-%COMP%]   .hotlist[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:.5rem;margin:.5rem;background:#eee;border-radius:.5rem;display:inline-block}.search_content[_ngcontent-%COMP%]   .histiry[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:1.4rem}.sub_toolbar[_ngcontent-%COMP%]{--min-height:3rem}.sub_toolbar[_ngcontent-%COMP%]   .subheader[_ngcontent-%COMP%]{border-top:1px solid #eee;height:3rem;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.sub_toolbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;text-align:center;font-size:1.6rem}.list_content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{white-space:normal}.active[_ngcontent-%COMP%]{color:red}"]],data:{}});function p(l){return u.Lb(0,[(l()(),u.tb(0,0,null,null,4,"div",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.subHeaderChange(l.context.$implicit.id)&&u),u}),null,null)),u.Hb(512,null,i.t,i.u,[u.s,u.t,u.k,u.D]),u.sb(2,278528,null,0,i.h,[i.t],{ngClass:[0,"ngClass"]},null),u.Gb(3,{active:0}),(l()(),u.Kb(4,null,[" "," "]))],(function(l,n){var t=l(n,3,0,n.component.subHeadSelected==n.context.$implicit.id);l(n,2,0,t)}),(function(l,n){l(n,4,0,n.context.$implicit.title)}))}function f(l){return u.Lb(0,[(l()(),u.tb(0,0,null,null,4,"ion-toolbar",[["class","sub_toolbar"]],null,null,null,s.tb,s.J)),u.sb(1,49152,null,0,r.Eb,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,2,"div",[["class","subheader"]],null,null,null,null,null)),(l()(),u.ib(16777216,null,null,1,null,p)),u.sb(4,278528,null,0,i.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.subHeaderList)}),null)}function m(l){return u.Lb(0,[(l()(),u.tb(0,0,null,null,2,"ion-item",[],null,[[null,"press"],[null,"tap"]],(function(l,n,t){var u=!0,o=l.component;return"press"===n&&(u=!1!==o.removeHistory(l.context.index)&&u),"tap"===n&&(u=!1!==o.goSearch(l.context.$implicit)&&u),u}),s.cb,s.r)),u.sb(1,49152,null,0,r.J,[u.h,u.k,u.z],null,null),(l()(),u.Kb(2,0,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit)}))}function C(l){return u.Lb(0,[(l()(),u.tb(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),u.tb(1,0,null,null,1,"h3",[["class","search_title"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["History"])),(l()(),u.tb(3,0,null,null,3,"ion-list",[],null,null,null,s.eb,s.u)),u.sb(4,49152,null,0,r.Q,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,m)),u.sb(6,278528,null,0,i.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,6,0,n.component.historyList)}),null)}function y(l){return u.Lb(0,[(l()(),u.tb(0,0,null,null,31,"div",[["class","search_content"]],null,null,null,null,null)),(l()(),u.tb(1,0,null,null,27,"div",[["class","hotlist"]],null,null,null,null,null)),(l()(),u.tb(2,0,null,null,1,"h3",[["class","search_title"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Hot list"])),(l()(),u.tb(4,0,null,null,24,"p",[],null,null,null,null,null)),(l()(),u.tb(5,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Movie A"])),(l()(),u.tb(7,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Movie B"])),(l()(),u.tb(9,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Movie C"])),(l()(),u.tb(11,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Movie D"])),(l()(),u.tb(13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Movie A"])),(l()(),u.tb(15,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Movie B"])),(l()(),u.tb(17,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Movie C"])),(l()(),u.tb(19,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Movie D"])),(l()(),u.tb(21,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Movie A"])),(l()(),u.tb(23,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Movie B"])),(l()(),u.tb(25,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Movie C"])),(l()(),u.tb(27,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Movie D"])),(l()(),u.tb(29,0,null,null,2,"div",[["class","history"]],null,null,null,null,null)),(l()(),u.ib(16777216,null,null,1,null,C)),u.sb(31,16384,null,0,i.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,31,0,n.component.historyList.length>0)}),null)}function k(l){return u.Lb(0,[(l()(),u.tb(0,0,null,null,11,"ion-item",[],null,null,null,s.cb,s.r)),u.sb(1,49152,null,0,r.J,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,s.rb,s.H)),u.sb(3,49152,null,0,r.Bb,[u.h,u.k,u.z],null,null),(l()(),u.tb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),u.tb(5,0,null,0,6,"ion-label",[],null,null,null,s.db,s.t)),u.sb(6,49152,null,0,r.P,[u.h,u.k,u.z],null,null),(l()(),u.tb(7,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.Kb(8,null,["",""])),(l()(),u.tb(9,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),u.tb(10,0,null,null,1,"span",[["class","price"]],null,null,null,null,null)),(l()(),u.Kb(11,null,["$",""]))],null,(function(l,n){l(n,4,0,n.component.config.domain+n.context.$implicit.s_pic),l(n,8,0,n.context.$implicit.title),l(n,11,0,n.context.$implicit.price)}))}function v(l){return u.Lb(0,[(l()(),u.tb(0,0,null,null,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,t){var u=!0;return"ionInfinite"===n&&(u=!1!==l.component.getProductlsit(t)&&u),u}),s.Z,s.o)),u.sb(1,49152,null,0,r.G,[u.h,u.k,u.z],{threshold:[0,"threshold"]},null),(l()(),u.tb(2,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,s.Y,s.p)),u.sb(3,49152,null,0,r.H,[u.h,u.k,u.z],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){l(n,1,0,"100px"),l(n,3,0,"bubbles","Loading more data...")}),null)}function L(l){return u.Lb(0,[(l()(),u.tb(0,0,null,null,6,"div",[["class","list_content"]],null,null,null,null,null)),(l()(),u.tb(1,0,null,null,3,"ion-list",[],null,null,null,s.eb,s.u)),u.sb(2,49152,null,0,r.Q,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,k)),u.sb(4,278528,null,0,i.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.ib(16777216,null,null,1,null,v)),u.sb(6,16384,null,0,i.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,4,0,t.productlist),l(n,6,0,t.hasInfiniteData)}),null)}function O(l){return u.Lb(0,[(l()(),u.tb(0,0,null,null,23,"ion-header",[],null,null,null,s.W,s.m)),u.sb(1,49152,null,0,r.D,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,19,"ion-toolbar",[],null,null,null,s.tb,s.J)),u.sb(3,49152,null,0,r.Eb,[u.h,u.k,u.z],null,null),(l()(),u.tb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,s.P,s.f)),u.sb(5,49152,null,0,r.n,[u.h,u.k,u.z],null,null),(l()(),u.tb(6,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.goBack()&&u),u}),s.O,s.e)),u.sb(7,49152,null,0,r.m,[u.h,u.k,u.z],null,null),(l()(),u.tb(8,0,null,0,1,"ion-icon",[["color","dark"],["name","arrow-back"],["slot","icon-only"]],null,null,null,s.X,s.n)),u.sb(9,49152,null,0,r.E,[u.h,u.k,u.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.tb(10,0,null,0,6,"ion-searchbar",[["animated",""],["placeholder","Search"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==u.Eb(l,11)._handleBlurEvent(t.target)&&o),"ionChange"===n&&(o=!1!==u.Eb(l,11)._handleInputEvent(t.target)&&o),"ngModelChange"===n&&(o=!1!==(e.keywords=t)&&o),o}),s.ib,s.y)),u.sb(11,16384,null,0,r.Pb,[u.k],null,null),u.Hb(1024,null,c.d,(function(l){return[l]}),[r.Pb]),u.sb(13,671744,null,0,c.g,[[8,null],[8,null],[8,null],[6,c.d]],{model:[0,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,c.e,null,[c.g]),u.sb(15,16384,null,0,c.f,[[4,c.e]],null,null),u.sb(16,49152,null,0,r.mb,[u.h,u.k,u.z],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),(l()(),u.tb(17,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,s.P,s.f)),u.sb(18,49152,null,0,r.n,[u.h,u.k,u.z],null,null),(l()(),u.tb(19,0,null,0,2,"ion-button",[["color","dark"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.doSearch()&&u),u}),s.O,s.e)),u.sb(20,49152,null,0,r.m,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Kb(-1,0,[" Search "])),(l()(),u.ib(16777216,null,0,1,null,f)),u.sb(23,16384,null,0,i.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(24,0,null,null,6,"ion-content",[["padding",""]],null,null,null,s.S,s.i)),u.sb(25,49152,null,0,r.w,[u.h,u.k,u.z],null,null),u.sb(26,16384,null,0,r.f,[u.k],null,null),(l()(),u.ib(16777216,null,0,1,null,y)),u.sb(28,16384,null,0,i.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,L)),u.sb(30,16384,null,0,i.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,9,0,"dark","arrow-back"),l(n,13,0,t.keywords),l(n,16,0,"","Search"),l(n,20,0,"dark"),l(n,23,0,!t.flag),l(n,28,0,t.flag),l(n,30,0,!t.flag)}),(function(l,n){l(n,10,0,u.Eb(n,15).ngClassUntouched,u.Eb(n,15).ngClassTouched,u.Eb(n,15).ngClassPristine,u.Eb(n,15).ngClassDirty,u.Eb(n,15).ngClassValid,u.Eb(n,15).ngClassInvalid,u.Eb(n,15).ngClassPending)}))}function M(l){return u.Lb(0,[(l()(),u.tb(0,0,null,null,1,"app-search",[],null,null,null,O,d)),u.sb(1,114688,null,0,g,[r.Jb,b.a,h.a,r.b],null,null)],(function(l,n){l(n,1,0)}),null)}var _=u.pb("app-search",g,M,{},{},[]),P=t("ZYCi"),x=function(){return function(){}}();t.d(n,"SearchPageModuleNgFactory",(function(){return H}));var H=u.qb(o,[],(function(l){return u.Bb([u.Cb(512,u.j,u.bb,[[8,[e.a,_]],[3,u.j],u.x]),u.Cb(4608,i.l,i.k,[u.u,[2,i.y]]),u.Cb(4608,c.i,c.i,[]),u.Cb(4608,r.c,r.c,[u.z,u.g]),u.Cb(4608,r.Ib,r.Ib,[r.c,u.j,u.q]),u.Cb(4608,r.Lb,r.Lb,[r.c,u.j,u.q]),u.Cb(1073742336,i.b,i.b,[]),u.Cb(1073742336,c.h,c.h,[]),u.Cb(1073742336,c.c,c.c,[]),u.Cb(1073742336,r.Gb,r.Gb,[]),u.Cb(1073742336,P.o,P.o,[[2,P.t],[2,P.m]]),u.Cb(1073742336,x,x,[]),u.Cb(1073742336,o,o,[]),u.Cb(1024,P.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);