import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ContactVO } from "./ContactVO";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;

  contactInfo: ContactVO = new ContactVO();

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this._fb.group({
      name: [this.contactInfo.name, Validators.required],
      email: [this.contactInfo.email, [Validators.email, Validators.required]],
      phone: this.contactInfo.phone,
      message: [this.contactInfo.message, Validators.required]
    }
    )
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get message() {
    return this.contactForm.get('message')
  }

  sendForm() {
    console.log('Contact Info: ', this.contactInfo)
  }

  goToFacebook() {
    window.location.href = "www.facebook.com";
  }

}
