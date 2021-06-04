import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-connexion',
  templateUrl: './my-connexion.component.html',
  styleUrls: ['./my-connexion.component.css']
})
export class MyConnexionComponent implements OnInit {

  connexionForm = this.formBuilder.group({
    name: "",
    pass: ""
  })

  constructor(private formBuilder:FormBuilder, private userService: UserService) { 
    
  }

  ngOnInit(): void {
  }
  
  validForm() {
    console.log(this.connexionForm.value)
    console.log(this.connexionForm.value.name)
    console.log(this.connexionForm.value.pass)
    this.userService.userConnexion(this.connexionForm.value.name, this.connexionForm.value.pass)
  }
}
