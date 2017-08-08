import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 
  constructor( private _router: Router) { }

  ngOnInit() {
  }

  redirect(){
     this._router.navigate(['details']);
  }

}
