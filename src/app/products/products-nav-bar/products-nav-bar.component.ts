import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

 


  @Output() productEventEmitter: EventEmitter<ActionEvent>  = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  OnGetAllProducts(){

    this.productEventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS, payload:null});
    
  }


  OnGetSelectedProduct(){

    this.productEventEmitter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }



  OnGetAvailableProduct(){

    this.productEventEmitter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  NewProduct(){

    this.productEventEmitter.emit({type:ProductActionsTypes.NEW_PRODUCTS});
  }

  OnSearch(dataForm:any){

    this.productEventEmitter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS, payload:dataForm});
  }








}
