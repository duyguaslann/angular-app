import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrls: ['./child.css'],
})
export class Child {
@Input() message!: string;
}
