import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

export class Contact {
  name: string = "";
  email: string = "";
  message: string = "";
}

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"],
})
export class ContactUsComponent implements OnInit {
  constructor() {}
  contactEntry: Contact = new Contact();

  ngOnInit(): void {
    this.contactEntry = {
      name: "bob",
      email: "bob'email",
      message: "message...",
    };
  }
  onSubmit(contactForm: NgForm): void {
    if (!contactForm.invalid) {
      console.log("form submitted");
    }
  }
}
