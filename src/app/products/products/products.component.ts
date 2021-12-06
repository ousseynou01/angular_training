import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import {Product} from 'src/app/services/model/products.model'
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/product.state';
import {map, startWith, catchError} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$:Observable<AppDataState<Product[]>> |null = null;
  readonly DataStateEnum = DataStateEnum;

  constructor(private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
  }

  OnGetAllProducts(){

    this.products$ = this.productService.getProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=> of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
   
      );

    
  }

  OnGetSelectedProduct(){

    this.products$ = this.productService.getSelectedProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=> of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
   
      );


  }

  OnGetAvailableProduct(){


    this.products$ = this.productService.getAvailableProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=> of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
   
      );
  }

  OnSearch(dataForm: any){

    this.products$ = this.productService.searchProducts(dataForm.keyword).pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=> of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
   
      );


  }

  OnSelect(product: Product){

    this.productService.Select(product).
    subscribe(data =>{
      product.selected = data.selected;
    })
  }


  OnDelete(product: Product){
    let v =confirm("etes vous sure?");
    if(v==true)
    this.productService.deleteProduct(product).
    subscribe(data =>{
      this.OnGetAllProducts();
    })


  }

  NewProduct(){

    this.router.navigateByUrl("/new");
  }

  OnEdit(product: Product){
    
    this.router.navigateByUrl("/editProduct/"+product.id);

  }

  //gerer les evenements du issues des buttons de product-navbar-component

  OnActionEvent($event: ActionEvent){

  switch($event.type){

    case ProductActionsTypes.GET_ALL_PRODUCTS:this.OnGetAllProducts(); break;
    case ProductActionsTypes.GET_AVAILABLE_PRODUCTS:this.OnGetAvailableProduct(); break;
    case ProductActionsTypes.GET_SELECTED_PRODUCTS:this.OnGetSelectedProduct(); break;
    case ProductActionsTypes.SEARCH_PRODUCTS:this.OnSearch($event.payload); break;
    case ProductActionsTypes.NEW_PRODUCTS:this.NewProduct(); break;
    case ProductActionsTypes.SELECT_PRODUCT: this.OnSelect($event.payload); break;
    case ProductActionsTypes.EDIT_PRODUCT: this.OnEdit($event.payload); break;
    case ProductActionsTypes.DELETE_PRODUCT: this.OnDelete($event.payload); break;
  }

  }

}
