import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css']
})
export class TopheaderComponent implements OnInit {

  constructor(private obsserv:UserService,private router:Router) { }
  
  isuservalid=false;
  ngOnInit() {
    this.obsserv.mysubobs.subscribe(res=>{
      this.isuservalid=true;
    });
  }
  logout(){
    this.isuservalid=false;
    this.router.navigate(['/','login']);
  }
}
