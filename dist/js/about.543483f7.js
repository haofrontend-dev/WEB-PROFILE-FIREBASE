(self["webpackChunkweb_project"]=self["webpackChunkweb_project"]||[]).push([[443],{2809:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav-links d-none d-lg-block"},[e("ul",{staticClass:"nav-menu"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-item__link",attrs:{to:"/projects"}},[t._v("General")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-item__link",attrs:{to:"/projects/beauty"}},[t._v("Beauty & FMCG")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-item__link",attrs:{to:"/projects/f&b"}},[t._v("F&B")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-item__link",attrs:{to:"/projects/key-visual"}},[t._v("Key visual")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-item__link",attrs:{to:"/projects/branding"}},[t._v("Branding")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-item__link",attrs:{to:"/projects/motion-ai"}},[t._v("Motion & Illustration")])],1)])])},r=[],s={},o=s,a=n(1001),u=(0,a.Z)(o,i,r,!1,null,"3d4d7752",null),l=u.exports},1449:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"py-5"},[e("h1",{staticClass:"text-center"},[t._v("Contact me")]),e("div",{staticClass:"mt-5"},[e("form",{staticClass:"form-wrap mx-auto",attrs:{action:""}},[e("div",[e("b-form-input",{staticClass:"input-text",attrs:{placeholder:"Your email here..."},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e("div",{staticClass:"mt-4"},[e("b-form-input",{staticClass:"input-text",attrs:{placeholder:"Your phone number..."},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),e("div",{staticClass:"mt-4"},[e("b-form-textarea",{staticClass:"input-text",attrs:{id:"textarea-rows",placeholder:"Tall textarea",rows:"8"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),e("div",{staticClass:"d-grid"},[e("b-button",{staticClass:"mt-4 btn-send",attrs:{variant:"info"}},[t._v("Send")])],1)])])])])},r=[],s={data(){return{email:"",phone:"",message:""}},methods:{}},o=s,a=n(1001),u=(0,a.Z)(o,i,r,!1,null,"002fbfa0",null),l=u.exports},8866:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"p-5 shadow bg-body rounded content-register"},[e("h2",{staticClass:"title text-center"},[t._v("Login")]),e("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("b-form-group",{staticClass:"mb-2",attrs:{id:"example-input-group-2",label:"Email","label-for":"example-input-2"}},[e("b-form-input",{attrs:{id:"example-input-2",name:"example-input-2",type:"email",state:t.validateState("email"),"aria-describedby":"input-2-live-feedback"},model:{value:t.$v.form.email.$model,callback:function(e){t.$set(t.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),e("b-form-invalid-feedback",{attrs:{id:"email-invalid-feedback"}},[t._v(" Please enter a valid email address. ")])],1),e("b-form-group",{staticClass:"mb-2",attrs:{id:"example-input-group-1",label:"Password","label-for":"example-input-1"}},[e("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:t.validateState("password"),"aria-describedby":"input-1-live-feedback"},model:{value:t.$v.form.password.$model,callback:function(e){t.$set(t.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),e("b-form-invalid-feedback",{attrs:{id:"input-1-live-feedback"}},[t._v("This is a required field and must be at least 6 characters.")])],1),t.isPending?e("div",{staticClass:"d-grid"},[e("b-button",{attrs:{block:"",disabled:"",type:"button"}},[t._v("Loading...")])],1):e("div",{staticClass:"d-grid"},[e("b-button",{attrs:{block:"",type:"submit",variant:"primary"}},[t._v("Login")])],1)],1),t.errorMessge?e("div",{staticClass:"text-danger my-2"},[t._v(" "+t._s(t.errorMessge)+" ")]):t._e()],1)])},r=[],s=(n(7658),n(4951)),o=n(5795),a=n(7669),u=n(8829),l=n(3797),c={mixins:[s.oE],data(){return{form:{email:null,password:null},errorMessge:null,isPending:!1}},validations:{form:{password:{required:o.C1,minLength:(0,o.Ei)(6)},email:{required:o.C1}}},methods:{validateState(t){const{$dirty:e,$error:n}=this.$v.form[t];return e?!n:null},resetForm(){this.form={name:null,password:null,email:null},this.$nextTick((()=>{this.$v.$reset()}))},async onSubmit(){if(this.$v.form.$touch(),!this.$v.form.$anyError){this.isPending=!0,this.errorMessge=null;try{const t=await(0,u.e5)(a.I,this.form.email,this.form.password);if(!t)throw new Error("Could not createa new user.");return console.log(t),l.Z.push({name:"admin",params:""}),t}catch(t){"auth/user-not-found"===t.code&&(this.errorMessge="No user found with provided email addres"),"auth/wrong-password"===t.code&&(this.errorMessge="Incorrect password"),console.log(t)}finally{this.isPending=!1}}}}},h=c,d=n(1001),f=(0,d.Z)(h,i,r,!1,null,"7f2474fa",null),p=f.exports},59:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var i=function(){var t=this;t._self._c;return t._m(0)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"py-5"},[e("h1",{staticClass:"text-center"},[t._v("About me")]),e("div",{staticClass:"mt-5"},[e("img",{staticClass:"img-fluid",attrs:{src:n(1625),alt:""}})])])])}],s=n(1001),o={},a=(0,s.Z)(o,i,r,!1,null,"4ab2744e",null),u=a.exports},1005:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"py-2 px-2"},[e("div",{staticClass:"list-btn"},[e("nav-profile")],1),e("div",{staticClass:"container mt-5"},[t.Images.length?e("div",{staticClass:"row"},t._l(t.Images,(function(n,i){return e("div",{key:i,staticClass:"col-12 col-lg-4 mb-4",on:{click:function(e){return t.showPopupImage(n.myUrl)}}},[e("div",{staticClass:"card shadow-lg",staticStyle:{width:"100%"}},[e("img",{ref:"imageCard",refInFor:!0,staticClass:"card-img-top",attrs:{src:n.myUrl,alt:n.alt}}),e("div",{staticClass:"card-body"},[e("p",{},[t._v(t._s(n.namePr))]),e("p",[t._v("2022")])])])])})),0):t._e()]),t.isPopup?e("div",{staticClass:"popup-image"},[e("span",{on:{click:function(e){t.isPopup=!1}}},[t._v("×")]),e("img",{ref:"imagePopup",attrs:{src:t.imagePopup,alt:""}})]):t._e()])])},r=[],s=(n(7658),n(36)),o=n(2809),a={name:"HomeView",components:{NavProfile:o.Z},data(){return{isPopup:!1,imagePopup:"",listCardImages:[]}},mounted(){this.getDataImages()},methods:{showPopupImage(t){this.isPopup=!0,this.imagePopup=t},async getDataImages(){const t=(0,s.ad)(),e=await(0,s.PL)((0,s.hJ)(t,"db_projects"));e.forEach((t=>{this.listCardImages.push(t.data())}))}},computed:{Images(){return this.listCardImages.filter((t=>"beauty"===t.typePr)).reverse()}}},u=a,l=n(1001),c=(0,l.Z)(u,i,r,!1,null,"1cf74d02",null),h=c.exports},616:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"py-2 px-2"},[e("div",{staticClass:"list-btn"},[e("nav-profile")],1),e("div",{staticClass:"container mt-5"},[t.Images.length?e("div",{staticClass:"row"},t._l(t.Images,(function(n,i){return e("div",{key:i,staticClass:"col-12 col-lg-4 mb-4",on:{click:function(e){return t.showPopupImage(n.myUrl)}}},[e("div",{staticClass:"card shadow-lg",staticStyle:{width:"100%"}},[e("img",{ref:"imageCard",refInFor:!0,staticClass:"card-img-top",attrs:{src:n.myUrl,alt:n.alt}}),e("div",{staticClass:"card-body"},[e("p",{},[t._v(t._s(n.namePr))]),e("p",[t._v("2022")])])])])})),0):t._e()]),t.isPopup?e("div",{staticClass:"popup-image"},[e("span",{on:{click:function(e){t.isPopup=!1}}},[t._v("×")]),e("img",{ref:"imagePopup",attrs:{src:t.imagePopup,alt:""}})]):t._e()])])},r=[],s=(n(7658),n(36)),o=n(2809),a={name:"HomeView",components:{NavProfile:o.Z},data(){return{isPopup:!1,imagePopup:"",listCardImages:[]}},mounted(){this.getDataImages()},methods:{showPopupImage(t){this.isPopup=!0,this.imagePopup=t},async getDataImages(){const t=(0,s.ad)(),e=await(0,s.PL)((0,s.hJ)(t,"db_projects"));e.forEach((t=>{this.listCardImages.push(t.data())}))}},computed:{Images(){return this.listCardImages.filter((t=>"branding"===t.typePr)).reverse()}}},u=a,l=n(1001),c=(0,l.Z)(u,i,r,!1,null,"1c8f7e1f",null),h=c.exports},531:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"py-2 px-2"},[e("div",{staticClass:"list-btn"},[e("nav-profile")],1),e("div",{staticClass:"container mt-5"},[t.Images.length?e("div",{staticClass:"row"},t._l(t.Images,(function(n,i){return e("div",{key:i,staticClass:"col-12 col-lg-4 mb-4",on:{click:function(e){return t.showPopupImage(n.myUrl)}}},[e("div",{staticClass:"card shadow-lg",staticStyle:{width:"100%"}},[e("img",{ref:"imageCard",refInFor:!0,staticClass:"card-img-top",attrs:{src:n.myUrl,alt:n.alt}}),e("div",{staticClass:"card-body"},[e("p",{},[t._v(t._s(n.namePr))]),e("p",[t._v("2022")])])])])})),0):t._e()]),t.isPopup?e("div",{staticClass:"popup-image"},[e("span",{on:{click:function(e){t.isPopup=!1}}},[t._v("×")]),e("img",{ref:"imagePopup",attrs:{src:t.imagePopup,alt:""}})]):t._e()])])},r=[],s=(n(7658),n(36)),o=n(2809),a={name:"HomeView",components:{NavProfile:o.Z},data(){return{isPopup:!1,imagePopup:"",listCardImages:[]}},mounted(){this.getDataImages()},methods:{showPopupImage(t){this.isPopup=!0,this.imagePopup=t},async getDataImages(){const t=(0,s.ad)(),e=await(0,s.PL)((0,s.hJ)(t,"db_projects"));e.forEach((t=>{this.listCardImages.push(t.data())}))}},computed:{Images(){return this.listCardImages.filter((t=>"f&b"===t.typePr)).reverse()}}},u=a,l=n(1001),c=(0,l.Z)(u,i,r,!1,null,"0820d5f3",null),h=c.exports},3270:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"py-2 px-2"},[e("div",{staticClass:"list-btn"},[e("nav-profile")],1),e("div",{staticClass:"container mt-5"},[t.Images.length?e("div",{staticClass:"row"},t._l(t.Images,(function(n,i){return e("div",{key:i,staticClass:"col-12 col-lg-4 mb-4",on:{click:function(e){return t.showPopupImage(n.myUrl)}}},[e("div",{staticClass:"card shadow-lg",staticStyle:{width:"100%"}},[e("img",{ref:"imageCard",refInFor:!0,staticClass:"card-img-top",attrs:{src:n.myUrl,alt:n.alt}}),e("div",{staticClass:"card-body"},[e("p",{},[t._v(t._s(n.namePr))]),e("p",[t._v("2022")])])])])})),0):t._e()]),t.isPopup?e("div",{staticClass:"popup-image"},[e("span",{on:{click:function(e){t.isPopup=!1}}},[t._v("×")]),e("img",{ref:"imagePopup",attrs:{src:t.imagePopup,alt:""}})]):t._e()])])},r=[],s=(n(7658),n(36)),o=n(2809),a={name:"HomeView",components:{NavProfile:o.Z},data(){return{isPopup:!1,imagePopup:"",listCardImages:[]}},mounted(){this.getDataImages()},methods:{showPopupImage(t){this.isPopup=!0,this.imagePopup=t},async getDataImages(){const t=(0,s.ad)(),e=await(0,s.PL)((0,s.hJ)(t,"db_projects"));e.forEach((t=>{this.listCardImages.push(t.data())}))}},computed:{Images(){return this.listCardImages.filter((t=>"general"===t.typePr)).reverse()}}},u=a,l=n(1001),c=(0,l.Z)(u,i,r,!1,null,"cc286d72",null),h=c.exports},9514:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"py-2 px-2"},[e("div",{staticClass:"list-btn"},[e("nav-profile")],1),e("div",{staticClass:"container mt-5"},[t.Images.length?e("div",{staticClass:"row"},t._l(t.Images,(function(n,i){return e("div",{key:i,staticClass:"col-12 col-lg-4 mb-4",on:{click:function(e){return t.showPopupImage(n.myUrl)}}},[e("div",{staticClass:"card shadow-lg",staticStyle:{width:"100%"}},[e("img",{ref:"imageCard",refInFor:!0,staticClass:"card-img-top",attrs:{src:n.myUrl,alt:n.alt}}),e("div",{staticClass:"card-body"},[e("p",{},[t._v(t._s(n.namePr))]),e("p",[t._v("2022")])])])])})),0):t._e()]),t.isPopup?e("div",{staticClass:"popup-image"},[e("span",{on:{click:function(e){t.isPopup=!1}}},[t._v("×")]),e("img",{ref:"imagePopup",attrs:{src:t.imagePopup,alt:""}})]):t._e()])])},r=[],s=(n(7658),n(36)),o=n(2809),a={name:"HomeView",components:{NavProfile:o.Z},data(){return{isPopup:!1,imagePopup:"",listCardImages:[]}},mounted(){this.getDataImages()},methods:{showPopupImage(t){this.isPopup=!0,this.imagePopup=t},async getDataImages(){const t=(0,s.ad)(),e=await(0,s.PL)((0,s.hJ)(t,"db_projects"));e.forEach((t=>{this.listCardImages.push(t.data())}))}},computed:{Images(){return this.listCardImages.filter((t=>"key-visual"===t.typePr)).reverse()}}},u=a,l=n(1001),c=(0,l.Z)(u,i,r,!1,null,"62d73340",null),h=c.exports},7441:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"py-2 px-2"},[e("div",{staticClass:"list-btn"},[e("nav-profile")],1),e("div",{staticClass:"container mt-5"},[t.Images.length?e("div",{staticClass:"row"},t._l(t.Images,(function(n,i){return e("div",{key:i,staticClass:"col-12 col-lg-4 mb-4",on:{click:function(e){return t.showPopupImage(n.myUrl)}}},[e("div",{staticClass:"card shadow-lg",staticStyle:{width:"100%"}},[e("img",{ref:"imageCard",refInFor:!0,staticClass:"card-img-top",attrs:{src:n.myUrl,alt:n.alt}}),e("div",{staticClass:"card-body"},[e("p",{},[t._v(t._s(n.namePr))]),e("p",[t._v("2022")])])])])})),0):t._e()]),t.isPopup?e("div",{staticClass:"popup-image"},[e("span",{on:{click:function(e){t.isPopup=!1}}},[t._v("×")]),e("img",{ref:"imagePopup",attrs:{src:t.imagePopup,alt:""}})]):t._e()])])},r=[],s=(n(7658),n(36)),o=n(2809),a={name:"HomeView",components:{NavProfile:o.Z},data(){return{isPopup:!1,imagePopup:"",listCardImages:[]}},mounted(){this.getDataImages()},methods:{showPopupImage(t){this.isPopup=!0,this.imagePopup=t},async getDataImages(){const t=(0,s.ad)(),e=await(0,s.PL)((0,s.hJ)(t,"db_projects"));e.forEach((t=>{this.listCardImages.push(t.data())}))}},computed:{Images(){return this.listCardImages.filter((t=>"motionAi"===t.typePr)).reverse()}}},u=a,l=n(1001),c=(0,l.Z)(u,i,r,!1,null,"faeecf82",null),h=c.exports},6704:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container py-5"},[e("div",{staticClass:"p-5 shadow bg-body rounded content-register"},[e("h2",{staticClass:"title text-center"},[t._v("Register User")]),e("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("b-form-group",{staticClass:"mb-2",attrs:{id:"example-input-group-1",label:"Username","label-for":"example-input-1"}},[e("b-form-input",{attrs:{id:"example-input-1",name:"example-input-1",state:t.validateState("userName"),"aria-describedby":"input-1-live-feedback"},model:{value:t.$v.form.userName.$model,callback:function(e){t.$set(t.$v.form.userName,"$model",e)},expression:"$v.form.userName.$model"}}),e("b-form-invalid-feedback",{attrs:{id:"email-invalid-feedback"}},[t._v(" This is a required field and must be at least 3 ")])],1),e("b-form-group",{staticClass:"mb-2",attrs:{id:"example-input-group-2",label:"Email","label-for":"example-input-2"}},[e("b-form-input",{attrs:{id:"example-input-2",name:"example-input-2",type:"email",state:t.validateState("email"),"aria-describedby":"input-2-live-feedback"},model:{value:t.$v.form.email.$model,callback:function(e){t.$set(t.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),e("b-form-invalid-feedback",{attrs:{id:"email-invalid-feedback"}},[t._v(" Please enter a valid email address. ")])],1),e("b-form-group",{staticClass:"mb-2",attrs:{id:"example-input-group-3",label:"Password","label-for":"example-input-3"}},[e("b-form-input",{attrs:{type:"password",id:"text-password","aria-describedby":"password-help-block",state:t.validateState("password")},model:{value:t.$v.form.password.$model,callback:function(e){t.$set(t.$v.form.password,"$model",e)},expression:"$v.form.password.$model"}}),e("b-form-invalid-feedback",{attrs:{id:"input-3-live-feedback"}},[t._v("This is a required field and must be at least 6 characters.")])],1),t.isPending?e("div",{staticClass:"d-grid"},[e("b-button",{attrs:{block:"",disabled:"",type:"button"}},[t._v("Loading...")])],1):e("div",{staticClass:"d-grid"},[e("b-button",{attrs:{block:"",type:"submit",variant:"primary"}},[t._v("Register")])],1)],1),t.errorMessge?e("div",{staticClass:"text-danger my-2"},[t._v(" "+t._s(t.errorMessge)+" ")]):t._e()],1)])},r=[],s=(n(7658),n(4951)),o=n(5795),a=n(7669),u=n(8829),l=n(3797),c={mixins:[s.oE],data(){return{form:{userName:null,email:null,password:null},errorMessge:null,isPending:!1}},validations:{form:{email:{required:o.C1},userName:{required:o.C1,minLength:(0,o.Ei)(3)},password:{required:o.C1,minLength:(0,o.Ei)(6)}}},methods:{validateState(t){const{$dirty:e,$error:n}=this.$v.form[t];return e?!n:null},resetForm(){this.form={userName:null,password:null,email:null},this.$nextTick((()=>{this.$v.$reset()}))},async onSubmit(){if(this.$v.form.$touch(),!this.$v.form.$anyError){this.isPending=!0,this.errorMessge=null;try{const t=await(0,u.Xb)(a.I,this.form.email,this.form.password);if(!t)throw new Error("Could not createa new user.");return await(0,u.ck)(a.I.currentUser,{displayName:this.form.userName}),l.Z.push({name:"admin",params:""}),t}catch(t){"auth/email-already-in-use"===t.code&&(this.errorMessge="Email already in use"),console.log(t)}finally{this.isPending=!1,this.errorMessge=null}}}}},h=c,d=n(1001),f=(0,d.Z)(h,i,r,!1,null,"63148470",null),p=f.exports},6390:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return we}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-5"},[e("vue-dropzone",{ref:"imgDropzone",attrs:{id:"imgDropzone",options:t.dropzoneOptions},on:{"vdropzone-complete":t.afterComplete}}),t.images.length>0?e("div",{staticClass:"row mt-4"},t._l(t.images,(function(t,n){return e("div",{key:n,staticClass:"col-12 col-lg-2 mb-4"},[e("img",{staticStyle:{width:"100%",height:"185px","object-fit":"cover"},attrs:{src:t.src,alt:""}})])})),0):t._e()],1)},r=[],s=(n(7658),n(2801),n(9684)),o=n(223),a=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u="firebasestorage.googleapis.com",l="storageBucket",c=12e4,h=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d extends o.ZR{constructor(t,e,n=0){super(m(t),`Firebase Storage: ${e} (${m(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return m(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var f,p;function m(t){return"storage/"+t}function g(){const t="An unknown error occurred, please check the error payload for server response.";return new d(f.UNKNOWN,t)}function v(t){return new d(f.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function y(t){return new d(f.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function w(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(f.UNAUTHENTICATED,t)}function b(){return new d(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _(t){return new d(f.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function E(){return new d(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function C(){return new d(f.CANCELED,"User canceled the upload/download.")}function T(t){return new d(f.INVALID_URL,"Invalid URL '"+t+"'.")}function k(t){return new d(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function I(){return new d(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+l+"' property when initializing the app?")}function S(){return new d(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function A(){return new d(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function x(t){return new d(f.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function D(t){return new d(f.INVALID_ARGUMENT,t)}function N(){return new d(f.APP_DELETED,"The Firebase app was deleted.")}function P(t){return new d(f.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function R(t,e){return new d(f.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function O(t){throw new d(f.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(f||(f={}));class F{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=F.makeFromUrl(t,e)}catch(i){return new F(t,"")}if(""===n.path)return n;throw k(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+i+s,"i"),a={bucket:1,path:3};function l(t){t.path_=decodeURIComponent(t.path)}const c="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},m=e===u?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${g}`,"i"),y={bucket:1,path:2},w=[{regex:o,indices:a,postModify:r},{regex:f,indices:p,postModify:l},{regex:v,indices:y,postModify:l}];for(let u=0;u<w.length;u++){const e=w[u],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let r=i[e.indices.path];r||(r=""),n=new F(t,r),e.postModify(n);break}}if(null==n)throw T(t);return n}}class M{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function u(){return 2===a}let l=!1;function c(...t){l||(l=!0,e.apply(null,t))}function h(e){r=setTimeout((()=>{r=null,t(f,u())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(l)return void d();if(t)return d(),void c.call(null,t,...e);const n=u()||o;if(n)return d(),void c.call(null,t,...e);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let p=!1;function m(t){p||(p=!0,d(),l||(null!==r?(t||(a=2),clearTimeout(r),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function U(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){return void 0!==t}function V(t){return"object"===typeof t&&!Array.isArray(t)}function j(t){return"string"===typeof t||t instanceof String}function q(t){return $()&&t instanceof Blob}function $(){return"undefined"!==typeof Blob&&!(0,o.UG)()}function B(t,e,n,i){if(i<e)throw D(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw D(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function Q(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(t,e){const n=t>=500&&t<600,i=[408,429],r=-1!==i.indexOf(t),s=-1!==e.indexOf(t);return n||r||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(p||(p={}));class G{constructor(t,e,n,i,r,s,o,a,u,l,c,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=c,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new W(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===p.NO_ERROR,r=n.getStatus();if(!e||H(r,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===p.ABORT;return void t(!1,new W(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new W(s,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());z(t)?n(t):n()}catch(s){i(s)}else if(null!==r){const t=g();t.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,t)):i(t)}else if(e.canceled){const t=this.appDelete_?N():C();i(t)}else{const t=E();i(t)}};this.canceled_?e(!1,new W(!1,null,!0)):this.backoffId_=L(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&U(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class W{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function X(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Y(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function J(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Z(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function tt(t,e,n,i,r,s,o=!0){const a=Q(t.urlParams),u=t.url+a,l=Object.assign({},t.headers);return J(l,e),X(l,n),Y(l,s),Z(l,i),new G(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function nt(...t){const e=et();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if($())return new Blob(t);throw new d(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function it(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){if("undefined"===typeof atob)throw x("base-64");return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ot{constructor(t,e){this.data=t,this.contentType=e||null}}function at(t,e){switch(t){case st.RAW:return new ot(ut(e));case st.BASE64:case st.BASE64URL:return new ot(ct(t,e));case st.DATA_URL:return new ot(dt(e),ft(e))}throw g()}function ut(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(r){const r=i,s=t.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320===(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function lt(t){let e;try{e=decodeURIComponent(t)}catch(n){throw R(st.DATA_URL,"Malformed data URL.")}return ut(e)}function ct(t,e){switch(t){case st.BASE64:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){const e=n?"-":"_";throw R(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case st.BASE64URL:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){const e=n?"+":"/";throw R(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=rt(e)}catch(r){if(r.message.includes("polyfill"))throw r;throw R(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class ht{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw R(st.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=pt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function dt(t){const e=new ht(t);return e.base64?ct(st.BASE64,e.rest):lt(e.rest)}function ft(t){const e=new ht(t);return e.contentType}function pt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e){let n=0,i="";q(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(q(this.data_)){const n=this.data_,i=it(n,t,e);return null===i?null:new mt(i)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new mt(n,!0)}}static getBlob(...t){if($()){const e=t.map((t=>t instanceof mt?t.data_:t));return new mt(nt.apply(null,e))}{const e=t.map((t=>j(t)?at(st.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const i=new Uint8Array(n);let r=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)i[r++]=t[e]})),new mt(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return V(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function yt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function wt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return e}class _t{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||bt}}let Et=null;function Ct(t){return!j(t)||t.length<2?t:wt(t)}function Tt(){if(Et)return Et;const t=[];function e(t,e){return Ct(e)}t.push(new _t("bucket")),t.push(new _t("generation")),t.push(new _t("metageneration")),t.push(new _t("name","fullPath",!0));const n=new _t("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const r=new _t("size");return r.xform=i,t.push(r),t.push(new _t("timeCreated")),t.push(new _t("updated")),t.push(new _t("md5Hash",null,!0)),t.push(new _t("cacheControl",null,!0)),t.push(new _t("contentDisposition",null,!0)),t.push(new _t("contentEncoding",null,!0)),t.push(new _t("contentLanguage",null,!0)),t.push(new _t("contentType",null,!0)),t.push(new _t("metadata","customMetadata",!0)),Et=t,Et}function kt(t,e){function n(){const n=t["bucket"],i=t["fullPath"],r=new F(n,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function It(t,e,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const t=n[s];i[t.local]=t.xform(i,e[t.server])}return kt(i,t),i}function St(t,e,n){const i=gt(e);if(null===i)return null;const r=i;return It(t,r,n)}function At(t,e,n,i){const r=gt(e);if(null===r)return null;if(!j(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),u=a.map((e=>{const r=t["bucket"],s=t["fullPath"],a="/b/"+o(r)+"/o/"+o(s),u=K(a,n,i),l=Q({alt:"media",token:e});return u+l}));return u[0]}function xt(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t){if(!t)throw g()}function Pt(t,e){function n(n,i){const r=St(t,i,e);return Nt(null!==r),r}return n}function Rt(t,e){function n(n,i){const r=St(t,i,e);return Nt(null!==r),At(r,i,t.host,t._protocol)}return n}function Ot(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?b():w():402===e.getStatus()?y(t.bucket):403===e.getStatus()?_(t.path):n,i.status=e.getStatus(),i.serverResponse=n.serverResponse,i}return e}function Ft(t){const e=Ot(t);function n(n,i){let r=e(n,i);return 404===n.getStatus()&&(r=v(t.path)),r.serverResponse=i.serverResponse,r}return n}function Mt(t,e,n){const i=e.fullServerUrl(),r=K(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Dt(r,s,Rt(t,n),o);return a.errorHandler=Ft(e),a}function Lt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Ut(t,e,n){const i=Object.assign({},n);return i["fullPath"]=t.path,i["size"]=e.size(),i["contentType"]||(i["contentType"]=Lt(null,e)),i}function zt(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=Ut(e,i,r),c=xt(l,n),h="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+u+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+u+"--",f=mt.getBlob(h,i,d);if(null===f)throw S();const p={name:l["fullPath"]},m=K(s,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,y=new Dt(m,g,Pt(t,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Ot(e),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Vt=null;class jt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=p.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=p.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=p.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw O("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw O("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw O("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw O("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw O("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class qt extends jt{initXhr(){this.xhr_.responseType="text"}}function $t(){return Vt?Vt():new qt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{constructor(t,e){this._service=t,this._location=e instanceof F?e:F.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Bt(t,e)}get root(){const t=new F(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wt(this._location.path)}get storage(){return this._service}get parent(){const t=vt(this._location.path);if(null===t)return null;const e=new F(this._location.bucket,t);return new Bt(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw P(t)}}function Kt(t,e,n){t._throwIfRoot("uploadBytes");const i=zt(t.storage,t._location,Tt(),new mt(e,!0),n);return t.storage.makeRequestWithTokens(i,$t).then((e=>({metadata:e,ref:t})))}function Qt(t){t._throwIfRoot("getDownloadURL");const e=Mt(t.storage,t._location,Tt());return t.storage.makeRequestWithTokens(e,$t).then((t=>{if(null===t)throw A();return t}))}function Ht(t,e){const n=yt(t._location.path,e),i=new F(t._location.bucket,n);return new Bt(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t){return/^[A-Za-z]+:\/\//.test(t)}function Wt(t,e){return new Bt(t,e)}function Xt(t,e){if(t instanceof te){const n=t;if(null==n._bucket)throw I();const i=new Bt(n,n._bucket);return null!=e?Xt(i,e):i}return void 0!==e?Ht(t,e):t}function Yt(t,e){if(e&&Gt(e)){if(t instanceof te)return Wt(t,e);throw D("To use ref(service, url), the first argument must be a Storage instance.")}return Xt(t,e)}function Jt(t,e){const n=null===e||void 0===e?void 0:e[l];return null==n?null:F.makeFromBucketSpec(n,t)}function Zt(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken="string"===typeof r?r:(0,o.Sg)(r,t.app.options.projectId))}class te{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=u,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=h,this._requests=new Set,this._bucket=null!=i?F.makeFromBucketSpec(i,this._host):Jt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=F.makeFromBucketSpec(this._url,t):this._bucket=Jt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){B("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){B("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Bt(this,t)}_makeRequest(t,e,n,i,r=!0){if(this._deleted)return new M(N());{const s=tt(t,this._appId,n,i,e,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const ee="@firebase/storage",ne="0.11.1",ie="storage";function re(t,e,n){return t=(0,o.m9)(t),Kt(t,e,n)}function se(t){return t=(0,o.m9)(t),Qt(t)}function oe(t,e){return t=(0,o.m9)(t),Yt(t,e)}function ae(t=(0,s.Mq)(),e){t=(0,o.m9)(t);const n=(0,s.qX)(t,ie),i=n.getImmediate({identifier:e}),r=(0,o.P0)("storage");return r&&ue(i,...r),i}function ue(t,e,n,i={}){Zt(t,e,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new te(n,i,r,e,s.Jn)}function ce(){(0,s.Xd)(new a.wA(ie,le,"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(ee,ne,""),(0,s.KN)(ee,ne,"esm2017")}ce();var he=n(36),de=n(1139),fe=n.n(de);let pe=n(3991);var me={components:{vueDropzone:fe()},data(){return{description:"",images:[],valueOption:null,dropzoneOptions:{url:"https://httpbin.org/post",thumbnailWidth:250,thumbnailHeight:250,maxFilesize:.5,addRemoveLinks:!1,acceptedFiles:".jpg, jpeg, .png, .mp4"},files:[],show:!0}},mounted(){this.getData()},methods:{async afterComplete(t){try{const n=pe.v1();var e={contentType:"image/png, video/mp4"};const i=ae(),r=(0,he.ad)(),s=(0,he.hJ)(r,"images"),o=(0,he.JU)(s),a=await oe(i,`images/${n}.png`);let u="";await re(a,t,e),await se(a).then((function(t){u=t}));const l={myUrl:u};(0,he.pl)(o,l),this.images.push({src:u}),this.$refs.imgDropzone.removeFile(t)}catch(n){console.log(n)}},uploadFiles(){const t=this.$refs.fileInput,e=t.files;for(let n=0;n<e.length;n++){const t=e[n],i=new FileReader;i.onload=t=>{this.images.push(t.target.result)},i.readAsDataURL(t)}},removeImage(t){this.images.splice(t,1)},async getData(){const t=(0,he.ad)(),e=(0,he.hJ)(t,"images"),n=await(0,he.PL)(e);n.forEach((t=>{this.images.push({src:t.data().myUrl})}))}}},ge=me,ve=n(1001),ye=(0,ve.Z)(ge,i,r,!1,null,"39eae4de",null),we=ye.exports},4228:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return E}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mt-5"},[t._m(0),e("table-images",{attrs:{columns:t.columns}}),e("model-image",{attrs:{images:t.images,models:"db_projects"}})],1)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap-image--loader"},[e("div",{staticClass:"placehoder p-4 text-center"},[t._v("No file Selected")]),e("div",{staticClass:"mt-2"},[e("button",{staticClass:"btn btn-outline-primary btn-lg",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}},[t._v(" Select ")])])])}],s=(n(7658),n(36)),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-xl"},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-lg-8"},[t.images.length>0?e("div",{staticClass:"row mt-4"},t._l(t.images,(function(n,i){return e("div",{key:i,staticClass:"col-12 col-lg-2 mb-4 cursor-pointer p-2 position-relative",class:t.selectItem===i?"image-select":"",on:{click:function(e){return t.toggleActiveClass(i)}}},[e("img",{staticStyle:{width:"100%",height:"100%","object-fit":"cover",margin:"0"},attrs:{src:n.src,alt:""}}),t.selectItem===i?e("button",{staticClass:"check-btn",attrs:{type:"button",tabindex:"0"}},[e("b-icon",{attrs:{icon:"check-square","aria-hidden":"true"}})],1):t._e()])})),0):e("div",[t._v("No images")])]),t.srcActtacImage?e("div",{staticClass:"col-12 col-lg-4"},[e("div",{staticClass:"attach p-4 text-end"},[e("h3",{staticClass:"attach-title"},[t._v("ATTACHMENT DETAILS")]),e("div",{staticClass:"attach-info text-end"},[e("div",{staticClass:"attach-image"},[e("img",{attrs:{src:t.srcActtacImage,alt:""}})])]),e("div",{staticClass:"mb-3"},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"exampleFormControlInput1"}},[t._v("Title Image")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nameProject,expression:"nameProject"}],staticClass:"form-control",attrs:{type:"text",id:"exampleFormControlInput1",placeholder:"Name Card"},domProps:{value:t.nameProject},on:{input:function(e){e.target.composing||(t.nameProject=e.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"exampleFormControlTextarea1"}},[t._v("Alt Image")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.altImage,expression:"altImage"}],staticClass:"form-control",attrs:{size:"sm",id:"exampleFormControlTextarea1",rows:"2"},domProps:{value:t.altImage},on:{input:function(e){e.target.composing||(t.altImage=e.target.value)}}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:""}},[t._v("Select Project")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.valueSelect,expression:"valueSelect"}],staticClass:"form-select",attrs:{"aria-label":"Default select example"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.valueSelect=e.target.multiple?n:n[0]}}},t._l(t.selectOptions,(function(n){return e("option",{key:n.title,domProps:{value:n.value}},[t._v(" "+t._s(n.title)+" ")])})),0)]),e("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.uploadImageProject(t.srcActtacImage)}}},[t._v(" Select ")])])])]):t._e()])])])])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h1",{staticClass:"modal-title fs-5",attrs:{id:"exampleModalLabel"}},[t._v("Media")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],u={props:{images:{type:Array,require:!0},models:{type:String,require:!0}},data(){return{nameProject:"",altImage:"",valueSelect:"general",selectItem:null,selectOptions:[{title:"General",value:"general"},{title:"Key Visual",value:"key-visual"},{title:"Beauty",value:"beauty"},{title:"Branding",value:"branding"},{title:"F&B",value:"f&b"},{title:"Motion & Illustration ",value:"motionAi"}]}},computed:{srcActtacImage(){return this.selectItem||0===this.selectItem?this.images[this.selectItem].src:""}},methods:{toggleActiveClass(t){this.selectItem=t,console.log(this.selectItem)},uploadImageProject(t){try{const e=(0,s.ad)(),n=(0,s.hJ)(e,this.models),i=(0,s.JU)(n),r={myUrl:t,atl:this.altImage,typePr:this.valueSelect,namePr:this.nameProject,isActive:!0};(0,s.pl)(i,r),this.$toast.open({message:"Upload is success",type:"success"}),this.altImage="",this.nameProject="",this.valueSelect=""}catch(e){console.log(e),this.$toast.open({message:"Something went wrong!",type:"error"})}}}},l=u,c=n(1001),h=(0,c.Z)(l,o,a,!1,null,"0ea18196",null),d=h.exports,f=function(){var t=this,e=t._self._c;return e("table",{staticClass:"table"},[e("thead",[e("tr",t._l(t.columns,(function(n,i){return e("th",{key:i,attrs:{scope:"col"}},[t._v(" "+t._s(n.title)+" ")])})),0)]),e("tbody",t._l(t.allData,(function(n,i){return e("tr",{key:i},[e("td",{attrs:{scope:"row"}},[t._v(t._s(i+1))]),e("td",[e("img",{staticStyle:{width:"80px"},attrs:{src:n.myUrl,alt:""}})]),e("td",[t._v(t._s(n.namePr))]),e("td",[t._v(t._s(n.atl))]),e("td",[e("div",{staticClass:"form-check form-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.isActive,expression:"data.isActive"}],staticClass:"form-check-input",attrs:{type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",disabled:""},domProps:{checked:Array.isArray(n.isActive)?t._i(n.isActive,null)>-1:n.isActive},on:{change:function(e){var i=n.isActive,r=e.target,s=!!r.checked;if(Array.isArray(i)){var o=null,a=t._i(i,o);r.checked?a<0&&t.$set(n,"isActive",i.concat([o])):a>-1&&t.$set(n,"isActive",i.slice(0,a).concat(i.slice(a+1)))}else t.$set(n,"isActive",s)}}})])])])})),0)])},p=[],m={props:{columns:{type:Array,require:!0}},data(){return{counter:1,allData:[]}},mounted(){this.getDatas()},methods:{async getDatas(){const t=(0,s.ad)(),e=await(0,s.PL)((0,s.hJ)(t,"db_projects"));e.forEach((t=>{this.allData.push(t.data())}))}}},g=m,v=(0,c.Z)(g,f,p,!1,null,"79b294aa",null),y=v.exports,w={components:{ModelImage:d,TableImages:y},data(){return{description:"",images:[],valueOption:null,files:[],show:!0,columns:[{title:"#",type:"id"},{title:"Image",type:"image"},{title:"Name image",type:"name"},{title:"Alt Image",type:"alt"},{title:"Select",type:"select"}]}},mounted(){this.getImages()},methods:{removeImage(t){this.images.splice(t,1)},async getImages(){const t=(0,s.ad)(),e=(0,s.hJ)(t,"images"),n=await(0,s.PL)(e);n.forEach((t=>{this.images.push({src:t.data().myUrl})}))}}},b=w,_=(0,c.Z)(b,i,r,!1,null,"318d03d0",null),E=_.exports},3991:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"NIL",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(e,"parse",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"v1",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"v3",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"v4",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"v5",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"validate",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"version",{enumerable:!0,get:function(){return u.default}});var i=d(n(8394)),r=d(n(33)),s=d(n(6862)),o=d(n(5599)),a=d(n(6129)),u=d(n(2719)),l=d(n(6564)),c=d(n(7736)),h=d(n(7810));function d(t){return t&&t.__esModule?t:{default:t}}},2544:function(t,e,n){"use strict";function i(t){if("string"===typeof t){const e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(let n=0;n<e.length;++n)t[n]=e.charCodeAt(n)}return r(o(a(t),8*t.length))}function r(t){const e=[],n=32*t.length,i="0123456789abcdef";for(let r=0;r<n;r+=8){const n=t[r>>5]>>>r%32&255,s=parseInt(i.charAt(n>>>4&15)+i.charAt(15&n),16);e.push(s)}return e}function s(t){return 14+(t+64>>>9<<4)+1}function o(t,e){t[e>>5]|=128<<e%32,t[s(e)-1]=e;let n=1732584193,i=-271733879,r=-1732584194,o=271733878;for(let s=0;s<t.length;s+=16){const e=n,a=i,l=r,c=o;n=h(n,i,r,o,t[s],7,-680876936),o=h(o,n,i,r,t[s+1],12,-389564586),r=h(r,o,n,i,t[s+2],17,606105819),i=h(i,r,o,n,t[s+3],22,-1044525330),n=h(n,i,r,o,t[s+4],7,-176418897),o=h(o,n,i,r,t[s+5],12,1200080426),r=h(r,o,n,i,t[s+6],17,-1473231341),i=h(i,r,o,n,t[s+7],22,-45705983),n=h(n,i,r,o,t[s+8],7,1770035416),o=h(o,n,i,r,t[s+9],12,-1958414417),r=h(r,o,n,i,t[s+10],17,-42063),i=h(i,r,o,n,t[s+11],22,-1990404162),n=h(n,i,r,o,t[s+12],7,1804603682),o=h(o,n,i,r,t[s+13],12,-40341101),r=h(r,o,n,i,t[s+14],17,-1502002290),i=h(i,r,o,n,t[s+15],22,1236535329),n=d(n,i,r,o,t[s+1],5,-165796510),o=d(o,n,i,r,t[s+6],9,-1069501632),r=d(r,o,n,i,t[s+11],14,643717713),i=d(i,r,o,n,t[s],20,-373897302),n=d(n,i,r,o,t[s+5],5,-701558691),o=d(o,n,i,r,t[s+10],9,38016083),r=d(r,o,n,i,t[s+15],14,-660478335),i=d(i,r,o,n,t[s+4],20,-405537848),n=d(n,i,r,o,t[s+9],5,568446438),o=d(o,n,i,r,t[s+14],9,-1019803690),r=d(r,o,n,i,t[s+3],14,-187363961),i=d(i,r,o,n,t[s+8],20,1163531501),n=d(n,i,r,o,t[s+13],5,-1444681467),o=d(o,n,i,r,t[s+2],9,-51403784),r=d(r,o,n,i,t[s+7],14,1735328473),i=d(i,r,o,n,t[s+12],20,-1926607734),n=f(n,i,r,o,t[s+5],4,-378558),o=f(o,n,i,r,t[s+8],11,-2022574463),r=f(r,o,n,i,t[s+11],16,1839030562),i=f(i,r,o,n,t[s+14],23,-35309556),n=f(n,i,r,o,t[s+1],4,-1530992060),o=f(o,n,i,r,t[s+4],11,1272893353),r=f(r,o,n,i,t[s+7],16,-155497632),i=f(i,r,o,n,t[s+10],23,-1094730640),n=f(n,i,r,o,t[s+13],4,681279174),o=f(o,n,i,r,t[s],11,-358537222),r=f(r,o,n,i,t[s+3],16,-722521979),i=f(i,r,o,n,t[s+6],23,76029189),n=f(n,i,r,o,t[s+9],4,-640364487),o=f(o,n,i,r,t[s+12],11,-421815835),r=f(r,o,n,i,t[s+15],16,530742520),i=f(i,r,o,n,t[s+2],23,-995338651),n=p(n,i,r,o,t[s],6,-198630844),o=p(o,n,i,r,t[s+7],10,1126891415),r=p(r,o,n,i,t[s+14],15,-1416354905),i=p(i,r,o,n,t[s+5],21,-57434055),n=p(n,i,r,o,t[s+12],6,1700485571),o=p(o,n,i,r,t[s+3],10,-1894986606),r=p(r,o,n,i,t[s+10],15,-1051523),i=p(i,r,o,n,t[s+1],21,-2054922799),n=p(n,i,r,o,t[s+8],6,1873313359),o=p(o,n,i,r,t[s+15],10,-30611744),r=p(r,o,n,i,t[s+6],15,-1560198380),i=p(i,r,o,n,t[s+13],21,1309151649),n=p(n,i,r,o,t[s+4],6,-145523070),o=p(o,n,i,r,t[s+11],10,-1120210379),r=p(r,o,n,i,t[s+2],15,718787259),i=p(i,r,o,n,t[s+9],21,-343485551),n=u(n,e),i=u(i,a),r=u(r,l),o=u(o,c)}return[n,i,r,o]}function a(t){if(0===t.length)return[];const e=8*t.length,n=new Uint32Array(s(e));for(let i=0;i<e;i+=8)n[i>>5]|=(255&t[i/8])<<i%32;return n}function u(t,e){const n=(65535&t)+(65535&e),i=(t>>16)+(e>>16)+(n>>16);return i<<16|65535&n}function l(t,e){return t<<e|t>>>32-e}function c(t,e,n,i,r,s){return u(l(u(u(e,t),u(i,s)),r),n)}function h(t,e,n,i,r,s,o){return c(e&n|~e&i,t,e,r,s,o)}function d(t,e,n,i,r,s,o){return c(e&i|n&~i,t,e,r,s,o)}function f(t,e,n,i,r,s,o){return c(e^n^i,t,e,r,s,o)}function p(t,e,n,i,r,s,o){return c(n^(e|~i),t,e,r,s,o)}n(7658),Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var m=i;e["default"]=m},2018:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;const n="undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var i={randomUUID:n};e["default"]=i},6129:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var n="00000000-0000-0000-0000-000000000000";e["default"]=n},7810:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=r(n(6564));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){if(!(0,i.default)(t))throw TypeError("Invalid UUID");let e;const n=new Uint8Array(16);return n[0]=(e=parseInt(t.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=255&e,n[4]=(e=parseInt(t.slice(9,13),16))>>>8,n[5]=255&e,n[6]=(e=parseInt(t.slice(14,18),16))>>>8,n[7]=255&e,n[8]=(e=parseInt(t.slice(19,23),16))>>>8,n[9]=255&e,n[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=255&e,n}var o=s;e["default"]=o},5410:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var n=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;e["default"]=n},4899:function(t,e){"use strict";let n;Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r;const i=new Uint8Array(16);function r(){if(!n&&(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(i)}},3852:function(t,e,n){"use strict";function i(t,e,n,i){switch(t){case 0:return e&n^~e&i;case 1:return e^n^i;case 2:return e&n^e&i^n&i;case 3:return e^n^i}}function r(t,e){return t<<e|t>>>32-e}function s(t){const e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"===typeof t){const e=unescape(encodeURIComponent(t));t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const s=t.length/4+2,o=Math.ceil(s/16),a=new Array(o);for(let i=0;i<o;++i){const e=new Uint32Array(16);for(let n=0;n<16;++n)e[n]=t[64*i+4*n]<<24|t[64*i+4*n+1]<<16|t[64*i+4*n+2]<<8|t[64*i+4*n+3];a[i]=e}a[o-1][14]=8*(t.length-1)/Math.pow(2,32),a[o-1][14]=Math.floor(a[o-1][14]),a[o-1][15]=8*(t.length-1)&4294967295;for(let u=0;u<o;++u){const t=new Uint32Array(80);for(let e=0;e<16;++e)t[e]=a[u][e];for(let e=16;e<80;++e)t[e]=r(t[e-3]^t[e-8]^t[e-14]^t[e-16],1);let s=n[0],o=n[1],l=n[2],c=n[3],h=n[4];for(let n=0;n<80;++n){const a=Math.floor(n/20),u=r(s,5)+i(a,o,l,c)+h+e[a]+t[n]>>>0;h=c,c=l,l=r(o,30)>>>0,o=s,s=u}n[0]=n[0]+s>>>0,n[1]=n[1]+o>>>0,n[2]=n[2]+l>>>0,n[3]=n[3]+c>>>0,n[4]=n[4]+h>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]}n(7658),Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var o=s;e["default"]=o},7736:function(t,e,n){"use strict";n(7658),Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0,e.unsafeStringify=o;var i=r(n(6564));function r(t){return t&&t.__esModule?t:{default:t}}const s=[];for(let l=0;l<256;++l)s.push((l+256).toString(16).slice(1));function o(t,e=0){return(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase()}function a(t,e=0){const n=o(t,e);if(!(0,i.default)(n))throw TypeError("Stringified UUID is invalid");return n}var u=a;e["default"]=u},8394:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=s(n(4899)),r=n(7736);function s(t){return t&&t.__esModule?t:{default:t}}let o,a,u=0,l=0;function c(t,e,n){let s=e&&n||0;const c=e||new Array(16);t=t||{};let h=t.node||o,d=void 0!==t.clockseq?t.clockseq:a;if(null==h||null==d){const e=t.random||(t.rng||i.default)();null==h&&(h=o=[1|e[0],e[1],e[2],e[3],e[4],e[5]]),null==d&&(d=a=16383&(e[6]<<8|e[7]))}let f=void 0!==t.msecs?t.msecs:Date.now(),p=void 0!==t.nsecs?t.nsecs:l+1;const m=f-u+(p-l)/1e4;if(m<0&&void 0===t.clockseq&&(d=d+1&16383),(m<0||f>u)&&void 0===t.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=f,l=p,a=d,f+=122192928e5;const g=(1e4*(268435455&f)+p)%4294967296;c[s++]=g>>>24&255,c[s++]=g>>>16&255,c[s++]=g>>>8&255,c[s++]=255&g;const v=f/4294967296*1e4&268435455;c[s++]=v>>>8&255,c[s++]=255&v,c[s++]=v>>>24&15|16,c[s++]=v>>>16&255,c[s++]=d>>>8|128,c[s++]=255&d;for(let i=0;i<6;++i)c[s+i]=h[i];return e||(0,r.unsafeStringify)(c)}var h=c;e["default"]=h},33:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=s(n(7694)),r=s(n(2544));function s(t){return t&&t.__esModule?t:{default:t}}const o=(0,i.default)("v3",48,r.default);var a=o;e["default"]=a},7694:function(t,e,n){"use strict";n(7658),Object.defineProperty(e,"__esModule",{value:!0}),e.URL=e.DNS=void 0,e["default"]=l;var i=n(7736),r=s(n(7810));function s(t){return t&&t.__esModule?t:{default:t}}function o(t){t=unescape(encodeURIComponent(t));const e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n));return e}const a="6ba7b810-9dad-11d1-80b4-00c04fd430c8";e.DNS=a;const u="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function l(t,e,n){function s(t,s,a,u){var l;if("string"===typeof t&&(t=o(t)),"string"===typeof s&&(s=(0,r.default)(s)),16!==(null===(l=s)||void 0===l?void 0:l.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let c=new Uint8Array(16+t.length);if(c.set(s),c.set(t,s.length),c=n(c),c[6]=15&c[6]|e,c[8]=63&c[8]|128,a){u=u||0;for(let t=0;t<16;++t)a[u+t]=c[t];return a}return(0,i.unsafeStringify)(c)}try{s.name=t}catch(l){}return s.DNS=a,s.URL=u,s}e.URL=u},6862:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=o(n(2018)),r=o(n(4899)),s=n(7736);function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n){if(i.default.randomUUID&&!e&&!t)return i.default.randomUUID();t=t||{};const o=t.random||(t.rng||r.default)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=o[t];return e}return(0,s.unsafeStringify)(o)}var u=a;e["default"]=u},5599:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=s(n(7694)),r=s(n(3852));function s(t){return t&&t.__esModule?t:{default:t}}const o=(0,i.default)("v5",80,r.default);var a=o;e["default"]=a},6564:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=r(n(5410));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){return"string"===typeof t&&i.default.test(t)}var o=s;e["default"]=o},2719:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=r(n(6564));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){if(!(0,i.default)(t))throw TypeError("Invalid UUID");return parseInt(t.slice(14,15),16)}var o=s;e["default"]=o},1139:function(t,e,n){n(7658),n(2801),function(e,n){t.exports=n()}(0,(function(){"use strict";var t,e=(function(t){var e=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(){i(this,t)}return e(t,[{key:"on",value:function(t,e){return this._callbacks=this._callbacks||{},this._callbacks[t]||(this._callbacks[t]=[]),this._callbacks[t].push(e),this}},{key:"emit",value:function(t){this._callbacks=this._callbacks||{};var e=this._callbacks[t];if(e){for(var n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];for(var s=0,o=o=e;;){if(s>=o.length)break;o[s++].apply(this,i)}}return this}},{key:"off",value:function(t,e){if(!this._callbacks||0===arguments.length)return this._callbacks={},this;var n=this._callbacks[t];if(!n)return this;if(1===arguments.length)return delete this._callbacks[t],this;for(var i=0;i<n.length;i++)if(n[i]===e){n.splice(i,1);break}return this}}]),t}(),s=function(t){function s(t,e){i(this,s);var r,o=n(this,(s.__proto__||Object.getPrototypeOf(s)).call(this)),a=void 0;if(o.element=t,o.version=s.version,o.defaultOptions.previewTemplate=o.defaultOptions.previewTemplate.replace(/\n*/g,""),o.clickableElements=[],o.listeners=[],o.files=[],"string"==typeof o.element&&(o.element=document.querySelector(o.element)),!o.element||null==o.element.nodeType)throw new Error("Invalid dropzone element.");if(o.element.dropzone)throw new Error("Dropzone already attached.");s.instances.push(o),o.element.dropzone=o;var u,l=null!=(r=s.optionsForElement(o.element))?r:{};if(o.options=s.extend({},o.defaultOptions,l,null!=e?e:{}),o.options.forceFallback||!s.isBrowserSupported())return u=o.options.fallback.call(o),n(o,u);if(null==o.options.url&&(o.options.url=o.element.getAttribute("action")),!o.options.url)throw new Error("No URL provided.");if(o.options.acceptedFiles&&o.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(o.options.uploadMultiple&&o.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");return o.options.acceptedMimeTypes&&(o.options.acceptedFiles=o.options.acceptedMimeTypes,delete o.options.acceptedMimeTypes),null!=o.options.renameFilename&&(o.options.renameFile=function(t){return o.options.renameFilename.call(o,t.name,t)}),o.options.method=o.options.method.toUpperCase(),(a=o.getExistingFallback())&&a.parentNode&&a.parentNode.removeChild(a),!1!==o.options.previewsContainer&&(o.options.previewsContainer?o.previewsContainer=s.getElement(o.options.previewsContainer,"previewsContainer"):o.previewsContainer=o.element),o.options.clickable&&(!0===o.options.clickable?o.clickableElements=[o.element]:o.clickableElements=s.getElements(o.options.clickable,"clickable")),o.init(),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(s,r),e(s,null,[{key:"initClass",value:function(){this.prototype.Emitter=r,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,timeout:3e4,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2e6,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init:function(){},params:function(t,e,n){if(n)return{dzuuid:n.file.upload.uuid,dzchunkindex:n.index,dztotalfilesize:n.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:n.file.upload.totalChunkCount,dzchunkbyteoffset:n.index*this.options.chunkSize}},accept:function(t,e){return e()},chunksUploaded:function(t,e){e()},fallback:function(){var t=void 0;this.element.className=this.element.className+" dz-browser-not-supported";for(var e=0,n=n=this.element.getElementsByTagName("div");;){if(e>=n.length)break;var i=n[e++];if(/(^| )dz-message($| )/.test(i.className)){t=i,i.className="dz-message";break}}t||(t=s.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(t));var r=t.getElementsByTagName("span")[0];return r&&(null!=r.textContent?r.textContent=this.options.dictFallbackMessage:null!=r.innerText&&(r.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(t,e,n,i){var r={srcX:0,srcY:0,srcWidth:t.width,srcHeight:t.height},s=t.width/t.height;null==e&&null==n?(e=r.srcWidth,n=r.srcHeight):null==e?e=n*s:null==n&&(n=e/s);var o=(e=Math.min(e,r.srcWidth))/(n=Math.min(n,r.srcHeight));if(r.srcWidth>e||r.srcHeight>n)if("crop"===i)s>o?(r.srcHeight=t.height,r.srcWidth=r.srcHeight*o):(r.srcWidth=t.width,r.srcHeight=r.srcWidth/o);else{if("contain"!==i)throw new Error("Unknown resizeMethod '"+i+"'");s>o?n=e/s:e=n*s}return r.srcX=(t.width-r.srcWidth)/2,r.srcY=(t.height-r.srcHeight)/2,r.trgWidth=e,r.trgHeight=n,r},transformFile:function(t,e){return(this.options.resizeWidth||this.options.resizeHeight)&&t.type.match(/image.*/)?this.resizeImage(t,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,e):e(t)},previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',drop:function(t){return this.element.classList.remove("dz-drag-hover")},dragstart:function(t){},dragend:function(t){return this.element.classList.remove("dz-drag-hover")},dragenter:function(t){return this.element.classList.add("dz-drag-hover")},dragover:function(t){return this.element.classList.add("dz-drag-hover")},dragleave:function(t){return this.element.classList.remove("dz-drag-hover")},paste:function(t){},reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(t){var e=this;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){t.previewElement=s.createElement(this.options.previewTemplate.trim()),t.previewTemplate=t.previewElement,this.previewsContainer.appendChild(t.previewElement);for(var n=0,i=i=t.previewElement.querySelectorAll("[data-dz-name]");;){if(n>=i.length)break;var r=i[n++];r.textContent=t.name}for(var o=0,a=a=t.previewElement.querySelectorAll("[data-dz-size]");!(o>=a.length);)(r=a[o++]).innerHTML=this.filesize(t.size);this.options.addRemoveLinks&&(t._removeLink=s.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),t.previewElement.appendChild(t._removeLink));for(var u=function(n){return n.preventDefault(),n.stopPropagation(),t.status===s.UPLOADING?s.confirm(e.options.dictCancelUploadConfirmation,(function(){return e.removeFile(t)})):e.options.dictRemoveFileConfirmation?s.confirm(e.options.dictRemoveFileConfirmation,(function(){return e.removeFile(t)})):e.removeFile(t)},l=0,c=c=t.previewElement.querySelectorAll("[data-dz-remove]");;){if(l>=c.length)break;c[l++].addEventListener("click",u)}}},removedfile:function(t){return null!=t.previewElement&&null!=t.previewElement.parentNode&&t.previewElement.parentNode.removeChild(t.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(t,e){if(t.previewElement){t.previewElement.classList.remove("dz-file-preview");for(var n=0,i=i=t.previewElement.querySelectorAll("[data-dz-thumbnail]");;){if(n>=i.length)break;var r=i[n++];r.alt=t.name,r.src=e}return setTimeout((function(){return t.previewElement.classList.add("dz-image-preview")}),1)}},error:function(t,e){if(t.previewElement){t.previewElement.classList.add("dz-error"),"String"!=typeof e&&e.error&&(e=e.error);for(var n=0,i=i=t.previewElement.querySelectorAll("[data-dz-errormessage]");;){if(n>=i.length)break;i[n++].textContent=e}}},errormultiple:function(){},processing:function(t){if(t.previewElement&&(t.previewElement.classList.add("dz-processing"),t._removeLink))return t._removeLink.innerHTML=this.options.dictCancelUpload},processingmultiple:function(){},uploadprogress:function(t,e,n){if(t.previewElement)for(var i=0,r=r=t.previewElement.querySelectorAll("[data-dz-uploadprogress]");;){if(i>=r.length)break;var s=r[i++];"PROGRESS"===s.nodeName?s.value=e:s.style.width=e+"%"}},totaluploadprogress:function(){},sending:function(){},sendingmultiple:function(){},success:function(t){if(t.previewElement)return t.previewElement.classList.add("dz-success")},successmultiple:function(){},canceled:function(t){return this.emit("error",t,this.options.dictUploadCanceled)},canceledmultiple:function(){},complete:function(t){if(t._removeLink&&(t._removeLink.innerHTML=this.options.dictRemoveFile),t.previewElement)return t.previewElement.classList.add("dz-complete")},completemultiple:function(){},maxfilesexceeded:function(){},maxfilesreached:function(){},queuecomplete:function(){},addedfiles:function(){}},this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}},{key:"extend",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(var r=0,s=s=n;;){if(r>=s.length)break;var o=s[r++];for(var a in o){var u=o[a];t[a]=u}}return t}}]),e(s,[{key:"getAcceptedFiles",value:function(){return this.files.filter((function(t){return t.accepted})).map((function(t){return t}))}},{key:"getRejectedFiles",value:function(){return this.files.filter((function(t){return!t.accepted})).map((function(t){return t}))}},{key:"getFilesWithStatus",value:function(t){return this.files.filter((function(e){return e.status===t})).map((function(t){return t}))}},{key:"getQueuedFiles",value:function(){return this.getFilesWithStatus(s.QUEUED)}},{key:"getUploadingFiles",value:function(){return this.getFilesWithStatus(s.UPLOADING)}},{key:"getAddedFiles",value:function(){return this.getFilesWithStatus(s.ADDED)}},{key:"getActiveFiles",value:function(){return this.files.filter((function(t){return t.status===s.UPLOADING||t.status===s.QUEUED})).map((function(t){return t}))}},{key:"init",value:function(){var t=this;"form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(s.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&function e(){return t.hiddenFileInput&&t.hiddenFileInput.parentNode.removeChild(t.hiddenFileInput),t.hiddenFileInput=document.createElement("input"),t.hiddenFileInput.setAttribute("type","file"),(null===t.options.maxFiles||t.options.maxFiles>1)&&t.hiddenFileInput.setAttribute("multiple","multiple"),t.hiddenFileInput.className="dz-hidden-input",null!==t.options.acceptedFiles&&t.hiddenFileInput.setAttribute("accept",t.options.acceptedFiles),null!==t.options.capture&&t.hiddenFileInput.setAttribute("capture",t.options.capture),t.hiddenFileInput.style.visibility="hidden",t.hiddenFileInput.style.position="absolute",t.hiddenFileInput.style.top="0",t.hiddenFileInput.style.left="0",t.hiddenFileInput.style.height="0",t.hiddenFileInput.style.width="0",s.getElement(t.options.hiddenInputContainer,"hiddenInputContainer").appendChild(t.hiddenFileInput),t.hiddenFileInput.addEventListener("change",(function(){var n=t.hiddenFileInput.files;if(n.length)for(var i=0,r=r=n;!(i>=r.length);){var s=r[i++];t.addFile(s)}return t.emit("addedfiles",n),e()}))}(),this.URL=null!==window.URL?window.URL:window.webkitURL;for(var e=0,n=n=this.events;;){if(e>=n.length)break;var i=n[e++];this.on(i,this.options[i])}this.on("uploadprogress",(function(){return t.updateTotalUploadProgress()})),this.on("removedfile",(function(){return t.updateTotalUploadProgress()})),this.on("canceled",(function(e){return t.emit("complete",e)})),this.on("complete",(function(e){if(0===t.getAddedFiles().length&&0===t.getUploadingFiles().length&&0===t.getQueuedFiles().length)return setTimeout((function(){return t.emit("queuecomplete")}),0)}));var r=function(t){return t.stopPropagation(),t.preventDefault?t.preventDefault():t.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:function(e){return t.emit("dragstart",e)},dragenter:function(e){return r(e),t.emit("dragenter",e)},dragover:function(e){var n=void 0;try{n=e.dataTransfer.effectAllowed}catch(t){}return e.dataTransfer.dropEffect="move"===n||"linkMove"===n?"move":"copy",r(e),t.emit("dragover",e)},dragleave:function(e){return t.emit("dragleave",e)},drop:function(e){return r(e),t.drop(e)},dragend:function(e){return t.emit("dragend",e)}}}],this.clickableElements.forEach((function(e){return t.listeners.push({element:e,events:{click:function(n){return(e!==t.element||n.target===t.element||s.elementInside(n.target,t.element.querySelector(".dz-message")))&&t.hiddenFileInput.click(),!0}}})})),this.enable(),this.options.init.call(this)}},{key:"destroy",value:function(){return this.disable(),this.removeAllFiles(!0),(null!=this.hiddenFileInput?this.hiddenFileInput.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,s.instances.splice(s.instances.indexOf(this),1)}},{key:"updateTotalUploadProgress",value:function(){var t=void 0,e=0,n=0;if(this.getActiveFiles().length){for(var i=0,r=r=this.getActiveFiles();;){if(i>=r.length)break;var s=r[i++];e+=s.upload.bytesSent,n+=s.upload.total}t=100*e/n}else t=100;return this.emit("totaluploadprogress",t,n,e)}},{key:"_getParamName",value:function(t){return"function"==typeof this.options.paramName?this.options.paramName(t):this.options.paramName+(this.options.uploadMultiple?"["+t+"]":"")}},{key:"_renameFile",value:function(t){return"function"!=typeof this.options.renameFile?t.name:this.options.renameFile(t)}},{key:"getFallbackForm",value:function(){var t,e=void 0;if(t=this.getExistingFallback())return t;var n='<div class="dz-fallback">';this.options.dictFallbackText&&(n+="<p>"+this.options.dictFallbackText+"</p>"),n+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>';var i=s.createElement(n);return"FORM"!==this.element.tagName?(e=s.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>')).appendChild(i):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=e?e:i}},{key:"getExistingFallback",value:function(){for(var t=function(t){for(var e=0,n=n=t;;){if(e>=n.length)break;var i=n[e++];if(/(^| )fallback($| )/.test(i.className))return i}},e=["div","form"],n=0;n<e.length;n++){var i,r=e[n];if(i=t(this.element.getElementsByTagName(r)))return i}}},{key:"setupEventListeners",value:function(){return this.listeners.map((function(t){return function(){var e=[];for(var n in t.events){var i=t.events[n];e.push(t.element.addEventListener(n,i,!1))}return e}()}))}},{key:"removeEventListeners",value:function(){return this.listeners.map((function(t){return function(){var e=[];for(var n in t.events){var i=t.events[n];e.push(t.element.removeEventListener(n,i,!1))}return e}()}))}},{key:"disable",value:function(){var t=this;return this.clickableElements.forEach((function(t){return t.classList.remove("dz-clickable")})),this.removeEventListeners(),this.disabled=!0,this.files.map((function(e){return t.cancelUpload(e)}))}},{key:"enable",value:function(){return delete this.disabled,this.clickableElements.forEach((function(t){return t.classList.add("dz-clickable")})),this.setupEventListeners()}},{key:"filesize",value:function(t){var e=0,n="b";if(t>0){for(var i=["tb","gb","mb","kb","b"],r=0;r<i.length;r++){var s=i[r];if(t>=Math.pow(this.options.filesizeBase,4-r)/10){e=t/Math.pow(this.options.filesizeBase,4-r),n=s;break}}e=Math.round(10*e)/10}return"<strong>"+e+"</strong> "+this.options.dictFileSizeUnits[n]}},{key:"_updateMaxFilesReachedClass",value:function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}},{key:"drop",value:function(t){if(t.dataTransfer){this.emit("drop",t);for(var e=[],n=0;n<t.dataTransfer.files.length;n++)e[n]=t.dataTransfer.files[n];if(this.emit("addedfiles",e),e.length){var i=t.dataTransfer.items;i&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(e)}}}},{key:"paste",value:function(t){if(null!=(e=null!=t?t.clipboardData:void 0,n=function(t){return t.items},null!=e?n(e):void 0)){var e,n;this.emit("paste",t);var i=t.clipboardData.items;return i.length?this._addFilesFromItems(i):void 0}}},{key:"handleFiles",value:function(t){for(var e=0,n=n=t;;){if(e>=n.length)break;var i=n[e++];this.addFile(i)}}},{key:"_addFilesFromItems",value:function(t){var e=this;return function(){for(var n=[],i=0,r=r=t;;){if(i>=r.length)break;var s,o=r[i++];null!=o.webkitGetAsEntry&&(s=o.webkitGetAsEntry())?s.isFile?n.push(e.addFile(o.getAsFile())):s.isDirectory?n.push(e._addFilesFromDirectory(s,s.name)):n.push(void 0):null==o.getAsFile||null!=o.kind&&"file"!==o.kind?n.push(void 0):n.push(e.addFile(o.getAsFile()))}return n}()}},{key:"_addFilesFromDirectory",value:function(t,e){var n=this,i=t.createReader(),r=function(t){return e=console,n="log",i=function(e){return e.log(t)},null!=e&&"function"==typeof e[n]?i(e,n):void 0;var e,n,i};return function t(){return i.readEntries((function(i){if(i.length>0){for(var r=0,s=s=i;!(r>=s.length);){var o=s[r++];o.isFile?o.file((function(t){if(!n.options.ignoreHiddenFiles||"."!==t.name.substring(0,1))return t.fullPath=e+"/"+t.name,n.addFile(t)})):o.isDirectory&&n._addFilesFromDirectory(o,e+"/"+o.name)}t()}return null}),r)}()}},{key:"accept",value:function(t,e){return this.options.maxFilesize&&t.size>1024*this.options.maxFilesize*1024?e(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(t.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):s.isValidFile(t,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(e(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",t)):this.options.accept.call(this,t,e):e(this.options.dictInvalidFileType)}},{key:"addFile",value:function(t){var e=this;return t.upload={uuid:s.uuidv4(),progress:0,total:t.size,bytesSent:0,filename:this._renameFile(t),chunked:this.options.chunking&&(this.options.forceChunking||t.size>this.options.chunkSize),totalChunkCount:Math.ceil(t.size/this.options.chunkSize)},this.files.push(t),t.status=s.ADDED,this.emit("addedfile",t),this._enqueueThumbnail(t),this.accept(t,(function(n){return n?(t.accepted=!1,e._errorProcessing([t],n)):(t.accepted=!0,e.options.autoQueue&&e.enqueueFile(t)),e._updateMaxFilesReachedClass()}))}},{key:"enqueueFiles",value:function(t){for(var e=0,n=n=t;;){if(e>=n.length)break;var i=n[e++];this.enqueueFile(i)}return null}},{key:"enqueueFile",value:function(t){var e=this;if(t.status!==s.ADDED||!0!==t.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(t.status=s.QUEUED,this.options.autoProcessQueue)return setTimeout((function(){return e.processQueue()}),0)}},{key:"_enqueueThumbnail",value:function(t){var e=this;if(this.options.createImageThumbnails&&t.type.match(/image.*/)&&t.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(t),setTimeout((function(){return e._processThumbnailQueue()}),0)}},{key:"_processThumbnailQueue",value:function(){var t=this;if(!this._processingThumbnail&&0!==this._thumbnailQueue.length){this._processingThumbnail=!0;var e=this._thumbnailQueue.shift();return this.createThumbnail(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,(function(n){return t.emit("thumbnail",e,n),t._processingThumbnail=!1,t._processThumbnailQueue()}))}}},{key:"removeFile",value:function(t){if(t.status===s.UPLOADING&&this.cancelUpload(t),this.files=o(this.files,t),this.emit("removedfile",t),0===this.files.length)return this.emit("reset")}},{key:"removeAllFiles",value:function(t){null==t&&(t=!1);for(var e=0,n=n=this.files.slice();;){if(e>=n.length)break;var i=n[e++];(i.status!==s.UPLOADING||t)&&this.removeFile(i)}return null}},{key:"resizeImage",value:function(t,e,n,i,r){var o=this;return this.createThumbnail(t,e,n,i,!0,(function(e,n){if(null==n)return r(t);var i=o.options.resizeMimeType;null==i&&(i=t.type);var a=n.toDataURL(i,o.options.resizeQuality);return"image/jpeg"!==i&&"image/jpg"!==i||(a=l.restore(t.dataURL,a)),r(s.dataURItoBlob(a))}))}},{key:"createThumbnail",value:function(t,e,n,i,r,s){var o=this,a=new FileReader;return a.onload=function(){if(t.dataURL=a.result,"image/svg+xml"!==t.type)return o.createThumbnailFromUrl(t,e,n,i,r,s);null!=s&&s(a.result)},a.readAsDataURL(t)}},{key:"createThumbnailFromUrl",value:function(t,e,n,i,r,s,o){var a=this,l=document.createElement("img");return o&&(l.crossOrigin=o),l.onload=function(){var o=function(t){return t(1)};return"undefined"!=typeof EXIF&&null!==EXIF&&r&&(o=function(t){return EXIF.getData(l,(function(){return t(EXIF.getTag(this,"Orientation"))}))}),o((function(r){t.width=l.width,t.height=l.height;var o=a.options.resize.call(a,t,e,n,i),c=document.createElement("canvas"),h=c.getContext("2d");switch(c.width=o.trgWidth,c.height=o.trgHeight,r>4&&(c.width=o.trgHeight,c.height=o.trgWidth),r){case 2:h.translate(c.width,0),h.scale(-1,1);break;case 3:h.translate(c.width,c.height),h.rotate(Math.PI);break;case 4:h.translate(0,c.height),h.scale(1,-1);break;case 5:h.rotate(.5*Math.PI),h.scale(1,-1);break;case 6:h.rotate(.5*Math.PI),h.translate(0,-c.width);break;case 7:h.rotate(.5*Math.PI),h.translate(c.height,-c.width),h.scale(-1,1);break;case 8:h.rotate(-.5*Math.PI),h.translate(-c.height,0)}u(h,l,null!=o.srcX?o.srcX:0,null!=o.srcY?o.srcY:0,o.srcWidth,o.srcHeight,null!=o.trgX?o.trgX:0,null!=o.trgY?o.trgY:0,o.trgWidth,o.trgHeight);var d=c.toDataURL("image/png");if(null!=s)return s(d,c)}))},null!=s&&(l.onerror=s),l.src=t.dataURL}},{key:"processQueue",value:function(){var t=this.options.parallelUploads,e=this.getUploadingFiles().length,n=e;if(!(e>=t)){var i=this.getQueuedFiles();if(i.length>0){if(this.options.uploadMultiple)return this.processFiles(i.slice(0,t-e));for(;n<t;){if(!i.length)return;this.processFile(i.shift()),n++}}}}},{key:"processFile",value:function(t){return this.processFiles([t])}},{key:"processFiles",value:function(t){for(var e=0,n=n=t;;){if(e>=n.length)break;var i=n[e++];i.processing=!0,i.status=s.UPLOADING,this.emit("processing",i)}return this.options.uploadMultiple&&this.emit("processingmultiple",t),this.uploadFiles(t)}},{key:"_getFilesWithXhr",value:function(t){return this.files.filter((function(e){return e.xhr===t})).map((function(t){return t}))}},{key:"cancelUpload",value:function(t){if(t.status===s.UPLOADING){for(var e=this._getFilesWithXhr(t.xhr),n=0,i=i=e;;){if(n>=i.length)break;i[n++].status=s.CANCELED}void 0!==t.xhr&&t.xhr.abort();for(var r=0,o=o=e;;){if(r>=o.length)break;var a=o[r++];this.emit("canceled",a)}this.options.uploadMultiple&&this.emit("canceledmultiple",e)}else t.status!==s.ADDED&&t.status!==s.QUEUED||(t.status=s.CANCELED,this.emit("canceled",t),this.options.uploadMultiple&&this.emit("canceledmultiple",[t]));if(this.options.autoProcessQueue)return this.processQueue()}},{key:"resolveOption",value:function(t){if("function"==typeof t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t.apply(this,n)}return t}},{key:"uploadFile",value:function(t){return this.uploadFiles([t])}},{key:"uploadFiles",value:function(t){var e=this;this._transformFiles(t,(function(n){if(t[0].upload.chunked){var i=t[0],r=n[0];i.upload.chunks=[];var o=function(){for(var n=0;void 0!==i.upload.chunks[n];)n++;if(!(n>=i.upload.totalChunkCount)){var o=n*e.options.chunkSize,a=Math.min(o+e.options.chunkSize,i.size),u={name:e._getParamName(0),data:r.webkitSlice?r.webkitSlice(o,a):r.slice(o,a),filename:i.upload.filename,chunkIndex:n};i.upload.chunks[n]={file:i,index:n,dataBlock:u,status:s.UPLOADING,progress:0,retries:0},e._uploadData(t,[u])}};if(i.upload.finishedChunkUpload=function(n){var r=!0;n.status=s.SUCCESS,n.dataBlock=null,n.xhr=null;for(var a=0;a<i.upload.totalChunkCount;a++){if(void 0===i.upload.chunks[a])return o();i.upload.chunks[a].status!==s.SUCCESS&&(r=!1)}r&&e.options.chunksUploaded(i,(function(){e._finished(t,"",null)}))},e.options.parallelChunkUploads)for(var a=0;a<i.upload.totalChunkCount;a++)o();else o()}else{for(var u=[],l=0;l<t.length;l++)u[l]={name:e._getParamName(l),data:n[l],filename:t[l].upload.filename};e._uploadData(t,u)}}))}},{key:"_getChunk",value:function(t,e){for(var n=0;n<t.upload.totalChunkCount;n++)if(void 0!==t.upload.chunks[n]&&t.upload.chunks[n].xhr===e)return t.upload.chunks[n]}},{key:"_uploadData",value:function(t,e){for(var n=this,i=new XMLHttpRequest,r=0,o=o=t;;){if(r>=o.length)break;o[r++].xhr=i}t[0].upload.chunked&&(t[0].upload.chunks[e[0].chunkIndex].xhr=i);var a=this.resolveOption(this.options.method,t),u=this.resolveOption(this.options.url,t);i.open(a,u,!0),i.timeout=this.resolveOption(this.options.timeout,t),i.withCredentials=!!this.options.withCredentials,i.onload=function(e){n._finishedUploading(t,i,e)},i.onerror=function(){n._handleUploadError(t,i)},(null!=i.upload?i.upload:i).onprogress=function(e){return n._updateFilesUploadProgress(t,i,e)};var l={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};for(var c in this.options.headers&&s.extend(l,this.options.headers),l){var h=l[c];h&&i.setRequestHeader(c,h)}var d=new FormData;if(this.options.params){var f=this.options.params;for(var p in"function"==typeof f&&(f=f.call(this,t,i,t[0].upload.chunked?this._getChunk(t[0],i):null)),f){var m=f[p];d.append(p,m)}}for(var g=0,v=v=t;;){if(g>=v.length)break;var y=v[g++];this.emit("sending",y,i,d)}this.options.uploadMultiple&&this.emit("sendingmultiple",t,i,d),this._addFormElementData(d);for(var w=0;w<e.length;w++){var b=e[w];d.append(b.name,b.data,b.filename)}this.submitRequest(i,d,t)}},{key:"_transformFiles",value:function(t,e){for(var n=this,i=[],r=0,s=function(s){n.options.transformFile.call(n,t[s],(function(n){i[s]=n,++r===t.length&&e(i)}))},o=0;o<t.length;o++)s(o)}},{key:"_addFormElementData",value:function(t){if("FORM"===this.element.tagName)for(var e=0,n=n=this.element.querySelectorAll("input, textarea, select, button");;){if(e>=n.length)break;var i=n[e++],r=i.getAttribute("name"),s=i.getAttribute("type");if(s&&(s=s.toLowerCase()),null!=r)if("SELECT"===i.tagName&&i.hasAttribute("multiple"))for(var o=0,a=a=i.options;;){if(o>=a.length)break;var u=a[o++];u.selected&&t.append(r,u.value)}else(!s||"checkbox"!==s&&"radio"!==s||i.checked)&&t.append(r,i.value)}}},{key:"_updateFilesUploadProgress",value:function(t,e,n){var i=void 0;if(void 0!==n){if(i=100*n.loaded/n.total,t[0].upload.chunked){var r=t[0],s=this._getChunk(r,e);s.progress=i,s.total=n.total,s.bytesSent=n.loaded,r.upload.progress=0,r.upload.total=0,r.upload.bytesSent=0;for(var o=0;o<r.upload.totalChunkCount;o++)void 0!==r.upload.chunks[o]&&void 0!==r.upload.chunks[o].progress&&(r.upload.progress+=r.upload.chunks[o].progress,r.upload.total+=r.upload.chunks[o].total,r.upload.bytesSent+=r.upload.chunks[o].bytesSent);r.upload.progress=r.upload.progress/r.upload.totalChunkCount}else for(var a=0,u=u=t;;){if(a>=u.length)break;var l=u[a++];l.upload.progress=i,l.upload.total=n.total,l.upload.bytesSent=n.loaded}for(var c=0,h=h=t;;){if(c>=h.length)break;var d=h[c++];this.emit("uploadprogress",d,d.upload.progress,d.upload.bytesSent)}}else{var f=!0;i=100;for(var p=0,m=m=t;;){if(p>=m.length)break;var g=m[p++];100===g.upload.progress&&g.upload.bytesSent===g.upload.total||(f=!1),g.upload.progress=i,g.upload.bytesSent=g.upload.total}if(f)return;for(var v=0,y=y=t;;){if(v>=y.length)break;var w=y[v++];this.emit("uploadprogress",w,i,w.upload.bytesSent)}}}},{key:"_finishedUploading",value:function(t,e,n){var i=void 0;if(t[0].status!==s.CANCELED&&4===e.readyState){if("arraybuffer"!==e.responseType&&"blob"!==e.responseType&&(i=e.responseText,e.getResponseHeader("content-type")&&~e.getResponseHeader("content-type").indexOf("application/json")))try{i=JSON.parse(i)}catch(t){n=t,i="Invalid JSON response from server."}this._updateFilesUploadProgress(t),200<=e.status&&e.status<300?t[0].upload.chunked?t[0].upload.finishedChunkUpload(this._getChunk(t[0],e)):this._finished(t,i,n):this._handleUploadError(t,e,i)}}},{key:"_handleUploadError",value:function(t,e,n){if(t[0].status!==s.CANCELED){if(t[0].upload.chunked&&this.options.retryChunks){var i=this._getChunk(t[0],e);if(i.retries++<this.options.retryChunksLimit)return void this._uploadData(t,[i.dataBlock]);console.warn("Retried this chunk too often. Giving up.")}for(var r=0,o=o=t;;){if(r>=o.length)break;o[r++],this._errorProcessing(t,n||this.options.dictResponseError.replace("{{statusCode}}",e.status),e)}}}},{key:"submitRequest",value:function(t,e,n){t.send(e)}},{key:"_finished",value:function(t,e,n){for(var i=0,r=r=t;;){if(i>=r.length)break;var o=r[i++];o.status=s.SUCCESS,this.emit("success",o,e,n),this.emit("complete",o)}if(this.options.uploadMultiple&&(this.emit("successmultiple",t,e,n),this.emit("completemultiple",t)),this.options.autoProcessQueue)return this.processQueue()}},{key:"_errorProcessing",value:function(t,e,n){for(var i=0,r=r=t;;){if(i>=r.length)break;var o=r[i++];o.status=s.ERROR,this.emit("error",o,e,n),this.emit("complete",o)}if(this.options.uploadMultiple&&(this.emit("errormultiple",t,e,n),this.emit("completemultiple",t)),this.options.autoProcessQueue)return this.processQueue()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))}}]),s}();s.initClass(),s.version="5.5.1",s.options={},s.optionsForElement=function(t){return t.getAttribute("id")?s.options[a(t.getAttribute("id"))]:void 0},s.instances=[],s.forElement=function(t){if("string"==typeof t&&(t=document.querySelector(t)),null==(null!=t?t.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return t.dropzone},s.autoDiscover=!0,s.discover=function(){var t=void 0;if(document.querySelectorAll)t=document.querySelectorAll(".dropzone");else{t=[];var e=function(e){return function(){for(var n=[],i=0,r=r=e;;){if(i>=r.length)break;var s=r[i++];/(^| )dropzone($| )/.test(s.className)?n.push(t.push(s)):n.push(void 0)}return n}()};e(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))}return function(){for(var e=[],n=0,i=i=t;;){if(n>=i.length)break;var r=i[n++];!1!==s.optionsForElement(r)?e.push(new s(r)):e.push(void 0)}return e}()},s.blacklistedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i],s.isBrowserSupported=function(){var t=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(var e=0,n=n=s.blacklistedBrowsers;;){if(e>=n.length)break;n[e++].test(navigator.userAgent)&&(t=!1)}else t=!1;else t=!1;return t},s.dataURItoBlob=function(t){for(var e=atob(t.split(",")[1]),n=t.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(e.length),r=new Uint8Array(i),s=0,o=e.length,a=0<=o;a?s<=o:s>=o;a?s++:s--)r[s]=e.charCodeAt(s);return new Blob([i],{type:n})};var o=function(t,e){return t.filter((function(t){return t!==e})).map((function(t){return t}))},a=function(t){return t.replace(/[\-_](\w)/g,(function(t){return t.charAt(1).toUpperCase()}))};s.createElement=function(t){var e=document.createElement("div");return e.innerHTML=t,e.childNodes[0]},s.elementInside=function(t,e){if(t===e)return!0;for(;t=t.parentNode;)if(t===e)return!0;return!1},s.getElement=function(t,e){var n=void 0;if("string"==typeof t?n=document.querySelector(t):null!=t.nodeType&&(n=t),null==n)throw new Error("Invalid `"+e+"` option provided. Please provide a CSS selector or a plain HTML element.");return n},s.getElements=function(t,e){var n=void 0,i=void 0;if(t instanceof Array){i=[];try{for(var r=0,s=s=t;!(r>=s.length);)n=s[r++],i.push(this.getElement(n,e))}catch(t){i=null}}else if("string"==typeof t){i=[];for(var o=0,a=a=document.querySelectorAll(t);!(o>=a.length);)n=a[o++],i.push(n)}else null!=t.nodeType&&(i=[t]);if(null==i||!i.length)throw new Error("Invalid `"+e+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return i},s.confirm=function(t,e,n){return window.confirm(t)?e():null!=n?n():void 0},s.isValidFile=function(t,e){if(!e)return!0;e=e.split(",");for(var n=t.type,i=n.replace(/\/.*$/,""),r=0,s=s=e;;){if(r>=s.length)break;var o=s[r++];if("."===(o=o.trim()).charAt(0)){if(-1!==t.name.toLowerCase().indexOf(o.toLowerCase(),t.name.length-o.length))return!0}else if(/\/\*$/.test(o)){if(i===o.replace(/\/.*$/,""))return!0}else if(n===o)return!0}return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(t){return this.each((function(){return new s(this,t)}))}),null!==t?t.exports=s:window.Dropzone=s,s.ADDED="added",s.QUEUED="queued",s.ACCEPTED=s.QUEUED,s.UPLOADING="uploading",s.PROCESSING=s.UPLOADING,s.CANCELED="canceled",s.ERROR="error",s.SUCCESS="success";var u=function(t,e,n,i,r,s,o,a,u,l){var c=function(t){t.naturalWidth;var e=t.naturalHeight,n=document.createElement("canvas");n.width=1,n.height=e;var i=n.getContext("2d");i.drawImage(t,0,0);for(var r=i.getImageData(1,0,1,e).data,s=0,o=e,a=e;a>s;)0===r[4*(a-1)+3]?o=a:s=a,a=o+s>>1;var u=a/e;return 0===u?1:u}(e);return t.drawImage(e,n,i,r,s,o,a,u,l/c)},l=function(){function t(){i(this,t)}return e(t,null,[{key:"initClass",value:function(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}},{key:"encode64",value:function(t){for(var e="",n=void 0,i=void 0,r="",s=void 0,o=void 0,a=void 0,u="",l=0;s=(n=t[l++])>>2,o=(3&n)<<4|(i=t[l++])>>4,a=(15&i)<<2|(r=t[l++])>>6,u=63&r,isNaN(i)?a=u=64:isNaN(r)&&(u=64),e=e+this.KEY_STR.charAt(s)+this.KEY_STR.charAt(o)+this.KEY_STR.charAt(a)+this.KEY_STR.charAt(u),n=i=r="",s=o=a=u="",l<t.length;);return e}},{key:"restore",value:function(t,e){if(!t.match("data:image/jpeg;base64,"))return e;var n=this.decode64(t.replace("data:image/jpeg;base64,","")),i=this.slice2Segments(n),r=this.exifManipulation(e,i);return"data:image/jpeg;base64,"+this.encode64(r)}},{key:"exifManipulation",value:function(t,e){var n=this.getExifArray(e),i=this.insertExif(t,n);return new Uint8Array(i)}},{key:"getExifArray",value:function(t){for(var e=void 0,n=0;n<t.length;){if(255===(e=t[n])[0]&225===e[1])return e;n++}return[]}},{key:"insertExif",value:function(t,e){var n=t.replace("data:image/jpeg;base64,",""),i=this.decode64(n),r=i.indexOf(255,3),s=i.slice(0,r),o=i.slice(r),a=s;return(a=a.concat(e)).concat(o)}},{key:"slice2Segments",value:function(t){for(var e=0,n=[];;){if(255===t[e]&218===t[e+1])break;if(255===t[e]&216===t[e+1])e+=2;else{var i=e+(256*t[e+2]+t[e+3])+2,r=t.slice(e,i);n.push(r),e=i}if(e>t.length)break}return n}},{key:"decode64",value:function(t){var e=void 0,n=void 0,i="",r=void 0,s=void 0,o="",a=0,u=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(t)&&console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");e=this.KEY_STR.indexOf(t.charAt(a++))<<2|(r=this.KEY_STR.indexOf(t.charAt(a++)))>>4,n=(15&r)<<4|(s=this.KEY_STR.indexOf(t.charAt(a++)))>>2,i=(3&s)<<6|(o=this.KEY_STR.indexOf(t.charAt(a++))),u.push(e),64!==s&&u.push(n),64!==o&&u.push(i),e=n=i="",r=s=o="",a<t.length;);return u}}]),t}();l.initClass(),s._autoDiscoverFunction=function(){if(s.autoDiscover)return s.discover()},function(t,e){var n=!1,i=!0,r=t.document,s=r.documentElement,o=r.addEventListener?"addEventListener":"attachEvent",a=r.addEventListener?"removeEventListener":"detachEvent",u=r.addEventListener?"":"on",l=function i(s){if("readystatechange"!==s.type||"complete"===r.readyState)return("load"===s.type?t:r)[a](u+s.type,i,!1),!n&&(n=!0)?e.call(t,s.type||s):void 0};if("complete"!==r.readyState){if(r.createEventObject&&s.doScroll){try{i=!t.frameElement}catch(t){}i&&function t(){try{s.doScroll("left")}catch(e){return void setTimeout(t,50)}return l("poll")}()}r[o](u+"DOMContentLoaded",l,!1),r[o](u+"readystatechange",l,!1),t[o](u+"load",l,!1)}}(window,s._autoDiscoverFunction)}(t={exports:{}},t.exports),t.exports),n={getSignedURL(t,e){let n={filePath:t.name,contentType:t.type};return new Promise(((i,r)=>{var s=new FormData;let o=new XMLHttpRequest,a="function"==typeof e.signingURL?e.signingURL(t):e.signingURL;o.open("POST",a),o.onload=function(){200==o.status?i(JSON.parse(o.response)):r(o.statusText)},o.onerror=function(t){console.error("Network Error : Could not send request to AWS (Maybe CORS errors)"),r(t)},!0===e.withCredentials&&(o.withCredentials=!0),Object.entries(e.headers||{}).forEach((([t,e])=>{o.setRequestHeader(t,e)})),n=Object.assign(n,e.params||{}),Object.entries(n).forEach((([t,e])=>{s.append(t,e)})),o.send(s)}))},sendFile(t,e,n){var i=n?this.setResponseHandler:this.sendS3Handler;return this.getSignedURL(t,e).then((e=>i(e,t))).catch((t=>t))},setResponseHandler(t,e){e.s3Signature=t.signature,e.s3Url=t.postEndpoint},sendS3Handler(t,e){let n=new FormData,i=t.signature;return Object.keys(i).forEach((function(t){n.append(t,i[t])})),n.append("file",e),new Promise(((e,i)=>{let r=new XMLHttpRequest;r.open("POST",t.postEndpoint),r.onload=function(){if(201==r.status){var t=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[0].innerHTML;e({success:!0,message:t})}else{var n=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[0].innerHTML;i({success:!1,message:n+". Request is marked as resolved when returns as status 201"})}},r.onerror=function(t){var e=(new window.DOMParser).parseFromString(r.response,"text/xml").firstChild.children[1].innerHTML;i({success:!1,message:e})},r.send(n)}))}};return e.autoDiscover=!1,function(t,e,n,i,r,s,o,a,u,l){"boolean"!=typeof o&&(u=a,a=o,o=!1);var c,h="function"==typeof n?n.options:n;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,r&&(h.functional=!0)),i&&(h._scopeId=i),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=c):e&&(c=o?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),c)if(h.functional){var d=h.render;h.render=function(t,e){return c.call(e),d(t,e)}}else{var f=h.beforeCreate;h.beforeCreate=f?[].concat(f,c):[c]}return n}({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"dropzoneElement",class:{"vue-dropzone dropzone":this.includeStyling},attrs:{id:this.id}},[this.useCustomSlot?e("div",{staticClass:"dz-message"},[this._t("default",[this._v("Drop files here to upload")])],2):this._e()])},staticRenderFns:[]},void 0,{props:{id:{type:String,required:!0,default:"dropzone"},options:{type:Object,required:!0},includeStyling:{type:Boolean,default:!0,required:!1},awss3:{type:Object,required:!1,default:null},destroyDropzone:{type:Boolean,default:!0,required:!1},duplicateCheck:{type:Boolean,default:!1,required:!1},useCustomSlot:{type:Boolean,default:!1,required:!1}},data:()=>({isS3:!1,isS3OverridesServerPropagation:!1,wasQueueAutoProcess:!0}),computed:{dropzoneSettings(){let t={thumbnailWidth:200,thumbnailHeight:200};return Object.keys(this.options).forEach((function(e){t[e]=this.options[e]}),this),null!==this.awss3&&(t.autoProcessQueue=!1,this.isS3=!0,this.isS3OverridesServerPropagation=!1===this.awss3.sendFileToServer,void 0!==this.options.autoProcessQueue&&(this.wasQueueAutoProcess=this.options.autoProcessQueue),this.isS3OverridesServerPropagation&&(t.url=t=>t[0].s3Url)),t}},mounted(){if(this.$isServer&&this.hasBeenMounted)return;this.hasBeenMounted=!0,this.dropzone=new e(this.$refs.dropzoneElement,this.dropzoneSettings);let t=this;this.dropzone.on("thumbnail",(function(e,n){t.$emit("vdropzone-thumbnail",e,n)})),this.dropzone.on("addedfile",(function(e){var n,i;if(t.duplicateCheck&&this.files.length)for(n=0,i=this.files.length;n<i-1;n++)this.files[n].name===e.name&&this.files[n].size===e.size&&this.files[n].lastModifiedDate.toString()===e.lastModifiedDate.toString()&&(this.removeFile(e),t.$emit("vdropzone-duplicate-file",e));t.$emit("vdropzone-file-added",e),t.isS3&&t.wasQueueAutoProcess&&!e.manuallyAdded&&t.getSignedAndUploadToS3(e)})),this.dropzone.on("addedfiles",(function(e){t.$emit("vdropzone-files-added",e)})),this.dropzone.on("removedfile",(function(e){t.$emit("vdropzone-removed-file",e),e.manuallyAdded&&null!==t.dropzone.options.maxFiles&&t.dropzone.options.maxFiles++})),this.dropzone.on("success",(function(e,n){if(t.$emit("vdropzone-success",e,n),t.isS3){if(t.isS3OverridesServerPropagation){var i=(new window.DOMParser).parseFromString(n,"text/xml").firstChild.children[0].innerHTML;t.$emit("vdropzone-s3-upload-success",i)}t.wasQueueAutoProcess&&t.setOption("autoProcessQueue",!1)}})),this.dropzone.on("successmultiple",(function(e,n){t.$emit("vdropzone-success-multiple",e,n)})),this.dropzone.on("error",(function(e,n,i){t.$emit("vdropzone-error",e,n,i),this.isS3&&t.$emit("vdropzone-s3-upload-error")})),this.dropzone.on("errormultiple",(function(e,n,i){t.$emit("vdropzone-error-multiple",e,n,i)})),this.dropzone.on("sending",(function(e,n,i){if(t.isS3)if(t.isS3OverridesServerPropagation){let t=e.s3Signature;Object.keys(t).forEach((function(e){i.append(e,t[e])}))}else i.append("s3ObjectLocation",e.s3ObjectLocation);t.$emit("vdropzone-sending",e,n,i)})),this.dropzone.on("sendingmultiple",(function(e,n,i){t.$emit("vdropzone-sending-multiple",e,n,i)})),this.dropzone.on("complete",(function(e){t.$emit("vdropzone-complete",e)})),this.dropzone.on("completemultiple",(function(e){t.$emit("vdropzone-complete-multiple",e)})),this.dropzone.on("canceled",(function(e){t.$emit("vdropzone-canceled",e)})),this.dropzone.on("canceledmultiple",(function(e){t.$emit("vdropzone-canceled-multiple",e)})),this.dropzone.on("maxfilesreached",(function(e){t.$emit("vdropzone-max-files-reached",e)})),this.dropzone.on("maxfilesexceeded",(function(e){t.$emit("vdropzone-max-files-exceeded",e)})),this.dropzone.on("processing",(function(e){t.$emit("vdropzone-processing",e)})),this.dropzone.on("processingmultiple",(function(e){t.$emit("vdropzone-processing-multiple",e)})),this.dropzone.on("uploadprogress",(function(e,n,i){t.$emit("vdropzone-upload-progress",e,n,i)})),this.dropzone.on("totaluploadprogress",(function(e,n,i){t.$emit("vdropzone-total-upload-progress",e,n,i)})),this.dropzone.on("reset",(function(){t.$emit("vdropzone-reset")})),this.dropzone.on("queuecomplete",(function(){t.$emit("vdropzone-queue-complete")})),this.dropzone.on("drop",(function(e){t.$emit("vdropzone-drop",e)})),this.dropzone.on("dragstart",(function(e){t.$emit("vdropzone-drag-start",e)})),this.dropzone.on("dragend",(function(e){t.$emit("vdropzone-drag-end",e)})),this.dropzone.on("dragenter",(function(e){t.$emit("vdropzone-drag-enter",e)})),this.dropzone.on("dragover",(function(e){t.$emit("vdropzone-drag-over",e)})),this.dropzone.on("dragleave",(function(e){t.$emit("vdropzone-drag-leave",e)})),t.$emit("vdropzone-mounted")},beforeDestroy(){this.destroyDropzone&&this.dropzone.destroy()},methods:{manuallyAddFile:function(t,e){t.manuallyAdded=!0,this.dropzone.emit("addedfile",t);let n=!1;if((e.indexOf(".svg")>-1||e.indexOf(".png")>-1||e.indexOf(".jpg")>-1||e.indexOf(".jpeg")>-1||e.indexOf(".gif")>-1||e.indexOf(".webp")>-1)&&(n=!0),this.dropzone.options.createImageThumbnails&&n&&t.size<=1024*this.dropzone.options.maxThumbnailFilesize*1024){e&&this.dropzone.emit("thumbnail",t,e);for(var i=t.previewElement.querySelectorAll("[data-dz-thumbnail]"),r=0;r<i.length;r++)i[r].style.width=this.dropzoneSettings.thumbnailWidth+"px",i[r].style.height=this.dropzoneSettings.thumbnailHeight+"px",i[r].style["object-fit"]="contain"}this.dropzone.emit("complete",t),this.dropzone.options.maxFiles&&this.dropzone.options.maxFiles--,this.dropzone.files.push(t),this.$emit("vdropzone-file-added-manually",t)},setOption:function(t,e){this.dropzone.options[t]=e},removeAllFiles:function(t){this.dropzone.removeAllFiles(t)},processQueue:function(){let t=this.dropzone;this.isS3&&!this.wasQueueAutoProcess?this.getQueuedFiles().forEach((t=>{this.getSignedAndUploadToS3(t)})):this.dropzone.processQueue(),this.dropzone.on("success",(function(){t.options.autoProcessQueue=!0})),this.dropzone.on("queuecomplete",(function(){t.options.autoProcessQueue=!1}))},init:function(){return this.dropzone.init()},destroy:function(){return this.dropzone.destroy()},updateTotalUploadProgress:function(){return this.dropzone.updateTotalUploadProgress()},getFallbackForm:function(){return this.dropzone.getFallbackForm()},getExistingFallback:function(){return this.dropzone.getExistingFallback()},setupEventListeners:function(){return this.dropzone.setupEventListeners()},removeEventListeners:function(){return this.dropzone.removeEventListeners()},disable:function(){return this.dropzone.disable()},enable:function(){return this.dropzone.enable()},filesize:function(t){return this.dropzone.filesize(t)},accept:function(t,e){return this.dropzone.accept(t,e)},addFile:function(t){return this.dropzone.addFile(t)},removeFile:function(t){this.dropzone.removeFile(t)},getAcceptedFiles:function(){return this.dropzone.getAcceptedFiles()},getRejectedFiles:function(){return this.dropzone.getRejectedFiles()},getFilesWithStatus:function(){return this.dropzone.getFilesWithStatus()},getQueuedFiles:function(){return this.dropzone.getQueuedFiles()},getUploadingFiles:function(){return this.dropzone.getUploadingFiles()},getAddedFiles:function(){return this.dropzone.getAddedFiles()},getActiveFiles:function(){return this.dropzone.getActiveFiles()},getSignedAndUploadToS3(t){var e=n.sendFile(t,this.awss3,this.isS3OverridesServerPropagation);this.isS3OverridesServerPropagation?e.then((()=>{setTimeout((()=>this.dropzone.processFile(t)))})):e.then((e=>{e.success?(t.s3ObjectLocation=e.message,setTimeout((()=>this.dropzone.processFile(t))),this.$emit("vdropzone-s3-upload-success",e.message)):void 0!==e.message?this.$emit("vdropzone-s3-upload-error",e.message):this.$emit("vdropzone-s3-upload-error","Network Error : Could not send request to AWS. (Maybe CORS error)")})),e.catch((t=>{alert(t)}))},setAWSSigningURL(t){this.isS3&&(this.awss3.signingURL=t)}}},void 0,!1,void 0,void 0,void 0)}))},4951:function(t,e,n){"use strict";n(7658),n(541),e.oE=void 0;var i=n(9837),r=n(7801);function s(t){return l(t)||u(t)||a(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function u(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function l(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}var m=function(){return null},g=function(t,e,n){return t.reduce((function(t,i){return t[n?n(i):i]=e(i),t}),{})};function v(t){return"function"===typeof t}function y(t){return null!==t&&("object"===p(t)||v(t))}function w(t){return y(t)&&v(t.then)}var b=function(t,e,n,i){if("function"===typeof n)return n.call(t,e,i);n=Array.isArray(n)?n:n.split(".");for(var r=0;r<n.length;r++){if(!e||"object"!==p(e))return i;e=e[n[r]]}return"undefined"===typeof e?i:e},_="__isVuelidateAsyncVm";function E(t,e){var n=new t({data:{p:!0,v:!1}});return e.then((function(t){n.p=!1,n.v=t}),(function(t){throw n.p=!1,n.v=!1,t})),n[_]=!0,n}var C={$invalid:function(){var t=this,e=this.proxy;return this.nestedKeys.some((function(e){return t.refProxy(e).$invalid}))||this.ruleKeys.some((function(t){return!e[t]}))},$dirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every((function(e){return t.refProxy(e).$dirty}))},$anyDirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.some((function(e){return t.refProxy(e).$anyDirty}))},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$anyError:function(){var t=this;return!!this.$error||this.nestedKeys.some((function(e){return t.refProxy(e).$anyError}))},$pending:function(){var t=this;return this.ruleKeys.some((function(e){return t.getRef(e).$pending}))||this.nestedKeys.some((function(e){return t.refProxy(e).$pending}))},$params:function(){var t=this,e=this.validations;return d(d({},g(this.nestedKeys,(function(t){return e[t]&&e[t].$params||null}))),g(this.ruleKeys,(function(e){return t.getRef(e).$params})))}};function T(t){this.dirty=t;var e=this.proxy,n=t?"$touch":"$reset";this.nestedKeys.forEach((function(t){e[t][n]()}))}var k={$touch:function(){T.call(this,!0)},$reset:function(){T.call(this,!1)},$flattenParams:function(){var t=this.proxy,e=[];for(var n in this.$params)if(this.isNested(n)){for(var i=t[n].$flattenParams(),r=0;r<i.length;r++)i[r].path.unshift(n);e=e.concat(i)}else e.push({path:[],name:n,params:this.$params[n]});return e}},I=Object.keys(C),S=Object.keys(k),A=null,x=function(t){if(A)return A;var e=t.extend({computed:{refs:function(){var t=this._vval;this._vval=this.children,(0,i.patchChildren)(t,this._vval);var e={};return this._vval.forEach((function(t){e[t.key]=t.vm})),e}},beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&((0,i.patchChildren)(this._vval),this._vval=null)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(t){var e=this.getModel();if(e)return e[t]},hasIter:function(){return!1}}}),n=e.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(e){var n=this.getModel();(0,r.pushParams)();var i=this.rule.call(this.rootModel,n,e),s=w(i)?E(t,i):i,o=(0,r.popParams)(),a=o&&o.$sub?o.$sub.length>1?o:o.$sub[0]:null;return{output:s,params:a}}},computed:{run:function(){var t=this,e=this.lazyParentModel(),n=Array.isArray(e)&&e.__ob__;if(n){var i=e.__ob__.dep;i.depend();var r=i.constructor.target;if(!this._indirectWatcher){var s=r.constructor;this._indirectWatcher=new s(this,(function(){return t.runRule(e)}),null,{lazy:!0})}var o=this.getModel();if(!this._indirectWatcher.dirty&&this._lastModel===o)return this._indirectWatcher.depend(),r.value;this._lastModel=o,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}else this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null);return this._indirectWatcher?this._indirectWatcher.value:this.runRule(e)},$params:function(){return this.run.params},proxy:function(){var t=this.run.output;return t[_]?!!t.v:!!t},$pending:function(){var t=this.run.output;return!!t[_]&&t.p}},destroyed:function(){this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null)}}),o=e.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:d(d({},k),{},{refProxy:function(t){return this.getRef(t).proxy},getRef:function(t){return this.refs[t]},isNested:function(t){return"function"!==typeof this.validations[t]}}),computed:d(d({},C),{},{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var t=this;return this.keys.filter((function(e){return!t.isNested(e)}))},keys:function(){return Object.keys(this.validations).filter((function(t){return"$params"!==t}))},proxy:function(){var t=this,e=g(this.keys,(function(e){return{enumerable:!0,configurable:!0,get:function(){return t.refProxy(e)}}})),n=g(I,(function(e){return{enumerable:!0,configurable:!0,get:function(){return t[e]}}})),i=g(S,(function(e){return{enumerable:!1,configurable:!0,get:function(){return t[e]}}})),r=this.hasIter()?{$iter:{enumerable:!0,value:Object.defineProperties({},d({},e))}}:{};return Object.defineProperties({},d(d(d(d({},e),r),{},{$model:{enumerable:!0,get:function(){var e=t.lazyParentModel();return null!=e?e[t.prop]:null},set:function(e){var n=t.lazyParentModel();null!=n&&(n[t.prop]=e,t.$touch())}}},n),i))},children:function(){var t=this;return[].concat(s(this.nestedKeys.map((function(e){return l(t,e)}))),s(this.ruleKeys.map((function(e){return c(t,e)})))).filter(Boolean)}})}),a=o.extend({methods:{isNested:function(t){return"undefined"!==typeof this.validations[t]()},getRef:function(t){var e=this;return{get proxy(){return e.validations[t]()||!1}}}}}),u=o.extend({computed:{keys:function(){var t=this.getModel();return y(t)?Object.keys(t):[]},tracker:function(){var t=this,e=this.validations.$trackBy;return e?function(n){return"".concat(b(t.rootModel,t.getModelKey(n),e))}:function(t){return"".concat(t)}},getModelLazy:function(){var t=this;return function(){return t.getModel()}},children:function(){var t=this,e=this.validations,n=this.getModel(),r=d({},e);delete r["$trackBy"];var s={};return this.keys.map((function(e){var a=t.tracker(e);return s.hasOwnProperty(a)?null:(s[a]=!0,(0,i.h)(o,a,{validations:r,prop:e,lazyParentModel:t.getModelLazy,model:n[e],rootModel:t.rootModel}))})).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(t){return this.refs[this.tracker(t)]},hasIter:function(){return!0}}}),l=function(t,e){if("$each"===e)return(0,i.h)(u,e,{validations:t.validations[e],lazyParentModel:t.lazyParentModel,prop:e,lazyModel:t.getModel,rootModel:t.rootModel});var n=t.validations[e];if(Array.isArray(n)){var r=t.rootModel,s=g(n,(function(t){return function(){return b(r,r.$v,t)}}),(function(t){return Array.isArray(t)?t.join("."):t}));return(0,i.h)(a,e,{validations:s,lazyParentModel:m,prop:e,lazyModel:m,rootModel:r})}return(0,i.h)(o,e,{validations:n,lazyParentModel:t.getModel,prop:e,lazyModel:t.getModelKey,rootModel:t.rootModel})},c=function(t,e){return(0,i.h)(n,e,{rule:t.validations[e],lazyParentModel:t.lazyParentModel,lazyModel:t.getModel,rootModel:t.rootModel})};return A={VBase:e,Validation:o},A},D=null;function N(t){if(D)return D;var e=t.constructor;while(e.super)e=e.super;return D=e,e}var P=function(t,e){var n=N(t),r=x(n),s=r.Validation,o=r.VBase,a=new o({computed:{children:function(){var n="function"===typeof e?e.call(t):e;return[(0,i.h)(s,"$v",{validations:n,lazyParentModel:m,prop:"$v",model:t,rootModel:t})]}}});return a},R={data:function(){var t=this.$options.validations;return t&&(this._vuelidate=P(this,t)),{}},beforeCreate:function(){var t=this.$options,e=t.validations;e&&(t.computed||(t.computed={}),t.computed.$v||(t.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function O(t){t.mixin(R)}e.oE=R;var F=O},7801:function(t,e,n){"use strict";function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}n(7658),Object.defineProperty(e,"__esModule",{value:!0}),e._setTarget=void 0,e.popParams=h,e.pushParams=c,e.target=void 0,e.withParams=m;var a=[],u=null;e.target=u;var l=function(t){e.target=u=t};function c(){null!==u&&a.push(u),e.target=u={}}function h(){var t=u,n=e.target=u=a.pop()||null;return n&&(Array.isArray(n.$sub)||(n.$sub=[]),n.$sub.push(t)),t}function d(t){if("object"!==o(t)||Array.isArray(t))throw new Error("params must be an object");e.target=u=r(r({},u),t)}function f(t,e){return p((function(n){return function(){n(t);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e.apply(this,r)}}))}function p(t){var e=t(d);return function(){c();try{for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.apply(this,n)}finally{h()}}}function m(t,e){return"object"===o(t)&&void 0!==e?f(t,e):p(t)}e._setTarget=l},4689:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=(0,i.regex)("alpha",/^[a-zA-Z]*$/);e["default"]=r},3331:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=(0,i.regex)("alphaNum",/^[a-zA-Z0-9]*$/);e["default"]=r},7673:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,i.withParams)({type:"and"},(function(){for(var t=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.length>0&&e.reduce((function(e,n){return e&&n.apply(t,i)}),!0)}))};e["default"]=r},450:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=function(t,e){return(0,i.withParams)({type:"between",min:t,max:e},(function(n){return!(0,i.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+t<=+n&&+e>=+n}))};e["default"]=r},4111:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.req=e.regex=e.ref=e.len=void 0,Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return i.default}});var i=r(n(8751));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}var o=function(t){if(Array.isArray(t))return!!t.length;if(void 0===t||null===t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===s(t)){for(var e in t)return!0;return!1}return!!String(t).length};e.req=o;var a=function(t){return Array.isArray(t)?t.length:"object"===s(t)?Object.keys(t).length:String(t).length};e.len=a;var u=function(t,e,n){return"function"===typeof t?t.call(e,n):n[t]};e.ref=u;var l=function(t,e){return(0,i.default)({type:t},(function(t){return!o(t)||e.test(t)}))};e.regex=l},3107:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=(0,i.regex)("decimal",/^[-]?\d*(\.\d+)?$/);e["default"]=r},184:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,s=(0,i.regex)("email",r);e["default"]=s},5795:function(t,e,n){"use strict";function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}Object.defineProperty(e,"Ei",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"C1",{enumerable:!0,get:function(){return f.default}});var r=A(n(4689)),s=A(n(3331)),o=A(n(8603)),a=A(n(450)),u=A(n(184)),l=A(n(2632)),c=A(n(837)),h=A(n(5136)),d=A(n(3795)),f=A(n(367)),p=A(n(2035)),m=A(n(310)),g=A(n(8612)),v=A(n(2009)),y=A(n(5208)),w=A(n(7673)),b=A(n(7850)),_=A(n(9935)),E=A(n(3134)),C=A(n(719)),T=A(n(3107)),k=S(n(4111));function I(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(I=function(t){return t?n:e})(t)}function S(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!==typeof t)return{default:t};var n=I(e);if(n&&n.has(t))return n.get(t);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var a=s?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=t[o]}return r.default=t,n&&n.set(t,r),r}function A(t){return t&&t.__esModule?t:{default:t}}},719:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=(0,i.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);e["default"]=r},2632:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=(0,i.withParams)({type:"ipAddress"},(function(t){if(!(0,i.req)(t))return!0;if("string"!==typeof t)return!1;var e=t.split(".");return 4===e.length&&e.every(s)}));e["default"]=r;var s=function(t){if(t.length>3||0===t.length)return!1;if("0"===t[0]&&"0"!==t)return!1;if(!t.match(/^\d+$/))return!1;var e=0|+t;return e>=0&&e<=255}},837:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,i.withParams)({type:"macAddress"},(function(e){if(!(0,i.req)(e))return!0;if("string"!==typeof e)return!1;var n="string"===typeof t&&""!==t?e.split(t):12===e.length||16===e.length?e.match(/.{2}/g):null;return null!==n&&(6===n.length||8===n.length)&&n.every(s)}))};e["default"]=r;var s=function(t){return t.toLowerCase().match(/^[0-9a-f]{2}$/)}},5136:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=function(t){return(0,i.withParams)({type:"maxLength",max:t},(function(e){return!(0,i.req)(e)||(0,i.len)(e)<=t}))};e["default"]=r},3134:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=function(t){return(0,i.withParams)({type:"maxValue",max:t},(function(e){return!(0,i.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+t}))};e["default"]=r},3795:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=function(t){return(0,i.withParams)({type:"minLength",min:t},(function(e){return!(0,i.req)(e)||(0,i.len)(e)>=t}))};e["default"]=r},9935:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=function(t){return(0,i.withParams)({type:"minValue",min:t},(function(e){return!(0,i.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+t}))};e["default"]=r},7850:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=function(t){return(0,i.withParams)({type:"not"},(function(e,n){return!(0,i.req)(e)||!t.call(this,e,n)}))};e["default"]=r},8603:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=(0,i.regex)("numeric",/^[0-9]*$/);e["default"]=r},5208:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,i.withParams)({type:"or"},(function(){for(var t=this,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e.length>0&&e.reduce((function(e,n){return e||n.apply(t,i)}),!1)}))};e["default"]=r},367:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=(0,i.withParams)({type:"required"},(function(t){return"string"===typeof t?(0,i.req)(t.trim()):(0,i.req)(t)}));e["default"]=r},2035:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=function(t){return(0,i.withParams)({type:"requiredIf",prop:t},(function(e,n){return!(0,i.ref)(t,this,n)||(0,i.req)(e)}))};e["default"]=r},310:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=function(t){return(0,i.withParams)({type:"requiredUnless",prop:t},(function(e,n){return!!(0,i.ref)(t,this,n)||(0,i.req)(e)}))};e["default"]=r},8612:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=function(t){return(0,i.withParams)({type:"sameAs",eq:t},(function(e,n){return e===(0,i.ref)(t,this,n)}))};e["default"]=r},2009:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i=n(4111),r=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,s=(0,i.regex)("url",r);e["default"]=s},9837:function(t,e){"use strict";function n(t){return null===t||void 0===t}function i(t){return null!==t&&void 0!==t}function r(t,e){return e.tag===t.tag&&e.key===t.key}function s(t){var e=t.tag;t.vm=new e({data:t.args})}function o(t){for(var e=Object.keys(t.args),n=0;n<e.length;n++)e.forEach((function(e){t.vm[e]=t.args[e]}))}function a(t,e,n){var r,s,o={};for(r=e;r<=n;++r)s=t[r].key,i(s)&&(o[s]=r);return o}function u(t,e){var o,u,d,f=0,p=0,m=t.length-1,g=t[0],v=t[m],y=e.length-1,w=e[0],b=e[y];while(f<=m&&p<=y)n(g)?g=t[++f]:n(v)?v=t[--m]:r(g,w)?(h(g,w),g=t[++f],w=e[++p]):r(v,b)?(h(v,b),v=t[--m],b=e[--y]):r(g,b)?(h(g,b),g=t[++f],b=e[--y]):r(v,w)?(h(v,w),v=t[--m],w=e[++p]):(n(o)&&(o=a(t,f,m)),u=i(w.key)?o[w.key]:null,n(u)?(s(w),w=e[++p]):(d=t[u],r(d,w)?(h(d,w),t[u]=void 0,w=e[++p]):(s(w),w=e[++p])));f>m?l(e,p,y):p>y&&c(t,f,m)}function l(t,e,n){for(;e<=n;++e)s(t[e])}function c(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(r.vm.$destroy(),r.vm=null)}}function h(t,e){t!==e&&(e.vm=t.vm,o(e))}function d(t,e){i(t)&&i(e)?t!==e&&u(t,e):i(e)?l(e,0,e.length-1):i(t)&&c(t,0,t.length-1)}function f(t,e,n){return{tag:t,key:e,args:n}}Object.defineProperty(e,"__esModule",{value:!0}),e.h=f,e.patchChildren=d},8751:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var i="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?n(9886).R:n(7801).withParams,r=i;e["default"]=r},9886:function(t,e,n){"use strict";function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}e.R=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},s=function(t,e){return"object"===i(t)&&void 0!==e?e:t((function(){}))},o=r.vuelidate?r.vuelidate.withParams:s;e.R=o},1625:function(t,e,n){"use strict";t.exports=n.p+"img/img-about-page.ff8eb3b8.jpg"},36:function(t,e,n){"use strict";n.d(e,{hJ:function(){return fc},JU:function(){return pc},PL:function(){return ah},ad:function(){return Ic},pl:function(){return uh}});n(7658),n(2801);var i,r=n(9684),s=n(7142),o=n(5168),a=n(223),u=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),l={},c=c||{},h=u||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,b.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function C(){this.s=this.s,this.o=this.o}var T=0;C.prototype.s=!1,C.prototype.na=function(){this.s||(this.s=!0,this.M(),0==T)||m(this)},C.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function I(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function S(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,i=e.length||0;t.length=n+i;for(let r=0;r<i;r++)t[n+r]=e[r]}else t.push(e)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function D(t){return/^[\s\xa0]*$/.test(t)}var N=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function P(t,e){return t<e?-1:t>e?1:0}function R(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function O(t){return-1!=R().indexOf(t)}function F(t){return F[" "](t),t}function M(t){var e=W;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=d;var L,U=O("Opera"),z=O("Trident")||O("MSIE"),V=O("Edge"),j=V||z,q=O("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&!O("Edge"))&&!(O("Trident")||O("MSIE"))&&!O("Edge"),$=-1!=R().toLowerCase().indexOf("webkit")&&!O("Edge");function B(){var t=h.document;return t?t.documentMode:void 0}t:{var K="",Q=function(){var t=R();return q?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):$?/WebKit\/(\S+)/.exec(t):U?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(K=Q?Q[1]:""),z){var H=B();if(null!=H&&H>parseFloat(K)){L=String(H);break t}}L=K}var G,W={};function X(){return M((function(){let t=0;const e=N(String(L)).split("."),n=N("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=P(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||P(0==r[2].length,0==s[2].length)||P(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&z){var Y=B();G=Y||(parseInt(L,10)||void 0)}else G=void 0;var J=G;function Z(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q){t:{try{F(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.X.h.call(this)}}E(Z,A);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function it(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++nt,this.ba=this.ea=!1}function rt(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function st(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ot(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ut(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function lt(t){this.src=t,this.g={},this.h=0}function ct(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=k(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(rt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ht(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}lt.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ht(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new it(e,this.src,s,!!i,r),e.ea=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),ft={};function pt(t,e,n,i,r){if(i&&i.once)return vt(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pt(t,e[s],n,i,r);return null}return n=Tt(n),t&&t[et]?t.N(e,n,p(i)?!!i.capture:!!i,r):mt(t,e,n,!1,i,r)}function mt(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=p(r)?!!r.capture:!!r,a=Et(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=gt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)x||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(bt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function gt(){function t(n){return e.call(t.src,t.listener,n)}const e=_t;return t}function vt(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vt(t,e[s],n,i,r);return null}return n=Tt(n),t&&t[et]?t.O(e,n,p(i)?!!i.capture:!!i,r):mt(t,e,n,!0,i,r)}function yt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)yt(t,e[s],n,i,r);else i=p(i)?!!i.capture:!!i,n=Tt(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ht(s,n,i,r),-1<n&&(rt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Et(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ht(e,n,i,r)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[et])ct(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(bt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Et(e))?(ct(n,t),0==n.h&&(n.src=null,e[dt]=null)):rt(t)}}}function bt(t){return t in ft?ft[t]:ft[t]="on"+t}function _t(t,e){if(t.ba)t=!0;else{e=new Z(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&wt(t),t=n.call(i,e)}return t}function Et(t){return t=t[dt],t instanceof lt?t:null}var Ct="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tt(t){return"function"===typeof t?t:(t[Ct]||(t[Ct]=function(e){return t.handleEvent(e)}),t[Ct])}function kt(){C.call(this),this.i=new lt(this),this.P=this,this.I=null}function It(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var r=e;e=new A(i,t),ut(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=St(o,i,!0,e)&&r}if(o=e.g=t,r=St(o,i,!0,e)&&r,r=St(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=St(o,i,!1,e)&&r}function St(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&ct(t.i,o),r=!1!==a.call(u,i)&&r}}return r&&!i.defaultPrevented}E(kt,C),kt.prototype[et]=!0,kt.prototype.removeEventListener=function(t,e,n,i){yt(this,t,e,n,i)},kt.prototype.M=function(){if(kt.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)rt(n[i]);delete e.g[t],e.h--}}this.I=null},kt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},kt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var At=h.JSON.stringify;function xt(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Dt{constructor(){this.h=this.g=null}add(t,e){const n=Pt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Nt,Pt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Rt),(t=>t.reset()));class Rt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ot(t){h.setTimeout((()=>{throw t}),0)}function Ft(t,e){Nt||Mt(),Lt||(Nt(),Lt=!0),Ut.add(t,e)}function Mt(){var t=h.Promise.resolve(void 0);Nt=function(){t.then(zt)}}var Lt=!1,Ut=new Dt;function zt(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Ot(n)}var e=Pt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lt=!1}function Vt(t,e){kt.call(this),this.h=t||1,this.g=e||h,this.j=b(this.lb,this),this.l=Date.now()}function jt(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function qt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function $t(t){t.g=qt((()=>{t.g=null,t.i&&(t.i=!1,$t(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(Vt,kt),i=Vt.prototype,i.ca=!1,i.R=null,i.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),It(this,"tick"),this.ca&&(jt(this),this.start()))}},i.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Vt.X.M.call(this),jt(this),delete this.g};class Bt extends C{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$t(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kt(t){C.call(this),this.h=t,this.g={}}E(Kt,C);var Qt=[];function Ht(t,e,n,i){Array.isArray(n)||(n&&(Qt[0]=n.toString()),n=Qt);for(var r=0;r<n.length;r++){var s=pt(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Gt(t){st(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Wt(){this.g=!0}function Xt(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+l+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Yt(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Jt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+te(t,n)+(i?" "+i:"")}))}function Zt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function te(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return At(n)}catch(a){return e}}Kt.prototype.M=function(){Kt.X.M.call(this),Gt(this)},Kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Wt.prototype.Aa=function(){this.g=!1},Wt.prototype.info=function(){};var ee={},ne=null;function ie(){return ne=ne||new kt}function re(t){A.call(this,ee.Pa,t)}function se(t){const e=ie();It(e,new re(e))}function oe(t,e){A.call(this,ee.STAT_EVENT,t),this.stat=e}function ae(t){const e=ie();It(e,new oe(e,t))}function ue(t,e){A.call(this,ee.Qa,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ee.Pa="serverreachability",E(re,A),ee.STAT_EVENT="statevent",E(oe,A),ee.Qa="timingevent",E(ue,A);var ce={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},he={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function de(){}function fe(t){return t.h||(t.h=t.i())}function pe(){}de.prototype.h=null;var me,ge={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ve(){A.call(this,"d")}function ye(){A.call(this,"c")}function we(){}function be(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Kt(this),this.O=Ee,t=j?125:void 0,this.T=new Vt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}E(ve,A),E(ye,A),E(we,de),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Ee=45e3,Ce={},Te={};function ke(t,e,n){t.K=1,t.v=He(qe(e)),t.s=n,t.P=!0,Ie(t,null)}function Ie(t,e){t.F=Date.now(),De(t),t.A=qe(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),an(n.i,"t",i),t.C=0,n=t.l.H,t.h=new _e,t.g=hi(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Bt(b(t.La,t,t.g),t.N)),Ht(t.S,t.g,"readystatechange",t.ib),e=t.H?ot(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),se(),Xt(t.j,t.u,t.A,t.m,t.U,t.s)}function Se(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Ae(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=xe(t,n),i==Te){4==e&&(t.o=4,ae(14),r=!1),Jt(t.j,t.m,null,"[Incomplete Response]");break}if(i==Ce){t.o=4,ae(15),Jt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Jt(t.j,t.m,i,null),Fe(t,i)}Se(t)&&i!=Te&&i!=Ce&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ae(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ii(e),e.K=!0,ae(11))):(Jt(t.j,t.m,n,"[Invalid Chunked Response]"),Oe(t),Re(t))}function xe(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Te:(n=Number(e.substring(n,i)),isNaN(n)?Ce:(i+=1,i+n>e.length?Te:(e=e.substr(i,n),t.C=i+n,e)))}function De(t){t.V=Date.now()+t.O,Ne(t,t.O)}function Ne(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(b(t.gb,t),e)}function Pe(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Re(t){0==t.l.G||t.I||oi(t.l,t)}function Oe(t){Pe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,jt(t.T),Gt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||mn(n.h,t)))if(!t.J&&mn(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;si(n),Gn(n)}ni(n),ae(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=le(b(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(l){}n.ja=void 0}}else ui(n,11)}else if((t.J||n.g==t)&&si(n),!D(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.I=l[1],n.ka=l[2];const e=l[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=l[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const c=l[5];null!=c&&"number"===typeof c&&0<c&&(i=1.5*c,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(gn(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Qe(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=ci(i,i.H?i.ka:null,i.V),o.J){vn(i.h,o);var a=o,u=i.J;u&&a.setTimeout(u),a.B&&(Pe(a),De(a)),i.g=o}else ei(i);0<n.i.length&&Xn(n)}else"stop"!=l[0]&&"close"!=l[0]||ui(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?ui(n,7):Hn(n):"noop"!=l[0]&&n.l&&n.l.wa(l),n.A=0)}se(4)}catch(l){}}function Me(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Le(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Le(t),i=Me(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}i=be.prototype,i.setTimeout=function(t){this.O=t},i.ib=function(t){t=t.target;const e=this.L;e&&3==jn(t)?e.l():this.La(t)},i.La=function(t){try{if(t==this.g)t:{const c=jn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(3!=c||j||this.g&&(this.h.h||this.g.fa()||qn(this.g)))){this.I||4!=c||7==e||se(8==e||0>=d?3:2),Pe(this);var n=this.g.aa();this.Y=n;e:if(Se(this)){var i=qn(this.g);t="";var r=i.length,s=4==jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Oe(this),Re(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Yt(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ae(12),Oe(this),Re(this);break t}Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fe(this,n)}this.P?(Ae(this,c,o),j&&this.i&&3==c&&(Ht(this.S,this.T,"tick",this.hb),this.T.start())):(Jt(this.j,this.m,o,null),Fe(this,o)),4==c&&Oe(this),this.i&&!this.I&&(4==c?oi(this.l,this):(this.i=!1,De(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),Oe(this),Re(this)}}}catch(c){}},i.hb=function(){if(this.g){var t=jn(this.g),e=this.g.fa();this.C<e.length&&(Pe(this),Ae(this,t,e),this.i&&4!=t&&De(this))}},i.cancel=function(){this.I=!0,Oe(this)},i.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Zt(this.j,this.A),2!=this.K&&(se(),ae(17)),Oe(this),this.o=2,Re(this)):Ne(this,this.V-t)};var ze=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ve(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function je(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof je){this.h=void 0!==e?e:t.h,$e(this,t.j),this.s=t.s,this.g=t.g,Be(this,t.m),this.l=t.l,e=t.i;var n=new nn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ke(this,n),this.o=t.o}else t&&(n=String(t).match(ze))?(this.h=!!e,$e(this,n[1]||"",!0),this.s=Ge(n[2]||""),this.g=Ge(n[3]||"",!0),Be(this,n[4]),this.l=Ge(n[5]||"",!0),Ke(this,n[6]||"",!0),this.o=Ge(n[7]||"")):(this.h=!!e,this.i=new nn(null,this.h))}function qe(t){return new je(t)}function $e(t,e,n){t.j=n?Ge(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ke(t,e,n){e instanceof nn?(t.i=e,ln(t.i,t.h)):(n||(e=We(e,tn)),t.i=new nn(e,t.h))}function Qe(t,e,n){t.i.set(e,n)}function He(t){return Qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ge(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function We(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}je.prototype.toString=function(){var t=[],e=this.j;e&&t.push(We(e,Ye,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(We(e,Ye,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(We(n,"/"==n.charAt(0)?Ze:Je,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",We(n,en)),t.join("")};var Ye=/[#\/\?@]/g,Je=/[#\?:]/g,Ze=/[#\?]/g,tn=/[#\?@]/g,en=/#/g;function nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&Ve(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function sn(t,e){rn(t),e=un(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function on(t,e){return rn(t),e=un(t,e),t.g.has(e)}function an(t,e,n){sn(t,e),0<n.length&&(t.i=null,t.g.set(un(t,e),I(n)),t.h+=n.length)}function un(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ln(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(sn(this,e),an(this,n,t))}),t)),t.j=e}i=nn.prototype,i.add=function(t,e){rn(this),this.i=null,t=un(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){rn(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},i.oa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},i.W=function(t){rn(this);let e=[];if("string"===typeof t)on(this,t)&&(e=e.concat(this.g.get(un(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return rn(this),this.i=null,t=un(this,t),on(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};var cn=class{constructor(t,e){this.h=t,this.g=e}};function hn(t){this.l=t||dn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function mn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function gn(t,e){t.g?t.g.add(e):t.h=e}function vn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function yn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return I(t.i)}function wn(){}function bn(){this.g=new wn}function _n(t,e,n){const i=n||"";try{Ue(t,(function(t,n){let r=t;p(t)&&(r=At(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function En(t,e){const n=new Wt;if(h.Image){const i=new Image;i.onload=_(Cn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_(Cn,n,i,"TestLoadImage: error",!1,e),i.onabort=_(Cn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_(Cn,n,i,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function Cn(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(s){}}function Tn(t){this.l=t.ac||null,this.j=t.jb||!1}function kn(t,e){kt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=In,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},wn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},wn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(Tn,de),Tn.prototype.g=function(){return new kn(this.l,this.j)},Tn.prototype.i=function(t){return function(){return t}}({}),E(kn,kt);var In=0;function Sn(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function An(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xn(t)}function xn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=kn.prototype,i.open=function(t,e){if(this.readyState!=In)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=In},i.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sn(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},i.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?An(this):xn(this),3==this.readyState&&Sn(this)}},i.Va=function(t){this.g&&(this.response=this.responseText=t,An(this))},i.Ua=function(t){this.g&&(this.response=t,An(this))},i.ga=function(){this.g&&An(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Dn=h.JSON.parse;function Nn(t){kt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Pn,this.K=this.L=!1}E(Nn,kt);var Pn="",Rn=/^https?$/i,On=["POST","PUT"];function Fn(t){return z&&X()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Mn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ln(t),zn(t)}function Ln(t){t.D||(t.D=!0,It(t,"complete"),It(t,"error"))}function Un(t){if(t.h&&"undefined"!=typeof c&&(!t.C[1]||4!=jn(t)||2!=t.aa()))if(t.v&&4==jn(t))qt(t.Ha,0,t);else if(It(t,"readystatechange"),4==jn(t)){t.h=!1;try{const u=t.aa();t:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===u){var r=String(t.H).match(ze)[1]||null;if(!r&&h.self&&h.self.location){var s=h.self.location.protocol;r=s.substr(0,s.length-1)}i=!Rn.test(r?r.toLowerCase():"")}n=i}if(n)It(t,"complete"),It(t,"success");else{t.m=6;try{var o=2<jn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",Ln(t)}}finally{zn(t)}}}function zn(t,e){if(t.g){Vn(t);const i=t.g,r=t.C[0]?d:null;t.g=null,t.C=null,e||It(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function Vn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function jn(t){return t.g?t.g.readyState:0}function qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Pn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Si){return null}}function $n(t){let e="";return st(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Bn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=$n(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Qe(t,e,n))}function Kn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qn(t){this.Ca=0,this.i=[],this.j=new Wt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Kn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Kn("baseRetryDelayMs",5e3,t),this.bb=Kn("retryDelaySeedMs",1e4,t),this.$a=Kn("forwardChannelMaxRetries",2,t),this.ta=Kn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(t&&t.concurrentRequestLimit),this.Fa=new bn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Hn(t){if(Wn(t),3==t.G){var e=t.U++,n=qe(t.F);Qe(n,"SID",t.I),Qe(n,"RID",e),Qe(n,"TYPE","terminate"),Zn(t,n),e=new be(t,t.j,e,void 0),e.K=2,e.v=He(qe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=hi(e.l,null),e.g.da(e.v)),e.F=Date.now(),De(e)}li(t)}function Gn(t){t.g&&(ii(t),t.g.cancel(),t.g=null)}function Wn(t){Gn(t),t.u&&(h.clearTimeout(t.u),t.u=null),si(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Xn(t){fn(t.h)||t.m||(t.m=!0,Ft(t.Ja,t),t.C=0)}function Yn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=le(b(t.Ja,t,e),ai(t,t.C)),t.C++,!0))}function Jn(t,e){var n;n=e?e.m:t.U++;const i=qe(t.F);Qe(i,"SID",t.I),Qe(i,"RID",n),Qe(i,"AID",t.T),Zn(t,i),t.o&&t.s&&Bn(i,t.o,t.s),n=new be(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ti(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),gn(t.h,n),ke(n,i,e)}function Zn(t,e){t.ia&&st(t.ia,(function(t,n){Qe(e,n,t)})),t.l&&Ue({},(function(t,n){Qe(e,n,t)}))}function ti(t,e,n){n=Math.min(t.i.length,n);var i=t.l?b(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].h;const u=r[a].g;if(n-=e,0>n)e=Math.max(0,r[a].h-100),o=!1;else try{_n(u,t,"req"+n+"_")}catch(s){i&&i(u)}}if(o){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function ei(t){t.g||t.u||(t.Z=1,Ft(t.Ia,t),t.A=0)}function ni(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=le(b(t.Ia,t),ai(t,t.A)),t.A++,!0)}function ii(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ri(t){t.g=new be(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=qe(t.sa);Qe(e,"RID","rpc"),Qe(e,"SID",t.I),Qe(e,"CI",t.L?"0":"1"),Qe(e,"AID",t.T),Qe(e,"TYPE","xmlhttp"),Zn(t,e),t.o&&t.s&&Bn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=He(qe(e)),n.s=null,n.P=!0,Ie(n,t)}function si(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function oi(t,e){var n=null;if(t.g==e){si(t),ii(t),t.g=null;var i=2}else{if(!mn(t.h,e))return;n=e.D,vn(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=ie(),It(i,new ue(i,n)),Xn(t)}else ei(t);else if(r=e.o,3==r||0==r&&0<t.pa||!(1==i&&Yn(t,e)||2==i&&ni(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ui(t,5);break;case 4:ui(t,10);break;case 3:ui(t,6);break;default:ui(t,2)}}function ai(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ui(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=b(t.kb,t);n||(n=new je("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||$e(n,"https"),He(n)),En(n.toString(),i)}else ae(2);t.G=0,t.l&&t.l.va(e),li(t),Wn(t)}function li(t){if(t.G=0,t.la=[],t.l){const e=yn(t.h);0==e.length&&0==t.i.length||(S(t.la,e),S(t.la,t.i),t.h.i.length=0,I(t.i),t.i.length=0),t.l.ua()}}function ci(t,e,n){var i=n instanceof je?qe(n):new je(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),Be(i,i.m);else{var r=h.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new je(null,void 0);i&&$e(s,i),e&&(s.g=e),r&&Be(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Qe(i,n,e),Qe(i,"VER",t.ma),Zn(t,i),i}function hi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Nn(new Tn({jb:!0})):new Nn(t.ra),e.Ka(t.H),e}function di(){}function fi(){if(z&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function pi(t,e){kt.call(this),this.g=new Qn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!D(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!D(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vi(this)}function mi(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function gi(){ye.call(this),this.status=1}function vi(t){this.g=t}i=Nn.prototype,i.Ka=function(t){this.L=t},i.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?fe(this.u):fe(me),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Mn(this,s)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=h.FormData&&t instanceof h.FormData,!(0<=k(On,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vn(this),0<this.B&&((this.K=Fn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=qt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Mn(this,s)}},i.qa=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,It(this,"complete"),It(this,"abort"),zn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zn(this,!0)),Nn.X.M.call(this)},i.Ha=function(){this.s||(this.F||this.v||this.l?Un(this):this.fb())},i.fb=function(){Un(this)},i.aa=function(){try{return 2<jn(this)?this.g.status:-1}catch(t){return-1}},i.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Dn(e)}},i.Ea=function(){return this.m},i.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Qn.prototype,i.ma=8,i.G=1,i.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new be(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=ot(s),ut(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ti(this,r,e),n=qe(this.F),Qe(n,"RID",t),Qe(n,"CVER",22),this.D&&Qe(n,"X-HTTP-Session-Id",this.D),Zn(this,n),s&&(this.N?e="headers="+encodeURIComponent(String($n(s)))+"&"+e:this.o&&Bn(n,this.o,s)),gn(this.h,r),this.Ya&&Qe(n,"TYPE","init"),this.O?(Qe(n,"$req",e),Qe(n,"SID","null"),r.Z=!0,ke(r,n,null)):ke(r,n,e),this.G=2}}else 3==this.G&&(t?Jn(this,t):0==this.i.length||fn(this.h)||Jn(this))},i.Ia=function(){if(this.u=null,ri(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=le(b(this.eb,this),t)}},i.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ae(10),Gn(this),ri(this))},i.cb=function(){null!=this.v&&(this.v=null,Gn(this),ni(this),ae(19))},i.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))},i=di.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Ra=function(){},fi.prototype.g=function(t,e){return new pi(t,e)},E(pi,kt),pi.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ae(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ci(t,null,t.V),Xn(t)},pi.prototype.close=function(){Hn(this.g)},pi.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=At(t),t=n);e.i.push(new cn(e.ab++,t)),3==e.G&&Xn(e)},pi.prototype.M=function(){this.g.l=null,delete this.j,Hn(this.g),delete this.g,pi.X.M.call(this)},E(mi,ve),E(gi,ye),E(vi,di),vi.prototype.xa=function(){It(this.g,"a")},vi.prototype.wa=function(t){It(this.g,new mi(t))},vi.prototype.va=function(t){It(this.g,new gi)},vi.prototype.ua=function(){It(this.g,"b")},fi.prototype.createWebChannel=fi.prototype.g,pi.prototype.send=pi.prototype.u,pi.prototype.open=pi.prototype.m,pi.prototype.close=pi.prototype.close,ce.NO_ERROR=0,ce.TIMEOUT=8,ce.HTTP_ERROR=6,he.COMPLETE="complete",pe.EventType=ge,ge.OPEN="a",ge.CLOSE="b",ge.ERROR="c",ge.MESSAGE="d",kt.prototype.listen=kt.prototype.N,Nn.prototype.listenOnce=Nn.prototype.O,Nn.prototype.getLastError=Nn.prototype.Oa,Nn.prototype.getLastErrorCode=Nn.prototype.Ea,Nn.prototype.getStatus=Nn.prototype.aa,Nn.prototype.getResponseJson=Nn.prototype.Sa,Nn.prototype.getResponseText=Nn.prototype.fa,Nn.prototype.send=Nn.prototype.da,Nn.prototype.setWithCredentials=Nn.prototype.Ka;var yi=l.createWebChannelTransport=function(){return new fi},wi=l.getStatEventTarget=function(){return ie()},bi=l.ErrorCode=ce,_i=l.EventType=he,Ei=l.Event=ee,Ci=l.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ti=l.FetchXmlHttpFactory=Tn,ki=l.WebChannel=pe,Ii=l.XhrIo=Nn;const Si="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ai.UNAUTHENTICATED=new Ai(null),Ai.GOOGLE_CREDENTIALS=new Ai("google-credentials-uid"),Ai.FIRST_PARTY=new Ai("first-party-uid"),Ai.MOCK_USER=new Ai("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let xi="9.17.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new o.Yd("@firebase/firestore");function Ni(){return Di.logLevel}function Pi(t,...e){if(Di.logLevel<=o["in"].DEBUG){const n=e.map(Fi);Di.debug(`Firestore (${xi}): ${t}`,...n)}}function Ri(t,...e){if(Di.logLevel<=o["in"].ERROR){const n=e.map(Fi);Di.error(`Firestore (${xi}): ${t}`,...n)}}function Oi(t,...e){if(Di.logLevel<=o["in"].WARN){const n=e.map(Fi);Di.warn(`Firestore (${xi}): ${t}`,...n)}}function Fi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t="Unexpected state"){const e=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: `+t;throw Ri(e),new Error(e)}function Li(t,e){t||Mi()}function Ui(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Vi extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class $i{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ai.UNAUTHENTICATED)))}shutdown(){}}class Bi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Ki{constructor(t){this.t=t,this.currentUser=Ai.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new ji;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ji,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Pi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Pi("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ji)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Pi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Li("string"==typeof e.accessToken),new qi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Li(null===t||"string"==typeof t),new Ai(t)}}class Qi{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=Ai.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Li(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Hi{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}getToken(){return Promise.resolve(new Qi(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Ai.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wi{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Pi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Pi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Pi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):Pi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Li("string"==typeof t.token),this.A=t.token,new Gi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Xi(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Ji(t,e){return t<e?-1:t>e?1:0}function Zi(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Vi(zi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Vi(zi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Vi(zi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Vi(zi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tr.fromMillis(Date.now())}static fromDate(t){return tr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new tr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ji(this.nanoseconds,t.nanoseconds):Ji(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this.timestamp=t}static fromTimestamp(t){return new er(t)}static min(){return new er(new tr(0,0))}static max(){return new er(new tr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Mi(),void 0===n?n=t.length-e:n>t.length-e&&Mi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===nr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof nr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ir extends nr{construct(t,e,n){return new ir(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Vi(zi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ir(e)}static emptyPath(){return new ir([])}}const rr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sr extends nr{construct(t,e,n){return new sr(t,e,n)}static isValidIdentifier(t){return rr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new sr(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Vi(zi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Vi(zi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Vi(zi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Vi(zi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new sr(e)}static emptyPath(){return new sr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t){this.path=t}static fromPath(t){return new or(ir.fromString(t))}static fromName(t){return new or(ir.fromString(t).popFirst(5))}static empty(){return new or(ir.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ir.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ir.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new or(new ir(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}ar.UNKNOWN_ID=-1;function ur(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=er.fromTimestamp(1e9===i?new tr(n+1,0):new tr(n,i));return new cr(r,or.empty(),e)}function lr(t){return new cr(t.readTime,t.key,-1)}class cr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new cr(er.min(),or.empty(),-1)}static max(){return new cr(er.max(),or.empty(),-1)}}function hr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=or.comparator(t.documentKey,e.documentKey),0!==n?n:Ji(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t){if(t.code!==zi.FAILED_PRECONDITION||t.message!==dr)throw t;Pi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Mi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new mr(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof mr?e:mr.resolve(e)}catch(t){return mr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):mr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):mr.reject(e)}static resolve(t){return new mr(((e,n)=>{e(t)}))}static reject(t){return new mr(((e,n)=>{n(t)}))}static waitFor(t){return new mr(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=mr.resolve(!1);for(const n of t)e=e.next((t=>t?mr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new mr(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const u=a;e(t[u]).next((t=>{s[u]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new mr(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}vr.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class wr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new wr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof wr&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Er(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){return null==t}function Tr(t){return 0===t&&1/t==-1/0}function kr(t){return"number"==typeof t&&Number.isInteger(t)&&!Tr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ir(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ir(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ji(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ir.EMPTY_BYTE_STRING=new Ir("");const Sr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(Li(!!t),"string"==typeof t){let e=0;const n=Sr.exec(t);if(Li(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:xr(t.seconds),nanos:xr(t.nanos)}}function xr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Dr(t){return"string"==typeof t?Ir.fromBase64String(t):Ir.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Pr(t){const e=t.mapValue.fields.__previous_value__;return Nr(e)?Pr(e):e}function Rr(t){const e=Ar(t.mapValue.fields.__local_write_time__.timestampValue);return new tr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nr(t)?4:Gr(t)?9007199254740991:10:Mi()}function Mr(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Rr(t).isEqual(Rr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ar(t.timestampValue),i=Ar(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Dr(t.bytesValue).isEqual(Dr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return xr(t.geoPointValue.latitude)===xr(e.geoPointValue.latitude)&&xr(t.geoPointValue.longitude)===xr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return xr(t.integerValue)===xr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=xr(t.doubleValue),i=xr(e.doubleValue);return n===i?Tr(n)===Tr(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],Mr);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(br(n)!==br(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Mr(n[r],i[r])))return!1;return!0}(t,e);default:return Mi()}}function Lr(t,e){return void 0!==(t.values||[]).find((t=>Mr(t,e)))}function Ur(t,e){if(t===e)return 0;const n=Fr(t),i=Fr(e);if(n!==i)return Ji(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ji(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=xr(t.integerValue||t.doubleValue),i=xr(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return zr(t.timestampValue,e.timestampValue);case 4:return zr(Rr(t),Rr(e));case 5:return Ji(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Dr(t),i=Dr(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=Ji(n[r],i[r]);if(0!==t)return t}return Ji(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ji(xr(t.latitude),xr(e.latitude));return 0!==n?n:Ji(xr(t.longitude),xr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=Ur(n[r],i[r]);if(t)return t}return Ji(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Or.mapValue&&e===Or.mapValue)return 0;if(t===Or.mapValue)return 1;if(e===Or.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=Ji(i[o],s[o]);if(0!==t)return t;const e=Ur(n[i[o]],r[s[o]]);if(0!==e)return e}return Ji(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Mi()}}function zr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ji(t,e);const n=Ar(t),i=Ar(e),r=Ji(n.seconds,i.seconds);return 0!==r?r:Ji(n.nanos,i.nanos)}function Vr(t){return jr(t)}function jr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ar(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Dr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,or.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=jr(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${jr(t.fields[r])}`;return n+"}"}(t.mapValue):Mi();var e,n}function qr(t){return!!t&&"integerValue"in t}function $r(t){return!!t&&"arrayValue"in t}function Br(t){return!!t&&"nullValue"in t}function Kr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qr(t){return!!t&&"mapValue"in t}function Hr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _r(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Hr(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Gr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wr{constructor(t,e){this.position=t,this.inclusive=e}}function Xr(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?or.comparator(or.fromName(o.referenceValue),n.key):Ur(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Yr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{}class Zr extends Jr{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new as(t,e,n):"array-contains"===e?new hs(t,n):"in"===e?new ds(t,n):"not-in"===e?new fs(t,n):"array-contains-any"===e?new ps(t,n):new Zr(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new us(t,n):new ls(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Ur(e,this.value)):null!==e&&Fr(this.value)===Fr(e)&&this.matchesComparison(Ur(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Mi()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ts extends Jr{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new ts(t,e)}matches(t){return es(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function es(t){return"and"===t.op}function ns(t){return is(t)&&es(t)}function is(t){for(const e of t.filters)if(e instanceof ts)return!1;return!0}function rs(t){if(t instanceof Zr)return t.field.canonicalString()+t.op.toString()+Vr(t.value);if(ns(t))return t.filters.map((t=>rs(t))).join(",");{const e=t.filters.map((t=>rs(t))).join(",");return`${t.op}(${e})`}}function ss(t,e){return t instanceof Zr?function(t,e){return e instanceof Zr&&t.op===e.op&&t.field.isEqual(e.field)&&Mr(t.value,e.value)}(t,e):t instanceof ts?function(t,e){return e instanceof ts&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&ss(n,e.filters[i])),!0)}(t,e):void Mi()}function os(t){return t instanceof Zr?function(t){return`${t.field.canonicalString()} ${t.op} ${Vr(t.value)}`}(t):t instanceof ts?function(t){return t.op.toString()+" {"+t.getFilters().map(os).join(" ,")+"}"}(t):"Filter"}class as extends Zr{constructor(t,e,n){super(t,e,n),this.key=or.fromName(n.referenceValue)}matches(t){const e=or.comparator(t.key,this.key);return this.matchesComparison(e)}}class us extends Zr{constructor(t,e){super(t,"in",e),this.keys=cs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ls extends Zr{constructor(t,e){super(t,"not-in",e),this.keys=cs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function cs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>or.fromName(t.referenceValue)))}class hs extends Zr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return $r(e)&&Lr(e.arrayValue,this.value)}}class ds extends Zr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Lr(this.value.arrayValue,e)}}class fs extends Zr{constructor(t,e){super(t,"not-in",e)}matches(t){if(Lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Lr(this.value.arrayValue,e)}}class ps extends Zr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!$r(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Lr(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,e="asc"){this.field=t,this.dir=e}}function gs(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e){this.comparator=t,this.root=e||ws.EMPTY}insert(t,e){return new vs(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ws.BLACK,null,null))}remove(t){return new vs(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ws.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ys(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ys(this.root,t,this.comparator,!1)}getReverseIterator(){return new ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ys(this.root,t,this.comparator,!0)}}class ys{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ws{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:ws.RED,this.left=null!=i?i:ws.EMPTY,this.right=null!=r?r:ws.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new ws(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ws.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return ws.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ws.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ws.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mi();if(this.right.isRed())throw Mi();const t=this.left.check();if(t!==this.right.check())throw Mi();return t+(this.isRed()?0:1)}}ws.EMPTY=null,ws.RED=!0,ws.BLACK=!1,ws.EMPTY=new class{constructor(){this.size=0}get key(){throw Mi()}get value(){throw Mi()}get color(){throw Mi()}get left(){throw Mi()}get right(){throw Mi()}copy(t,e,n,i,r){return this}insert(t,e,n){return new ws(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bs{constructor(t){this.comparator=t,this.data=new vs(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new _s(this.data.getIterator())}getIteratorFrom(t){return new _s(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof bs))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new bs(this.comparator);return e.data=t,e}}class _s{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Es{constructor(t){this.fields=t,t.sort(sr.comparator)}static empty(){return new Es([])}unionWith(t){let e=new bs(sr.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Es(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t){this.value=t}static empty(){return new Cs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Qr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Hr(e)}setAll(t){let e=sr.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=Hr(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Qr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Mr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Qr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){_r(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new Cs(Hr(this.value))}}function Ts(t){const e=[];return _r(t.fields,((t,n)=>{const i=new sr([t]);if(Qr(n)){const t=Ts(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Es(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ks{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new ks(t,0,er.min(),er.min(),er.min(),Cs.empty(),0)}static newFoundDocument(t,e,n,i){return new ks(t,1,e,er.min(),n,i,0)}static newNoDocument(t,e){return new ks(t,2,e,er.min(),er.min(),Cs.empty(),0)}static newUnknownDocument(t,e){return new ks(t,3,e,er.min(),er.min(),Cs.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(er.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Cs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Cs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=er.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ks&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ks(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ft=null}}function Ss(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Is(t,e,n,i,r,s,o)}function As(t){const e=Ui(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>rs(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Cr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Vr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Vr(t))).join(",")),e.ft=t}return e.ft}function xs(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gs(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ss(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yr(t.startAt,e.startAt)&&Yr(t.endAt,e.endAt)}function Ds(t){return or.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Ps(t,e,n,i,r,s,o,a){return new Ns(t,e,n,i,r,s,o,a)}function Rs(t){return new Ns(t)}function Os(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Fs(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ms(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Ls(t){return null!==t.collectionGroup}function Us(t){const e=Ui(t);if(null===e.dt){e.dt=[];const t=Ms(e),n=Fs(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new ms(t)),e.dt.push(new ms(sr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new ms(sr.keyField(),t))}}}return e.dt}function zs(t){const e=Ui(t);if(!e._t)if("F"===e.limitType)e._t=Ss(e.path,e.collectionGroup,Us(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Us(e)){const e="desc"===r.dir?"asc":"desc";t.push(new ms(r.field,e))}const n=e.endAt?new Wr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Wr(e.startAt.position,e.startAt.inclusive):null;e._t=Ss(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e._t}function Vs(t,e,n){return new Ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function js(t,e){return xs(zs(t),zs(e))&&t.limitType===e.limitType}function qs(t){return`${As(zs(t))}|lt:${t.limitType}`}function $s(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>os(t))).join(", ")}]`),Cr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Vr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Vr(t))).join(",")),`Target(${e})`}(zs(t))}; limitType=${t.limitType})`}function Bs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):or.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Us(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Xr(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Us(t),e))&&!(t.endAt&&!function(t,e,n){const i=Xr(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Us(t),e))}(t,e)}function Ks(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Qs(t){return(e,n)=>{let i=!1;for(const r of Us(t)){const t=Hs(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Hs(t,e,n){const i=t.field.isKeyField()?or.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Ur(i,r):Mi()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Mi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tr(e)?"-0":e}}function Ws(t){return{integerValue:""+t}}function Xs(t,e){return kr(e)?Ws(e):Gs(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this._=void 0}}function Js(t,e,n){return t instanceof eo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof no?io(t,e):t instanceof ro?so(t,e):function(t,e){const n=to(t,e),i=ao(n)+ao(t.gt);return qr(n)&&qr(t.gt)?Ws(i):Gs(t.yt,i)}(t,e)}function Zs(t,e,n){return t instanceof no?io(t,e):t instanceof ro?so(t,e):n}function to(t,e){return t instanceof oo?qr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class eo extends Ys{}class no extends Ys{constructor(t){super(),this.elements=t}}function io(t,e){const n=uo(e);for(const i of t.elements)n.some((t=>Mr(t,i)))||n.push(i);return{arrayValue:{values:n}}}class ro extends Ys{constructor(t){super(),this.elements=t}}function so(t,e){let n=uo(e);for(const i of t.elements)n=n.filter((t=>!Mr(t,i)));return{arrayValue:{values:n}}}class oo extends Ys{constructor(t,e){super(),this.yt=t,this.gt=e}}function ao(t){return xr(t.integerValue||t.doubleValue)}function uo(t){return $r(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof no&&e instanceof no||t instanceof ro&&e instanceof ro?Zi(t.elements,e.elements,Mr):t instanceof oo&&e instanceof oo?Mr(t.gt,e.gt):t instanceof eo&&e instanceof eo}(t.transform,e.transform)}class co{constructor(t,e){this.version=t,this.transformResults=e}}class ho{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ho}static exists(t){return new ho(void 0,t)}static updateTime(t){return new ho(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class po{}function mo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ko(t.key,ho.none()):new bo(t.key,t.data,ho.none());{const n=t.data,i=Cs.empty();let r=new bs(sr.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new _o(t.key,i,new Es(r.toArray()),ho.none())}}function go(t,e,n){t instanceof bo?function(t,e,n){const i=t.value.clone(),r=Co(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof _o?function(t,e,n){if(!fo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Co(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Eo(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n,i){return t instanceof bo?function(t,e,n,i){if(!fo(t.precondition,e))return n;const r=t.value.clone(),s=To(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof _o?function(t,e,n,i){if(!fo(t.precondition,e))return n;const r=To(t.fieldTransforms,i,e),s=e.data;return s.setAll(Eo(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return fo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function yo(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=to(i.transform,t||null);null!=r&&(null===n&&(n=Cs.empty()),n.set(i.field,r))}return n||null}function wo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Zi(t,e,((t,e)=>lo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bo extends po{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _o extends po{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Eo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Co(t,e,n){const i=new Map;Li(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Zs(o,a,n[r]))}return i}function To(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,Js(t,s,e))}return i}class ko extends po{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Io extends po{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ao,xo;function Do(t){switch(t){default:return Mi();case zi.CANCELLED:case zi.UNKNOWN:case zi.DEADLINE_EXCEEDED:case zi.RESOURCE_EXHAUSTED:case zi.INTERNAL:case zi.UNAVAILABLE:case zi.UNAUTHENTICATED:return!1;case zi.INVALID_ARGUMENT:case zi.NOT_FOUND:case zi.ALREADY_EXISTS:case zi.PERMISSION_DENIED:case zi.FAILED_PRECONDITION:case zi.ABORTED:case zi.OUT_OF_RANGE:case zi.UNIMPLEMENTED:case zi.DATA_LOSS:return!0}}function No(t){if(void 0===t)return Ri("GRPC error has no .code"),zi.UNKNOWN;switch(t){case Ao.OK:return zi.OK;case Ao.CANCELLED:return zi.CANCELLED;case Ao.UNKNOWN:return zi.UNKNOWN;case Ao.DEADLINE_EXCEEDED:return zi.DEADLINE_EXCEEDED;case Ao.RESOURCE_EXHAUSTED:return zi.RESOURCE_EXHAUSTED;case Ao.INTERNAL:return zi.INTERNAL;case Ao.UNAVAILABLE:return zi.UNAVAILABLE;case Ao.UNAUTHENTICATED:return zi.UNAUTHENTICATED;case Ao.INVALID_ARGUMENT:return zi.INVALID_ARGUMENT;case Ao.NOT_FOUND:return zi.NOT_FOUND;case Ao.ALREADY_EXISTS:return zi.ALREADY_EXISTS;case Ao.PERMISSION_DENIED:return zi.PERMISSION_DENIED;case Ao.FAILED_PRECONDITION:return zi.FAILED_PRECONDITION;case Ao.ABORTED:return zi.ABORTED;case Ao.OUT_OF_RANGE:return zi.OUT_OF_RANGE;case Ao.UNIMPLEMENTED:return zi.UNIMPLEMENTED;case Ao.DATA_LOSS:return zi.DATA_LOSS;default:return Mi()}}(xo=Ao||(Ao={}))[xo.OK=0]="OK",xo[xo.CANCELLED=1]="CANCELLED",xo[xo.UNKNOWN=2]="UNKNOWN",xo[xo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xo[xo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xo[xo.NOT_FOUND=5]="NOT_FOUND",xo[xo.ALREADY_EXISTS=6]="ALREADY_EXISTS",xo[xo.PERMISSION_DENIED=7]="PERMISSION_DENIED",xo[xo.UNAUTHENTICATED=16]="UNAUTHENTICATED",xo[xo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xo[xo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xo[xo.ABORTED=10]="ABORTED",xo[xo.OUT_OF_RANGE=11]="OUT_OF_RANGE",xo[xo.UNIMPLEMENTED=12]="UNIMPLEMENTED",xo[xo.INTERNAL=13]="INTERNAL",xo[xo.UNAVAILABLE=14]="UNAVAILABLE",xo[xo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Po{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){_r(this.inner,((e,n)=>{for(const[i,r]of n)t(i,r)}))}isEmpty(){return Er(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new vs(or.comparator);function Oo(){return Ro}const Fo=new vs(or.comparator);function Mo(...t){let e=Fo;for(const n of t)e=e.insert(n.key,n);return e}function Lo(t){let e=Fo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Uo(){return Vo()}function zo(){return Vo()}function Vo(){return new Po((t=>t.toString()),((t,e)=>t.isEqual(e)))}const jo=new vs(or.comparator),qo=new bs(or.comparator);function $o(...t){let e=qo;for(const n of t)e=e.add(n);return e}const Bo=new bs(Ji);function Ko(){return Bo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Ho.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Qo(er.min(),i,Ko(),Oo(),$o())}}class Ho{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Ho(n,e,$o(),$o(),$o())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,e,n,i){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=i}}class Wo{constructor(t,e){this.targetId=t,this.Et=e}}class Xo{constructor(t,e,n=Ir.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Yo{constructor(){this.At=0,this.Rt=ta(),this.bt=Ir.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=$o(),e=$o(),n=$o();return this.Rt.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Mi()}})),new Ho(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=ta()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Jo{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=Oo(),this.qt=Zo(),this.Ut=new bs(Ji)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,(e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:Mi()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.zt(n)&&e(n)}))}Jt(t){const e=t.targetId,n=t.Et.count,i=this.Yt(e);if(i){const t=i.target;if(Ds(t))if(0===n){const n=new or(t.path);this.Qt(e,n,ks.newNoDocument(n,er.min()))}else Li(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach(((n,i)=>{const r=this.Yt(i);if(r){if(n.current&&Ds(r.target)){const e=new or(r.target.path);null!==this.Lt.get(e)||this.te(i,e)||this.Qt(i,e,ks.newNoDocument(e,t))}n.St&&(e.set(i,n.Ct()),n.xt())}}));let n=$o();this.qt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const i=new Qo(t,e,this.Ut,this.Lt,n);return this.Lt=Oo(),this.qt=Zo(),this.Ut=new bs(Ji),i}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const i=this.Wt(t);this.te(t,e)?i.Nt(e,1):i.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new Yo,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new bs(Ji),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||Pi("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Yo),this.$t.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}}function Zo(){return new vs(or.comparator)}function ta(){return new vs(or.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),na=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),ia=(()=>{const t={and:"AND",or:"OR"};return t})();class ra{constructor(t,e){this.databaseId=t,this.wt=e}}function sa(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oa(t,e){return t.wt?e.toBase64():e.toUint8Array()}function aa(t,e){return sa(t,e.toTimestamp())}function ua(t){return Li(!!t),er.fromTimestamp(function(t){const e=Ar(t);return new tr(e.seconds,e.nanos)}(t))}function la(t,e){return function(t){return new ir(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function ca(t){const e=ir.fromString(t);return Li(Ra(e)),e}function ha(t,e){return la(t.databaseId,e.path)}function da(t,e){const n=ca(e);if(n.get(1)!==t.databaseId.projectId)throw new Vi(zi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Vi(zi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new or(ga(n))}function fa(t,e){return la(t.databaseId,e)}function pa(t){const e=ca(t);return 4===e.length?ir.emptyPath():ga(e)}function ma(t){return new ir(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ga(t){return Li(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function va(t,e,n){return{name:ha(t,e),fields:n.value.mapValue.fields}}function ya(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Mi()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.wt?(Li(void 0===e||"string"==typeof e),Ir.fromBase64String(e||"")):(Li(void 0===e||e instanceof Uint8Array),Ir.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?zi.UNKNOWN:No(t.code);return new Vi(e,t.message||"")}(o);n=new Xo(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=da(t,i.document.name),s=ua(i.document.updateTime),o=i.document.createTime?ua(i.document.createTime):er.min(),a=new Cs({mapValue:{fields:i.document.fields}}),u=ks.newFoundDocument(r,s,o,a),l=i.targetIds||[],c=i.removedTargetIds||[];n=new Go(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=da(t,i.document),s=i.readTime?ua(i.readTime):er.min(),o=ks.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Go([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=da(t,i.document),s=i.removedTargetIds||[];n=new Go([],s,r,null)}else{if(!("filter"in e))return Mi();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new So(i),s=t.targetId;n=new Wo(s,r)}}return n}function wa(t,e){let n;if(e instanceof bo)n={update:va(t,e.key,e.value)};else if(e instanceof ko)n={delete:ha(t,e.key)};else if(e instanceof _o)n={update:va(t,e.key,e.data),updateMask:Pa(e.fieldMask)};else{if(!(e instanceof Io))return Mi();n={verify:ha(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof eo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof no)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ro)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof oo)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw Mi()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:aa(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Mi()}(t,e.precondition)),n}function ba(t,e){return t&&t.length>0?(Li(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ua(t.updateTime):ua(e);return n.isEqual(er.min())&&(n=ua(e)),new co(n,t.transformResults||[])}(t,e)))):[]}function _a(t,e){return{documents:[fa(t,e.path)]}}function Ea(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=fa(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fa(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0!==t.length)return Na(ts.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:xa(t.field),direction:Ia(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.wt||Cr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ca(t){let e=pa(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Li(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=ka(t);return e instanceof ts&&ns(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new ms(Da(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Cr(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new Wr(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new Wr(n,e)}(n.endAt)),Ps(e,r,o,s,a,"F",u,l)}function Ta(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mi()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function ka(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Da(t.unaryFilter.field);return Zr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Da(t.unaryFilter.field);return Zr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Da(t.unaryFilter.field);return Zr.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Da(t.unaryFilter.field);return Zr.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Mi()}}(t):void 0!==t.fieldFilter?function(t){return Zr.create(Da(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mi()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return ts.create(t.compositeFilter.filters.map((t=>ka(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Mi()}}(t.compositeFilter.op))}(t):Mi()}function Ia(t){return ea[t]}function Sa(t){return na[t]}function Aa(t){return ia[t]}function xa(t){return{fieldPath:t.canonicalString()}}function Da(t){return sr.fromServerFormat(t.fieldPath)}function Na(t){return t instanceof Zr?function(t){if("=="===t.op){if(Kr(t.value))return{unaryFilter:{field:xa(t.field),op:"IS_NAN"}};if(Br(t.value))return{unaryFilter:{field:xa(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Kr(t.value))return{unaryFilter:{field:xa(t.field),op:"IS_NOT_NAN"}};if(Br(t.value))return{unaryFilter:{field:xa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xa(t.field),op:Sa(t.op),value:t.value}}}(t):t instanceof ts?function(t){const e=t.getFilters().map((t=>Na(t)));return 1===e.length?e[0]:{compositeFilter:{op:Aa(t.op),filters:e}}}(t):Mi()}function Pa(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ra(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Fa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ma=Fa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class La{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&go(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=vo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=vo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=zo();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=mo(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(er.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),$o())}isEqual(t){return this.batchId===t.batchId&&Zi(this.mutations,t.mutations,((t,e)=>wo(t,e)))&&Zi(this.baseMutations,t.baseMutations,((t,e)=>wo(t,e)))}}class Ua{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Li(t.mutations.length===n.length);let i=jo;const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new Ua(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,e,n,i,r=er.min(),s=er.min(),o=Ir.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Va(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Va(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Va(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t){this.ie=t}}function qa(t){const e=Ca({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Vs(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){}ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(xr(t.integerValue));else if("doubleValue"in t){const n=xr(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),Tr(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(Dr(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Gr(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):Mi()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const i of Object.keys(n))this.de(i,e),this.ce(n[i],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const i of n)this.ce(i,e)}me(t,e){this.he(e,37),or.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}}$a.Ie=new $a;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(){this.Je=new Ka}addToCollectionParentIndex(t,e){return this.Je.add(e),mr.resolve()}getCollectionParents(t,e){return mr.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return mr.resolve()}deleteFieldIndex(t,e){return mr.resolve()}getDocumentsMatchingTarget(t,e){return mr.resolve(null)}getIndexType(t,e){return mr.resolve(0)}getFieldIndexes(t,e){return mr.resolve([])}getNextCollectionGroupToUpdate(t){return mr.resolve(null)}getMinOffset(t,e){return mr.resolve(cr.min())}getMinOffsetFromCollectionGroup(t,e){return mr.resolve(cr.min())}updateCollectionGroup(t,e,n){return mr.resolve()}updateIndexEntries(t,e){return mr.resolve()}}class Ka{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new bs(ir.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new bs(ir.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Qa{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Qa(t,Qa.DEFAULT_COLLECTION_PERCENTILE,Qa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qa.DEFAULT_COLLECTION_PERCENTILE=10,Qa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qa.DEFAULT=new Qa(41943040,Qa.DEFAULT_COLLECTION_PERCENTILE,Qa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qa.DISABLED=new Qa(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Ha(0)}static vn(){return new Ha(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga{constructor(){this.changes=new Po((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ks.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?mr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&vo(n.mutation,t,Es.empty(),tr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,$o()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=$o()){const i=Uo();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Mo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Uo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,$o())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Oo();const s=Vo(),o=Vo();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof _o)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),vo(o.mutation,e,o.mutation.getFieldMask(),tr.now())):s.set(e.key,Es.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Wa(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Vo();let i=new vs(((t,e)=>t-e)),r=$o();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Es.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||$o()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,u=i.value,l=zo();u.forEach((t=>{if(!r.has(t)){const i=mo(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return mr.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return or.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ls(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):mr.resolve(Uo());let o=-1,a=r;return s.next((e=>mr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?mr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,$o()))).next((t=>({batchId:o,changes:Lo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new or(e)).next((t=>{let e=Mo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let r=Mo();return this.indexManager.getCollectionParents(t,i).next((s=>mr.forEach(s,(s=>{const o=function(t,e){return new Ns(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,ks.newInvalidDocument(i)))}));let n=Mo();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&vo(s.mutation,r,Es.empty(),tr.now()),Bs(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return mr.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:ua(n.createTime)}),mr.resolve()}getNamedQuery(t,e){return mr.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:qa(t.bundledQuery),readTime:ua(t.readTime)}}(e)),mr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.overlays=new vs(or.comparator),this.es=new Map}getOverlay(t,e){return mr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Uo();return mr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.oe(t,e,i)})),mr.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.es.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),mr.resolve()}getOverlaysForCollection(t,e,n){const i=Uo(),r=e.length+1,s=new or(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return mr.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new vs(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Uo(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Uo(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return mr.resolve(o)}oe(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new za(e,n));let r=this.es.get(e);void 0===r&&(r=$o(),this.es.set(e,r)),this.es.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this.ns=new bs(tu.ss),this.rs=new bs(tu.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new tu(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new tu(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new or(new ir([])),n=new tu(e,t),i=new tu(e,t+1),r=[];return this.rs.forEachInRange([n,i],(t=>{this.cs(t),r.push(t.key)})),r}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new or(new ir([])),n=new tu(e,t),i=new tu(e,t+1);let r=$o();return this.rs.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new tu(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class tu{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return or.comparator(t.key,e.key)||Ji(t._s,e._s)}static os(t,e){return Ji(t._s,e._s)||or.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new bs(tu.ss)}checkEmpty(t){return mr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new La(r,e,n,i);this.mutationQueue.push(s);for(const o of i)this.gs=this.gs.add(new tu(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return mr.resolve(s)}lookupMutationBatch(t,e){return mr.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ps(n),r=i<0?0:i;return mr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return mr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return mr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new tu(e,0),i=new tu(e,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,i],(t=>{const e=this.ys(t._s);r.push(e)})),mr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new bs(Ji);return e.forEach((t=>{const e=new tu(t,0),i=new tu(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,i],(t=>{n=n.add(t._s)}))})),mr.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;or.isDocumentKey(r)||(r=r.child(""));const s=new tu(new or(r),0);let o=new bs(Ji);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t._s)),!0)}),s),mr.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Li(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return mr.forEach(e.mutations,(i=>{const r=new tu(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new tu(e,0),i=this.gs.firstAfterOrEqual(n);return mr.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,mr.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t){this.Es=t,this.docs=new vs(or.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return mr.resolve(n?n.document.mutableCopy():ks.newInvalidDocument(e))}getEntries(t,e){let n=Oo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ks.newInvalidDocument(t))})),mr.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Oo();const s=e.path,o=new or(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||hr(lr(o),n)<=0||(i.has(o.key)||Bs(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return mr.resolve(r)}getAllFromCollectionGroup(t,e,n,i){Mi()}As(t,e){return mr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new iu(this)}getSize(t){return mr.resolve(this.size)}}class iu extends Ga{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(n)})),mr.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t){this.persistence=t,this.Rs=new Po((t=>As(t)),xs),this.lastRemoteSnapshotVersion=er.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Za,this.targetCount=0,this.vs=Ha.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),mr.resolve()}getLastRemoteSnapshotVersion(t){return mr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return mr.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),mr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),mr.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ha(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,mr.resolve()}updateTargetData(t,e){return this.Dn(e),mr.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,mr.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),mr.waitFor(r).next((()=>i))}getTargetCount(t){return mr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return mr.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),mr.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),mr.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),mr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return mr.resolve(n)}containsKey(t,e){return mr.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new vr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new ru(this),this.indexManager=new Ba,this.remoteDocumentCache=function(t){return new nu(t)}((t=>this.referenceDelegate.xs(t))),this.yt=new ja(e),this.Ns=new Ya(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ja,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new eu(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Pi("MemoryPersistence","Starting transaction:",t);const i=new ou(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((t=>this.referenceDelegate.Os(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ms(t,e){return mr.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class ou extends fr{constructor(t){super(),this.currentSequenceNumber=t}}class au{constructor(t){this.persistence=t,this.Fs=new Za,this.$s=null}static Bs(t){return new au(t)}get Ls(){if(this.$s)return this.$s;throw Mi()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),mr.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),mr.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),mr.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return mr.forEach(this.Ls,(n=>{const i=or.fromPath(n);return this.qs(t,i).next((t=>{t||e.removeEntry(i,er.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.qs(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}qs(t,e){return mr.or([()=>mr.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uu{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=i}static Ci(t,e){let n=$o(),i=$o();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new uu(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.ki(t,e).next((r=>r||this.Oi(t,e,i,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(Os(e))return mr.resolve(null);let n=zs(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=Vs(e,null,"F"),n=zs(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=$o(...i);return this.Ni.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Fi(e,i);return this.$i(e,s,r,n.readTime)?this.ki(t,Vs(e,null,"F")):this.Bi(t,s,e,n)}))))})))))}Oi(t,e,n,i){return Os(e)||i.isEqual(er.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((r=>{const s=this.Fi(e,r);return this.$i(e,s,n,i)?this.Mi(t,e):(Ni()<=o["in"].DEBUG&&Pi("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$s(e)),this.Bi(t,s,e,ur(i,-1)))}))}Fi(t,e){let n=new bs(Qs(t));return e.forEach(((e,i)=>{Bs(t,i)&&(n=n.add(i))})),n}$i(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(t,e){return Ni()<=o["in"].DEBUG&&Pi("QueryEngine","Using full collection scan to execute query:",$s(e)),this.Ni.getDocumentsMatchingQuery(t,e,cr.min())}Bi(t,e,n,i){return this.Ni.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t,e,n,i){this.persistence=t,this.Li=e,this.yt=i,this.qi=new vs(Ji),this.Ui=new Po((t=>As(t)),xs),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Xa(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qi)))}}function hu(t,e,n,i){return new cu(t,e,n,i)}async function du(t,e){const n=Ui(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=$o();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function fu(t,e){const n=Ui(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=mr.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Li(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=$o();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}function pu(t){const e=Ui(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function mu(t,e){const n=Ui(t),i=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const o=[];e.targetChanges.forEach(((s,a)=>{const u=r.get(a);if(!u)return;o.push(n.Cs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,s.addedDocuments,a))));let l=u.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(Ir.EMPTY_BYTE_STRING,er.min()).withLastLimboFreeSnapshotVersion(er.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,l,s)&&o.push(n.Cs.updateTargetData(t,l))}));let a=Oo(),u=$o();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(gu(t,s,e.documentUpdates).next((t=>{a=t.Wi,u=t.zi}))),!i.isEqual(er.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return mr.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,u))).next((()=>a))})).then((t=>(n.qi=r,t)))}function gu(t,e,n){let i=$o(),r=$o();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Oo();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(er.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):Pi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:i,zi:r}}))}function vu(t,e){const n=Ui(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function yu(t,e){const n=Ui(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Cs.getTargetData(t,e).next((r=>r?(i=r,mr.resolve(i)):n.Cs.allocateTargetId(t).next((r=>(i=new Va(e,r,0,t.currentSequenceNumber),n.Cs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.qi.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t}))}async function wu(t,e,n){const i=Ui(t),r=i.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!gr(t))throw t;Pi("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.qi=i.qi.remove(e),i.Ui.delete(r.target)}function bu(t,e,n){const i=Ui(t);let r=er.min(),s=$o();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=Ui(t),r=i.Ui.get(n);return void 0!==r?mr.resolve(i.qi.get(r)):i.Cs.getTargetData(e,n)}(i,t,zs(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.Li.getDocumentsMatchingQuery(t,e,n?r:er.min(),n?s:$o()))).next((t=>(_u(i,Ks(e),t),{documents:t,Hi:s})))))}function _u(t,e,n){let i=t.Ki.get(e)||er.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Ki.set(e,i)}class Eu{constructor(){this.activeTargetIds=Ko()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cu{constructor(){this.Lr=new Eu,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Eu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{Ur(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Pi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Pi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,i,r){const s=this.ho(t,e);Pi("RestConnection","Sending: ",s,n);const o={};return this.lo(o,i,r),this.fo(t,s,o,n).then((t=>(Pi("RestConnection","Received: ",t),t)),(e=>{throw Oi("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}_o(t,e,n,i,r,s){return this.ao(t,e,n,i,r)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+xi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=Iu[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,i){return new Promise(((r,s)=>{const o=new Ii;o.setWithCredentials(!0),o.listenOnce(_i.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case bi.NO_ERROR:const e=o.getResponseJson();Pi("Connection","XHR received:",JSON.stringify(e)),r(e);break;case bi.TIMEOUT:Pi("Connection",'RPC "'+t+'" timed out'),s(new Vi(zi.DEADLINE_EXCEEDED,"Request time out"));break;case bi.HTTP_ERROR:const n=o.getStatus();if(Pi("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(zi).indexOf(e)>=0?e:zi.UNKNOWN}(e.status);s(new Vi(t,e.message))}else s(new Vi(zi.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Vi(zi.UNAVAILABLE,"Connection failed."));break;default:Mi()}}finally{Pi("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=yi(),s=wi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ti({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=i.join("");Pi("Connection","Creating WebChannel: "+a,o);const u=r.createWebChannel(a,o);let l=!1,c=!1;const h=new Su({Hr:t=>{c?Pi("Connection","Not sending because WebChannel is closed:",t):(l||(Pi("Connection","Opening WebChannel transport."),u.open(),l=!0),Pi("Connection","WebChannel sending:",t),u.send(t))},Jr:()=>u.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(u,ki.EventType.OPEN,(()=>{c||Pi("Connection","WebChannel transport opened.")})),d(u,ki.EventType.CLOSE,(()=>{c||(c=!0,Pi("Connection","WebChannel transport closed"),h.io())})),d(u,ki.EventType.ERROR,(t=>{c||(c=!0,Oi("Connection","WebChannel transport errored:",t),h.io(new Vi(zi.UNAVAILABLE,"The operation could not be completed")))})),d(u,ki.EventType.MESSAGE,(t=>{var e;if(!c){const n=t.data[0];Li(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){Pi("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Ao[t];if(void 0!==e)return No(e)}(t),n=r.message;void 0===e&&(e=zi.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),c=!0,h.io(new Vi(e,n)),u.close()}else Pi("Connection","WebChannel received:",n),h.ro(n)}})),d(s,Ei.STAT_EVENT,(t=>{t.stat===Ci.PROXY?Pi("Connection","Detected buffering proxy"):t.stat===Ci.NOPROXY&&Pi("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){return new ra(t,!0)}class Nu{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&Pi("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,e,n,i,r,s,o,a){this.Hs=t,this.vo=n,this.Vo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Nu(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===zi.RESOURCE_EXHAUSTED?(Ri(e.toString()),Ri("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===zi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new Vi(zi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return Pi("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(Pi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ru extends Pu{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.yt=r}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=ya(this.yt,t),n=function(t){if(!("targetChange"in t))return er.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?er.min():e.readTime?ua(e.readTime):er.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=ma(this.yt),e.addTarget=function(t,e){let n;const i=e.target;return n=Ds(i)?{documents:_a(t,i)}:{query:Ea(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=oa(t,e.resumeToken):e.snapshotVersion.compareTo(er.min())>0&&(n.readTime=sa(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=Ta(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=ma(this.yt),e.removeTarget=t,this.Bo(e)}}class Ou extends Pu{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Li(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=ba(t.writeResults,t.commitTime),n=ua(t.commitTime);return this.listener.Zo(n,e)}return Li(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=ma(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>wa(this.yt,t)))};this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=i,this.nu=!1}su(){if(this.nu)throw new Vi(zi.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.ao(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===zi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vi(zi.UNKNOWN,t.toString())}))}_o(t,e,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection._o(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===zi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vi(zi.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class Mu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ri(e),this.ou=!1):Pi("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur((t=>{n.enqueueAndForget((async()=>{Qu(this)&&(Pi("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ui(t);e._u.add(4),await zu(e),e.gu.set("Unknown"),e._u.delete(4),await Uu(e)}(this))}))})),this.gu=new Mu(n,i)}}async function Uu(t){if(Qu(t))for(const e of t.wu)await e(!0)}async function zu(t){for(const e of t.wu)await e(!1)}function Vu(t,e){const n=Ui(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Ku(n)?Bu(n):cl(n).ko()&&qu(n,e))}function ju(t,e){const n=Ui(t),i=cl(n);n.du.delete(e),i.ko()&&$u(n,e),0===n.du.size&&(i.ko()?i.Fo():Qu(n)&&n.gu.set("Unknown"))}function qu(t,e){t.yu.Ot(e.targetId),cl(t).zo(e)}function $u(t,e){t.yu.Ot(e),cl(t).Ho(e)}function Bu(t){t.yu=new Jo({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),cl(t).start(),t.gu.uu()}function Ku(t){return Qu(t)&&!cl(t).No()&&t.du.size>0}function Qu(t){return 0===Ui(t)._u.size}function Hu(t){t.yu=void 0}async function Gu(t){t.du.forEach(((e,n)=>{qu(t,e)}))}async function Wu(t,e){Hu(t),Ku(t)?(t.gu.hu(e),Bu(t)):t.gu.set("Unknown")}async function Xu(t,e,n){if(t.gu.set("Online"),e instanceof Xo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.du.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.du.delete(i),t.yu.removeTarget(i))}(t,e)}catch(n){Pi("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Yu(t,n)}else if(e instanceof Go?t.yu.Kt(e):e instanceof Wo?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(er.min()))try{const e=await pu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.du.get(i);r&&t.du.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(Ir.EMPTY_BYTE_STRING,n.snapshotVersion)),$u(t,e);const i=new Va(n.target,e,1,n.sequenceNumber);qu(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Pi("RemoteStore","Failed to raise snapshot:",e),await Yu(t,e)}}async function Yu(t,e,n){if(!gr(e))throw e;t._u.add(1),await zu(t),t.gu.set("Offline"),n||(n=()=>pu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Pi("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Uu(t)}))}function Ju(t,e){return e().catch((n=>Yu(t,n,e)))}async function Zu(t){const e=Ui(t),n=hl(e);let i=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;tl(e);)try{const t=await vu(e.localStore,i);if(null===t){0===e.fu.length&&n.Fo();break}i=t.batchId,el(e,t)}catch(t){await Yu(e,t)}nl(e)&&il(e)}function tl(t){return Qu(t)&&t.fu.length<10}function el(t,e){t.fu.push(e);const n=hl(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function nl(t){return Qu(t)&&!hl(t).No()&&t.fu.length>0}function il(t){hl(t).start()}async function rl(t){hl(t).eu()}async function sl(t){const e=hl(t);for(const n of t.fu)e.Xo(n.mutations)}async function ol(t,e,n){const i=t.fu.shift(),r=Ua.from(i,e,n);await Ju(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Zu(t)}async function al(t,e){e&&hl(t).Yo&&await async function(t,e){if(n=e.code,Do(n)&&n!==zi.ABORTED){const n=t.fu.shift();hl(t).Mo(),await Ju(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Zu(t)}var n}(t,e),nl(t)&&il(t)}async function ul(t,e){const n=Ui(t);n.asyncQueue.verifyOperationInProgress(),Pi("RemoteStore","RemoteStore received new credentials");const i=Qu(n);n._u.add(3),await zu(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Uu(n)}async function ll(t,e){const n=Ui(t);e?(n._u.delete(2),await Uu(n)):e||(n._u.add(2),await zu(n),n.gu.set("Unknown"))}function cl(t){return t.pu||(t.pu=function(t,e,n){const i=Ui(t);return i.su(),new Ru(e,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:Gu.bind(null,t),Zr:Wu.bind(null,t),Wo:Xu.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),Ku(t)?Bu(t):t.gu.set("Unknown")):(await t.pu.stop(),Hu(t))}))),t.pu}function hl(t){return t.Iu||(t.Iu=function(t,e,n){const i=Ui(t);return i.su(),new Ou(e,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(t.datastore,t.asyncQueue,{Yr:rl.bind(null,t),Zr:al.bind(null,t),tu:sl.bind(null,t),Zo:ol.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await Zu(t)):(await t.Iu.stop(),t.fu.length>0&&(Pi("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dl{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new dl(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Vi(zi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fl(t,e){if(Ri("AsyncQueue",`${e}: ${t}`),gr(t))return new Vi(zi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){this.comparator=t?(e,n)=>t(e,n)||or.comparator(e.key,n.key):(t,e)=>or.comparator(t.key,e.key),this.keyedMap=Mo(),this.sortedSet=new vs(this.comparator)}static emptySet(t){return new pl(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof pl))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new pl;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.Tu=new vs(or.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):Mi():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class gl{constructor(t,e,n,i,r,s,o,a,u){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(t,e,n,i,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new gl(t,e,pl.emptySet(e),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&js(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(){this.Au=void 0,this.listeners=[]}}class yl{constructor(){this.queries=new Po((t=>qs(t)),js),this.onlineState="Unknown",this.Ru=new Set}}async function wl(t,e){const n=Ui(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new vl),r)try{s.Au=await n.onListen(i)}catch(t){const n=fl(t,`Initialization of query '${$s(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Cl(n)}async function bl(t,e){const n=Ui(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function _l(t,e){const n=Ui(t);let i=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(r)&&(i=!0);e.Au=r}}i&&Cl(n)}function El(t,e,n){const i=Ui(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Cl(t){t.Ru.forEach((t=>{t.next()}))}class Tl{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new gl(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=gl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kl{constructor(t){this.key=t}}class Il{constructor(t){this.key=t}}class Sl{constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=$o(),this.mutatedKeys=$o(),this.Gu=Qs(t),this.Qu=new pl(this.Gu)}get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new ml,i=e?e.Qu:this.Qu;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,u="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),c=Bs(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;l&&c?l.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Hu(l,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Gu(c,a)>0||u&&this.Gu(c,u)<0)&&(o=!0)):!l&&c?(n.track({type:0,doc:c}),f=!0):l&&!c&&(n.track({type:1,doc:l}),f=!0,(a||u)&&(o=!0)),f&&(c?(s=s.add(c),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Qu:s,zu:n,$i:o,mutatedKeys:r}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Eu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mi()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const s=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==r.length||a?{snapshot:new gl(this.query,t.Qu,i,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ml,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.qu=this.qu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qu=this.qu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=$o(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new Il(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new kl(n))})),e}tc(t){this.qu=t.Hi,this.Ku=$o();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return gl.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Al{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class xl{constructor(t){this.key=t,this.nc=!1}}class Dl{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new Po((t=>qs(t)),js),this.rc=new Map,this.oc=new Set,this.uc=new vs(or.comparator),this.cc=new Map,this.ac=new Za,this.hc={},this.lc=new Map,this.fc=Ha.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Nl(t,e){const n=Xl(t);let i,r;const s=n.ic.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.ec();else{const t=await yu(n.localStore,zs(e));n.isPrimaryClient&&Vu(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Pl(n,e,i,"current"===s,t.resumeToken)}return r}async function Pl(t,e,n,i,r){t._c=(e,n,i)=>async function(t,e,n,i){let r=e.view.Wu(n);r.$i&&(r=await bu(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Bl(t,e.targetId,o.Xu),o.snapshot}(t,e,n,i);const s=await bu(t.localStore,e,!0),o=new Sl(e,s.Hi),a=o.Wu(s.documents),u=Ho.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,r),l=o.applyChanges(a,t.isPrimaryClient,u);Bl(t,n,l.Xu);const c=new Al(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function Rl(t,e){const n=Ui(t),i=n.ic.get(e),r=n.rc.get(i.targetId);if(r.length>1)return n.rc.set(i.targetId,r.filter((t=>!js(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await wu(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),ju(n.remoteStore,i.targetId),ql(n,i.targetId)})).catch(pr)):(ql(n,i.targetId),await wu(n.localStore,i.targetId,!0))}async function Ol(t,e,n){const i=Yl(t);try{const t=await function(t,e){const n=Ui(t),i=tr.now(),r=e.reduce(((t,e)=>t.add(e.key)),$o());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Oo(),u=$o();return n.Gi.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(u=u.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=yo(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new _o(t.key,e,Ts(e.value.mapValue),ho.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,u);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Lo(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.hc[t.currentUser.toKey()];i||(i=new vs(Ji)),i=i.insert(e,n),t.hc[t.currentUser.toKey()]=i}(i,t.batchId,n),await Hl(i,t.changes),await Zu(i.remoteStore)}catch(t){const e=fl(t,"Failed to persist write");n.reject(e)}}async function Fl(t,e){const n=Ui(t);try{const t=await mu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.cc.get(e);i&&(Li(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.nc=!0:t.modifiedDocuments.size>0?Li(i.nc):t.removedDocuments.size>0&&(Li(i.nc),i.nc=!1))})),await Hl(n,t,e)}catch(t){await pr(t)}}function Ml(t,e,n){const i=Ui(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ic.forEach(((n,i)=>{const r=i.view.bu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Ui(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.bu(e)&&(i=!0)})),i&&Cl(n)}(i.eventManager,e),t.length&&i.sc.Wo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Ll(t,e,n){const i=Ui(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.cc.get(e),s=r&&r.key;if(s){let t=new vs(or.comparator);t=t.insert(s,ks.newNoDocument(s,er.min()));const n=$o().add(s),r=new Qo(er.min(),new Map,new bs(Ji),t,n);await Fl(i,r),i.uc=i.uc.remove(s),i.cc.delete(e),Ql(i)}else await wu(i.localStore,e,!1).then((()=>ql(i,e,n))).catch(pr)}async function Ul(t,e){const n=Ui(t),i=e.batch.batchId;try{const t=await fu(n.localStore,e);jl(n,i,null),Vl(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Hl(n,t)}catch(t){await pr(t)}}async function zl(t,e,n){const i=Ui(t);try{const t=await function(t,e){const n=Ui(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Li(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);jl(i,e,n),Vl(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Hl(i,t)}catch(n){await pr(n)}}function Vl(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function jl(t,e,n){const i=Ui(t);let r=i.hc[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.hc[i.currentUser.toKey()]=r}}function ql(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.rc.get(e))t.ic.delete(i),n&&t.sc.wc(i,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||$l(t,e)}))}function $l(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(ju(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ql(t))}function Bl(t,e,n){for(const i of n)i instanceof kl?(t.ac.addReference(i.key,e),Kl(t,i)):i instanceof Il?(Pi("SyncEngine","Document no longer in limbo: "+i.key),t.ac.removeReference(i.key,e),t.ac.containsKey(i.key)||$l(t,i.key)):Mi()}function Kl(t,e){const n=e.key,i=n.path.canonicalString();t.uc.get(n)||t.oc.has(i)||(Pi("SyncEngine","New document in limbo: "+n),t.oc.add(i),Ql(t))}function Ql(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new or(ir.fromString(e)),i=t.fc.next();t.cc.set(i,new xl(n)),t.uc=t.uc.insert(n,i),Vu(t.remoteStore,new Va(zs(Rs(n.path)),i,2,vr.at))}}async function Hl(t,e,n){const i=Ui(t),r=[],s=[],o=[];i.ic.isEmpty()||(i.ic.forEach(((t,a)=>{o.push(i._c(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=uu.Ci(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.sc.Wo(r),await async function(t,e){const n=Ui(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>mr.forEach(e,(e=>mr.forEach(e.Si,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>mr.forEach(e.Di,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!gr(t))throw t;Pi("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.qi.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.qi=n.qi.insert(t,r)}}}(i.localStore,s))}async function Gl(t,e){const n=Ui(t);if(!n.currentUser.isEqual(e)){Pi("SyncEngine","User change. New user:",e.toKey());const t=await du(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new Vi(zi.CANCELLED,e))}))})),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Hl(n,t.ji)}}function Wl(t,e){const n=Ui(t),i=n.cc.get(e);if(i&&i.nc)return $o().add(i.key);{let t=$o();const i=n.rc.get(e);if(!i)return t;for(const e of i){const i=n.ic.get(e);t=t.unionWith(i.view.ju)}return t}}function Xl(t){const e=Ui(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ll.bind(null,e),e.sc.Wo=_l.bind(null,e.eventManager),e.sc.wc=El.bind(null,e.eventManager),e}function Yl(t){const e=Ui(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ul.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zl.bind(null,e),e}class Jl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=Du(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return hu(this.persistence,new lu,t.initialUser,this.yt)}yc(t){return new su(au.Bs,this.yt)}gc(t){return new Cu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Zl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ml(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gl.bind(null,this.syncEngine),await ll(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new yl}createDatastore(t){const e=Du(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Au(i));var i;return function(t,e,n,i){return new Fu(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>Ml(this.syncEngine,t,0),s=ku.C()?new ku:new Tu,new Lu(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Dl(t,e,n,i,r,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ui(t);Pi("RemoteStore","RemoteStore shutting down."),e._u.add(5),await zu(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t,e,n){if(!n)throw new Vi(zi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ec(t,e,n,i){if(!0===e&&!0===i)throw new Vi(zi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nc(t){if(!or.isDocumentKey(t))throw new Vi(zi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ic(t){if(or.isDocumentKey(t))throw new Vi(zi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Mi()}function sc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Vi(zi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rc(t);throw new Vi(zi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oc=new Map;class ac{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Vi(zi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Vi(zi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,ec("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ac({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Vi(zi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Vi(zi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ac(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new $i;switch(t.type){case"gapi":const e=t.client;return new Hi(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Vi(zi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=oc.get(t);e&&(Pi("ComponentProvider","Removing Datastore"),oc.delete(t),e.terminate())}(this),Promise.resolve()}}function lc(t,e,n,i={}){var r;const s=(t=sc(t,uc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&Oi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Ai.MOCK_USER;else{e=(0,a.Sg)(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Vi(zi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ai(s)}t._authCredentials=new Bi(new qi(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new cc(this.firestore,t,this._key)}}class hc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new hc(this.firestore,t,this._query)}}class dc extends hc{constructor(t,e,n){super(t,e,Rs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new cc(this.firestore,null,new or(t))}withConverter(t){return new dc(this.firestore,t,this._path)}}function fc(t,e,...n){if(t=(0,a.m9)(t),tc("collection","path",e),t instanceof uc){const i=ir.fromString(e,...n);return ic(i),new dc(t,null,i)}{if(!(t instanceof cc||t instanceof dc))throw new Vi(zi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ir.fromString(e,...n));return ic(i),new dc(t.firestore,null,i)}}function pc(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Yi.R()),tc("doc","path",e),t instanceof uc){const i=ir.fromString(e,...n);return nc(i),new cc(t,null,new or(i))}{if(!(t instanceof cc||t instanceof dc))throw new Vi(zi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ir.fromString(e,...n));return nc(i),new cc(t.firestore,t instanceof dc?t.converter:null,new or(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):Ri("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gc{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Ai.UNAUTHENTICATED,this.clientId=Yi.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Pi("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Pi("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Vi(zi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=fl(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function vc(t,e){t.asyncQueue.verifyOperationInProgress(),Pi("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await du(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function yc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wc(t);Pi("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>ul(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ul(e.remoteStore,n))),t.onlineComponents=e}async function wc(t){return t.offlineComponents||(Pi("FirestoreClient","Using default OfflineComponentProvider"),await vc(t,new Jl)),t.offlineComponents}async function bc(t){return t.onlineComponents||(Pi("FirestoreClient","Using default OnlineComponentProvider"),await yc(t,new Zl)),t.onlineComponents}function _c(t){return bc(t).then((t=>t.syncEngine))}async function Ec(t){const e=await bc(t),n=e.eventManager;return n.onListen=Nl.bind(null,e.syncEngine),n.onUnlisten=Rl.bind(null,e.syncEngine),n}function Cc(t,e,n={}){const i=new ji;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new mc({next:n=>{e.enqueueAndForget((()=>bl(t,o))),n.fromCache&&"server"===i.source?r.reject(new Vi(zi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Tl(n,s,{includeMetadataChanges:!0,Nu:!0});return wl(t,o)}(await Ec(t),t.asyncQueue,e,n,i))),i.promise}class Tc{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Nu(this,"async_queue_retry"),this.Wc=()=>{const t=xu();t&&Pi("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=xu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=xu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new ji;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(E){if(!gr(E))throw E;Pi("AsyncQueue","Operation failed with retryable error: "+E)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Ri("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=dl.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(i),i}zc(){this.Kc&&Mi()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}class kc extends uc{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Tc,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ac(this),this._firestoreClient.terminate()}}function Ic(t,e){const n="object"==typeof t?t:(0,r.Mq)(),i="string"==typeof t?t:e||"(default)",s=(0,r.qX)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const t=(0,a.P0)("firestore");t&&lc(s,...t)}return s}function Sc(t){return t._firestoreClient||Ac(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ac(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new yr(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new gc(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xc(Ir.fromBase64String(t))}catch(t){throw new Vi(zi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new xc(Ir.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Vi(zi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Vi(zi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Vi(zi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ji(this._lat,t._lat)||Ji(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=/^__.*__$/;class Oc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new _o(t,this.data,this.fieldMask,e,this.fieldTransforms):new bo(t,this.data,e,this.fieldTransforms)}}function Fc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mi()}}class Mc{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=i,void 0===r&&this.na(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Mc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.ua(t),i}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Hc(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(Fc(this.sa)&&Rc.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class Lc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||Du(t)}da(t,e,n,i=!1){return new Mc({sa:t,methodName:e,fa:n,path:sr.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Uc(t){const e=t._freezeSettings(),n=Du(t._databaseId);return new Lc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function zc(t,e,n,i,r,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,r);$c("Data must be an object, but it was:",o,i);const a=jc(i,o);let u,l;if(s.merge)u=new Es(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Bc(e,i,n);if(!o.contains(r))throw new Vi(zi.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Gc(t,r)||t.push(r)}u=new Es(t),l=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,l=o.fieldTransforms;return new Oc(new Cs(a),u,l)}function Vc(t,e){if(qc(t=(0,a.m9)(t)))return $c("Unsupported field value:",e,t),jc(t,e);if(t instanceof Nc)return function(t,e){if(!Fc(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Vc(r,e.aa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Xs(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=tr.fromDate(t);return{timestampValue:sa(e.yt,n)}}if(t instanceof tr){const n=new tr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:sa(e.yt,n)}}if(t instanceof Pc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof xc)return{bytesValue:oa(e.yt,t._byteString)};if(t instanceof cc){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:la(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${rc(t)}`)}(t,e)}function jc(t,e){const n={};return Er(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_r(t,((t,i)=>{const r=Vc(i,e.ra(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function qc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof tr||t instanceof Pc||t instanceof xc||t instanceof cc||t instanceof Nc)}function $c(t,e,n){if(!qc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=rc(n);throw"an object"===i?e.ha(t+" a custom object"):e.ha(t+" "+i)}}function Bc(t,e,n){if((e=(0,a.m9)(e))instanceof Dc)return e._internalPath;if("string"==typeof e)return Qc(t,e);throw Hc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Kc=new RegExp("[~\\*/\\[\\]]");function Qc(t,e,n){if(e.search(Kc)>=0)throw Hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dc(...e.split("."))._internalPath}catch(i){throw Hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hc(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${i}`),o&&(u+=` in document ${r}`),u+=")"),new Vi(zi.INVALID_ARGUMENT,a+t+u)}function Gc(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new cc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Xc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Yc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Xc extends Wc{data(){return super.data()}}function Yc(t,e){return"string"==typeof e?Qc(t,e):e instanceof Dc?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Vi(zi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zc{convertValue(t,e="none"){switch(Fr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return xr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Dr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Mi()}}convertObject(t,e){const n={};return _r(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Pc(xr(t.latitude),xr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Pr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Rr(t));default:return null}}convertTimestamp(t){const e=Ar(t);return new tr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ir.fromString(t);Li(Ra(n));const i=new wr(n.get(1),n.get(3)),r=new or(n.popFirst(5));return i.isEqual(e)||Ri(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class nh extends Wc{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ih(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Yc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ih extends nh{data(t={}){return super.data(t)}}class rh{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new eh(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ih(this._firestore,this._userDataWriter,n.key,n,new eh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Vi(zi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new ih(t._firestore,t._userDataWriter,n.doc.key,n.doc,new eh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new ih(t._firestore,t._userDataWriter,e.doc.key,e.doc,new eh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:sh(e.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function sh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mi()}}class oh extends Zc{constructor(t){super(),this.firestore=t}convertBytes(t){return new xc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new cc(this.firestore,null,e)}}function ah(t){t=sc(t,hc);const e=sc(t.firestore,kc),n=Sc(e),i=new oh(e);return Jc(t._query),Cc(n,t._query).then((n=>new rh(e,i,t,n)))}function uh(t,e,n){t=sc(t,cc);const i=sc(t.firestore,kc),r=th(t.converter,e,n);return lh(i,[zc(Uc(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,ho.none())])}function lh(t,e){return function(t,e){const n=new ji;return t.asyncQueue.enqueueAndForget((async()=>Ol(await _c(t),e,n))),n.promise}(Sc(t),e)}!function(t,e=!0){!function(t){xi=t}(r.Jn),(0,r.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new kc(new Ki(t.getProvider("auth-internal")),new Wi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Vi(zi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wr(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Si,"3.8.3",t),(0,r.KN)(Si,"3.8.3","esm2017")}()}}]);
//# sourceMappingURL=about.543483f7.js.map