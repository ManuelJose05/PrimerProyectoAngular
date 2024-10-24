import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name:string = 'Iron Man';
  public age:number = 30;
heroNames: any;

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }
  changeHeroe(nuevoNombre:string):void {
    this.name = nuevoNombre;
  }
  changeAge():void {
    this.age = parseInt(prompt("Introduce nueva edad: ")!);
  }
  resetHeroe():void {
    this.name = 'Iron Man';
    this.age = 30;
  }
}
