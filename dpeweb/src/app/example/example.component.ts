import { HomeComponent } from './../home/home.component';
import { AboutComponent } from './../about/about.component';
import { ExampleService } from './../service/management/example.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
  @Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
  })

export class ExampleComponent implements OnInit {
  private id :any
  private e_id :any
  pageType:string = "";
  constructor(public service: ExampleService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit(): void {

      this.id = this.route.snapshot.paramMap.get('id');
      this.e_id = this.route.snapshot.paramMap.get('e_id');
      console.log("e_id == ",this.e_id)
      console.log("id == ",this.id)
    if(this.id == 1){
      this.pageType = "one";
      this.router.navigate(['/home/',this.id]);
    }
    else if(this.id == 2){
      this.pageType = "two";
      this.router.navigate(['/about',this.id]);
    }
  // let param = "";
  //  this.service.getExample2(param)
  //   .subscribe(res => {
  //    this.router.navigate(['managecallection']);
  //     console.log(res)
  //   }, err => console.log(err))
  }
  assignConponent(){
    
  }

}
