import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { DetailsInterface } from "../details-interface";
import { error } from 'util';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[DetailsService]
})
export class ProductsComponent implements OnInit {

  _postsArray: DetailsInterface[];

  constructor(private detailsSerivce: DetailsService){}

  getPosts(): void {
    this.detailsSerivce.getPosts().
    subscribe(
       resultArray => this._postsArray =
       resultArray,
       error => console.log("Error :: " + error ))
  }
  ngOnInit(): void{
    this.getPosts();

  }
}


