import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private id :any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id');
    // console.log("hahahaha == ",this.id)
  }

}
