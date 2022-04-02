import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginFormComponent } from "./login-form/login-form.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
