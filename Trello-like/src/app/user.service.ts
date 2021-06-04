import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string
  private userId: string

  constructor(private http: HttpClient, private router: Router) { 
    this.userUrl = "http://localhost:8080/api/user"
    this.userId = ""
  }

  userConnexion(name: string, pass: string){
    return this.http.post<any>(this.userUrl + "/connect", {name: name, pass: pass}).subscribe(data => { 
      console.log(data)
      if (data.id !== undefined) {
        this.userId = data.id
        this.router.navigate(["/tasks"])
      }
    })
  }

  userRegister(name: string, pass: string, mail: string) {
    return this.http.post<any>(this.userUrl + "/", {name: name, pass: pass, mail: mail}).subscribe(data => {
      this.router.navigate(["tasks"])
    })
  }

  getId() {
    return this.userId
  }
}
