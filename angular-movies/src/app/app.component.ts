import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    this.moviesInTheaters = [
      {
        title: 'Spider Man',
        releaseDate: new Date(),
        price: 1400.99,
      },
      {
        title: 'Moana',
        releaseDate: new Date('2015-05-02'),
        price: 300.99,
      },
      {
        title: 'Spider Man',
        releaseDate: new Date(),
        price: 1400.99,
      },
      {
        title: 'Moana',
        releaseDate: new Date('2015-05-02'),
        price: 300.99,
      },
      {
        title: 'Spider Man',
        releaseDate: new Date(),
        price: 1400.99,
      },
      {
        title: 'Moana',
        releaseDate: new Date('2015-05-02'),
        price: 300.99,
      },
      {
        title: 'Spider Man',
        releaseDate: new Date(),
        price: 1400.99,
      },
      {
        title: 'Moana',
        releaseDate: new Date('2015-05-02'),
        price: 300.99,
      },
      {
        title: 'Spider Man',
        releaseDate: new Date(),
        price: 1400.99,
      },
      {
        title: 'Moana',
        releaseDate: new Date('2015-05-02'),
        price: 300.99,
      },
    ];

    this.moviesInReleases =[] ;
  }

  moviesInTheaters: any;
  moviesInReleases: any;

  handleRating(rate: number){
    alert(`The user selected the ${rate}`);
  }

  title = 'Welcome to Tabor Movie Store';
}
