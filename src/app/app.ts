import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Child} from './child/child';

@Component({
  selector: 'app-root',
  imports:[FormsModule, Child,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title= 'angular öğreniyorum';

  counter=0;

  increase(){
    this.counter++;
  }

  isVisible=  false;

  toggle() {
    this.isVisible = !this.isVisible;

  }

  items= ["angular", "react","vue"];

  name = '';

  user= {
    name : '',
    email: '' };
  
    onSubmit () {

      console.log("Form Gönderildi:", this.user);
    }

    parentMessage = "Merhaba Child";

}
