import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(()=>{
      this.movies = [{
    title: "Spider Man",
    releaseDate: new Date(),
    price: 1400.99
  },
  {
    title: "Moana",
    releaseDate: new Date("2015-05-02"),
    price: 300.99
  },
]
    },1000)    
  }

  title = 'Welcome to Tabor Movie Store';

  movies:any;

  duplicateNumber(n:number){
    return 2*n;
  }
}
