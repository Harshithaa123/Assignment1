import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  template: `
  <h1>This is Custom Component!!!!!!!!!!!!</h1>
    <h2>Hello {{name}}</h2>
    <h2>Addion of two num :{{2+2}}</h2>
    <h2>Length of name: {{name.length}}</h2>
    <h2>Name convert to uppercase :{{name.toUpperCase()}}</h2>
  <button (click)="customFunction()">Click me!</button>
  `,
  styleUrl: './custom-component.component.css'
})
export class CustomComponentComponent {
  public name="Harshitha";  //property
  customFunction(): void {
    alert('Custom function called!');
  }
}