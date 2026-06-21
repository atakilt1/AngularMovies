import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  standalone: false,
  templateUrl: './generic-list.component.html',
  styleUrl: './generic-list.component.css'
})
export class GenericListComponent {
@Input()
list:any;
}
