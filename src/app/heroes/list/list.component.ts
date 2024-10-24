import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Martosman','Thor'];
  public deletedHero?: string;

  deleteHeroe():void {
    if (this.heroNames.length > 0) this.deletedHero =  this.heroNames.pop();
  }
}

