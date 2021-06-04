import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-register',
  templateUrl: './my-register.component.html',
  styleUrls: ['./my-register.component.css']
})
export class MyRegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    name: "",
    pass: "",
    mail: ""
  })

  constructor(private formBuilder:FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.registerForm.value.name)
    this.userService.userRegister(this.registerForm.value.name, this.registerForm.value.pass, this.registerForm.value.mail)
  }
}
