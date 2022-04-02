import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [AppComponent, LoginFormComponent, ContactUsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
