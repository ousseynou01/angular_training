import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productformGroup!:FormGroup;
  submitted: boolean = false;

  constructor(private fb:FormBuilder, private productService:ProductsService ) { }

  ngOnInit(): void {

    this.productformGroup=this.fb.group({

      name:["", Validators.required],
      price:[0, Validators.required],
      quantity:[0, Validators.required],
      selected:[true, Validators.required],
      available:[true, Validators.required],

    });

  }

  OnSaveProduct (){

    this.submitted= true;
    if(this.productformGroup!.invalid) return;
    this.productService.SaveProduct(this.productformGroup.value).
    subscribe(data => {
      alert("succes saving product");
    })
  }

}
