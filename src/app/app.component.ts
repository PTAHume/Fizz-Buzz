import { Component, OnInit } from '@angular/core';
export class Item {
  constructor(public name: string){}
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit  {
  items: Item[] = [];

  ngOnInit(){
    for (let i = 1; i <= 100; i++){
      let itemName:string = '';
      itemName += (i % 3 ) === 0 ? 'Fizz' : '';
      itemName += (i % 5 ) === 0 ? 'Buzz' : '';
      this.items.push(
        new Item((itemName === '') ? i.toString() : itemName)
      );
    }
  }
}
