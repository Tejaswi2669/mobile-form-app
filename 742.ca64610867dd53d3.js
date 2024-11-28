"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[742],{8361:(I,F,s)=>{s.r(F),s.d(F,{FormPageModule:()=>D});var i=s(4742),r=s(4341),b=s(8465),c=s(467),e=s(4438),x=s(4945),h=s(177);function P(n,a){1&n&&(e.j41(0,"ion-text",13)(1,"p",14),e.EFF(2,"Name is required."),e.k0s()())}function k(n,a){1&n&&(e.j41(0,"ion-text",13)(1,"p",14),e.EFF(2,"Item Details are required."),e.k0s()())}function _(n,a){1&n&&(e.j41(0,"ion-text",13)(1,"p",14),e.EFF(2,"Please enter a valid amount."),e.k0s()())}function v(n,a){1&n&&(e.j41(0,"ion-text",13)(1,"p",14),e.EFF(2,"Please enter a valid amount."),e.k0s()())}function N(n,a){1&n&&(e.j41(0,"ion-text",13)(1,"p",14),e.EFF(2,"Phone Number of the User."),e.k0s()())}function E(n,a){1&n&&(e.j41(0,"ion-text",13)(1,"p",14),e.EFF(2,"Name of the Person who Ordered."),e.k0s()())}function y(n,a){1&n&&e.nrm(0,"ion-spinner",15)}function C(n,a){1&n&&(e.j41(0,"span"),e.EFF(1,"Submit"),e.k0s())}const M=[{path:"",component:(()=>{var n;class a{constructor(o,t,l,m){this.fb=o,this.formDataService=t,this.alertController=l,this.loadingController=m,this.isLoading=!1,this.form=this.fb.group({name:["",r.k0.required],itemDetails:["",r.k0.required],amountPaid:["",[r.k0.required,r.k0.min(0)]],actualAmount:["",[r.k0.required,r.k0.min(0)]],phoneNumber:["",[r.k0.required,r.k0.pattern("^[0-9]{10}$")]],userName:["",r.k0.required]})}ngOnInit(){}onSubmit(){var o=this;return(0,c.A)(function*(){if(o.form.valid){o.isLoading=!0;const t=yield o.loadingController.create({message:"Submitting Form..."});yield t.present(),o.formDataService.submitForm(o.form.value).subscribe({next:(l=(0,c.A)(function*(m){o.isLoading=!1,yield t.dismiss(),yield(yield o.alertController.create({header:"Success",message:"Form submitted successfully!",buttons:["OK"]})).present(),o.form.reset()}),function(u){return l.apply(this,arguments)}),error:function(){var l=(0,c.A)(function*(m){o.isLoading=!1,yield t.dismiss(),yield(yield o.alertController.create({header:"Error",message:"Failed to submit the form. Please try again.",buttons:["OK"]})).present(),console.error("Error submitting form:",m)});return function(u){return l.apply(this,arguments)}}()})}else o.form.markAllAsTouched();var l})()}}return(n=a).\u0275fac=function(o){return new(o||n)(e.rXU(r.ok),e.rXU(x.Q),e.rXU(i.hG),e.rXU(i.Xi))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-form"]],decls:45,vars:10,consts:[[1,"ion-padding"],[3,"ngSubmit","formGroup"],["position","floating"],["type","text","formControlName","name","placeholder","Enter name of the Medicine"],["color","danger",4,"ngIf"],["formControlName","itemDetails","placeholder","Enter Medicine Details"],["type","number","formControlName","amountPaid","placeholder","Enter amount Paid"],["type","number","formControlName","actualAmount","placeholder","Enter actual amount"],["type","text","formControlName","phoneNumber","placeholder","Enter User Phone Number"],["type","text","formControlName","userName","placeholder","Enter Name of the person who Ordered"],["expand","block","type","submit",3,"disabled"],["name","dots",4,"ngIf"],[4,"ngIf"],["color","danger"],[1,"ion-padding-start"],["name","dots"]],template:function(o,t){if(1&o&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Order Registration"),e.k0s()()(),e.j41(4,"ion-content",0)(5,"form",1),e.bIt("ngSubmit",function(){return t.onSubmit()}),e.j41(6,"ion-item")(7,"ion-label",2),e.EFF(8,"Name :"),e.k0s(),e.nrm(9,"br")(10,"ion-input",3),e.k0s(),e.DNE(11,P,3,0,"ion-text",4),e.j41(12,"ion-item")(13,"ion-label",2),e.EFF(14,"Item Details :"),e.k0s(),e.nrm(15,"br")(16,"ion-textarea",5),e.k0s(),e.DNE(17,k,3,0,"ion-text",4),e.j41(18,"ion-item")(19,"ion-label",2),e.EFF(20,"Amount Paid in Advance :"),e.k0s(),e.nrm(21,"br")(22,"ion-input",6),e.k0s(),e.DNE(23,_,3,0,"ion-text",4),e.j41(24,"ion-item")(25,"ion-label",2),e.EFF(26,"Actual Amount :"),e.k0s(),e.nrm(27,"br")(28,"ion-input",7),e.k0s(),e.DNE(29,v,3,0,"ion-text",4),e.j41(30,"ion-item")(31,"ion-label",2),e.EFF(32,"Phone Number :"),e.k0s(),e.nrm(33,"br")(34,"ion-input",8),e.k0s(),e.DNE(35,N,3,0,"ion-text",4),e.j41(36,"ion-item")(37,"ion-label",2),e.EFF(38," Name of the Person :"),e.k0s(),e.nrm(39,"br")(40,"ion-input",9),e.k0s(),e.DNE(41,E,3,0,"ion-text",4),e.j41(42,"ion-button",10),e.DNE(43,y,1,0,"ion-spinner",11)(44,C,2,0,"span",12),e.k0s()()()),2&o){let l,m,u,p,f,g;e.R7$(5),e.Y8G("formGroup",t.form),e.R7$(6),e.Y8G("ngIf",(null==(l=t.form.get("name"))?null:l.invalid)&&(null==(l=t.form.get("name"))?null:l.touched)),e.R7$(6),e.Y8G("ngIf",(null==(m=t.form.get("itemDetails"))?null:m.invalid)&&(null==(m=t.form.get("itemDetails"))?null:m.touched)),e.R7$(6),e.Y8G("ngIf",(null==(u=t.form.get("amountPaid"))?null:u.invalid)&&(null==(u=t.form.get("amountPaid"))?null:u.touched)),e.R7$(6),e.Y8G("ngIf",(null==(p=t.form.get("actualAmount"))?null:p.invalid)&&(null==(p=t.form.get("actualAmount"))?null:p.touched)),e.R7$(6),e.Y8G("ngIf",(null==(f=t.form.get("phoneNumber"))?null:f.invalid)&&(null==(f=t.form.get("phoneNumber"))?null:f.touched)),e.R7$(6),e.Y8G("ngIf",(null==(g=t.form.get("userName"))?null:g.invalid)&&(null==(g=t.form.get("userName"))?null:g.touched)),e.R7$(),e.Y8G("disabled",t.form.invalid||t.isLoading),e.R7$(),e.Y8G("ngIf",t.isLoading),e.R7$(),e.Y8G("ngIf",!t.isLoading)}},dependencies:[i.Jm,i.W9,i.eU,i.$w,i.uz,i.he,i.w2,i.IO,i.nc,i.BC,i.ai,i.su,i.Gw,h.bT,r.qT,r.BC,r.cb,r.j4,r.JD],styles:[".form-container[_ngcontent-%COMP%]{width:100%;max-width:600px;margin:0 auto;padding:16px;border-radius:8px;background-color:#fff;box-shadow:0 4px 8px #0000001a}ion-item[_ngcontent-%COMP%]{margin-bottom:16px}ion-label[_ngcontent-%COMP%]{font-size:14px;color:#333;text-transform:uppercase}ion-input[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{--padding-start: 12px;--padding-end: 12px;--padding-top: 10px;--padding-bottom: 10px;font-size:16px;border:1px solid #e0e0e0;background-color:#e0e0e0;color:#000;border-radius:4px}ion-textarea[_ngcontent-%COMP%]{min-height:80px}ion-button[_ngcontent-%COMP%]{margin-top:16px;--padding-start: 24px;--padding-end: 24px;--padding-top: 12px;--padding-bottom: 12px;--border-radius: 4px;font-weight:700;font-size:16px}.error-message[_ngcontent-%COMP%]{color:#e74c3c;font-size:14px;margin-top:4px;margin-left:8px}ion-text[_ngcontent-%COMP%]{display:block;margin-bottom:16px;font-size:16px;color:#888}"]}),a})()}];let j=(()=>{var n;class a{}return(n=a).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[b.iI.forChild(M),b.iI]}),a})(),D=(()=>{var n;class a{}return(n=a).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[i.bv,h.MD,r.YN,r.X1,j]}),a})()}}]);