import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product=[{id:"1",name:"electronics",rate:"1200"},
  {id:"2",name:"electronics",rate:"1300"},
  {id:"3",name:"electronics",rate:"200"},
  {id:"4",name:"electronics",rate:"100"}]
  isShow :boolean =false;
  showdata(){    
    this.isShow=!this.isShow;
  }
}
