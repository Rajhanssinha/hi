import { Component, OnInit } from '@angular/core';
import { IngredientssService } from '../ingredientss.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css'],
  providers:[IngredientssService]
})
export class BuildpizzaComponent implements OnInit {
  ingre:any;
  tprice:number=0;
  isChecked:boolean=false;
  constructor(private ingredientssService:IngredientssService) { }

  ngOnInit(): void {
     this.ingredientssService.getAllIngredient().subscribe(res=>this.ingre=res)
  }
  cost($event:any){
    if($event.target.checked){
      this.tprice = this.tprice + Number($event.target.value);
    }else{
      this.tprice = this.tprice - Number($event.target.value);
    }
  }

}
