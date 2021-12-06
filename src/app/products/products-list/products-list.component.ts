import { Component, Input, OnInit, Output } from '@angular/core';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/product.state';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/services/model/products.model';
import { EventEmitter } from '@angular/core';




@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsInput$:Observable<AppDataState<Product[]>> |null = null;
  @Output() productEventEmiter: EventEmitter<ActionEvent> = new EventEmitter();
  readonly DataStateEnum = DataStateEnum;
  


  constructor() { }

  OnSelect(product:Product ){

    this.productEventEmiter.emit({
      type: ProductActionsTypes.SELECT_PRODUCT, payload:product
    });

  }

  OnEdit(product: Product){

    this.productEventEmiter.emit({
      type:ProductActionsTypes.EDIT_PRODUCT, payload: product});

  }


  OnDelete(product: Product){

    this.productEventEmiter.emit({
      type: ProductActionsTypes.DELETE_PRODUCT, payload:product});
  }


  OnActionEvent($event: ActionEvent){

    this.productEventEmiter.emit($event);
  }



  ngOnInit(): void {
  }

}
