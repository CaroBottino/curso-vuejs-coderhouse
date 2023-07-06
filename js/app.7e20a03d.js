(function(){"use strict";var t={1136:function(t,e,a){var r=a(7195),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavbarComponent"),e("router-view"),e("CarritoComponent",{attrs:{items:t.storeState.user.cart},on:{updateStock:t.updateStock,deleteFromCart:t.onDeleteFromCart}}),e("FooterComponent")],1)},i=[],n=function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{staticClass:"navbar navbar-expand-lg fixed-top navbar-scroll"},[e("div",{staticClass:"container-fluid"},[e("router-link",{attrs:{to:{name:"home"}}},[e("b-navbar-brand",[t._v("App de pedidos")])],1),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{href:"#"}},[t._v("Link")]),e("b-nav-item",{attrs:{href:"#",disabled:""}},[t._v("Disabled")])],1),e("b-navbar-nav",{staticClass:"ml-auto"},[t.storeState.logged?e("router-link",{attrs:{to:{name:"user"}}},[e("img",{staticClass:"avatar",attrs:{src:t.storeState.user.avatar}})]):e("router-link",{attrs:{to:{name:"login"}}},[e("b-button",{staticClass:"nav-btn"},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"person-circle"}})],1)],1),e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-cart",modifiers:{"sidebar-cart":!0}}],staticClass:"nav-btn"},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"cart"}}),t.storeState.user.cart.length>0?e("div",{staticClass:"cart-dot"},[e("p",{staticClass:"cart-total"},[t._v(t._s(t.storeState.user.cart.length))])]):t._e()],1)],1)],1)],1)])],1)},o=[];a(7658);const l={state:{user:{fullname:"",pass:"",role:"",email:"",id:"",cart:[]},logged:!1},loggingUser(t){this.state.user=t,this.state.logged=!0},logoutUser(){this.state.user={fullname:"",pass:"",role:"",email:"",id:"",cart:[]},this.state.logged=!1},editUserInfo(t){console.log("store - editUserInfo..."),this.state.user=t},addItemToCart(t){this.isInCart(t)?this.state.user.cart.forEach((e=>{e.id===t.id&&(e.q=e.q+t.q)})):this.state.user.cart.push(t)},isInCart(t){return this.state.user.cart.find((e=>e.id===t.id))},deleteItemFromCart(t){this.state.user.cart=this.state.user.cart.filter((e=>e.id!==t))}};var c,u,d=l,m={name:"NavbarComponent",data(){return{storeState:d.state}}},p=m,v=a(1001),f=(0,v.Z)(p,n,o,!1,null,"40ad0218",null),h=f.exports,b=function(){var t=this,e=t._self._c;return e("div",[e("b-sidebar",{attrs:{id:"sidebar-cart",title:"Carrito",right:"",shadow:""},scopedSlots:t._u([{key:"footer",fn:function(){return[e("div",{staticClass:"d-flex bg-dark text-light align-items-center px-3 py-2"},[e("strong",{staticClass:"mr-auto"},[t._v("Total: ")]),t._v(" "+t._s(t._f("toPrice")(t.totalPrice))+" "),e("b-button",{attrs:{id:"buy-btn"},on:{click:t.buy}},[t._v("Pagar")])],1)]},proxy:!0}])},[0==t.quantity?e("div",{staticClass:"px-3 py-2"},[e("p",[t._v("No hay items en su carrito")])]):e("div",t._l(t.items,(function(a,r){return e("b-card",{key:r,staticClass:"overflow-hidden",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[e("b-row",{attrs:{"no-gutters":""}},[e("b-col",{attrs:{md:"6"}},[e("b-card-img",{staticClass:"rounded-0",attrs:{src:a.img}})],1),e("b-col",{attrs:{md:"6"}},[e("b-card-body",{attrs:{title:a.name}},[e("b-card-text",[e("b-button-group",{staticClass:"float-center"},[e("b-button",{on:{click:function(e){return t.subtract(a)}}},[t._v("-")]),e("b-button",{attrs:{disabled:""}},[t._v(t._s(a.q))]),e("b-button",{on:{click:function(e){return t.add(a)}}},[t._v("+")]),e("b-button",{on:{click:function(e){return t.deleteItem(a)}}},[e("b-icon",{attrs:{icon:"trash","aria-hidden":"true"}})],1)],1)],1)],1)],1)],1)],1)})),1)])],1)},g=[],_={filters:{toPrice(t){return"$ "+t.toFixed(2)}}},C=_,y=(0,v.Z)(C,c,u,!1,null,null,null),I=y.exports,k={name:"CarritoComponent",components:{},props:{items:{Array:Array,required:!0}},mixins:[I],computed:{quantity(){return this.$props.items.length},totalPrice(){let t=0;return this.$props.items.forEach((e=>{t+=e.price*e.q})),t}},methods:{add(t){t.q++},subtract(t){0==t.q?t.q=0:t.q--},deleteItem(t){this.$emit("deleteFromCart",t.id)},buy(){console.log("iniciar compra...")}}},x=k,w=(0,v.Z)(x,b,g,!1,null,"b5ecfbf2",null),$=w.exports,q=function(){var t=this;t._self._c;return t._m(0)},P=[function(){var t=this,e=t._self._c;return e("div",[e("footer",{staticClass:"footer mt-auto py-3 bg-dark"},[e("div",{staticClass:"container"},[e("p",{staticClass:"footer-label"},[e("a",{attrs:{href:"/#"}},[t._v("Back to top")]),t._v(" · © 2023 Carolina Bottino, Inc. · "),e("a",{attrs:{href:"/#"}},[t._v("Privacy")]),t._v(" · "),e("a",{attrs:{href:"/#"}},[t._v("Terms")])])])])])}],T={name:"FooterComponent"},S=T,N=(0,v.Z)(S,q,P,!1,null,"1173d1e6",null),A=N.exports,U={name:"App",components:{NavbarComponent:h,CarritoComponent:$,FooterComponent:A},data(){return{storeState:d.state}},methods:{onDeleteFromCart(t){d.deleteItemFromCart(t)},updateStock(t){return t}}},Z=U,O=(0,v.Z)(Z,s,i,!1,null,null,null),F=O.exports,E=a(4359),j=a(7244),L=a(2241),B=function(){var t=this,e=t._self._c;return e("div",[t.loading?e("div",{staticClass:"spinner"},[t._m(0)]):e("div",[t.listado.length>0?e("div",[e("ListadoComponent",{attrs:{items:t.listado,itemsCart:t.storeState.user.cart},on:{addToCart:t.onAddToCart}})],1):e("div",{staticClass:"spinner"},[e("h1",{staticClass:"no-items"},[t._v("NO ITEMS IN STOCK YET")])])])])},D=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"spinner-border text-danger",attrs:{role:"status",id:"spinner"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],M=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"cards"},t._l(t.items,(function(a,r){return e("div",{key:r,staticClass:"card"},[e("img",{staticStyle:{opacity:"1"},attrs:{src:a.img,alt:a.name}}),e("header",[e("h4",[t._v(t._s(a.name))]),e("p",[t._v(t._s(t._f("toPrice")(a.price)))])]),e("footer",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-info",modifiers:{"modal-info":!0}}],attrs:{disabled:a.stock<0},on:{click:function(e){return t.showInfo(a)}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"info-lg"}})],1),t.isInCart(a)?e("b-button",{staticClass:"icon-check"},[e("b-icon",{attrs:{icon:"check-lg"}})],1):e("b-button",{on:{click:function(e){return t.addToCart(a)}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"cart-plus"}})],1)],1)])})),0),e("InfoComponent",{attrs:{item:t.item},on:{addToCart:t.addToCart}})],1)},R=[],G=function(){var t=this,e=t._self._c;return e("div",[e("b-modal",{attrs:{id:"modal-info",centered:"",title:t.item.name},scopedSlots:t._u([{key:"modal-header",fn:function(){return[e("div",{staticClass:"w-100"},[e("b-img",{attrs:{rounded:"top",src:t.item.img}})],1)]},proxy:!0},{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("b-button-group",{staticClass:"float-left"},[e("b-button",{attrs:{disabled:1==t.quantity},on:{click:t.subtract}},[t._v("-")]),e("b-button",{attrs:{disabled:""}},[t._v(t._s(t.quantity))]),e("b-button",{attrs:{disabled:t.quantity>=t.item.stock},on:{click:t.add}},[t._v("+")])],1),e("b-button",{staticClass:"float-right",on:{click:function(e){return t.addToCart()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"cart-plus"}})],1)],1)]},proxy:!0}])},[e("h3",[t._v(t._s(t.item.name))]),e("p",{staticClass:"my-4"},[t._v(t._s(t._f("toPrice")(t.item.price)))]),e("p",[t._v(t._s(t.item.desc))])])],1)},X=[],Y={name:"InfoComponent",props:{item:{Object:Object,required:!0}},mixins:[I],data(){return{quantity:1}},methods:{addToCart(){let t={id:this.item.id,name:this.item.name,img:this.item.img,price:this.item.price,q:this.quantity};this.$emit("addToCart",t),this.$bvModal.hide("modal-info"),this.quantity=1},add(){this.quantity++},subtract(){0==this.quantity?this.quantity=0:this.quantity--}}},H=Y,K=(0,v.Z)(H,G,X,!1,null,"6e81a98e",null),W=K.exports,z={name:"ListadoComponent",components:{InfoComponent:W},props:{items:{Array:Array,required:!0},itemsCart:{Array:Array,required:!0}},mixins:[I],data(){return{item:{id:"",name:"",img:"",price:0,desc:""}}},methods:{addToCart(t){let e={id:t.id,name:t.name,img:t.img,price:t.price,q:t.q?t.q:1};this.$emit("addToCart",e)},showInfo(t){this.item=t},isInCart(t){return this.$props.itemsCart.find((e=>e.id===t.id))}}},J=z,Q=(0,v.Z)(J,M,R,!1,null,"730cfaa6",null),V=Q.exports,tt=a(306);const et="https://649b334abf7c145d023a2086.mockapi.io/v1";var at={getItems(){return tt.Z.get(`${et}/items`)},getItemById(t){return tt.Z.get(`${et}/items/${t}`)},createItem(t){return tt.Z.post(`${et}/items`,t)},updateItem(t,e){return tt.Z.put(`${et}/items/${t}`,e)},deleteItem(t){return tt.Z.delete(`${et}/items/${t}`)},getUsers(){return tt.Z.get(`${et}/users`)},getUserByMail(t){return tt.Z.get(`${et}/users/${t}`)},createUser(t){return tt.Z.post(`${et}/users`,t)},updateUser(t,e){return tt.Z.put(`${et}/users/${t}`,e)}},rt={name:"HomePage",components:{ListadoComponent:V},data(){return{loading:!0,listado:[],storeState:d.state}},created(){this.getItems()},methods:{getItems(){at.getItems().then((t=>{this.listado=t.data,this.loading=!1})).catch((t=>console.log("error getItems: ",t)))},onAddToCart(t){d.addItemToCart(t)},updateStock(t){this.listado.forEach((e=>{e.id===t.id&&(console.log(`stock: ${e.stock}, q: ${t.q}`),e.stock=e.stock-t.q)}))}}},st=rt,it=(0,v.Z)(st,B,D,!1,null,"113824e0",null),nt=it.exports,ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("div",{staticClass:"top"}),t.errors.length>0?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e("p",[t._v("Ups! Algo sucedió al intentar registrarte...")]),e("ul",t._l(t.errors,(function(a,r){return e("li",{key:r},[t._v(t._s(a))])})),0)]):t._e(),e("LoginComponent",{on:{submit:t.onLoginSubmit,register:t.onRegisterSubmit}})],1)},lt=[],ct=function(){var t=this,e=t._self._c;return e("div",[e("b-container",{attrs:{fluid:""}},[e("b-row",[t.errors.length>0?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e("p",[t._v("Ups! Algunos campos no son como esperamos...")]),e("ul",t._l(t.errors,(function(a,r){return e("li",{key:r},[t._v(t._s(a))])})),0)]):t._e()]),e("b-row",[e("b-col"),e("b-col",[t.show?e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{id:"input-group-email",label:"Email:","label-for":"inputEmail",description:"Nunca vamos a compartir tu email con otras compañías."}},[e("b-form-input",{attrs:{id:"inputEmail",type:"email",placeholder:"caro@mail.com",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-pass",label:"Password:","label-for":"inputPass"}},[e("b-form-input",{attrs:{id:"inputPass",placeholder:"caro1234",type:"password",required:""},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),e("b-form-group",{attrs:{id:"select-group-3"}},[e("p",[t._v(" ¿Aún no estás registrado? Registrate "),e("a",{attrs:{href:"#"},on:{click:t.changeForm}},[t._v("aquí.")])])]),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Ingresar")])],1):e("b-form",{on:{submit:t.onRegister}},[e("b-form-group",{attrs:{id:"input-group-1",label:"Email:","label-for":"input-1",description:"Nunca vamos a compartir tu email con otras compañías."}},[e("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Tu email, que será tu user",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"Nombre y apellido:","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",type:"text",placeholder:"Tu nombre y apellido",required:""},model:{value:t.form.fullname,callback:function(e){t.$set(t.form,"fullname",e)},expression:"form.fullname"}})],1),e("b-form-group",{attrs:{id:"input-group-4",label:"Password:","label-for":"input-4"}},[e("b-form-input",{attrs:{id:"input-4",placeholder:"Ingresar contraseña",type:"password",required:""},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),e("b-form-group",{attrs:{id:"select-group-3"}},[e("p",[t._v(" ¿Ya tenés una cuenta? Ingresá "),e("a",{attrs:{href:"#"},on:{click:t.changeForm}},[t._v("aquí.")])])]),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Registrarse")])],1)],1),e("b-col")],1)],1)],1)},ut=[],dt={name:"LoginComponent",data(){return{form:{fullname:"",email:"",pass:""},show:!0,errors:[]}},methods:{onSubmit(t){t.preventDefault(),this.$emit("submit",this.form)},checkPassword(t){return!(t.length<8||t.length>31||!t.match(/[A-Z]/)||!t.match(/[0-9]/)||!t.match(/[.,:!?]/))},onRegister(t){this.errors=[],t.preventDefault(),this.checkPassword(this.form.pass)?this.$emit("register",this.form):this.errors.push("La contraseña debe tener una cantidad mínica de 8 dígitos, máxima de 31 dígitos, al menos 1 mayúcula, al menos 1 número y al menos 1 caracter especial.")},changeForm(){this.show=!this.show}}},mt=dt,pt=(0,v.Z)(mt,ct,ut,!1,null,"e28324b4",null),vt=pt.exports,ft={name:"LoginPage",components:{LoginComponent:vt},data(){return{errors:[]}},methods:{onLoginSubmit(t){this.errors=[],at.getUsers().then((e=>{let a=e.data.find((e=>e.email===t.email));a?(d.loggingUser(a),this.$router.push({name:"user"})):this.errors.push("usuario o contraseña incorrectos... vuelva a intentar")}))},onRegisterSubmit(t){this.errors=[],at.getUsers().then((e=>{let a=e.data.find((e=>e.email===t.email));a?this.errors.push("el email ya ha sido registrado, pruebe iniciar sesión con el mismo o crear una cuenta con un mail diferente"):this.saveNewUser(t)}))},saveNewUser(t){let e={fullname:t.fullname,pass:t.pass,email:t.email,role:"buyer"};at.createUser(e).then((t=>{d.loggingUser(t.data),this.$router.push({name:"user"})})).catch((t=>{alert("error creando user: ",t)}))}}},ht=ft,bt=(0,v.Z)(ht,ot,lt,!1,null,"3768d9d6",null),gt=bt.exports,_t=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("h1",{staticClass:"user-header"},[t._v("Información de usuario")]),e("div",{staticClass:"col d-flex justify-content-center"},[e("div",{staticClass:"card"},[e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"img-fluid rounded-start",attrs:{src:t.user.avatar,alt:"..."}})]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.user.fullname))]),t.edit?e("div",[e("div",[e("label",{attrs:{for:"fullname"}},[t._v("Fullname")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.fullname,expression:"user.fullname"}],attrs:{type:"text",id:"fullname",name:"fullname"},domProps:{value:t.user.fullname},on:{input:function(e){e.target.composing||t.$set(t.user,"fullname",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"email",id:"email",name:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"pass"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.pass,expression:"user.pass"}],attrs:{type:"text",id:"pass",name:"pass"},domProps:{value:t.user.pass},on:{input:function(e){e.target.composing||t.$set(t.user,"pass",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"role"}},[t._v("Role")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.user.role,expression:"user.role"}],attrs:{id:"role"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"role",e.target.multiple?a:a[0])}}},[e("option",{attrs:{value:"admin"}},[t._v("admin")]),e("option",{attrs:{value:"buyer"}},[t._v("buyer")])])]),e("div",[e("label",{attrs:{for:"fullname"}},[t._v("Avatar")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.avatar,expression:"user.avatar"}],attrs:{type:"text",id:"avatar",name:"avatar"},domProps:{value:t.user.avatar},on:{input:function(e){e.target.composing||t.$set(t.user,"avatar",e.target.value)}}})]),e("b-button",{on:{click:function(e){return t.editUser()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"check"}})],1)],1):e("div",[e("p",{staticClass:"card-text"},[t._v("email: "+t._s(t.user.email))]),e("p",{staticClass:"card-text"},[t._v("Password: "+t._s(t.user.pass))]),e("p",{staticClass:"card-text"},[t._v("role: "+t._s(t.user.role))]),e("b-button",{on:{click:function(e){return t.showEditMode()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"pencil"}})],1)],1)])])])])]),"admin"===t.user.role?e("div",{staticClass:"features-pannel"},[e("h3",[t._v("Tus items en venta")]),e("div",{staticClass:"new-item"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.createItem}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"plus-circle-dotted"}}),t._v(" Nuevo Item ")],1)]),e("TableComponent",{attrs:{headers:t.headersAdmin,items:t.items,actions:t.actionsAdmin},on:{editItem:t.onEditItem,deleteItem:t.onDeleteItem}})],1):e("div",{staticClass:"features-pannel"},[e("h3",[t._v("Tu carrito de compras")]),t.user.cart.length>0?e("div",[e("TableComponent",{attrs:{headers:t.headersBuyer,items:t.user.cart,actions:t.actionsBuyer},on:{deleteItem:t.onDeleteItemFromCart}})],1):e("div",[e("h6",[t._v("No agregaste items a tu carrito aún")])])])])},Ct=[],yt=function(){var t=this,e=t._self._c;return e("div",[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._l(t.headers,(function(a,r){return e("th",{key:r},[t._v(t._s(a))])})),e("th",[t._v("actions")])],2)]),e("tbody",t._l(t.items,(function(a,r){return e("tr",{key:a.id},[e("th",{attrs:{scope:"row"}},[t._v(t._s(r+1))]),t._l(t.headers,(function(r,s){return e("td",{key:s},["img"===r?[e("img",{staticClass:"img-fluid rounded-start",attrs:{src:a[r],alt:"..."}})]:[t._v(" "+t._s(a[r])+" ")]],2)})),t.actions?e("td",[t.actions.includes("edit")?e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.editItem(a.id)}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"pencil"}})],1):t._e(),t.actions.includes("delete")?e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteItem(a.id)}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"trash"}})],1):t._e()]):t._e()],2)})),0)])])},It=[],kt={name:"TableComponent",props:{headers:{Array:Array,required:!0},items:{Array:Array,required:!0},actions:{Array:Array}},methods:{editItem(t){this.$emit("editItem",t)},deleteItem(t){this.$emit("deleteItem",t)}}},xt=kt,wt=(0,v.Z)(xt,yt,It,!1,null,"211922b8",null),$t=wt.exports,qt={name:"UserPage",data(){return{user:d.state.user,edit:!1,roles:["admin","buyer"],items:[],headersAdmin:["id","name","img","price","desc","stock"],actionsAdmin:["edit","delete"],headersBuyer:["id","name","img","price","q"],actionsBuyer:["delete"],editItem:{id:"",name:"",img:"",price:0,desc:"",stock:0}}},components:{TableComponent:$t},created(){this.getItemsByUser()},methods:{showEditMode(){this.edit=!0},editUser(){at.updateUser(this.user.id,this.user).then((t=>{d.editUserInfo(t.data),this.edit=!1})).catch((t=>{alert("error editando user: ",t)}))},getItemsByUser(){at.getItems().then((t=>{this.items=t.data})).catch((t=>{alert("error getItems: ",t)}))},createItem(){this.$router.push({name:"edit-item"})},onEditItem(t){this.$router.push({name:"edit-item",params:{id:t}})},onDeleteItem(t){at.deleteItem(t).then((()=>{alert("item deleted"),this.getItemsByUser()})).catch((t=>alert("error when deleting item: ",t)))},onDeleteItemFromCart(t){d.deleteItemFromCart(t)}}},Pt=qt,Tt=(0,v.Z)(Pt,_t,Ct,!1,null,"d6f34e5e",null),St=Tt.exports,Nt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},["admin"===t.storeState.user.role?e("div",[t.itemId?e("h1",{staticClass:"edit-header"},[t._v("Editar item "+t._s(t.itemId))]):e("h1",{staticClass:"edit-header"},[t._v("Crear nuevo item")]),e("div",{staticClass:"col d-flex justify-content-center"},[e("div",{staticClass:"card"},[e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-md-4"},[t.item.img?e("img",{staticClass:"img-fluid rounded-start",attrs:{src:t.item.img,alt:"..."}}):e("img",{staticClass:"img-fluid rounded-start",attrs:{src:"https://p.kindpng.com/picc/s/79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png",alt:"..."}})]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.item.name))]),e("div",[e("div",[e("label",{attrs:{for:"email"}},[t._v("id")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.id,expression:"item.id"}],attrs:{type:"text",id:"id",name:"id",disabled:""},domProps:{value:t.item.id},on:{input:function(e){e.target.composing||t.$set(t.item,"id",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"fullname"}},[t._v("name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.name,expression:"item.name"}],attrs:{type:"text",id:"name",name:"name"},domProps:{value:t.item.name},on:{input:function(e){e.target.composing||t.$set(t.item,"name",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"pass"}},[t._v("image")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.img,expression:"item.img"}],attrs:{type:"text",id:"img",name:"img"},domProps:{value:t.item.img},on:{input:function(e){e.target.composing||t.$set(t.item,"img",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"pass"}},[t._v("price")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.item.price,expression:"item.price",modifiers:{number:!0}}],attrs:{type:"number",id:"price",name:"price"},domProps:{value:t.item.price},on:{input:function(e){e.target.composing||t.$set(t.item,"price",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),e("div",[e("label",{attrs:{for:"fullname"}},[t._v("description")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.desc,expression:"item.desc"}],attrs:{type:"text",id:"desc",name:"desc"},domProps:{value:t.item.desc},on:{input:function(e){e.target.composing||t.$set(t.item,"desc",e.target.value)}}})]),e("div",[e("label",{attrs:{for:"fullname"}},[t._v("stock")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.item.stock,expression:"item.stock",modifiers:{number:!0}}],attrs:{type:"number",id:"stok",name:"stock"},domProps:{value:t.item.stock},on:{input:function(e){e.target.composing||t.$set(t.item,"stock",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t.itemId?e("b-button",{on:{click:function(e){return t.editItem()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"check"}})],1):e("b-button",{on:{click:function(e){return t.createItem()}}},[e("b-icon",{staticClass:"nav-icon",attrs:{icon:"check"}})],1)],1)])])])])])]):e("div",[e("h1",{staticClass:"edit-header"},[t._v("NOT ALLOWED")])])])},At=[],Ut={name:"EditItemPage",data(){return{storeState:d.state,itemId:this.$route.params.id,item:{id:"",name:"",img:"",price:0,desc:"",stock:0}}},created(){this.itemId&&this.getItemInfo()},methods:{getItemInfo(){at.getItemById(this.itemId).then((t=>this.item=t.data)).catch((t=>alert("error gettin item: ",t)))},editItem(){at.updateItem(this.itemId,this.item).then((t=>{this.item=t.data,alert("item editado ok")})).catch((t=>alert("error updating item: ",t)))},createItem(){at.createItem(this.item).then((t=>{this.item=t.data,alert("item creado ok")})).catch((t=>alert("error creating item: ",t)))}}},Zt=Ut,Ot=(0,v.Z)(Zt,Nt,At,!1,null,"d45be0de",null),Ft=Ot.exports,Et=function(){var t=this;t._self._c;return t._m(0)},jt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"body"},[e("h1",{staticClass:"header"},[t._v("PAGE NOT FOUND")])])}],Lt={name:"NotFoundPage"},Bt=Lt,Dt=(0,v.Z)(Bt,Et,jt,!1,null,"5d8f60b8",null),Mt=Dt.exports;r["default"].use(L.ZP);const Rt=[{path:"/",component:nt,name:"home"},{path:"/login",component:gt,name:"login"},{path:"/user",component:St,name:"user"},{path:"/item/:id",component:Ft,name:"edit-item"},{path:"/:pathMatch(.*)*",component:Mt,name:"not-found"}],Gt=new L.ZP({mode:"history",base:"/curso-vuejs-coderhouse/",routes:Rt});var Xt=Gt;a(7024);r["default"].config.productionTip=!1,r["default"].use(E.XG7),r["default"].use(j.X),new r["default"]({router:Xt,render:t=>t(F)}).$mount("#app")}},e={};function a(r){var s=e[r];if(void 0!==s)return s.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,r,s,i){if(!r){var n=1/0;for(u=0;u<t.length;u++){r=t[u][0],s=t[u][1],i=t[u][2];for(var o=!0,l=0;l<r.length;l++)(!1&i||n>=i)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(o=!1,i<n&&(n=i));if(o){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,s,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,i,n=r[0],o=r[1],l=r[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var u=l(a)}for(e&&e(r);c<n.length;c++)i=n[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},r=self["webpackChunkcurso_vuejs_coderhouse"]=self["webpackChunkcurso_vuejs_coderhouse"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(1136)}));r=a.O(r)})();
//# sourceMappingURL=app.7e20a03d.js.map