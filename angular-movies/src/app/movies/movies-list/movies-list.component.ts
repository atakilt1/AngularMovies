import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  standalone: false,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
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

  movies: any;
}
