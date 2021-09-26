import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

//login functionality
username="asmita"
password="12345"
signIn(){
   if(this.username=="asmita" && this.password=="12345"){
     this.routes.navigateByUrl('Gallery')
     //alert("Successfully Logged In!")
     
   }
   else{
     alert("Username or password is incorrect")
   }
}

}
