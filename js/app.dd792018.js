(function(t){function a(a){for(var r,l,i=a[0],s=a[1],c=a[2],d=0,b=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&b.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(a);while(b.length)b.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,i=1;i<e.length;i++){var s=e[i];0!==o[s]&&(r=!1)}r&&(n.splice(a--,1),t=l(l.s=e[0]))}return t}var r={},o={app:0},n=[];function l(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=r,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)l.d(e,r,function(a){return t[a]}.bind(null,r));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/vue-chocolate/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var u=s;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);var r=e("2b0e"),o=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("Tableta",{attrs:{msg:"😋"}})],1)},n=[],l=function(){var t=this,a=t._self._c;return a("div",{staticClass:"contenedor-gde"},[a("img",{staticClass:"imagen-chocolate",attrs:{alt:"Onzas de chocolate",src:e("6047")}}),a("h1",[t._v(t._s(t.msg))]),a("div",{attrs:{id:"botones"}},[a("button",{staticClass:"btn",on:{click:function(a){return t.comerFila()}}},[t._v("COMER FILA")]),a("button",{staticClass:"btn",on:{click:function(a){return t.comerColumna()}}},[t._v("COMER COLUMNA")]),a("button",{staticClass:"btn",on:{click:function(a){return t.abrirGuardar()}}},[t._v("¡NO QUIERO COMER MÁS!")])]),a("div",{staticClass:"tableta"},t._l(t.tableta,(function(e,r){return a("div",{key:r,staticClass:"fila"},t._l(e,(function(e,o){return a("div",{key:e.iden,staticClass:"celda",style:{backgroundColor:e.color},on:{click:function(a){return t.onClick(r,o)}}},[e.secret?a("p",{staticClass:"emoji"},[t._v("😋")]):t._e()])})),0)})),0),t.tabletaGuardada?a("button",{staticClass:"btn-guardada",on:{click:function(a){return t.recuperarTableta()}}},[t._v("Tableta Guardada")]):t._e(),t.mostrarDialogo?a("div",{staticClass:"dialogo"},[a("div",{staticClass:"dialogo-contenido"},[a("p",[t._v(t._s(t.mensajeDialogo))]),t.mostrarSoloOk?a("button",{on:{click:function(a){return t.confirmarDialogo(!0)}}},[t._v(" OK ")]):[a("button",{on:{click:function(a){return t.confirmarDialogo(!0)}}},[t._v("Guardar")]),a("button",{on:{click:function(a){return t.confirmarDialogo(!1)}}},[t._v("No")])]],2)]):t._e()])},i=[],s=(e("14d9"),e("0643"),e("76d6"),e("2382"),e("4e3e"),e("a573"),{name:"Tableta",props:{msg:String},data(){return{tableta:[],tabletaGuardada:!1,mostrarDialogo:!1,mensajeDialogo:"",callbackDialogo:null,mostrarSoloOk:!1}},created(){this.iniciarJuego()},methods:{iniciarJuego(){localStorage.getItem("tabletaGuardada")&&(this.tabletaGuardada=!0),this.resetTableta()},resetTableta(){const t=[];for(let a=0;a<7;a++){t.push([]);for(let e=0;e<5;e++)t[a].push({iden:`${a}-${e}`,color:"rgba(62, 15, 15, 0.8)",secret:!1,anular:!1})}this.tableta=t},onClick(t,a){const e=this.tableta[t][a];e.anular||(e.secret=!0,e.color="rgba(201, 97, 97, 0.8)",e.anular=!0,this.checkIfFinished())},comerFila(){const t=this.tableta.map((t,a)=>t.every(t=>t.anular)?null:a).filter(t=>null!==t);if(0===t.length)return void this.mostrarFin("¡Ya te has acabado la tableta!");const a=t[Math.floor(Math.random()*t.length)];this.tableta[a].forEach(t=>{t.secret=!0,t.color="rgba(201, 97, 97, 0.3)",t.anular=!0}),this.checkIfFinished()},comerColumna(){const t=this.tableta[0].map((t,a)=>this.tableta.every(t=>t[a].anular)?null:a).filter(t=>null!==t);if(0===t.length)return void this.mostrarFin("¡Ya te has acabado la tableta!");const a=t[Math.floor(Math.random()*t.length)];this.tableta.forEach(t=>{t[a].secret=!0,t[a].color="rgba(201, 97, 97, 0.3)",t[a].anular=!0}),this.checkIfFinished()},abrirGuardar(){this.mostrarDialogo=!0,this.mostrarSoloOk=!1,this.mensajeDialogo="¿Quieres guardar esta tableta para más tarde?",this.callbackDialogo=this.guardarTableta},guardarTableta(t){t?(localStorage.setItem("tabletaGuardada",JSON.stringify(this.tableta)),this.tabletaGuardada=!0,this.mostrarFin("¡Partida guardada!"),this.resetTableta()):this.resetTableta(),this.mostrarDialogo=!1},recuperarTableta(){this.tableta=JSON.parse(localStorage.getItem("tabletaGuardada")),this.tabletaGuardada=!1,localStorage.removeItem("tabletaGuardada")},checkIfFinished(){const t=this.tableta.every(t=>t.every(t=>t.anular));t&&this.mostrarFin("¡Ya te has acabado la tableta!")},confirmarDialogo(t){this.callbackDialogo&&this.callbackDialogo(t),this.mostrarDialogo=!1},mostrarFin(t){this.mostrarDialogo=!0,this.mensajeDialogo=t,this.mostrarSoloOk=!0,this.callbackDialogo=()=>{this.resetTableta()}}}}),c=s,u=(e("f5e7"),e("2877")),d=Object(u["a"])(c,l,i,!1,null,"558aa922",null),b=d.exports,h={name:"App",components:{Tableta:b}},f=h,g=(e("e5c2"),Object(u["a"])(f,o,n,!1,null,null,null)),p=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:t=>t(p)}).$mount("#app")},"5a77":function(t,a,e){},6047:function(t,a,e){t.exports=e.p+"img/onzas.140377c2.jpeg"},"7a51":function(t,a,e){},e5c2:function(t,a,e){"use strict";e("7a51")},f5e7:function(t,a,e){"use strict";e("5a77")}});
//# sourceMappingURL=app.dd792018.js.map