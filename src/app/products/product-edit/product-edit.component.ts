import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productId:number;
  productformGroup!: FormGroup;
  submitted: boolean = false;

  constructor( private activatedRoute:ActivatedRoute, private productService: ProductsService,
    private fb: FormBuilder) {

    this.productId=activatedRoute.snapshot.params.id;
   }

  ngOnInit(): void {

    this.productService.getOneProducts(this.productId).
    subscribe(data => {

      this.productformGroup=this.fb.group({
        id:[data.id, Validators.required],
        name:[data.name, Validators.required],
        price:[data.price, Validators.required],
        quantity:[data.quantity, Validators.required],
        selected:[data.selected, Validators.required],
        available:[data.available, Validators.required],
  
      });

    });
  }

  OnUpdateProduct(){

    this.productService.update(this.productformGroup.value).
    subscribe(data => { 

      alert("succes product update");
    });

  }

}
