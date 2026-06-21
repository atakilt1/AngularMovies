import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  standalone: false,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input()
  movies: any;
}
