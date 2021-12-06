import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/services/model/products.model';
import { ActionEvent, ProductActionsTypes} from 'src/app/state/product.state';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product!:Product;
  @Output() evenEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>()

  constructor() { }

  ngOnInit(): void {
  }

  OnSelect(product: Product){
   
    this.evenEmitter.emit({type: ProductActionsTypes.SELECT_PRODUCT, payload: product})

  }


  OnDelete(product: Product){

    this.evenEmitter.emit({type: ProductActionsTypes.SELECT_PRODUCT, payload: product})

  }


  OnEdit(product:Product){

    this.evenEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT, payload: product})
  }



 

}
