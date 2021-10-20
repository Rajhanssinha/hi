import { Component, OnInit } from '@angular/core';
import { PizzaaService } from '../pizzaa.service';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  fb:any;
  constructor(private pizser:PizzaaService) { }

  ngOnInit(): void {
    this.pizser.getReviews().subscribe(res=>this.fb=res);
  }

}
