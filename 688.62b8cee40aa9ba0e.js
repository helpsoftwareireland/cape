"use strict";(self.webpackChunkcape=self.webpackChunkcape||[]).push([[688],{5688:(b,s,r)=>{r.r(s),r.d(s,{HomeModule:()=>O});var l=r(6895),p=r(2477),_=r(529),i=r(8477),t=r(8256);let u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home-landing"]],decls:1,vars:0,template:function(o,n){1&o&&t._UZ(0,"router-outlet")},dependencies:[i.lC]}),e})(),g=(()=>{class e{constructor(){this.activePanel=1,this.startIndex=1}ngOnInit(){this.repeat()}isActive(o){return o===this.activePanel?"checked":""}repeat(){setTimeout(()=>{this.__FunctionSlide(),this.repeat()},12e3)}__FunctionSlide(){const o=Array.from(document.getElementsByClassName("carousel__slide"));for(const n of o)n.style.opacity="0";this.startIndex>o.length-1?(this.startIndex=1,this.activePanel=1,o[this.startIndex].style.opacity="100",this.startIndex++,this.activePanel++):(o[this.startIndex].style.opacity="100",this.startIndex++,this.activePanel++)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-carousel"]],decls:34,vars:6,consts:[[1,"carousel-container"],[1,"carousel","my-carousel"],["type","radio","id","A","name","activator",1,"carousel__activator",3,"checked"],["type","radio","id","B","name","activator",1,"carousel__activator",3,"checked"],["type","radio","id","C","name","activator",1,"carousel__activator",3,"checked"],["type","radio","id","D","name","activator",1,"carousel__activator",3,"checked"],["type","radio","id","E","name","activator",1,"carousel__activator",3,"checked"],[1,"carousel__controls"],["for","E",1,"carousel__control","carousel__control--backward"],["for","B",1,"carousel__control","carousel__control--forward"],["for","A",1,"carousel__control","carousel__control--backward"],["for","C",1,"carousel__control","carousel__control--forward"],["for","B",1,"carousel__control","carousel__control--backward"],["for","D",1,"carousel__control","carousel__control--forward"],["for","C",1,"carousel__control","carousel__control--backward"],["for","E",1,"carousel__control","carousel__control--forward"],["for","D",1,"carousel__control","carousel__control--backward"],["for","A",1,"carousel__control","carousel__control--forward"],[1,"carousel__slide"],[1,"carousel__indicators"],["for","A",1,"carousel__indicator"],["for","B",1,"carousel__indicator"],["for","C",1,"carousel__indicator"],["for","D",1,"carousel__indicator"],["for","E",1,"carousel__indicator"]],template:function(o,n){1&o&&(t._uU(0),t.TgZ(1,"div",0)(2,"ul",1),t._UZ(3,"input",2)(4,"input",3)(5,"input",4)(6,"input",5)(7,"input",6),t.TgZ(8,"div",7),t._UZ(9,"label",8)(10,"label",9),t.qZA(),t.TgZ(11,"div",7),t._UZ(12,"label",10)(13,"label",11),t.qZA(),t.TgZ(14,"div",7),t._UZ(15,"label",12)(16,"label",13),t.qZA(),t.TgZ(17,"div",7),t._UZ(18,"label",14)(19,"label",15),t.qZA(),t.TgZ(20,"div",7),t._UZ(21,"label",16)(22,"label",17),t.qZA(),t._UZ(23,"li",18)(24,"li",18)(25,"li",18)(26,"li",18)(27,"li",18),t.TgZ(28,"div",19),t._UZ(29,"label",20)(30,"label",21)(31,"label",22)(32,"label",23)(33,"label",24),t.qZA()()()),2&o&&(t.hij("Panel ",n.activePanel,"\n"),t.xp6(3),t.Q6J("checked",1===n.activePanel),t.xp6(1),t.Q6J("checked",2===n.activePanel),t.xp6(1),t.Q6J("checked",3===n.activePanel),t.xp6(1),t.Q6J("checked",4===n.activePanel),t.xp6(1),t.Q6J("checked",5===n.activePanel))},styles:[".carousel-container[_ngcontent-%COMP%]{width:100%;max-height:1000px}.carousel[_ngcontent-%COMP%]{height:1200px;width:100%;overflow:hidden;text-align:center;position:relative;padding:0;list-style:none}.carousel__controls[_ngcontent-%COMP%], .carousel__activator[_ngcontent-%COMP%]{display:none}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(1):checked ~ .carousel__track[_ngcontent-%COMP%]{transform:translate(0)}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(1):checked ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(1){transition:opacity .5s,transform .5s;top:0;left:0;right:0;opacity:1;transform:scale(1)}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(1):checked ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(1){display:block;opacity:1}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(1):checked ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(1){opacity:1}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(2):checked ~ .carousel__track[_ngcontent-%COMP%]{transform:translate(-100%)}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(2):checked ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(2){transition:opacity .5s,transform .5s;top:0;left:0;right:0;opacity:1;transform:scale(1)}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(2):checked ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(2){display:block;opacity:1}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(2):checked ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(2){opacity:1}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(3):checked ~ .carousel__track[_ngcontent-%COMP%]{transform:translate(-200%)}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(3):checked ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(3){transition:opacity .5s,transform .5s;top:0;left:0;right:0;opacity:1;transform:scale(1)}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(3):checked ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(3){display:block;opacity:1}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(3):checked ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(3){opacity:1}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(4):checked ~ .carousel__track[_ngcontent-%COMP%]{transform:translate(-300%)}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(4):checked ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(4){transition:opacity .5s,transform .5s;top:0;left:0;right:0;opacity:1;transform:scale(1)}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(4):checked ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(4){display:block;opacity:1}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(4):checked ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(4){opacity:1}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(5):checked ~ .carousel__track[_ngcontent-%COMP%]{transform:translate(-400%)}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(5):checked ~ .carousel__slide[_ngcontent-%COMP%]:nth-of-type(5){transition:opacity .5s,transform .5s;top:0;left:0;right:0;opacity:1;transform:scale(1)}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(5):checked ~ .carousel__controls[_ngcontent-%COMP%]:nth-of-type(5){display:block;opacity:1}.carousel__activator[_ngcontent-%COMP%]:nth-of-type(5):checked ~ .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(5){opacity:1}.carousel__control[_ngcontent-%COMP%]{height:30px;width:30px;margin-top:-15px;top:50%;position:absolute;display:block;cursor:pointer;border-width:5px 5px 0 0;border-style:solid;border-color:#111;opacity:1;outline:0;z-index:3}.carousel__control[_ngcontent-%COMP%]:hover{opacity:1}.carousel__control--backward[_ngcontent-%COMP%]{left:10px;transform:rotate(-135deg)}.carousel__control--forward[_ngcontent-%COMP%]{right:10px;transform:rotate(45deg)}.carousel__indicators[_ngcontent-%COMP%]{position:absolute;bottom:20px;width:100%;text-align:center}.carousel__indicator[_ngcontent-%COMP%]{height:15px;width:15px;border-radius:100%;display:inline-block;z-index:2;cursor:pointer;opacity:1;margin:0 2.5px}.carousel__indicator[_ngcontent-%COMP%]:hover{opacity:.75}.carousel__track[_ngcontent-%COMP%]{position:absolute;inset:0;padding:0;margin:0;transition:transform .5s ease 0s}.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]{display:block;top:0;left:0;right:0;opacity:1}.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(1){transform:translate(0)}.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(2){transform:translate(100%)}.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(3){transform:translate(200%)}.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(4){transform:translate(300%)}.carousel__track[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]:nth-of-type(5){transform:translate(400%)}.carousel--scale[_ngcontent-%COMP%]   .carousel__slide[_ngcontent-%COMP%]{transform:scale(0)}.carousel__slide[_ngcontent-%COMP%]{height:100%;position:absolute;overflow-y:auto;opacity:0}.carousel-container[_ngcontent-%COMP%]{display:inline-block}.carousel__slide[_ngcontent-%COMP%]{overflow:hidden}.carousel--thumb[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]{height:30px;width:30px}h1[_ngcontent-%COMP%]{font-size:50px;line-height:50px;color:#fafafa;position:absolute;top:50%;width:100%;text-align:center;margin-top:-25px}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{color:#fafafa}h3[_ngcontent-%COMP%]{font-size:50px}.carousel__indicator[_ngcontent-%COMP%]{background-color:#111}.carousel__slide[_ngcontent-%COMP%]:nth-of-type(1), .carousel--thumb[_ngcontent-%COMP%]   .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(1){background-image:url(https://helpsoftwareireland.github.io/cape/assets/imgs/hero_1.png);background-size:cover;background-position:center}.carousel__slide[_ngcontent-%COMP%]:nth-of-type(2), .carousel--thumb[_ngcontent-%COMP%]   .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(2){background-image:url(https://helpsoftwareireland.github.io/cape/assets/imgs/hero_2.jpg);background-size:cover;background-position:center}.carousel__slide[_ngcontent-%COMP%]:nth-of-type(3), .carousel--thumb[_ngcontent-%COMP%]   .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(3){background-image:url(https://helpsoftwareireland.github.io/cape/assets/imgs/hero_3.jpg);background-size:cover;background-position:center}.carousel__slide[_ngcontent-%COMP%]:nth-of-type(4), .carousel--thumb[_ngcontent-%COMP%]   .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(4){background-image:url(https://helpsoftwareireland.github.io/cape/assets/imgs/hero_4.jpg);background-size:cover;background-position:center}.carousel__slide[_ngcontent-%COMP%]:nth-of-type(5), .carousel--thumb[_ngcontent-%COMP%]   .carousel__indicators[_ngcontent-%COMP%]   .carousel__indicator[_ngcontent-%COMP%]:nth-of-type(5){background-image:url(https://helpsoftwareireland.github.io/cape/assets/imgs/hero_5.jpg);background-size:cover;background-position:center}"]}),e})(),d=(()=>{class e{constructor(){this.activePanel=0,this.startIndex=0}ngOnInit(){}isActive(o){return o===this.activePanel?"checked":""}repeat(){setTimeout(()=>{this.__FunctionSlide(),this.repeat()},5e3)}__FunctionSlide(){const o=Array.from(document.getElementsByClassName("carousel-item"));for(const n of o)n.style.opacity="0";this.startIndex>o.length-1?(this.startIndex=0,this.activePanel=0,o[this.startIndex].style.opacity="100",this.startIndex++,this.activePanel++):(o[this.startIndex].style.opacity="100",this.startIndex++,this.activePanel++)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-hero"]],decls:13,vars:0,consts:[[1,"home-hero"],[1,"welcome"],[1,"first-line"],[1,"second-line"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-carousel"),t.TgZ(2,"div",1)(3,"p",2),t._uU(4,"Welcome to "),t._UZ(5,"br"),t._uU(6," Cape Clear Island "),t._UZ(7,"br"),t._uU(8," Distillery"),t.qZA(),t.TgZ(9,"p",3),t._uU(10,"Ireland's only "),t._UZ(11,"br"),t._uU(12," offshore distillery"),t.qZA()()())},dependencies:[g],styles:[".home-hero[_ngcontent-%COMP%]{position:relative;top:-180px;height:1000px}.home-hero[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%}.home-hero[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]{position:absolute;top:300px;color:#fff;z-index:2000;background-color:#455c75;padding:30px;font-size:24pt;font-family:Dosis;line-height:2;border-radius:0 20px 12px 0}.home-hero[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%]{font-weight:700}.home-hero[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%]{font-weight:300}"]}),e})(),h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-main-story"]],decls:28,vars:0,consts:[[1,"home-story"],["src","assets/imgs/gin_pouring.png","alt",""],["src","assets/imgs/gin_lsc.png","alt",""],["src","assets/imgs/fastnet.png","alt",""]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"aside")(2,"h3"),t._uU(3,"The home of Artisan Gin in Ireland"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Cape Clear is a Gaeltacht (Irish speaking) island eight miles off the southwest coast of County Cork; it's a stunningly beautiful place. "),t.qZA(),t.TgZ(6,"p"),t._uU(7,"Though our island continues to experience a decline in its population, there is hope. "),t.qZA(),t.TgZ(8,"p"),t._uU(9,"We've produced a gin that has proven capable of winning awards at the most prestigious and competitive events in the world. "),t.qZA(),t.TgZ(10,"p"),t._uU(11,"We've been granted planning permission for a state-of-the-art whiskey distillery building. The tide is rising; please join us on our journey."),t.qZA(),t._UZ(12,"img",1),t.TgZ(13,"h3"),t._uU(14,"Our Island"),t.qZA(),t.TgZ(15,"p"),t._uU(16,"Located on the Wild Atlantic Way, Cape Clear Island is the ideal setting for a distillery, visitor centre and cask store. "),t.qZA(),t.TgZ(17,"p"),t._uU(18," This is a Gaeltacht/Irish-speaking island, famed for its natural beauty. It is recognised worldwide for storytelling, language, traditional music, and sailing. "),t.qZA(),t.TgZ(19,"p"),t._uU(20,"Also associated with the island is the iconic Fastnet lighthouse, located on a solitary rock formation four miles to the west."),t.qZA()(),t.TgZ(21,"aside"),t._UZ(22,"img",2),t.TgZ(23,"h3"),t._uU(24,"Our Gin - 3 sq.miles"),t.qZA(),t.TgZ(25,"p"),t._uU(26,"Our gin is a labour of love, as it took many tries to perfect the recipe. The result is nothing short of spectacular. The gin's juniper berries blend harmoniously with island-harvested honeysuckle, fuschia, and kelp. "),t.qZA(),t._UZ(27,"img",3),t.qZA()())},styles:[".home-story[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%;padding:0 0 0 50px;margin-top:100px;margin-bottom:50px}.home-story[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:20px}.home-story[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:36pt}.home-story[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:90%;line-height:1.8;font-size:18pt}"]}),e})(),m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-hero-mobile"]],decls:12,vars:0,consts:[[1,"home-hero"],[1,"welcome"],[1,"first-line"],[1,"second-line"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p",2),t._uU(3,"Welcome to "),t._UZ(4,"br"),t._uU(5," Cape Clear Island "),t._UZ(6,"br"),t._uU(7," Distillery"),t.qZA(),t.TgZ(8,"p",3),t._uU(9,"Ireland's only "),t._UZ(10,"br"),t._uU(11," offshore distillery"),t.qZA()()())},styles:[".home-hero[_ngcontent-%COMP%]{position:relative;top:-180px;height:1000px;background-image:url(https://helpsoftwareireland.github.io/cape/assets/imgs/hero_1_mobile.png);background-size:cover;background-repeat:no-repeat}.home-hero[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%}.home-hero[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]{position:absolute;top:300px;color:#fff;z-index:2000;padding:30px;font-size:24pt;font-family:Dosis;line-height:2;border-radius:0 20px 12px 0}.home-hero[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .first-line[_ngcontent-%COMP%]{font-weight:700}.home-hero[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%]   .second-line[_ngcontent-%COMP%]{font-weight:300}"]}),e})(),f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-main-story-mobile"]],decls:28,vars:0,consts:[[1,"home-story"],["src","assets/imgs/gin_pouring.png","alt",""],["src","assets/imgs/gin_lsc.png","alt",""],["src","assets/imgs/fastnet.png","alt",""]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"aside")(2,"h3"),t._uU(3,"The home of Artisan Gin in Ireland"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Cape Clear is a Gaeltacht (Irish speaking) island eight miles off the southwest coast of County Cork; it's a stunningly beautiful place. "),t.qZA(),t.TgZ(6,"p"),t._uU(7,"Though our island continues to experience a decline in its population, there is hope. "),t.qZA(),t.TgZ(8,"p"),t._uU(9,"We've produced a gin that has proven capable of winning awards at the most prestigious and competitive events in the world. "),t.qZA(),t.TgZ(10,"p"),t._uU(11,"We've been granted planning permission for a state-of-the-art whiskey distillery building. The tide is rising; please join us on our journey."),t.qZA(),t._UZ(12,"img",1),t.TgZ(13,"h3"),t._uU(14,"Our Island"),t.qZA(),t.TgZ(15,"p"),t._uU(16,"Located on the Wild Atlantic Way, Cape Clear Island is the ideal setting for a distillery, visitor centre and cask store. "),t.qZA(),t.TgZ(17,"p"),t._uU(18," This is a Gaeltacht/Irish-speaking island, famed for its natural beauty. It is recognised worldwide for storytelling, language, traditional music, and sailing. "),t.qZA(),t.TgZ(19,"p"),t._uU(20,"Also associated with the island is the iconic Fastnet lighthouse, located on a solitary rock formation four miles to the west."),t.qZA()(),t.TgZ(21,"aside"),t._UZ(22,"img",2),t.TgZ(23,"h3"),t._uU(24,"Our Gin - 3 sq.miles"),t.qZA(),t.TgZ(25,"p"),t._uU(26,"Our gin is a labour of love, as it took many tries to perfect the recipe. The result is nothing short of spectacular. The gin's juniper berries blend harmoniously with island-harvested honeysuckle, fuschia, and kelp. "),t.qZA(),t._UZ(27,"img",3),t.qZA()())},styles:[".home-story[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;padding:0 0 0 50px;margin-top:100px;margin-bottom:50px}.home-story[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:20px}.home-story[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px}.home-story[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:90%;line-height:1.2;font-size:14px;column-rule:#111}"]}),e})();function C(e,a){1&e&&(t.TgZ(0,"div",1),t._UZ(1,"app-hero")(2,"app-main-story"),t.qZA())}function y(e,a){1&e&&(t.TgZ(0,"div",1),t._UZ(1,"app-hero-mobile")(2,"app-main-story-mobile"),t.qZA())}const P=[{path:"",component:u,children:[{path:"",component:(()=>{class e{constructor(){this.isPhonePortrait=!1,this.isPhoneLandscape=!1}ngAfterViewInit(){}ngOnInit(){const o=sessionStorage.getItem("screen")?.toLowerCase();"handsetportrait"===(console.log(o),this.isPhonePortrait=!1,this.isPhoneLandscape=!1,o)&&(this.isPhonePortrait=!0)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:2,vars:2,consts:[["class","app-home",4,"ngIf"],[1,"app-home"]],template:function(o,n){1&o&&(t.YNc(0,C,3,0,"div",0),t.YNc(1,y,3,0,"div",0)),2&o&&(t.Q6J("ngIf",!n.isPhonePortrait&&!n.isPhoneLandscape),t.xp6(1),t.Q6J("ngIf",n.isPhonePortrait))},dependencies:[l.O5,d,h,m,f],styles:[".app-home[_ngcontent-%COMP%]{display:flex;flex-direction:column}.app-home[_ngcontent-%COMP%]   .home-story[_ngcontent-%COMP%]{display:grid;grid-template-columns:50% 50%}"]}),e})()}]}];let M=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[_.JF],imports:[_.JF,i.Bz.forChild(P),i.Bz]}),e})(),O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,M,p.m]}),e})()}}]);