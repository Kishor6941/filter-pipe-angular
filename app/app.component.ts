import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filter-sort-pagination';
  nameSearch = '';
ngOnInit(){

}
productArr =[
  {
    sno:1,
    name : 'Mobile',
    price : '7000 RS',
    availability : true
  },
  {
    sno:2,
    name : 'TV',
    price : '8000 RS',
    availability : false
  },
  {
    sno:3,
    name : 'Laptop',
    price : '34000 RS',
    availability : true
  },
  {
    sno:4,
    name : 'Washing Machine',
    price : '10000 RS',
    availability : false
  }

]
key = 'id';
reverse : boolean = false;
sort(key) {
this.key = key;
this.reverse = !this.reverse

}
}

