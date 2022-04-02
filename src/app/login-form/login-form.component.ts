import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

export class User {
  userName: string = "";
  password: string = "";
}

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit {
  constructor(private router: Router) {}

  userLogin: User = new User();
  loginError: string = "";
  ngOnInit(): void {
    this.userLogin = {
      userName: "bob",
      password: "myPassword",
    };
  }
  onSubmit(loginForm: NgForm): void {
    loginForm.valid
      ? this.userLogin.userName === "bob" &&
        this.userLogin.password === "myPassword"
        ? this.router.navigate(["/contact-us"])
        : (this.loginError = "Wrong entry")
      : "";

    /*     if (loginForm.valid) {
      if (
        this.userLogin.userName === "bob" &&
        this.userLogin.password === "myPassword"
      )
        this.router.navigate(["/contact-us"]);
      else {
        alert("Entered credentials are wrong");
      }
    } */
  }
}
