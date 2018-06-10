import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poojadetails',
  templateUrl: './poojadetails.component.html',
  styleUrls: ['./poojadetails.component.css']
})
export class PoojadetailsComponent implements OnInit {
            
  constructor(private router: ActivatedRoute) { }
 

  ngOnInit() {
    this.router.params.subscribe((data) => {
      console.log("poojadetails id::",data.poojaid);
      
      
      
    });
    
  }
}
