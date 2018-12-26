import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { MyInterface } from "../my-interface";
import { error } from 'util';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css'],
  providers:[DemoService]
})
export class FlotComponent implements OnInit {
  title = 'app';

  _postsArray: MyInterface[];

  constructor(private demoSerivce: DemoService){}

  getPosts(): void {
    this.demoSerivce.getPosts().
    subscribe(
       resultArray => this._postsArray =
       resultArray,
       error => console.log("Error :: " + error ))
  }
  ngOnInit(): void{
    this.getPosts();

  }
}

