import { Component, OnInit } from '@angular/core';
import { ForcartService } from '../forcart.service';
import { PizzaaService } from '../pizzaa.service';
@Component({
  selector: 'app-orderp',
  templateUrl: './orderp.component.html',
  styleUrls: ['./orderp.component.css']
})
export class OrderpComponent implements OnInit {
  public piz:any;
  constructor(private pizzaaService:PizzaaService, private forcartService:ForcartService) { }

  ngOnInit(): void {
    
      this.pizzaaService.getAllPizza().subscribe(res=>{this.piz=res;
        this.piz.forEach((a:any) => {
          Object.assign(a,{quantity:1,total:a.price});
        });
      })
    }
  addtocart(pizs:any){
    this.forcartService.addtoCart(pizs)
  }
}
