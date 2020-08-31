function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,o){return n&&_defineProperties(e.prototype,n),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{wWZX:function(e,n,o){"use strict";o.r(n),o.d(n,"PerfilPageModule",(function(){return O}));var t,i=o("ofXK"),a=o("3Pt+"),r=o("TEn/"),c=o("tyNb"),u=o("mrSG"),s=o("fXoL"),l=((t=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"uniqueId",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)}))}}]),e}()).\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t),d=o("Z2Br"),b=o("+MCx"),f=o("6S8U");function h(e,n){if(1&e&&(s.Ob(0,"ion-select-option",13),s.pc(1),s.Nb()),2&e){var o=n.$implicit;s.ec("value",o),s.Ab(1),s.qc(o)}}function p(e,n){if(1&e){var o=s.Pb();s.Ob(0,"ion-button",14),s.Wb("click",(function(){return s.kc(o),s.Yb().save()})),s.pc(1,"Guardar datos"),s.Nb()}}function g(e,n){if(1&e){var o=s.Pb();s.Ob(0,"ion-button",14),s.Wb("click",(function(){return s.kc(o),s.Yb().updateData()})),s.pc(1,"Actualizar datos"),s.Nb()}}function m(e,n){if(1&e){var o=s.Pb();s.Ob(0,"app-direcciones",15),s.Wb("showModal",(function(e){return s.kc(o),s.Yb().closeModal(e)}))("direccionSelected",(function(e){return s.kc(o),s.Yb().selecAdress(e)})),s.Nb()}if(2&e){var t=s.Yb();s.ec("showAdd",!0)("usuario",t.usuario)}}var _,v,M,x=[{path:"",component:(_=function(){function e(n,o,t){_classCallCheck(this,e),this.firebaseSvc=n,this.uniqueid=o,this.toastController=t,this.cities=[],this.usuario={nombre:"",ciudad:"",cedula:"",contacto:"",direccion:"",direcciones:[],email:""},this.showModal=!1,this.pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"}return _createClass(e,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){this.getCities()}},{key:"getCities",value:function(){var e=this;this.firebaseSvc.obtener("ciudades").subscribe((function(n){e.cities=n[0].ciudades,JSON.parse(localStorage.getItem("APP_USER"))&&(e.usuario=JSON.parse(localStorage.getItem("APP_USER")))}))}},{key:"selecAdress",value:function(e){this.usuario.direccion=e}},{key:"closeModal",value:function(e){this.showModal=e}},{key:"presentToast",value:function(e,n){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,this.toastController.create({message:e,duration:2e3,color:n});case 2:o.sent.present();case 3:case"end":return o.stop()}}),o,this)})))}},{key:"validation",value:function(){return""!=this.usuario.nombre&&""!=this.usuario.email&&""!=this.usuario.cedula&&""!=this.usuario.contacto&&""!=this.usuario.ciudad&&""!=this.usuario.direccion}},{key:"save",value:function(){var e=this;console.log(this.usuario),this.validation()?(this.usuario.idunico=this.uniqueid.uniqueId(),this.usuario.estado=1,this.firebaseSvc.guardarDatos("clientes",this.usuario).then((function(n){e.usuario.id=n.toString(),localStorage.setItem("APP_USER",JSON.stringify(e.usuario)),e.presentToast("Datos almacenados correctamente")}))):this.presentToast("\xa1Por favor verifique los campos!")}},{key:"updateData",value:function(){var e=this;this.validation()?this.firebaseSvc.actualizarDatos("clientes",this.usuario,this.usuario.id).then((function(n){localStorage.setItem("APP_USER",JSON.stringify(e.usuario)),e.presentToast("Datos actualizados correctamente")})):this.presentToast("\xa1Por favor verifique los campos!")}}]),e}(),_.\u0275fac=function(e){return new(e||_)(s.Lb(d.a),s.Lb(l),s.Lb(r.u))},_.\u0275cmp=s.Fb({type:_,selectors:[["app-perfil"]],decls:17,vars:11,consts:[[1,"container"],[1,"container__title"],[1,"container__form"],["placeholder","Nombre",1,"input",3,"ngModel","ngModelChange"],["placeholder","Email",1,"input",3,"ngModel","ngModelChange"],["placeholder","Cedula",1,"input",3,"ngModel","ngModelChange"],["placeholder","Telefono",1,"input",3,"ngModel","ngModelChange"],["value","brown","okText","Seleccionar","cancelText","Cerrar","placeholder","Seleccionar Ciudad",1,"input",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Direccion",1,"input","direccion",3,"readonly","ngModel","ngModelChange","click"],[1,"container__button"],["color","light","shape","round","expand","block",3,"click",4,"ngIf"],["class","modal animate__animated animate__fadeIn animate__faster",3,"showAdd","usuario","showModal","direccionSelected",4,"ngIf"],[3,"value"],["color","light","shape","round","expand","block",3,"click"],[1,"modal","animate__animated","animate__fadeIn","animate__faster",3,"showAdd","usuario","showModal","direccionSelected"]],template:function(e,n){1&e&&(s.Ob(0,"ion-content"),s.Ob(1,"div",0),s.Ob(2,"div",1),s.pc(3," Datos personales "),s.Nb(),s.Ob(4,"div",2),s.Ob(5,"ion-input",3),s.Wb("ngModelChange",(function(e){return n.usuario.nombre=e})),s.Nb(),s.Ob(6,"ion-input",4),s.Wb("ngModelChange",(function(e){return n.usuario.email=e})),s.Nb(),s.Ob(7,"ion-input",5),s.Wb("ngModelChange",(function(e){return n.usuario.cedula=e})),s.Nb(),s.Ob(8,"ion-input",6),s.Wb("ngModelChange",(function(e){return n.usuario.contacto=e})),s.Nb(),s.Ob(9,"ion-select",7),s.Wb("ngModelChange",(function(e){return n.usuario.ciudad=e})),s.oc(10,h,2,2,"ion-select-option",8),s.Nb(),s.Ob(11,"ion-input",9),s.Wb("ngModelChange",(function(e){return n.usuario.direccion=e}))("click",(function(){return n.showModal=!n.showModal})),s.Nb(),s.Nb(),s.Ob(12,"div",10),s.oc(13,p,2,0,"ion-button",11),s.oc(14,g,2,0,"ion-button",11),s.Nb(),s.Nb(),s.Nb(),s.oc(15,m,1,2,"app-direcciones",12),s.Mb(16,"app-tags")),2&e&&(s.Ab(5),s.ec("ngModel",n.usuario.nombre),s.Ab(1),s.ec("ngModel",n.usuario.email),s.Ab(1),s.ec("ngModel",n.usuario.cedula),s.Ab(1),s.ec("ngModel",n.usuario.contacto),s.Ab(1),s.ec("ngModel",n.usuario.ciudad),s.Ab(1),s.ec("ngForOf",n.cities),s.Ab(1),s.ec("readonly",!0)("ngModel",n.usuario.direccion),s.Ab(2),s.ec("ngIf",!n.usuario.idunico),s.Ab(1),s.ec("ngIf",n.usuario.idunico),s.Ab(1),s.ec("ngIf",n.showModal))},directives:[r.c,r.e,r.t,a.d,a.e,r.j,r.s,i.k,i.l,b.a,r.k,r.b,f.a],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;min-height:100vh;width:100%;padding:8%}.container__title[_ngcontent-%COMP%]{font-weight:700;border-bottom:2px solid var(--ion-color-medium);color:var(--ion-color-medium);padding:2% 0}.container__form[_ngcontent-%COMP%]{width:100%;padding:4%;margin-top:5%}.container__form[_ngcontent-%COMP%] > ion-input[_ngcontent-%COMP%], .container__form[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{background:#fff;border:none;box-shadow:0 0 3px 1px var(--ion-color-primary);margin-bottom:5%}.container__form[_ngcontent-%COMP%] > ion-select[_ngcontent-%COMP%]{--placeholder-opacity:0.5;--padding-start:10px;--padding-end:10px}.container__button[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]{width:100%}.modal[_ngcontent-%COMP%]{position:absolute;height:100%;z-index:100}"]}),_)}],C=((v=function e(){_classCallCheck(this,e)}).\u0275mod=s.Jb({type:v}),v.\u0275inj=s.Ib({factory:function(e){return new(e||v)},imports:[[c.j.forChild(x)],c.j]}),v),k=o("j1ZV"),O=((M=function e(){_classCallCheck(this,e)}).\u0275mod=s.Jb({type:M}),M.\u0275inj=s.Ib({factory:function(e){return new(e||M)},imports:[[i.b,a.b,r.n,C,k.a]]}),M)}}]);