import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,private service:UserService,private http:HttpClient) { }

  ngOnInit() {
  }
  submitClick: boolean = false;
  successmsg: boolean = false;
  email;
  password;
  submitLogin(formdata: NgForm) {
    this.successmsg=false;


    if (formdata.valid) {
      this.email = formdata.value.email;
      this.password = formdata.value.password;
      if (this.email && this.password) {
        
      }
      else {
        // this.submitClick = true;
      }


    }
    else {
      this.submitClick = true;
    }
    const data = {
      crud: 'login',      
      Email: this.email,
      Password: this.password
    };
    this.http.post("http://localhost/php%20proj/sree%20pooja/servicecall.php",data)
      .subscribe(
        (res: Response) => {
          if(res){
            this.successmsg=true;
            this.email="";
          this.password="";
            this.router.navigate(['/', 'home']);
            this.service.updateuservalid();
            setTimeout(() => {
              this.router.navigate(['/', 'home']);
            }, 3000);
          }
          else{
            this.router.navigate(['/', 'login']);
          }
        },
        (err)=>{
          this.router.navigate(['/', 'login']);
          
        }
);
}
}
